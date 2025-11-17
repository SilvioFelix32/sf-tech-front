import React from 'react';
import { Text } from './styles';

interface ValidationMessageProps {
  message: string;
  show: boolean;
}

export function ValidationMessage({ message, show }: ValidationMessageProps) {
  if (!show) return null;

  return (
    <Text>{message}</Text>
  );
}
