import styled from "styled-components";

import {useState} from "react";

const Input = styled.input`
      width: 80%;
      margin-left: 10px;
  &:focus {
    outline: none;
  }
    `
const Button = styled.button`
      background-color: #C490E4;
      border-radius: 10px;
      border: none;
      &:hover {
        cursor: pointer;
      }
    `
const Wrapper = styled.div`
      display: flex;
      justify-content: space-between;
      width: 60%;
    `

const NewCategory = ({addNewCategory}) => {
    const [newCategory, setNewCategory] = useState('');

    const toggleCategory = (event) => {
        setNewCategory(event.target.value);
    }

    const toggleNewCategory = () => {
        addNewCategory(newCategory);
        setNewCategory('');
    }

    return (
        <Wrapper>
            <Input placeholder={"Add a new category"} value={newCategory} onChange={toggleCategory}/>
            <Button onClick={toggleNewCategory}>Add</Button>
        </Wrapper>
    )
}

export default NewCategory;