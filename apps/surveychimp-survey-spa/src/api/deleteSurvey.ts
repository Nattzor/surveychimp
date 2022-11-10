import { ISurvey } from '@surveychimp/surveychimp-lib';

const deleteSurvey = async (surveyId: string): Promise<object> => {
    return (await fetch(`http://localhost:4200/api/survey/${surveyId}`, {
        method: 'DELETE',
        // body: JSON.stringify({
        //     id: surveyId
        //   }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })).json();
}

export default deleteSurvey