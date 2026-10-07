import _get from "lodash/get";
import type { NavigateFunction } from "react-router-dom";

const handleAcEdit = (item: object) => {
    console.log('item', item);

}
const handleEditStoryonClick = (storyId: String,navigate:NavigateFunction) => {
    navigate(`/editStory?storyId=${storyId}`)
}

const STORY_OPTIONS = (item: object,navigate:NavigateFunction) => [
    { label: "Edit AC", onClick: () => { handleEditStoryonClick(_get(item, "storyTrackerId", ""), navigate); } },
    { label: "Delete AC", onClick: () => { } }
]

const ACCEPTANCE_CRITERIA_OPTIONS = (item: object) => [
    { label: "Edit AC", onClick: () => { handleAcEdit(item); } },
    { label: "Delete AC", onClick: () => { } }
]

export { STORY_OPTIONS, ACCEPTANCE_CRITERIA_OPTIONS };