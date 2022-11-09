import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getSurveyById from '../../api/getSurveyById';
import { ISurvey } from '@surveychimp/surveychimp-lib';
import ReactStars from 'react-stars'
// import { render } from 'react-dom';
// import React from 'react'

const SurveyPage = () => {
    const ratingChanged = (newRating: number) => {
        console.log(newRating)
    }
    const { surveyId } = useParams();
    const [survey, setSurvey] = useState<ISurvey>()

    useEffect(() => {
        if (surveyId) {
            getSurveyById(surveyId).then(survey => {
                setSurvey(survey);
            })
        } else {
            //Visa upp att id saknas
        }
    }, [])

    return (<>
        <h1>Survey</h1>
        <p>{survey?.recipient.name}</p>
        <form action="subtmit">
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'}/>
            <input type="submit" />
        </form>
    </>)
}

export default SurveyPage;