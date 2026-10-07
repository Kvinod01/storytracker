import _get from "lodash/get";
import _map from 'lodash/map';
import Accordion from "@repo/ui/Accordion";
import Badge from "@repo/ui/Badge";
import useSWR from "swr";
import { makeRequest } from "../../service";
import DOMPurify from 'dompurify';
import LowIcon from "../Icons/LowIcon";
import HighIcon from "../Icons/HighIcon";
import MediumIcon from "../Icons/MediumIcon";
import { PRIORITY_VS_LABEL, STATUS_VS_LABEL } from "./storyTracker.constants";
import DropDown from "@repo/ui/DropDown";
import KababMenuIcon from "../Icons/KababMenuIcon";
import { ACCEPTANCE_CRITERIA_OPTIONS, STORY_OPTIONS } from "./storyTracker.config";
import { useNavigate } from "react-router-dom";

const StoryTracker = () => {
    const { data } = useSWR(
        ['/api/story-tracker'],
        () => makeRequest(`http://localhost:8080/api/v1/story-trackers/a2a77177-0396-42f2-bb30-5b76bf06e8fe`)
    );
    const navigate = useNavigate()


    const accordionArgs = {
        heading: <div className="flex flex-row items-center justify-between"><span>{_get(data, "storyTitle", "")}</span>
            <span className="flex flex-row gap-4 items-start">
                <span>{_get(STATUS_VS_LABEL, _get(data, "storyStatus", "IN_PROGRESS"))}</span>
                <DropDown element={<KababMenuIcon />} items={STORY_OPTIONS(data, navigate)} /></span></div>,
        subHeading: <div className="flex flex-row gap-x-4">
            <Badge prefixIcon={<LowIcon />} value="Low" suffixIcon={<span className="">{_get(data, "lowPriorityCount", 0)}</span>} />
            <Badge prefixIcon={<MediumIcon />} value="Medium" suffixIcon={<span className="">{_get(data, "mediumPriorityCount", 0)}</span>} />
            <Badge prefixIcon={<HighIcon />} value="High" suffixIcon={<span className="">{_get(data, "highPriorityCount", 0)}</span>} />
        </div>,
        items: _map(_get(data, "acceptanceCriteria", []), (item: any) => {
            const sanitizedDescription = DOMPurify.sanitize(_get(item, "description", ""));
            return {
                // s1. Prefix: Use Controller for Checkbox
                titleIcon: _get(PRIORITY_VS_LABEL, _get(item, "priority", "LOW")),
                title: (
                    <div className={`transition-colors duration-200 `}>
                        {_get(item, "acName", "")}
                    </div>
                ),
                content: (
                    <div
                        className="api-content 
                    [&_a]:text-blue-600 [&_a]:underline 
                    [&_ul]:list-disc [&_ul]:ml-4 
                    [&_strong]:font-bold 
                    [&_h1]:text-2xl [&_h1]:font-bold"
                        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                    />
                ),
                element: <div className="flex flex-row items-start gap-4">{_get(STATUS_VS_LABEL, _get(item, "status", ""))} <span><DropDown element={<KababMenuIcon />} items={ACCEPTANCE_CRITERIA_OPTIONS(item)} /></span></div>
            };
        }),
    };

    return (
        <div className="flex items-start  justify-center p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="w-full">
                <Accordion {...accordionArgs} />
            </div>
        </div>
    );
};

export default StoryTracker;