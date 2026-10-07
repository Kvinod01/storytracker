import Badge from "@repo/ui/Badge"
import LowIcon from "../Icons/LowIcon"
import MediumIcon from "../Icons/MediumIcon"
import HighIcon from "../Icons/HighIcon"

 const STATUS = {
    TODO: "TO_DO",
    IN_PROGRESS: "IN_PROGRESS",
    DONE: "DONE"
}

const STATUS_VS_LABEL ={
    [STATUS.TODO] : <Badge value="To Do" />,
            [STATUS.IN_PROGRESS] : <Badge value="In Progress" bgColor="bg-[#fcf8e1]"  borderColor="ring-[#fcd303]" textcolor="text-[#fcd303]"/>,
    [STATUS.DONE]: <Badge  value="Done" bgColor="bg-[#f2faf2]" borderColor="ring-[#019401]" textcolor="text-[#019401]"/>

}

const PRIORITY ={
    LOW : "LOW",
    MEDIUM : "MEDIUM",
    HIGH : "HIGH"
}

const PRIORITY_VS_LABEL = {
    [PRIORITY.LOW] : <LowIcon />,
    [PRIORITY.MEDIUM] : <MediumIcon />,
    [PRIORITY.HIGH] : <HighIcon />
}

export {STATUS_VS_LABEL,PRIORITY,PRIORITY_VS_LABEL}

