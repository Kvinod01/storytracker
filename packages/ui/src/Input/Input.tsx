import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label: string;
    required?: boolean;
    error?: string;
}

const Input = (props: InputProps) => {
    const { label, required, id, error } = props;
    console.log("error", error);


    return (
        <div className="relative">
            <input
                {...props}
                id={id}
                placeholder="Enter " // Required for peer-placeholder-shown logic
                className={`peer block w-full px-4 py-3 text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0  focus:border-green-500 transition-colors ${error ? 'border-red-500' : 'border-gray-300'}`}
            />
            <label
                htmlFor={id}
                className={`absolute left-3 -top-2.5 text-sm bg-gray-50 transition-all peer-focus:text-green-600 ${error? "text-red-500" : "text-gray-500 "} `}
            >
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;