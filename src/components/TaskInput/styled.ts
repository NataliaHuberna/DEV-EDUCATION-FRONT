import styled from "styled-components";
import {COLORS} from '../../constants/colors';

export const StDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  min-height: 40px;
  background-color: ${COLORS.darkgoldenrod};
  border-radius: 5px;
  padding: 10px;
  margin-top: 40px;
`;

type TStButton = {
    isDisabled: boolean,
    dark: boolean
};

export const StButton = styled.button<TStButton>`  
    width: 15%;
    background-color: ${COLORS.blue};
    outline: none;
    border: none;
    border-radius: 5px;
    height: 25px;
    cursor: pointer;
    ${({isDisabled}) => isDisabled
        ?
        `cursor: not-allowed;
           opacity: 0.5;`
        : `cursor: pointer;
             opacity: 1;`};
    ${({dark}) => dark ? `
    color: ${COLORS.mainText};   
    ` : `
    color: ${COLORS.white};  
    `}
`;

export const StInput = styled.input`
  width: 75%;
  height: 25px;
  border-radius: 5px;
  border-color: transparent;
  padding: 0 10px
`;
