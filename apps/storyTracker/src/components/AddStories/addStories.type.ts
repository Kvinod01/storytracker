export interface IFormInput {
    storyTitle: string;
    acceptanceCriteria: {
        acName: string;
        priority: string;
        description: string;
        status: string;
    }[];
}