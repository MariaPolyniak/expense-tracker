import styled from "styled-components";

const Input = styled.input`
      width: 80%;
      margin-left: 10px;
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

const AddNewCategory = () => {

    return (
        <Wrapper>
            <Input placeholder={"Add a new category"} />
            <Button>Add</Button>
        </Wrapper>
    )
}

export default AddNewCategory;