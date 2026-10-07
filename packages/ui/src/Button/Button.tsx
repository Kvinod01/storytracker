import { Button as HeadlessUiButton } from '@headlessui/react'
import { sizes, states, Variants } from './buttonVariant'
interface ButtonProps {
    // Define your props here
    variants?: 'primary' | 'outline' | 'secondary' | 'outline_dashed'
    size?: 'small' | 'medium' | 'large'
    disable?: boolean
    prefixIcon?: React.ReactNode
    suffixIcon?: React.ReactNode
    onClick?: () => void
    children?: React.ReactNode
    state?: 'default' | 'rounded' | "full_rounded"
}


const Button = (props: ButtonProps) => {
    const { variants = 'primary', size = 'medium', state = 'default', disable = false, prefixIcon, suffixIcon, onClick, children } = props

    return (
        <HeadlessUiButton onClick={onClick} className={` ${Variants[variants]} ${sizes[size]} ${prefixIcon || suffixIcon ? 'inline-flex items-center' : ''} ${states[state]}`} disabled={disable}>
            {
                prefixIcon && <span className={`mr-2  ${disable ? 'opacity-50' : ''}`}>{prefixIcon}</span>
            }
            {children && children}
            {
                suffixIcon && <span className={`ml-2 ${disable ? 'opacity-50' : ''}`}>{suffixIcon}</span>
            }
        </HeadlessUiButton>
    )
}

export default Button