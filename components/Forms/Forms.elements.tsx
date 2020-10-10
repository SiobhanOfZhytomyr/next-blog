import styled from 'styled-components'


export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
margin: 100px auto;
width: 600px;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
position: relative;
border-radius: 10px;
height: 200px;
`

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #4B59F7;
  white-space: nowrap;
  padding: 12px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #0467FB;
  }
`

export const FormHeader = styled.h1`
    font-size: 1rem;
    text-align: start;
    width: 80%;
    margin-bottom: 1rem;
    color: #242424;
  }
`