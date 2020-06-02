import React from 'react';
import StyledLoader from './Loader.style';

interface Props {
    overlay?:boolean,
    component?:boolean
};

const Loader:React.FC<Props> = (props) => {
    return (
        <StyledLoader {...props}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledLoader>
    );
}

export default Loader;