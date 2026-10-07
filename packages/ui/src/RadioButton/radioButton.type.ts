import type { ReactNode } from "react";

export interface RadioOption {
    label: ReactNode; // Can be a string or a React element
    value: string; // Radio button value must be a string for HTML input
    isDisabled?: boolean
}

export interface RadioButtonProps {
    options: RadioOption[];
    name: string;
    isSelected: (value: string) => boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium' | 'large';
    isDisabled?: boolean
}