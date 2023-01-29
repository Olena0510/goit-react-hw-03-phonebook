import styled from "@emotion/styled";

export const Wrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap: 10px;
margin-top: 30px;
margin-left: auto;
    margin-right: auto;
    width: 400px;
  padding: 15px;
  margin-bottom: 20px;
   box-shadow: 0 4px 8px 0 rgba(122, 0, 256, 0.5);
   border-radius: 5px;
`;

export const Title = styled.h1`
font-size: 36px;
font-weight: 700;
text-align: center;
color: #542635
`;

export const LabelForm = styled.label`
 display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 500;
`;


export const InputForm = styled.input`
    width: 300px;
    padding: 4px;
    margin-bottom:20px;
    border: 2px solid #873c55;
border-radius: 5px; 
    font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 122, 0.5);
`;

export const FormBtn = styled.button`
        width: 100px;
        padding: 5px 0;
        cursor: pointer;
        border: 2px solid #542635;
        background-color: transparent;
        border-radius: 5px;
        :hover, :focus {
            background-color: #ea94b0;
            color: white;
`;