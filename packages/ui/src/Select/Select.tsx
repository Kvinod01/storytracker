import React, { SelectHTMLAttributes } from 'react';

interface SelectOption {
    label: string;
    value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    id?: string;
    label: string;
    options: SelectOption[];
    required?: boolean;
    error?: string;
    placeholder?: string; // Optional custom placeholder text
}

const Select = (props: SelectProps) => {
    const { label, options, required, id, error, placeholder, className, ...rest } = props;

    return (
        <div className="relative">
            <select
                {...rest}
                id={id}
                // Setting required here helps the :valid pseudo-class work for CSS floating labels
                required={required}
                className={`peer block w-full px-4 py-3 text-gray-900 bg-transparent border rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-green-500 transition-colors 
                    ${error ? 'border-red-500' : 'border-gray-300'} 
                    ${className}`}
            >
                {/* This empty option acts as the "default" 
                  If value is "", the label stays in the middle.
                */}
                <option value="" disabled>{placeholder || "Select an option"}</option>
                
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <label
                htmlFor={id}
                className={`absolute left-3 px-1 bg-gray-50 transition-all pointer-events-none
                    /* Position when the select is empty/placeholder is shown */
                    -top-2.5 text-sm
                    /* If you want it to float only when a value is picked, use:
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                       peer-focus:-top-2.5 peer-focus:text-sm 
                    */
                    peer-focus:text-green-600 
                    ${error ? "text-red-500" : "text-gray-500"}`}
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {/* Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Select;