import React, { useEffect, useRef, useId } from "react";
import clsx from "clsx";

type CheckBoxSize = "sm" | "md" | "lg";
type TextSize = "text-sm" | "text-base";

interface CheckBoxProps {
  indeterminate?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: CheckBoxSize;
  textSize?: TextSize;
  label?: React.ReactNode;
  customClassName?: string;
  borderColor?: string;
  bgColor?: string;
  tickColor?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  indeterminate = false,
  checked = false,
  disabled = false,
  onChange,
  size = "lg",
  textSize = "text-sm",
  label,
  customClassName,
  borderColor,
  bgColor,
  tickColor,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const id = useId();

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          checked: !checked,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
    }
  };

  const sizeClass =
    size === "sm" ? "h-5 w-5" : size === "md" ? "h-6 w-6" : "h-5 w-5";

  const checkboxClass = clsx(
    sizeClass,
    "rounded border focus-visible:ring-2 focus-visible:ring-primary",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    checked ? "border-primary" : "border-red-700",
    customClassName,
    {
      [`bg-[${bgColor}]`]: !!bgColor,
      [`border-[${borderColor}]`]: !!borderColor,
    }
  );

  const inputStyle = {
    accentColor: tickColor || "#40A333",
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        id={id}
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className={checkboxClass}
        style={inputStyle}
      />
      {label && (
        <label htmlFor={id} className={textSize}>
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;