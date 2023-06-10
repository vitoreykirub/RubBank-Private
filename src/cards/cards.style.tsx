import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CardMain = styled.div`
    width: 100vw;
    display: flex;
    height: 70em;

    .card__icon {
        display: flex;
        margin: 15px auto;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        padding: 18px;

        border: 1px solid rgba(0, 0, 0, 0.35);
        box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
        border-radius: 35px;

        @media screen and (max-width: 1440px) {
            font-size: 30px;
        }

        @media screen and (max-width: 1024px) {
            font-size: 22px;
        }

        @media screen and (max-width: 545px) {
            font-size: 18px;
            padding: 16px;
        }

        @media screen and (max-width: 440px) {
            font-size: 14px;
            padding: 14px;
        }
    }

    .card{
        width: 500px;
        height: 500px;

        background: linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%);
        box-shadow: 8px 6px 4px rgba(0, 0, 0, 0.25);
        border-radius: 130px;

        @media screen and (max-width: 1440px){

            width: 400px;
            height: 400px;
        }

        @media screen and (max-width: 1024px) {
            width: 350px;
            height: 380px;
        }

        @media screen and (max-width: 820px) {
            width: 450px;
            height: 450px;
        }

        @media screen and (max-width: 545px) {
            width: 350px;
            height: 350px;
        }

        @media screen and (max-width: 440px) {
            width: 320px;
            height: 320px;

            border-radius: 110px;
        }

        @media screen and (max-width: 375px) {
            width: 280px;
            height: 280px;
        }

        @media screen and (max-width: 320px) {
            width: 240px;
            height: 300px;
        }
    }

    .card h2 {
        width: 80%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 56px;

        @media screen and (max-width: 1440px) {
            font-size: 42px;
        }

        @media screen and (max-width: 1024px) {
            width: 80%;
            font-size: 36px;
        }

        @media screen and (max-width: 996px) {
            font-size: 30px;
        }

        @media screen and (max-width: 820px) {

            width: 70%;
            font-size: 42px;
        }

        @media screen and (max-width: 545px) {

            width: 70%;
            font-size: 34px;
        }

        @media screen and (max-width: 440px) {
            width: 75%;
            font-size: 34px;
        }

        @media screen and (max-width: 375px) {
            width: 80%;
            font-size: 26px;
        }

    }

    .card h1 {

        width: 80%;
        display: flex;
        text-align: center;

        margin: 0 auto;

        font-family: 'Jost';
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 30px;
        text-align: center;

        @media screen and (max-width: 1440px) {
            width: 85%;
            font-size: 24px;
        }

        @media screen and (max-width: 1280px) {

            font-size: 20px;
        }

        @media screen and (max-width: 1024px) {
            width: 85%;
            font-size: 18px;
        }

        @media screen and (max-width: 996px) {
            font-size: 16px;
        }

        @media screen and (max-width: 820px) {
            width: 80%;
            font-size: 28px;
        }

        @media screen and (max-width: 545px) {
            width: 75%;
            font-size: 16px;
        }

        @media screen and (max-width: 440px) {
            width: 80%;
            font-size: 14px;
        }

        @media screen and (max-width: 375px) {
            width: 74%;
            font-size: 12px;
        }

        @media screen and (max-width: 320px) {
            width: 85%;
            font-size: 11px;
        }
    }

    @media screen and (max-width: 1440px) {
        height: 63em;
    }

    @media screen and (max-width: 1024px) {
        height: 55em;
    }

    @media screen and (max-width: 820px) {
        height: 130em;
    }

    @media screen and (max-width: 720px) {
        height: 140em;
    }

    @media screen and (max-width: 545px) {
        height: 120em;
    }

    @media screen and (max-width: 440px) {
        height: 110em;
    }

    @media screen and (max-width: 425px) {

        height: 100em;
    }
    
    @media screen and (max-width: 375px) {
        height: 75em;
    }
    
`

export const CardContainer = styled.div`

    width: 100vw;
    height: 37em;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px 0 0 0;

`

export const CardTitle = styled.div`

    margin: 50px 30px 45px;
    text-align: center;

    h2 {
        font-size: 80px;
        font-family: 'Jost';
        font-weight: 800;
    }

    @media screen and (max-width: 1440px) {
        
        h2 {
            font-size: 82px;
        }
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

    @media screen and (max-width: 440px) {
         
        h2 {
            font-size: 58px;
        }
    }

    @media screen and (max-width: 375px) {

        margin: 30px;
        width: 350px;

        h2 {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 320px){

        width: 90%;
        h2 {
            font-size: 28px;
        }
    }
 `

export const CardSubtitle = styled.div`

    width: 50%;
    text-align: center;
    margin: 0 20px;

    h1 {
        font-size: 32px;
        font-family: 'Jost';
        font-weight: 200;
    }

    @media screen and (max-width: 1440px) {
        
        h1 {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 1280px) {

        h1 {
            font-size: 26px
        }
    }
    
    @media screen and (max-width: 1024px) {
        
        width: 70%;

        h1 {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 820px) {
        width: 80%;

        h1 {
            font-size: 24px;
        }
    } 

    @media screen and (max-width: 545px) {
        width: 80%;

        h1 {
            font-size: 20px;
        }
    } 

    @media screen and (max-width: 440px) {
        width: 82%;
        h1 {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 375px) {
        width: 87%;

        h1 {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 320px) {

        h1 {
            font-size: 13px;
        }
    }
`

export const Cards = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 100px;
    width: 90vw;
    gap: 30px;

    font-family: 'Jost';

    @media screen and (max-width: 820px){
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 545px) {
        margin: 70px;
    }
`

export const Icon1 = styled(FontAwesomeIcon)`
    background: radial-gradient(36.79% 36.79% at 49.06% 50.94%, rgba(182, 132, 246, 0.67) 0%, rgba(112, 34, 210, 0.67) 98.96%);
    margin: 0 auto;
`

export const Icon2 = styled(FontAwesomeIcon)`
    background: radial-gradient(50.94% 50.94% at 49.06% 50.94%, #FBFDA4 0%, #FBFF48 99.99%);
    margin: 0 auto;
`

export const Icon3 = styled(FontAwesomeIcon)`
    background: radial-gradient(50% 50% at 50% 50%, #B7BEFE 0%, #3246FB 100%);
    margin: 0 auto;
`

export const Card1 = styled.div`

    margin: 0 auto; 

    h2 {
        margin: 30px auto;
    }

    @media screen and (max-width: 545px) {
        h2 {
            margin: 15px auto;
        }
    }
`

export const Card2 = styled.div`

    margin: 0 auto;
    h2 {
        margin: 15px auto 20px;
    }
    
`

export const Card3 = styled.div`

    margin: 0 auto;


    h2{
        margin: 15px auto 20px;
    }
    
`