import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { device }  from '../../../styles/device.breakpoints';

const StyledNewsList:React.FC = styled.div`
    padding-top: 30px;

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-top: 0;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;

        @media ${device.tablet} {
            position: static;
            top: 0;
            left: auto;
            right: auto;
        }

        background-color: ${COLORS.orange};
        .logo {
            border: 2px solid ${COLORS.white};
            width: 18px;
            height: 18px;
            background-image: url('/images/y18.gif');
            background-repeat: no-repeat;
            background-position: center center;
            display: block;

            &-link {
                padding: 4px;                
            }
        }

        .links {
            display: flex;
        }

        .link {
            padding: 5px 6px;
            position: relative;

            &:last-child::before {
                content: ' | ';
                position: absolute;
                left: 0px;
                top: 10px;
                font-size: .6rem;
                color: #333;
            }

            button {
                font-size: 1rem;
                color: ${COLORS.white};
                border: none;
                background: ${COLORS.orange};
                cursor: pointer;

                @media ${device.tablet} {
                    font-size: .9rem;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .newsitems {}

    .newsitem {
        display: flex;
        flex-wrap: wrap;
        line-height: 1.2rem;
        padding: 8px 10px 8px 10px;
        font-size: 1rem;

        > div {
            margin-right: 10px;
        }

        &:nth-child(even) {
            background-color: #d8d8d5;
        }
    }

    .comments {
        text-align: right;
        margin-right: 15px; 
        font-size: .8rem;
        color: #333;

        @media ${device.laptop} {
            flex-basis: auto;
            order: 0;
            width: 3rem;
        }
    }

    .upvotes {
        text-align: right;
        margin-right: 15px;
        position: relative;
        padding-right: 12px;
        font-size: .8rem;
        color: #333;
 
        @media ${device.laptop} {
            flex-basis: auto;
            order: 1;
            width: 3rem;
        }

        .icon {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            background: none;
            border: none;
            text-indent: -99999px;

            &:focus{
                outline:none;
            }

            &::after {
                content: '';
                display: block;
                width: 0px;
                height: 0px;
                border: 4px solid transparent;
                border-bottom: 6px solid #666;
                position: absolute;
                right: 0;
                top: 3px;
            }
        }
    }

    .title {
        flex-basis: 100%;
        font-size: .9rem;
        margin-bottom: 5px;

        @media ${device.laptop} {
            flex-basis: auto;
            order: 2;
        }
    }

    .additional-info {
        flex-basis: 100%;
        font-size: .7rem;
        color: #666;
        margin-bottom: 5px;

        @media ${device.tablet} {
            flex-basis: auto;
        }

        @media ${device.laptop} {
            flex-basis: auto;
            order: 3;
        }
    }

    .hide-info {
        @media ${device.laptop} {
            flex-basis: auto;
            order: 4;
        }

        .hide-link {
            float: right;
            color: #333;
            cursor: pointer;
            background: transparent;
            border: none;

            &:hover {
                color: #000;
                text-decoration: underline;
            }

            &:focus {
                outline: none;
            }
        }
    }

    .fetch-more-cta {
        margin: 1rem;
        color: ${COLORS.orange};
        background: none;
        border: none;
        font-size: 1rem;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    .footer {
        border-top: 2px solid ${COLORS.orange};
        text-align: center;
        font-size: .8rem;
        color: #666;
        padding: 1rem 0;

        @media ${device.tablet} {
           margin-top: auto;
        }
    }

    .no-results {
        padding: 10px;
        text-align: center;
        color: ${COLORS.orange};
    }
`;

export default StyledNewsList;