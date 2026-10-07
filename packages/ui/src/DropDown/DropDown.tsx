import { Menu,MenuButton,MenuItem,MenuItems } from "@headlessui/react";

interface DropDownProps {
    element: React.ReactNode;
    items: { label: string; onClick: () => void }[];
}
const DropDown = (props: DropDownProps) => {
    const { element, items } = props;
    return (
        <Menu as="div" className="relative inline-block text-left z-0">
            <MenuButton>
                {element}
            </MenuButton>
            <MenuItems className="absolute right-1 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg outline-none z-50">
                {items.map((item, index) => (
                    <MenuItem key={index}>
                        {({ active }) => (
                            <button
                                onClick={item.onClick}
                                className={`${
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } group flex items-center w-full px-4 py-2 text-sm`}
                            >
                                {item.label}
                            </button>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}
export default DropDown