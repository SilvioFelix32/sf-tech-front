import { AxiosError } from "axios";

export enum ErrorTypes {
  NotAuthorizedException = "NotAuthorizedException",
  UserNotFoundException = "UserNotFoundException",
  UserAlreadyExists = "UserAlreadyExists",
  UserAlreadyAuthenticatedException = "UserAlreadyAuthenticatedException",
  NotFound = "NotFound",
  InternalServerError = "InternalServerError",
  BadRequest = "BadRequest",
  Unauthorized = "Unauthorized",
  Forbidden = "Forbidden",
  GenericError = "GenericError",
}

export class CustomError extends Error {
  public code: ErrorTypes;
  public name: string;

  constructor(message: string, code: ErrorTypes, name: string) {
    super(message);
    this.code = code;
    this.name = name;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const handleApiError = (error: unknown): CustomError => {
  if (error instanceof AxiosError && error.response?.data) {
    const { cause, message } = error.response.data;

    switch (cause) {
      case "BadRequestException":
        return new CustomError(
          message || "Bad request.",
          ErrorTypes.BadRequest,
          "BadRequest"
        );
      case "UnauthorizedException":
        return new CustomError(
          message || "Unauthorized access.",
          ErrorTypes.Unauthorized,
          "Unauthorized"
        );
      case "Forbidden":
        return new CustomError(
          message || "Access forbidden.",
          ErrorTypes.Forbidden,
          "Forbidden"
        );
      case "NotFoundException":
        return new CustomError(
          message || "Resource not found.",
          ErrorTypes.NotFound,
          "NotFound"
        );
      case "UserNotFoundException":
        return new CustomError(
          message || "User not found.",
          ErrorTypes.UserNotFoundException,
          "UserNotFoundException"
        );
      case "NotAuthorizedException":
        return new CustomError(
          message || "Incorrect credentials.",
          ErrorTypes.NotAuthorizedException,
          "NotAuthorizedException"
        );
      case "UserAlreadyAuthenticatedException":
        return new CustomError(
          message || "User already authenticated.",
          ErrorTypes.UserNotFoundException,
          "UserNotFoundException"
        );
      case "AlreadyExistsException":
        if (message.includes("already exists")) {
          return new CustomError(
            message || "User already exists.",
            ErrorTypes.UserAlreadyExists,
            "UserAlreadyExists"
          );
        }
        return new CustomError(
          message || "Conflict error.",
          ErrorTypes.GenericError,
          "Conflict"
        );
      case "InternalServerError":
        return new CustomError(
          message || "Internal server error.",
          ErrorTypes.InternalServerError,
          "InternalServerError"
        );
      default:
        return new CustomError(
          message || "Unexpected error occurred.",
          ErrorTypes.GenericError,
          cause || "GenericError"
        );
    }
  }

  return new CustomError(
    "Erro desconhecido.",
    ErrorTypes.GenericError,
    "InternalServerError"
  );
};
