import { ReactNode } from "react";

interface BadgeProps {
    value?: string;
    textcolor?: string;
    bgColor?: string;
    borderColor?: string;
    prefixIcon?:ReactNode
    suffixIcon?:ReactNode
    
}
const Badge = (props: BadgeProps) => {
    const {
        value = "Badge",
        textcolor = "text-gray-600",
        bgColor = "bg-gray-50",
        borderColor = "ring-gray-500/10",
        suffixIcon = null,
        prefixIcon=null
    } = props;

    return (
        <div className={`inline-flex  w-max flex-row gap-y-2 items-center rounded-md ${bgColor} px-2 py-1 text-xs font-medium ${textcolor} ring-1 ring-inset ${borderColor}`}>
            {prefixIcon && <span className="-mt-1">{prefixIcon}</span>}
            {value}
            {suffixIcon && <span className="ml-1">{suffixIcon}</span>}
        </div>
    )
}

export default Badge