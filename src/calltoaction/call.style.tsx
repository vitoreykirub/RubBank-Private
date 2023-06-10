import styled from "styled-components";

export const CallMain = styled.div`
    width: 100vw;
    height: 35em;

    @media screen and (max-width: 1440px) {

        height: 25em;
    }

    @media screen and (max-width: 425px) {

        height: 22em;
    }

    @media screen and (max-width: 375px) {

        height: 20em;
    }

    @media screen and (max-width: 320px) {

        height: 20em;
    }
`

export const CallContainer = styled.div`
    width: 90%;
    height: 26em;

    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin: 0 auto;

    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 35px;
    background-color: #fafafa;

    @media screen and (max-width: 1440px) {

        height: 23em;
    }

    @media screen and (max-width: 1280px) {

        height: 20em;
    }

    @media screen and (max-width: 1024px) {

        height: 18em;
    }

    @media screen and (max-width: 920px) {
        height: 15em;
    }

    @media screen and (max-width: 768px) {
        height: 17em;
    }

    @media screen and (max-width: 425px) {
        height: 16em;
    }

    @media screen and (max-width: 375px) {
        height: 14em;
    }

    @media screen and (max-width: 320px) {
        height: 12em;
    }
`

export const CallLeft = styled.div`
    width: 45%;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {

        width: 450px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 25px;
        margin-right: 100px;
    }

    @media screen and (max-width: 1440px) {

        img {
            width: 430px;
            margin-right: 0;
        }
    }

    @media screen and (max-width: 1280px) {

        img {
            width: 390px;
        }
    }

    @media screen and (max-width: 1024px) {

        img {
            width: 350px;
        }
    }

    @media screen and (max-width: 920px) {

        img {
            width: 300px;
        }
    }

    @media screen and (max-width: 768px) {

        display: none;
    }
`

export const CallRight = styled.div`
    width: 55%;

    display: flex;
    margin: 0 auto;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 768px) {

        width: 100%;
    }
`

export const CallTitle = styled.div`
    margin-bottom: 5px;

    h1 {
        font-family: 'Jost', sans-serif;
        font-weight: 600;
        font-size: 72px;
    }

    @media screen and (max-width: 1440px) {

        h1 {
            font-size: 60px
        }
    }

    @media screen and (max-width: 1280px) {

        h1 {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 1024px) {

        h1 {
            font-size: 42px;
        }
    }

    @media screen and (max-width: 920px) {

        h1 {
            font-size: 38px
        }
    }

    @media screen and (max-width: 768px) {

        margin-top: -20px;
        h1 {
            font-size: 56px;
        }
    }

    @media screen and (max-width: 658px) {

        h1 {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 558px) {

        h1 {
            font-size: 44px;
        }
    }

    @media screen and (max-width: 508px) {

        h1 {
            font-size: 38px;
        }
    }

    @media screen and (max-width: 425px) {

        margin-bottom: 10px;

        h1 {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 375px) {

        h1 {
            font-size: 28px;
        }
    }

    @media screen and (max-width: 320px) {

        h1 {
            font-size: 23px;
        }
    }
`

export const CallSubtitle = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 20px;
    h2 {
        width: 95%;
        font-family: 'Jost';
        font-weight: 300;
        font-size: 32px;
        margin: 0 auto
    } 

    @media screen and (max-width: 1440px) {

        h2 {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 1280px) {

        h2 {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1024px) {

        h2 {
            font-size: 16px;
        }
    }
    
    @media screen and (max-width: 920px) {

        margin-bottom: 30px;

        h2 {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 768px){

        h2 {
            width: 90%; 
            font-size: 22px;
        }
    }

    @media screen and (max-width: 658px) {

        h2 {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 558px) {
        margin-bottom: 45px;

        h2 {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 508px) {

        h2 {
            font-size: 13px;
        }
    }

    @media screen and (max-width: 375px) {

        margin-bottom: 15px;
        h2 {
            width: 90%;
            font-size: 13px;
        }
    }

    @media screen and (max-width: 320px) {

        margin-bottom: 30px;

        h2 {
            font-size: 10px;
        }
    }

 `

export const CallButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;


    img {
        width: 300px;
    }

    @media screen and (max-width: 1440px) {

        img {
            width: 250px;
        }
    }

    @media screen and (max-width: 1280px) {

        img {
            width: 200px;
        }
    }

    @media screen and (max-width: 1024px) {

        img {
            width: 150px;
        }
    }

    @media screen and (max-width: 768px) {

        img {
            width: 180px;
        }
    }

    @media screen and (max-width: 658px) {

        img {
            width: 150px;
        }
    }          

    @media screen and (max-width: 425px) {

        img {
            width: 120px;
        }
    }

    @media screen and (max-width: 320px) {

        img {
            width: 90px;
        }
    }
`