export const Variants = {
    primary:
        'bg-primary text-white transition duration-150 ' +
        'hover:bg-primary-100 active:bg-primary-200 ' +
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ' +
        'disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed',
    outline:
        'border-2 border border-primary text-primary  transition duration-150 ' +
        'hover:bg-primary-50 hover:border-primary-100 hover:text-primary-100 active:bg-primary-50 active:border-primary-200 active:text-primary-200 ' +
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ' +
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-500 disabled:hover:bg-transparent',
    outline_dashed:
        'border-2 border-dashed border-primary text-primary  transition duration-150 ' +
        'hover:bg-primary-50 hover:border-primary-100 hover:text-primary-100 active:bg-primary-50 active:border-primary-200 active:text-primary-200 ' +
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ' +
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-500 disabled:hover:bg-transparent',

    // Secondary: Low-emphasis action (e.g., light background)
    secondary:
        ' text-primary transition duration-150 ' +
        'active:text-primary-200 hover:text-primary-100 ' +
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ' +
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-500 disabled:hover:bg-transparent',
}
export const sizes = {
    small: 'px-4 py-2 text-sm leading-4 tracking-[0.4px] w-fit h-[40px]',
    medium: 'px-4 py-3 text-md leading-5 tracking-[0.4px] w-fit h-[44px]',
    large: 'px-4 py-3 text-lg leading-6 tracking-[0.4px] w-fit h-[48px]',
}

export const states= {
    default: 'rounded-none',
    rounded: 'rounded-md',
    full_rounded: 'rounded-full'
}