import _get from "lodash/get"
import _map from "lodash/map"
import type { IFormInput } from "./addStories.type";

const handleFormReset = (data:object):IFormInput=>{
    return{
        storyTitle : _get(data,"storyTitle",""),
        acceptanceCriteria : _map(_get(data,"acceptanceCriteria",[]),(item)=>({
        acName: _get(item,"acName",""),
        priority:  _get(item,"priority",""),
        description: _get(item,"description",""),
        status: _get(item,"status",""),
        }))
    }

}

export {handleFormReset}