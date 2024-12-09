export enum ErrorTypes {
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

export const handleApiError = (error: Error): CustomError => {
  if (!error.name) {
    return new CustomError(
      "Erro desconhecido. Tente novamente.",
      ErrorTypes.GenericError,
      "InternalServerError"
    );
  }

  const { message, name } = error;

  switch (name) {
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
    case "UserAlreadyAuthenticatedException":
      return new CustomError(
        message || "User not found.",
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
        name
      );
  }
};
