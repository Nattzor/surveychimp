
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import TodoPage from './pages/TodoPage';

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
        <Route
          path="/todos"
          element={<TodoPage/>} />
      </Routes>
    </StyledApp>
  );

}


export default App;
