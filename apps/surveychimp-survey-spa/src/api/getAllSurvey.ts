import { ISurvey } from '@surveychimp/surveychimp-lib';



const getAllSurvey = async (): Promise<[]>  => {
    return (await fetch('http://localhost:4200/api/survey')).json();
}

export default getAllSurvey;