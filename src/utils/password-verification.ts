class PasswordValidation {
  haveCapitalLetters: boolean;
  haveNumbers: boolean;
  haveCharacters: boolean;
  haveMoreThan8Characters: boolean;

  constructor() {
    this.haveCapitalLetters = false;
    this.haveNumbers = false;
    this.haveCharacters = false;
    this.haveMoreThan8Characters = false;
  }
}

export function validatePassword(password: string): PasswordValidation {
  const validation = new PasswordValidation();

  if (password === "") {
    return validation;
  }

  const regexCapitalLetters = /[A-Z]/;
  const regexNumbers = /[0-9]/;
  const regexCharacters = /[!@#$%^&*]/;

  validation.haveCapitalLetters = regexCapitalLetters.test(password);
  validation.haveNumbers = regexNumbers.test(password);
  validation.haveCharacters = regexCharacters.test(password);
  validation.haveMoreThan8Characters = password.length > 7;

  return validation;
}
