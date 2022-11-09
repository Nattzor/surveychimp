import getAllSurvey from '../../api/getAllSurvey';
import { useEffect, useState } from 'react';
import { ISurvey } from '@surveychimp/surveychimp-lib';



const AllSurveysPage = () => {
    const [allSurveys, setAllSurveys] = useState<ISurvey[]>([])
    useEffect(() => {
        getAllSurvey().then(result => {
            setAllSurveys(result)
            console.log(result)
        })
    }, [])
    console.log('test ', allSurveys)
    return (
        <div>
            <h1>All surveys page</h1>
           { allSurveys.map((item, index) => (
                <div key={index}>
                    <p>{item.recipient.name}</p>
                </div>
            ))}
        </div>
    )
}

export default AllSurveysPage;


// type arrayOfSurveys = ISurvey[]
// let allSurveys: arrayOfSurveys = []
// let allSurveys = useRef<null | arrayOfSurveys>(null)