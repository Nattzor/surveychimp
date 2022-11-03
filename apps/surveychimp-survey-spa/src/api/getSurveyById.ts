import { ISurvey } from '@surveychimp/surveychimp-lib';

const getSurveyById = async (surveyId: string): Promise<ISurvey> => {
    return (await fetch(`${process.env.API_BASE_URL}api/survey/${surveyId}`)).json();
}

export default getSurveyById;