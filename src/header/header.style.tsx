import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const HeaderArea = styled.div`
    width: 100vw;
    height: 100%;
`

export const HeaderMain = styled.div`
    width: 100vw;
    height: 6em;
    position: fixed;
    overflow: hidden;
    background: #DDD8FB;
    z-index: 1;
    border-bottom: 2px solid;
`;

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const HeaderLeft = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 40px;

    @media screen and (max-width: 950px){
        width: 100vw;
        display: flex;
        justify-content: space-between;
    }
`;

export const List = styled(FontAwesomeIcon)`
    display: none;

    @media screen and (max-width: 950px) {

        font-size: 30px;
        display: block;
        margin: 35px 20px;
    }
    
`

export const HeaderLogo = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 40px;
    align-items: center;
    justify-content: space-between;

    img {
        width: 85px;
        height: 85px;
        position: relative;
        left: 15px;
    };

    p {
        font: 'Jost';
        font-size: 24px;
    };

    @media screen and (max-width: 950px){

        img {
            width: 60px;
            height: 60px;
            position: relative;
            left: 10px;
            bottom: 2px;
        };
    
        p {

            font: 'Jost';
            font-size: 24px;
        };
    }
`

export const Mark =  styled(FontAwesomeIcon)`
    display: none;

    @media screen and (max-width: 950px){

        display: block;
        position: relative;
        top: 1;
        margin-bottom: 15%;
        margin-left: 70%;

    }
`

export const HeaderItemMenu = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Jost';
    font-weight: 400;
    font-size: 14px;

    z-index: 2;

    justify-content: flex-start; 

    a {
        cursor: pointer;
        margin-right: 25px;
        font-size: 16px;
    }

    @media screen and (max-width: 950px) {
        
        display: none;
    }
`

export const HeaderRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;


    @media screen and (max-width: 950px){
        display: none;
    }
`

export const LogoLanguage = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 16px;
    }

    @media screen and (max-width: 950px){
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        margin-top: 50px;

        p {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 320px) {

        p {
            font-size: 24px;
        }
    }
`

export const Globe = styled(FontAwesomeIcon)`
    margin-right: 5px;
    align-items: center;
`

export const HeaderStart = styled.div`

    color: white;
    display: flex;
    justify-content: space-around;
    width: 150px;
    height: 55px;

    align-items: center;

    background: #5F5CD6;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    margin-left: 10px;
`

export const HeaderNavBar = styled.div`

    border-top: 2px solid;
    display: none;
    width: 100vw;
    height: 113%;

    @media screen and (max-width: 950px) {
        display: flex;
        position: fixed;
        overflow: hidden;
        margin: 5.9em auto;

        z-index: 1;
        top: 0;
        right: 0;
        gap: 45px;

        background-color:#DDD8FB;

        a {
            cursor: pointer;
            margin-right: 25px;
            font-size: 32px
        }
    }

`

export const HeaderNavBarItem = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        align-items: start;
        margin-top: -15em;

        font-family: 'Jost';
        font-weight: 400;
        font-size: 14px;

        z-index: 1;

        background-color:#DDD8FB;
        gap: 45px;
        a {
            cursor: pointer;
            margin-right: 25px;
            font-size: 32px;
        }

        @media screen and (max-width: 650px) {
            margin-top: -25em;

            gap: 30px;
            a {
                font-size: 24px;
            }
        }

        @media screen and (max-width: 320px) {

            a {
                font-size: 18px;
            }
        }
`

export const Button = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    width: 450px;
    height: 100px;
    
    align-items: center;

    background: #5F5CD6;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 15px;

    margin: 50px auto;

    

    a {
        margin: 0 auto;
        font-size: 48px;
        font-weight: 600;
    }

    justify-content: center;

    @media screen and (max-width: 650px) {

        width: 300px;

        a{
            font-size: 32px;
        }
    }

    @media screen and (max-width: 320px) {

        width: 220px;
        height: 80px;

        margin-top: 0;
        a {
            font-size: 24px;
        }
    }
    
`




