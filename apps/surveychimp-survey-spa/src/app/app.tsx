
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import SurveyPage4star from './pages/SurveyPage4star';
import AllSurveysPage from './pages/AllSurveysPage';
import TodoPage from './pages/TodoPage';
import ThankYouPage from './pages/ThankYou'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'

// custom hook to get the current pathname in React


ReactGA.initialize('G-4RCWL3QZ0P')

const StyledApp = styled.div`
// Your style here
`;


export function App() {


  useEffect(() => {
console.log('usePath??', window.location.pathname)
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  console.log('env ', process.env.NX_4STAR_RATING)
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
