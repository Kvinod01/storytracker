// packages/ui/PrioritySelect.tsx or similar file

import React from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

interface PrioritySelectProps {
    field: ControllerRenderProps<any, string>;
}

const PrioritySelect: React.FC<PrioritySelectProps> = ({ field }) => {
    const options = [{ label: 'High', value: "HIGH" }, { label: 'Medium', value: "MEDIUM" }, { label: 'Low', value: "LOW" }];

    // Tailwind class to color the select border based on priority
    const getColorClass = (value: string) => {
        switch (value) {
            case '5':
                return 'border-red-500 text-red-700 dark:border-red-400 dark:text-red-300';
            case '3':
                return 'border-yellow-500 text-yellow-700 dark:border-yellow-400 dark:text-yellow-300';
            case '1':
                return 'border-green-500 text-green-700 dark:border-green-400 dark:text-green-300';
            default:
                return 'border-gray-300 dark:border-gray-600';
        }
    };

    return (
        <select
            {...field}
            className={`
        w-28 p-1 text-sm rounded-md border-2 
        bg-white dark:bg-gray-800 transition-colors duration-200
        ${getColorClass(field.value)}
      `}
        >
            <option value="">Select Priority</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default PrioritySelect;