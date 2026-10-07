// packages/ui/CustomCheckbox.tsx or similar file

import React from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

interface CustomCheckboxProps {
  field: ControllerRenderProps<any, boolean>;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ field }) => {
  return (
    <input
      type="checkbox"
      // 💡 Spreads onChange, onBlur, and value (boolean for checkboxes)
      {...field}
      checked={field.value} 
      // Handle chFange: for checkboxes, RHF expects the event object
      onChange={(e) => field.onChange(e.target.checked)} 
      className="accent-indigo-500 w-5  h-5 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 rounded cursor-pointer"
    />
  );
};

export default CustomCheckbox;