import _get from "lodash/get"
import Page from "@repo/ui/Page";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import Input from "@repo/ui/Input";
import Button from "@repo/ui/Button";
import RichTextEditor from "@repo/ui/RichTextEditor";
import Select from "@repo/ui/Select";
import AddIcon from "../Icons/AddIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from "./addStories.constants";
import { makeRequest } from "../../service";
import useSWR from "swr";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import type { IFormInput } from "./addStories.type";
import { handleFormReset } from "./addStories.helper";

// Define the shape of your form data

interface AddStoriesProps {
    isEditMode: boolean
}
const AddStories = (props: AddStoriesProps) => {
    const { isEditMode = false } = props

    const [searchParams] = useSearchParams();
    const storyId = searchParams.get("storyId");

    const { data } = useSWR(
        ["fetchStoryById", storyId],
        () => makeRequest(`http://localhost:8080/api/v1/story-trackers/${storyId}`)
    )


    const { control, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
        defaultValues: {
            storyTitle: "",
            acceptanceCriteria: [
                { acName: "", priority: "", description: "", status: "TO_DO" }
            ]
        }
    });

    useEffect(() => {
        if (data) {
            const formReset = handleFormReset(data);
            reset(formReset)
        }
    }, [data])


    // Setup the field array for dynamic ACs
    const { fields, append, remove } = useFieldArray({
        control,
        name: "acceptanceCriteria"
    });

    const onSubmit = (data: IFormInput) => {
        try {
            const response = makeRequest(`http://localhost:8080/api/v1/story-trackers`, {
                method: "POST",
                body: data
            })
            console.log("API Response:", response);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        // Add your API call here
    };

    const handleHeaderActions = () => {
        return (
            <div>
                {/* Trigger form submission manually since this is outside the form tag */}
                <Button state="rounded" onClick={handleSubmit(onSubmit)}>
                    Save
                </Button>
            </div>
        );
    };

    return (
        <Page title="Add Stories" headerActions={handleHeaderActions()}>
            <div className="space-y-6">
                {/* Story Name Section */}
                <div className="flex flex-row gap-4">
                    <Controller
                        name="storyTitle"
                        control={control}
                        rules={{
                            required: "Story Name Cannot be empty"
                        }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                label="Story Name"
                                style={{ width: 300 }}
                                error={_get(errors, 'storyName.message', '')}
                            />
                        )}
                    />
                </div>

                {/* Header for AC Section */}
                <div className="flex flex-row justify-between items-center p-1 bg-[#f0f0f0] rounded-sm">
                    <span className="text-gray-600">Acceptance Criteria</span>
                    <Button
                        suffixIcon={<AddIcon />}
                        size="small"
                        variants="outline"
                        state="rounded"
                        onClick={() => append({ acName: "", priority: "", description: "", status: "TO_DO" })}
                    >
                        Add
                    </Button>
                </div>

                {/* Dynamic AC List */}
                <div className="space-y-4 ">
                    {fields.map((item, index) => (
                        <div key={item.id} className="space-y-4 border-b pb-4 last:border-b-0">
                            <div className="flex flex-row gap-4 items-start">
                                {/* AC Name */}
                                <Controller
                                    name={`acceptanceCriteria.${index}.acName`}
                                    control={control}
                                    rules={{
                                        required: "AC Name Cannot be empty"
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            label="AC Name"
                                            style={{ width: 300 }}
                                            error={_get(errors, `acceptanceCriteria.${index}.acName.message`, '')}
                                        />

                                    )}
                                />

                                {/* Priority */}
                                <Controller
                                    name={`acceptanceCriteria.${index}.priority`}
                                    control={control}
                                    rules={{
                                        required: "Priority Cannot be empty"
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            label="Select Category"
                                            options={PRIORITY_OPTIONS}
                                            required
                                            {...field}
                                            error={_get(errors, `acceptanceCriteria.${index}.priority.message`, '')}
                                            style={{ width: 300 }}
                                        />
                                    )}
                                />
                                <Controller
                                    name={`acceptanceCriteria.${index}.status`}
                                    control={control}
                                    rules={{
                                        required: "Status Cannot be empty"
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            label="Status"
                                            options={STATUS_OPTIONS}
                                            required
                                            {...field}
                                            error={_get(errors, `acceptanceCriteria.${index}.status.message`, '')}
                                            style={{ width: 300 }}
                                        />
                                    )}
                                />

                                {/* Delete Button */}
                                <div className="mt-1">
                                    <Button
                                        variants="outline"
                                        size="small"
                                        state="rounded"
                                        onClick={() => remove(index)}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </div>
                            </div>

                            {/* Rich Text Editor */}
                            <Controller
                                name={`acceptanceCriteria.${index}.description`}
                                control={control}
                                rules={{
                                    required: "Description Cannot be empty"
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <RichTextEditor
                                        value={value}
                                        style={{ height: 200 }}
                                        onChange={onChange}
                                        error={_get(errors, `acceptanceCriteria.${index}.description.message`, '')}
                                    />
                                )}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
};

export default AddStories;