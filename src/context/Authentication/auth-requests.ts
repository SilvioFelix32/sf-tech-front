import {
  SignInInput,
  signIn,
  confirmSignIn,
  getCurrentUser,
  fetchAuthSession,
  signOut,
} from "aws-amplify/auth";
import { setCookie, removeCookie } from "../../services";
import api from "../../services/api";
import { Role } from "../../types";
import { User } from "./AuthContext";

export async function fetchUser({
  username,
  password,
}: SignInInput): Promise<User> {
  console.log("login", username, password);
  try {
    const { isSignedIn, nextStep } = await signIn({
      username,
      password,
    });
    console.log("isSignedIn", isSignedIn, "nextStep", nextStep);

    // lidar com casos que o signin retorne um nextStep
    if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
      await confirmSignIn({
        challengeResponse: "12345", // trocar depois
      });
    } else if (
      nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
    ) {
      await confirmSignIn({
        challengeResponse: "12345", // trocar pelo valor da nova senha
      });
    }

    if (isSignedIn) {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log("username", username);
      console.log("user id", userId);
      console.log("sign-in details", signInDetails);

      const session = await fetchAuthSession({ forceRefresh: true });
      const { accessToken, idToken } = session.tokens;
      setCookie("nextauth.token", accessToken);

      console.log("id token", idToken);
      console.log("access token", accessToken);

      const loggedUser: User = {
        name: username,
        lastName: "",
        email: "",
        role: Role.USER,
        user_id: userId,
        isSignedIn: isSignedIn,
      };

      console.log("loggedUser", loggedUser);
      setCookie("user", JSON.stringify(loggedUser));

      api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
      return loggedUser;
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error.response);
    throw new Error(error.response.data.error);
  }
}

export async function logOut() {
  await signOut();
  removeCookie("user");
  removeCookie("nextauth.token");
}
