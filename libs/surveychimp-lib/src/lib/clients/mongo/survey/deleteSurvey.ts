import SurveyModel from './SurveyModel';

export const deleteSurvey = async (surveyId: string) => {
    try{
       await SurveyModel.findOneAndDelete({_id: surveyId});
       return surveyId
    }catch(err){
            throw "404";
    }
    // survey.response = surveyResponse;
    // await survey.save();
    // console.log(survey)
    // return survey;
}