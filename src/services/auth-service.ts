import {
  fetchUserAttributes,
  fetchAuthSession,
  signIn,
  signOut,
  SignInInput,
} from "aws-amplify/auth";

export const signInUser = async ({ username, password }: SignInInput) => {
  try {
    const { isSignedIn, nextStep } = await signIn({
      username,
      password,
      options: {
        authFlowType: "USER_SRP_AUTH",
      },
    });
    return { isSignedIn, nextStep };
  } catch (error) {
    throw new Error("Erro ao fazer login: " + error.message);
  }
};

export const getUserAttributes = async () => {
  try {
    const attributes = await fetchUserAttributes();
    return attributes;
  } catch (error) {
    throw new Error("Erro ao obter atributos do usuário: " + error.message);
  }
};

export const fetchUserSession = async () => {
  try {
    const session = await fetchAuthSession({ forceRefresh: true });
    return session.tokens;
  } catch (error) {
    throw new Error("Erro ao obter a sessão do usuário: " + error.message);
  }
};

export const refreshSession = async () => {
  try {
    const session = await fetchAuthSession({ forceRefresh: true });
    return session.tokens;
  } catch (error) {
    throw new Error("Erro ao atualizar a sessão do usuário: " + error.message);
  }
};

export const signOutUser = async () => {
  try {
    await signOut();
  } catch (error) {
    throw new Error("Erro ao fazer logout: " + error.message);
  }
};
