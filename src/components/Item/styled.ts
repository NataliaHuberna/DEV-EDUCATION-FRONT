import styled from "styled-components";
import {COLORS} from "../../constants/colors";

type TDescription = {
  dark: boolean
};

export const StDescription = styled.div<TDescription>`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 10px;
  ${({dark}) => dark ? `
    color: ${COLORS.mainText};   
  ` : `
    color: ${COLORS.white};  
  `}
`;

type TItem = {
  checked: boolean
};

export const StItem = styled.div<TItem>`  
  display: flex;
  align-items: center;
  width: 500px;
  min-height: 50px;
  border: 1px solid ${COLORS.black};
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  ${({checked}) => checked ? `
    background-color: ${COLORS.darkgray};
    ${StDescription}{
      text-decoration: line-through;
    }
  ` : `
     background-color:#eda82a;
  `};
`;

export const StInputCheckbox = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

type TButton = {
  dark: boolean
};

export const Button = styled.button<TButton>`
  outline: none;
  border: none;
  background-color: ${COLORS.crimson};
  cursor: pointer;
  height: 25px;
  border-radius: 5px;
  padding: 0 10px;
  ${({dark}) => dark ? `
    color: ${COLORS.mainText};   
  ` : `
    color: ${COLORS.white};  
  `}
`;
