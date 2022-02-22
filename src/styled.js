import styled from "styled-components";
import {COLORS} from "./constants/colors";

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

export const StDivHeader = styled.div`
  width: 100%;
  border-top: 10px solid  ${COLORS.grey};
  border-bottom: 10px solid  ${COLORS.grey};
`;

export const StH1 = styled.h1`
  text-align: center;
  margin: 10px auto;
  font-size: 50px;
  font-weight: 800;
`;

export const StButton = styled.div`
  position: absolute;
  width: 200px;
  right: 30px;
  top: 8px;
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
