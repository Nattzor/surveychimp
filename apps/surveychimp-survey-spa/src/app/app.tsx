
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import SurveyPage4star from './pages/SurveyPage4star';
import AllSurveysPage from './pages/AllSurveysPage';
import TodoPage from './pages/TodoPage';
import ThankYouPage from './pages/ThankYou'

import { Route, Routes } from 'react-router-dom';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  return (
    <StyledApp>
      <Routes>
        <Route
          path="/survey"
          element={<AllSurveysPage />}
        />
        {process.env.NX_4STAR_RATING === "true" ? <Route
        path="/survey/:surveyId"
        element={<SurveyPage4star />}
      /> : <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        /> }


        <Route
          path="/thankyou"
          element={<ThankYouPage />}
        />
        <Route
          path="/"
          element={<div>Du är på förstasidan</div>}/>
        <Route
          path="/todos"
          element={<TodoPage/>} />
      </Routes>
    </StyledApp>
  );

}


export default App;
