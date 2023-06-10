import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const FooterMain = styled.div`
    width: 100vw;
    height: 35em;

    @media screen and (max-width: 950px) {

        height: 40em;
    }

    @media screen and (max-width: 768px) {

        height: 35em;
    }

    @media screen and (max-width: 550px) {

        height: 32em;
    }

    @media screen and (max-width: 425px) {

        height: 27em;
    }
`

export const FooterContainer = styled.div`
    width: 100vw;
    height: 100%;
    background: #DDD8FB;
    display: flex;

    align-items: flex-start;

    @media screen and (max-width: 950px) {
        flex-direction: column;
    }

`

export const FooterUpLeft = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-start;
    
    margin-top: 100px;
    margin-left: 50px;

    gap: 50px;

    @media screen and (max-width: 950px) {

        gap: 80px;
        margin-top: 80px;
        margin-left: 40px;
    }

    @media screen and (max-width: 550px) {
        margin-top: 70px;
        gap: 45px;
    }

    @media screen and (max-width: 425px) {
        margin-top: 50px;
        margin-left: 30px;
    }

    @media screen and (max-width: 375px) {

        gap: 20px;
    }

`

export const List = styled.div`

    font-family: 'Jost';

    ul{
        list-style: none;
    }

    h3 {
        font-size: 26px;
        font-weight: 600;
    }

    li {
        font-size: 20px;
        line-height: 30px;
        font-weight: 300;
        cursor: pointer;
    }
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1280px) {

        h3 {
            font-size: 22px;
        }

        li {
            font-size: 15px;
            line-height: 25px;
        }
    }

    @media screen and (max-width: 950px) {

        h3 {

            font-size: 26px;
        }

        li {

            font-size: 18px;
        }
    }

    @media screen and (max-width: 550px) {

        h3 {

            font-size: 20px;
        }

        li {

            font-size: 14px;
        }
    }

    @media screen and (max-width: 425px ) {
        
        h3 {

            font-size: 18px;
        }

        li {

            font-size: 12px;
        }
    }

    @media screen and (max-width: 375px) {

        h3 {

            font-size: 16px;
        }

        li {

            font-size: 10px;
        }
    }

    @media screen and (max-width: 320px) {

        h3 { 
            font-size: 14px;
        }

        li {

            font-size: 9px;
        }
    }
`

export const FooterUpRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: end;
    flex-direction: column;
    margin: 100px 60px 0 0;

    @media screen and (max-width: 950px){
        width: auto;
        justify-content: flex-start;
        align-items: start;
        margin-top: 65px;
        margin-left: 40px;

    }

    @media screen and (max-width: 550px) {

        margin-top: 40px;
    }

    @media screen and (max-width: 425px) {

        margin-left: 30px;
    }

`

export const FooterButtons = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: end;
    h3 {
        font-size: 26px;
        font-weight: 600;
        font-family: 'Jost';
    }

    img {
        width: 200px;
        padding: 10px 0;
        cursor: pointer;
    }

    @media screen and (max-width: 1280px) {

        h3 {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 950px) {

        align-items: start;

        h3 {

            font-size: 26px;
        }

        img {
            width: 300px;
            
        }
    }

    @media screen and (max-width: 768px) {

        img {
            width: 200px;
        }
    }

    @media screen and (max-width: 550px) {

        h3 {

            font-size: 20px;
        }

        img {

            width: 150px;
        }
    }

    @media screen and (max-width: 425px) {

        h3 {

            font-size: 18px;
        }

        img {

            width: 140px;
        }
    }

    @media screen and (max-width: 375px) {

        h3 {

            font-size: 16px;
        }

        img {

            width: 110px;
        }
    }

    @media screen and (max-width: 320px) {

        h3 { 
            font-size: 14px;
        }

        img {

            width: 90px;
        }
    }
`

export const FooterApps = styled.div`
    display: flex;
    justify-content: flex-end;

    margin-top: 15px;
    font-size: 35px;

    gap: 15px;
    cursor: pointer;

    @media screen and (max-width: 950px) { 
        justify-content: flex-start;
    }

    @media screen and (max-width: 768px) {

        font-size: 30px;
    }

    @media screen and (max-width: 550px) {

        font-size: 24px;
    }
`

export const Button = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 950px) {
        
        flex-direction: row;
        align-items: start;

        gap: 50px;
    }

    @media screen and (max-width: 768px) {

        gap: 25px;
    }
`
