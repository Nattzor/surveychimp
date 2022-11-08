import { ISurvey, ISurveyResponse } from '@surveychimp/surveychimp-lib';

const sendSurveyResponse = async (surveyId: string | undefined, response: ISurveyResponse): Promise<ISurvey>  => {
    return (await fetch(`http://localhost:4200/api/survey/${surveyId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            rating: new Number(response.rating),
            comment: response.comment,
          }),
    })).json();
}

export default sendSurveyResponse;