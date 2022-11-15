import { ISurvey } from '@surveychimp/surveychimp-lib';



const getAllSurvey = async (): Promise<[]>  => {
    return (await fetch('/api/survey')).json();
}

export default getAllSurvey;