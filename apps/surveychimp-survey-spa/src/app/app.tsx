<<<<<<< HEAD

import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';

import { Route, Routes } from 'react-router-dom';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  return (
    <StyledApp>
      <Routes>
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />
        <Route
          path="/"
          element={<div>Du är på förstasidan</div>} />
      </Routes>
    </StyledApp>
  );

}


export default App;
=======

import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
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
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />
        <Route
          path="/thankyou"
          element={<ThankYouPage />}
        />
        <Route
          path="/"
          element={<div>Du är på förstasidan</div>} />
        <Route
          path="/todos"
          element={<TodoPage/>} />
      </Routes>
    </StyledApp>
  );

}


export default App;
>>>>>>> 18216b2b00813a27ad414fe9d3e029481a696aa2
