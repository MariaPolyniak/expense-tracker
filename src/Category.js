import styled from "styled-components";

const Wrapper = styled.div`
        background-color: #CDF0EA;
        width: 60%;
        height: 50px;
        margin: 10px;
        border-radius: 10px;
    `
const Info = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0 10px;
    `
const Progress = styled.progress`
        border-radius: 7px;
        width: 80%;
        height: 10px;
        margin-left: 10px;
        margin-bottom: 5px;
      
      &::-webkit-progress-bar {
        background-color: #F9F9F9;
        border-radius: 7px;
      }
      &::-webkit-progress-value {
        background-color: #C490E4;
        border-radius: 7px;
      }
`

const Category = ({title, expense, totalIncomeAmount}) => {
    return(
        <Wrapper>
            <Info>
                <p>{title}</p>
                <p>{expense}/{totalIncomeAmount}</p>
            </Info>
            <Progress id={title} max={totalIncomeAmount} value={expense}>{expense}</Progress>
        </Wrapper>
    )
}

export default Category;