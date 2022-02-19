import styled from "styled-components";
import {COLORS} from "src/constants/colors";

export const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right, #a2e9e9, #e9bd5a);
  width: 100%;
  height: 100vh;
  position: relative;
  ${({dark}) => dark ? `
    background: ${COLORS.mainText};
    color: ${COLORS.endGradient};   
  ` : `
    background: linear-gradient(to right, #a2e9e9, #e9bd5a);
    color: ${COLORS.mainText};  
  `}
`;

export const StH2 = styled.h2`
  text-align: center;
  margin: 20px auto;
  font-size: 30px;
  font-weight: 800;
`;

export const StButton = styled.div`
  position: absolute;
  width: 200px;
  right: 50px;
  bottom: 50px;
  border-radius: 50%;
  ${({dark}) => dark ? `
    background-color: ${COLORS.endGradient};
    color: ${COLORS.backgroundLoader};   
  ` : `
    background-color: ${COLORS.mainText};
    color: ${COLORS.white};  
  `}
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  padding: 2em 0;
`;
