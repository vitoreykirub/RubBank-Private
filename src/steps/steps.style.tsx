import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StepsMain = styled.div`
    width: 100vw;
    height: 65em;
    display: flex;

    @media screen and (max-width: 768px) {

        margin-top: 8em;
    }

    @media screen and (max-width: 425px) {
        margin-top: 2em;
    }

    @media screen and (max-width: 375px) {
        margin-top: -4em;
    }

    @media screen and (max-width: 320px) {
        margin-top: -6em;
    }

    .icon1 {
        color: white;
        background-color: #000000;
        border-color: #000000;
    }

    @media screen and (max-width: 1440px) {
        height: 55em;
    }

    @media screen and (max-width: 1280px) {
        height: 60em;
    }

    @media screen and (max-width: 1024px) {

        height: 64em;
    }

    @media screen and (max-width: 820px) {

        height: 70em;
    }

    @media screen and (max-width: 768px) {
        height: 67em;
    }

    @media screen and (max-width: 540px) {
        height: 60em;
    }
    
    @media screen and (max-width: 425px) {
        height: 48em;
    }

    @media screen and (max-width: 320px) {
        height: 42em;
    }
`

export const StepsContainer = styled.div`
    width: 100vw;
    
    display: flex;
    flex-direction: column;
`

export const StepsTitle = styled.div`
    
    display: flex;
    margin: 0 auto;
    text-align: center;

    h2 {
        font-size: 74px;
        font-weight: 600;
        font-family: 'Jost';
    }

    @media screen and (max-width: 1280px) {

        h2 {
            font-size: 72px;
        }
    }

    @media screen and (max-width: 1024px) {
        
        h2 {
            font-size: 70px;
        }
    }

    @media screen and (max-width: 820px) {

        h2 {
            font-size: 70px;
        }
    }

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 58px;
        }
    }

    @media screen and (max-width: 425px) {

        h2 { 
            font-size: 38px;
        }
    }

    @media screen and (max-width: 375px) {

        h2 {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 320px){

        h2 {
            font-size: 34px;
        }
    }
`

export const StepsSubtitle = styled.div`

    display: flex;
    margin: 10px auto;
    text-align: center;
    width: 50%;

    h1 {
        font-size: 32px;
        font-weight: 200;
        font-family: 'Jost';
    }

    @media screen and (max-width: 1440px) {

        width: 60%;
        h1 {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 1280px) {

        width: 87%;

        h1 {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 768px) {

        width: 80%;
        h1 {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 425px) {

        width: 80%;

        h1 {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 375px) {

        width: 75%;

        h1 {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 325px) {
        width: 80%;

    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    margin: 100px auto;

    @media screen and (max-width: 1280px) {
        margin: 50px auto;
    }

    @media screen and (max-width: 540px) {
        margin: 20px auto;
    }
    
`

export const Step = styled.div`
    width: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 15px;
    gap: 30px;

    @media screen and (max-width: 1440px) {
        margin-left: 50px;
    }
    
    @media screen and (max-width: 1280px) {
        margin-left: 20px;
        display: grid;
        grid-template-columns: 150px 140px;
        gap: 30px;
    }

    @media screen and (max-width: 820px) {

        grid-template-columns: 240px 190px;
    }

    @media screen and (max-width: 540px) {
        
        grid-template-columns: 190px 145px;
    }

    @media screen and (max-width: 425px) {

        grid-template-columns: 150px 125px;
    }

    @media screen and (max-width: 375px) {

        grid-template-columns: 115px 130px;
    }

    @media screen and (max-width: 320px) {

        grid-template-columns: 115px 100px;
    }

    
`

export const Boxes = styled.div`

    width: 13em;
    height: 20em;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    background: #F8EEEE;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    h2 {

        width: 92%;
        height: 50%;
        font-size: 26px;
        margin: 15px auto;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text-align: center;
    }

    @media screen and (max-width: 1440px) {

        width: 11em;
        height: 17em;

        h2 {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1280px) {

        width: 10em;
        height: 15em;

        h2 {

            width: 80%;
            font-size: 16px;
        }
    }

    @media screen and (max-width: 820px) {

        width: 12em;
        height: 18em;

        h2 {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 540px) {

        width: 9em;
        height: 14em;

        h2 {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 425px) {

        width: 8em;
        height: 13em;

        h2 {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 320px) {

        width: 6em;
        height: 10em;

        h2 {
            margin-top: 6px;
            font-size: 11px;
        }
    }
    
`

export const Image = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    margin: 0 52px;
    overflow: hidden;

    img {

        width: 900px;
        max-width: 100%;

        height: 100%;
    }

    @media screen and (max-width: 1440px) {

        img {

            width: 575px;
        }
    }

    @media screen and (max-width: 1280px) {

        img {

            width: 400px;
        }
    }

    @media screen and (max-width: 1280px) {

        img {
            width: 600px;
        }
    }

    @media screen and (max-width: 820px) {
        display: none;
    }
    
`

export const Icon = styled(FontAwesomeIcon)`
    display: flex;
    align-items: center;
    margin: 20px auto;

    font-size: 25px;
    font-weight: 600;
    padding: 17px 22px 17px 22px ;
    background: white;

    border: 6px solid;
    border-radius: 40px;

    @media screen and (max-width: 540px) {

        font-size: 18px;
        padding: 12px 16px 12px 16px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 375px) {
        
        font-size: 14px;
        padding: 8px 10px 8px 10px;
        margin-bottom: 14px;
    }

    @media screen and (max-width: 320px) {

        font-size: 12px;
        padding: 6px 8px 6px 8px;
        margin-bottom: 10px;
    }
`