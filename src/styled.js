import styled from "styled-components";
import {COLORS} from "./constants/colors";

export const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StDivHeader = styled.div`
  width: 100%;
  border-top: 10px solid  ${COLORS.grey};
  border-bottom: 10px solid  ${COLORS.grey};
`;

export const StH1 = styled.h1`
  text-align: center;
  margin: 10px auto;
`;