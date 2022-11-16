import getAllSurvey from '../../api/getAllSurvey';
import deleteSurvey from '../../api/deleteSurvey';
import { useEffect, useState } from 'react';
import { ISurvey } from '@surveychimp/surveychimp-lib';



const AllSurveysPage = () => {
    interface SurveyWithId extends ISurvey {
        _id: string
    }
    const [allSurveys, setAllSurveys] = useState<SurveyWithId[]>([])
    useEffect(() => {
        getAllSurvey().then(result => {
            setAllSurveys(result)
            console.log('Get all survey result: ', result)
        })
    }, [])
    console.log('test ', allSurveys)

    const handleClick = async (event: React.MouseEvent<HTMLElement>, item:SurveyWithId) => {
        console.log('item är ', item._id)
        try{
            await deleteSurvey(item._id).then(result => {
                 console.log('deleteSurvey result: ', result)
                 setAllSurveys(allSurveys.filter(survey => survey._id !== item._id))
             })

        }catch(err){
            console.log(err)
        }
    }
    // type SurveyWithOnlyId = {
    //     id:
    // }
    return (
        <div>
            <h1>All surveys page</h1>
           { allSurveys.map((item, index) => (
                <div key={index}>
                    <p>{item.recipient.name}</p>
                    <button onClick={(e)=>handleClick(e, item)}>Delete this survey</button>
                </div>
            ))}
        </div>
    )
}

export default AllSurveysPage;


// type arrayOfSurveys = ISurvey[]
// let allSurveys: arrayOfSurveys = []
// let allSurveys = useRef<null | arrayOfSurveys>(null)