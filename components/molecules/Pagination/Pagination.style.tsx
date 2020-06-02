import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';

const StyledPagination:React.FC = styled.div`
    margin: 1rem auto;
    width: 200px;
    text-align: center;

    .pagination-info {
        font-size: .8rem;
        color: ${COLORS.orange};
    }

    .pagination-cta {
        font-size: .8rem;
        padding: .4rem;
        background: #d8d8d5;
        border: 1px solid #666;
        color: #333;

        &:disabled {
            color: #999;
        }

        &:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
`;

export default StyledPagination;