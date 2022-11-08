//Jonatans Styled components
import styled from 'styled-components';

//Klassisk stylesheet
import '../TodoPage.css';

const StyledHeader = styled.h1`
    color: red;
`
const StyledPage = styled.div`
    border: 1px solid green;
`

const TodoPage = () => {

    return ( <StyledPage>
            <StyledHeader>Detta är todo page</StyledHeader>
            <h1>Hejsan</h1>
            <form action="submit">
                <input type="text" />
                <input type="submit" />
            </form>
        </StyledPage>)
}

export default TodoPage