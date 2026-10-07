import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import React from 'react'; // Import React for event types

interface AccordionItem {
    titleIcon?: React.ReactNode;
    title: React.ReactNode;
    content: string;
    itemDisabled?: boolean;
    element?: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    accordionOpenIcon?: React.ReactNode;
    accordionCloseIcon?: React.ReactNode;
    suffix?: React.ReactNode;
    isSuffixRequired?: boolean;
    disabled?: boolean;
    heading?: string;
    subHeading?: string;
}

// --- Accordion Component ---

const Accordion = (props: AccordionProps) => {
    const {
        heading,
        subHeading,
        items = [],
        accordionOpenIcon,
        accordionCloseIcon,
        suffix,
        isSuffixRequired = false,
        disabled = false

    } = props;

    /**
     * Helper function to stop click event propagation.
     * This prevents the click from reaching the DisclosureButton and toggling the accordion.
     */
    const stopPropagation = (e: React.MouseEvent) => {
        // 💡 Stops the click from bubbling up to the parent DisclosureButton
        e.stopPropagation();
        // 💡 Prevents the default action, though usually not needed here
        // e.preventDefault(); 
    };

    return (
        <div className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-2xl transition-colors duration-500">
            {heading && <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{heading}</h2>}
            {subHeading && <p className="text-lg font-normal text-gray-600 dark:text-gray-400 mb-6">{subHeading}</p>}

            <div className="space-y-3">
                {items.map((item, index) => (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <div className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg overflow-visible">
                                <DisclosureButton
                                    className={`
                                        flex w-full justify-between items-center px-5 py-4 text-left text-lg font-semibold
                                        ${disabled || item.itemDisabled
                                            ? 'cursor-not-allowed opacity-50 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-600'
                                            : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }
                                        focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 rounded-lg transition-all duration-200
                                    `}
                                    disabled={disabled || item.itemDisabled}
                                >
                                    <div className="flex items-center">
                                        {/* 1. Wrap titleIcon in a span with stopPropagation */}
                                        {item.titleIcon && (
                                            <span
                                                className="mr-3"
                                                onClick={stopPropagation} // 🛑 Stop propagation on click
                                            >
                                                {item.titleIcon}
                                            </span>
                                        )}
                                        <span>{item.title}</span>
                                    </div>

                                    <div className="shrink-0 flex items-center transition-transform duration-200">
                                        {/* 2. Wrap element in a div with stopPropagation */}
                                        {item.element && (
                                            <div
                                                className="mr-3" // Add some spacing for better look
                                                onClick={stopPropagation} // 🛑 Stop propagation on click
                                            >
                                                {item.element}
                                            </div>
                                        )}

                                        {/* Original suffix/icon logic */}
                                        {item.element ? null : // Hide default icon if element is present
                                            isSuffixRequired ? suffix
                                                : open ? accordionOpenIcon || null
                                                    : accordionCloseIcon || null
                                        }
                                    </div>
                                </DisclosureButton>

                                <Transition
                                    enter="transition duration-300 ease-out"
                                    enterFrom="transform scale-y-95 opacity-0 origin-top"
                                    enterTo="transform scale-y-100 opacity-100 origin-top"
                                    leave="transition duration-200 ease-out"
                                    leaveFrom="transform scale-y-100 opacity-100 origin-top"
                                    leaveTo="transform scale-y-95 opacity-0 origin-top"
                                >
                                    <DisclosurePanel className="px-5 pt-0 pb-4 text-gray-600 dark:text-gray-300 text-base border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850">
                                        <div className='pt-4'>
                                            {item.content}
                                        </div>
                                    </DisclosurePanel>
                                </Transition>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};
export default Accordion;