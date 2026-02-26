export interface ValidationRule {
  field: string;
  value: any;
  message: string;
  validator: (value: any) => boolean;
}

export function validateForm(rules: ValidationRule[]): { isValid: boolean; errorMessage: string } {
  for (const rule of rules) {
    if (!rule.validator(rule.value)) {
      return {
        isValid: false,
        errorMessage: rule.message
      };
    }
  }
  
  return {
    isValid: true,
    errorMessage: ''
  };
}

export const validators = {
  required: (value: any) => value !== undefined && value !== null && value !== '',
  requiredString: (value: string) => value !== undefined && value !== null && value.trim() !== '',
  positiveNumber: (value: number) => value !== undefined && value !== null && value > 0,
  nonNegativeNumber: (value: number) =>
    value !== undefined && value !== null && !Number.isNaN(value) && value >= 0,
  selectedOption: (value: string) => value !== undefined && value !== null && value !== '',
};
