import styled, {keyframes} from "styled-components";
import {COLORS} from "src/constants/colors";

const fadeIn = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

type TStNotification = {
    isSuccess: boolean
};

export const StNotification = styled.div<TStNotification>`
  background: ${({isSuccess}) => isSuccess ? COLORS.blue : COLORS.errorNotification};
  text-align: center;
  position: absolute;
  top: 50%;
  left: 20px;
  margin: 0 auto;
  border: 1px solid ${COLORS.backgroundLoader};
  padding: 5px;
  height: 50px;
  width: 400px;
  font-size: 18px;
  border-radius: 8px;
  box-shadow: 0 10px 14px -7px ${COLORS.blue};
  transform: translateX(-20px);
  opacity: 0;
  animation: ${fadeIn} .5s ease-in-out forwards;
  z-index: 1;
`;
