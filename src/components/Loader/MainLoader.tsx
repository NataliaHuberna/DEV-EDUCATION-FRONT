import React from 'react';
import {StyledMainDiv} from './styled';
import Loader from "./Loader";

const MainLoader: React.FC = () => (
    <StyledMainDiv>
        <Loader />
    </StyledMainDiv>
);

export default MainLoader;
