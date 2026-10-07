import { baseClass, RadioButtonSizes } from './radioBotton.constants'; // Assuming this file exports the sizes object
import type { RadioButtonProps } from './radioButton.type';

const RadioButton = (props: RadioButtonProps) => {
    const {
        options,
        name,
        isSelected,
        onChange,
        size = 'medium',
        isDisabled = false
    } = props

    return (
        // The container for the entire radio group (e.g., a column or row layout)
        <div className='flex flex-col gap-2'>
            {options.map((option) => {
                const isChecked = isSelected(option.value);
                // Ensure the value is treated as a string as required by the native input type="radio"
                const valueString = String(option.value);
                return (
                    // The outer container for each individual radio button and its label
                    // We use a div here for layout, and the <label> wraps the input/indicator
                    <div key={valueString} className='flex flex-row items-center'>

                        {/* The <label> makes the indicator and input a single clickable unit */}
                        <label className="relative cursor-pointer flex items-center">

                            {/* 2. The hidden native radio input */}
                            <input
                                checked={isChecked}
                                onChange={onChange}
                                value={valueString} // Use the string value
                                className="sr-only peer"
                                name={name}
                                type="radio"
                                disabled={isDisabled || option.isDisabled || false}
                            />
                            {/* 3. The custom styled radio indicator (the circle) */}
                            <div
                                className={`${baseClass} ${RadioButtonSizes[size] || RadioButtonSizes.medium}`}
                            ></div>
                            <span className={`ml-2 ${isDisabled || option.isDisabled ? "text-gray-100 cursor-not-allowed" : ""}`}>{option.label}</span>
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default RadioButton;