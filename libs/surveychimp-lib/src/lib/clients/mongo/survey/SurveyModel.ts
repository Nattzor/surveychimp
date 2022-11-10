import { Schema, model } from 'mongoose';


// export interface ISurveyWithId extends ISurveyRecipient {
//     _id: string,
// }

export interface ISurveyResponse {
    rating: number,
    comment?: string
}

export interface ISurvey {
    recipient: ISurveyRecipient,
    response?: ISurveyResponse,
}

export interface ISurveyRecipient {
    name: string,
    mobileNumber: string,
    // _id?: string
}

// const WithIdSchema = new Schema<ISurveyWithId>({ _id: String });
const RecipientSchema = new Schema<ISurveyRecipient>({ name: String, mobileNumber: String });
const ResponseSchema = new Schema<ISurveyResponse>({ rating: Number, comment: String }, { timestamps: true });

const SurveySchema = new Schema<ISurvey>({
    // _id: WithIdSchema,
    recipient: RecipientSchema,
    response: ResponseSchema
}, { timestamps: true });

export default model("survey", SurveySchema);