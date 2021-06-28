import styled from "styled-components";

import {useState} from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
        background-color: #CDF0EA;
        width: 60%;
        height: 50px;
        margin: 10px;
        border-radius: 10px;
    `
const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const Button = styled.button`
  background-color: #C490E4;
  border-radius: 10px;
  border: none;
  height: 60%;
  &:hover {
    cursor: pointer;
  }
  `
const Input = styled.input`
      width: 80%;
      margin-left: 10px;
  &:focus {
    outline: none;
  }
    `

const Category = ({category, totalIncomeAmount, deleteSelectedCategory, updateSelectedCategory}) => {
    const [editMode, setEditMode] = useState(false);
    const [newCategoryTitle, setNewCategoryTitle] = useState('');

    const changeCategoryTitle = () => {
        updateSelectedCategory(category.id, newCategoryTitle);
        setNewCategoryTitle('');
        setEditMode(false);
    }

    return(
        <Wrapper>
            {
                editMode ? (
                    <>
                    <Input value={newCategoryTitle} onChange={(event) => setNewCategoryTitle(event.target.value)}/>
                        <Button onClick={changeCategoryTitle}>+</Button>
                        <Button onClick={() => setEditMode(false)}>-</Button>
                    </>
                ) : (
                    <>
                    <SecondWrapper>
                        <Info>
                            <p>{category.title}</p>
                            <p>{category.expense}/{totalIncomeAmount}</p>
                        </Info>
                        <Progress id={category.title} max={totalIncomeAmount}
                                  value={category.expense}>{category.expense}</Progress>
                    </SecondWrapper>
                <Button onClick={() => deleteSelectedCategory(category.id)}>-</Button>
                <Button onClick={() => setEditMode(true)}>Update</Button>
                    </>
                )
            }

        </Wrapper>
    )
}

export default Category;