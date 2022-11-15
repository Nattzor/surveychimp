import { ISurvey, ISurveyResponse } from '@surveychimp/surveychimp-lib';

const sendSurveyResponse = async (surveyId: string | undefined, response: ISurveyResponse): Promise<ISurvey>  => {

    return (await fetch(`/api/survey/${surveyId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            rating: response.rating,
            comment: response.comment,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })).json();
}

export default sendSurveyResponse;