import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import getSurveyById from '../../api/getSurveyById';
import sendSurveyResponse from '../../api/sendSurveyResponse';
import { ISurvey, ISurveyResponse } from '@surveychimp/surveychimp-lib';
import ReactStars from 'react-stars'
// import { render } from 'react-dom';
// import React from 'react'

const SurveyPage = () => {
    const ratingChanged = (newRating: number) => {
        setRating(newRating)
        console.log('newRating är ', newRating)
    }
    const addComment = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setComment(event.target.value)
    }
    const { surveyId } = useParams();
    const [survey, setSurvey] = useState<ISurvey>()
    const [rating, setRating] = useState<number>(0)
    const [comment, setComment] = useState<string>()

    useEffect(() => {
        if (surveyId) {
            getSurveyById(surveyId).then(survey => {
                setSurvey(survey);
            })
        } else {
            //Visa upp att id saknas
        }
    }, [])

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const response: ISurveyResponse = {
            rating: rating,
            comment: comment
        }
      const apiresp = sendSurveyResponse(surveyId, response)
      console.log('api resp ', apiresp)

    }

    return (<>
        <h1>Survey</h1>
        <p>{survey?.recipient.name}</p>
        <form action="submit" onSubmit={onSubmitHandler}>
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'}/>
            <input type="text" onChange={(e)=>addComment(e)} />
            <input type="submit" />
        </form>
    </>)
}

export default SurveyPage;