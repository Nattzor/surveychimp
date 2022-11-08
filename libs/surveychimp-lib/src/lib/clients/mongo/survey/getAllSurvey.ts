import SurveyModel, { ISurvey } from './SurveyModel';

export const getAllSurvey = async () => {
    const survey = SurveyModel.find({});
    if (!survey) {
        throw "404";
    }

    return survey;
}