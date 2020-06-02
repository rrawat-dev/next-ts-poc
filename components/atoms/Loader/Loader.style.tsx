import styled, {css} from 'styled-components'

import {COLORS} from '../../../styles/variables';

interface Props {
    overlay?:boolean,
    component?:boolean
};

const StyledLoader:React.FC<Props> = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    z-index: 1;
    background: none;

    ${props => props.overlay && css`
        background: rgba(0, 0, 0, .25);
    `}

    ${props => props.component && css`
        position: absolute;
    `}

    > div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${COLORS.orange};
        border-radius: 50%;
        animation: LoaderAnimation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${COLORS.orange} transparent transparent transparent;
        left: 50%;
        top: 50%;

        &:nth-child(1) {
          animation-delay: -0.45s;
        }

        &:nth-child(2) {
          animation-delay: -0.3s;
        }

        &:nth-child(3) {
          animation-delay: -0.15s;
        }
    }

    @keyframes LoaderAnimation {
        0% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
        }

        100% {
            transform: translateX(-50%) translateY(-50%) rotate(360deg);
        }
    }  

`;

export default StyledLoader;