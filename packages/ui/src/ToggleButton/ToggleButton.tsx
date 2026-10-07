import clsx from 'clsx';
import { toggleSizesClasses } from './toggleButton.constants';

 interface ToggleButtonProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string; 
    label: React.ReactNode
    size?: 'small' | 'medium' | 'large';
    labelClassName?: string
};

const ToggleButton = (props: ToggleButtonProps) => {
    const { checked, onChange, disabled = false, className, label = 'vibod', size = 'large', labelClassName = "text-sm" } = props;

    return (
        <div className="flex items-center gap-4">
            <label
                className={clsx(
                    'relative inline-flex items-center text-sm font-medium', // Added space-x-3 for gap
                    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                    className
                )}
            >
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checked}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.checked)} />

                {/* 3. The Visual Switch DIV */}
                <div
                    className={clsx(
                        'group bg-white rounded-full duration-300',
                        toggleSizesClasses[size],
                        'ring-2',
                        // Base (off) styles
                        'ring-gray-300 after:duration-300 after:bg-gray-500',
                        // Checked styles
                        ' peer-checked:ring-orange-500 peer-checked:bg-orange-500 peer-checked:after:bg-white',
                        // Shared 'after' layout ;styles
                        'after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1', // Removed after:flex classes
                        'hover:after:ring-8 hover:after:ring-offset-2 hover:after:ring-[#ebeef3]/60 ',
                        // 'After' translation
                        'peer-checked:after:translate-x-8',
                        'peer-disabled:after:bg-gray-300 peer-disabled:cursor-not-allowed peer-disabled:after:hover:ring-0 peer-disabled:after:hover:ring-offset-0 '
                    )}
                ></div>

            </label>
            <span className={`${labelClassName}`}>{label}</span>
        </div>

    );
};
export default ToggleButton;