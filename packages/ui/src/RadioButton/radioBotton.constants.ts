export const RadioButtonSizes = {
    /** Small size: Indicator (4x4) and Checkmark (2x2) */
    small: `
         w-4 h-4
        after:w-2 after:h-2  
         peer-checked:after:w-2 peer-checked:after:h-2    
    `,

    /** Medium size: Indicator (5x5) and Checkmark (3x3) - Recommended default */
    medium: `
        w-5 h-5 
        after:w-3 after:h-3  
        peer-checked:after:w-3 peer-checked:after:h-3
    `,

    /** Large size: Indicator (6x6) and Checkmark (4x4) */
    large: `
         w-6 h-6
         after:w-4 after:h-4  
         peer-checked:after:w-4 peer-checked:after:h-4
    `,
};

export const baseClass = `
relative border-2 border-gray-500 rounded-full
after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2
after:rounded-full after:duration-300 after:transition-opacity 
peer-checked:after:bg-orange-500 peer-checked:after:opacity-100 peer-checked:border-orange-500
peer-hover:ring-4 peer-hover:ring-gray-500/10
transition duration-300 ease-in-out
peer-disabled:border-gray-100
peer-checked:peer-disabled:after:bg-gray-100
peer-disabled:cursor-not-allowed
peer-hover:peer-disabled:ring-0

`