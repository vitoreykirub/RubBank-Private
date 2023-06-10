import styled from "styled-components";

export const ScreenMain = styled.div`
    min-width: 100vw;
    display: flex;
    height: 44em;

    @media screen and (max-width: 1024px) {
        height: 42em;
    }

    @media screen and (max-width: 820px) {

        height: 52em;
    }

    @media screen and (max-width: 768px) {

        height: 48em;
    }

    @media screen and (max-width: 425px) {

        height: 45em;
    }
    @media screen and (max-width: 375px) {

        margin-top: 5em;
    }
`

export const ScreenContainer = styled.div`
    width: 100vw;
    height: 37em;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 820px) {
        flex-direction: column-reverse;

        align-items: center;
        text-align: center;
        justify-content: center;
        margin: 0 auto;
    }
`

export const ScreenLeft = styled.div`
    display: flex;
    width: 50%;
    max-height: 100%;
    flex-direction: column;

    align-items: center;

    left: 0;
    top: 0;

    margin: 80px;

    @media screen and (max-width: 1440px) {
        margin: 60px;
    }

    @media screen and (max-width: 1024px) {
        margin: 35px;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        align-items: center;
        margin: 0;
    }

    @media screen and (max-width: 425px) {
        margin: 15px;
    }

    @media screen and (max-width: 375px) {
        margin: 5px;
    }


`

export const ScreenImage = styled.div`

    img {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 50px;
        width: 800px;
    }

    @media screen and (max-width: 1440px) {
        img {
            width: 550px;
        }
    }

    @media screen and (max-width: 1024px) {
        
        img {
            width: 400px;
        }
    }

    @media screen and (max-width: 820px) {

        img {
            width: 480px;
        }
    }

    @media screen and (max-width: 623px) {

        img {
            width: 350px;
        }
    }

    @media screen and (max-width: 425px) {
        img {
            width: 340px;
        }
    }

    @media screen and (max-width: 375px) {
        img {
            width: 300px;
        }
    }

    @media screen and (max-width: 320px) {
        img {
            width: 250px;
        }
    }
`

export const ScreenRight = styled.div`
    display: flex;
    width: 80%;

    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    margin: 0 auto;

    @media screen and (max-width: 375px){
        margin: 0 auto;
    } 

    @media screen and (max-width: 320px){
        margin: 0 auto;
    } 

`

export const ScreenTitle = styled.div`
    
    display: flex;
    width: 80%;
    
    text-align: center;

    margin-bottom: 40px;

    h2 {
        font-family: 'Jost';
        font-size: 74px;
    }

    @media screen and (max-width: 1440px) {
        h2 {
            font-size: 60px;
        }
    }

    @media screen and (max-width: 1280px) {

        h2 {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 1024px) {
        h2 {
            font-size: 46px;
        }
    }

    @media screen and (max-width: 980px) {

        h2 {
            font-size: 38px;
        }
    }

    @media screen and (max-width: 820px) {

        h2 {
            font-size: 58px;
        }
    }

    @media screen and (max-width: 425px) {

        width: 350px;
        margin-bottom: 10px;
        h2 {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 375px) {

        width: 310px;

        h2 {
            font-size: 28px;
        }
    }

    @media screen and (max-width: 320px){

        width: 100%;
        h2 {
            font-size: 26px;
        }
    }
`

export const ScreenSubtitle = styled.div`

    display: flex;

    margin-bottom: 5em;
    width: 85%;
    
    h1 {
        font-family: 'Jost';
        font-size: 32px;
        font-weight: 300;
    }

    @media screen and (max-width: 1440px) {
        margin-bottom: 3em;
        h1 {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 1024px) {

        width: 90%;
        margin-bottom: 70px;

        h1 {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 980px) {
        width: 93%;
        h1 {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 820px) {
        margin-bottom: 40px;

        h1 {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 425px) {

        width: 100%;

        h1 {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 375px) {
        width: 100%;

        h1 {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 375px) {
        width: 100%;

        h1 {
            font-size: 15px;
        }
    }
`

export const ScreenButton = styled.div`
    display: center;
    align-items: center;
    text-align: center;

    margin-top: 2em;

    @media screen and (max-width: 1024px) {
        margin-top: 2em;
    }

    @media screen and (max-width: 820px) {
        margin-top: 1em;
        margin-bottom: 2em;
    }

    @media screen and (max-width: 375em) {
        margin-top: 0;
    }
`

export const Button = styled.button`
    width: 350px;
    height: 80px;

    font-size: 26px;

    color: white;

    background: #5F5CD6;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 1024px) {
        font-size: 22px;

        width: 300px;
        height: 70px;
    }

    @media screen and (max-width: 375px) {
        font-size: 20px;

        width: 250px;
        height: 60px;
    }
`