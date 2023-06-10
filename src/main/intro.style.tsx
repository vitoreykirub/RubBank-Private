import styled from 'styled-components'

export const IntroMain = styled.div`
    width: 100vw;
    height: 50em;
    display: flex;

    @media screen and (max-width: 768px) {
        height: 43em;
    }

`

export const IntroContainer = styled.div`
    width: 100%;
    height: 37em;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 9em 50px;

    background: linear-gradient(313.43deg, #F97794 4.88%, #A176E7 95.51%);
    border-radius: 50px 90px 263px 50px;

    @media screen and (max-width: 1024px){

        height: 40em;
    }

    @media screen and (max-width: 768px){

        height: 35em;
        margin: 8em 10px;
        border-radius: 50px 90px 190px 50px;
    }

    @media screen and (max-width: 360px) {

        height: 32em;
        border-radius: 50px 90px 152px 50px;
    }

    @media screen and (max-width: 320px) {

        height: 30em;
    }
`

export const IntroLeft = styled.div`

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    left: 0;
    margin: 50px 50px;

    @media screen and (max-width: 425px){

        margin: 35px 30px;
    }

    @media screen and (max-width: 375px){

        margin: 35px 30px;
    }

    @media screen and (max-width: 320px){

        margin: 25px 20px;
    }

`

export const IntroTitle = styled.div`

    width: 70%;

    h2 {
        font-size: 82px;
        font-weight: 700;
        font-family: 'Jost';

        color: white;
    }

    @media screen and (max-width: 1280px){

        width: 65%;

        h2 { 
            font-size: 62px;
        }
    }

    @media screen and (max-width: 1150px){

        width: 60%;

        h2 { 
            font-size: 56px;
        }
    }

    @media screen and (max-width: 820px) {

        width: 65%;

        h2 {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 768px){

        width: 350px;

        h2 { 
            font-size: 44px;
        }
    } 

    @media screen and (max-width: 470px) {

        width: 280px;

        h2 {
            font-size: 38px;
        }
    }

    @media screen and (max-width: 360px) {

        width: 230px;

        h2 {
            font-size: 32px;
        }
    }


    @media screen and (max-width: 320px){

        width: 200px;

        h2 { 
            font-size: 28px;
        }
    }

`

export const IntroSubtitle = styled.div`
    
    margin-top: 20px;
    width: 500px;

    h1 {
        font-size: 36px;
        font-weight: 600;
        font-family: 'Jost';

        color: white;
    }

    @media screen and (max-width: 1024px){

        width: 45%;

        h1{
            font-size: 32px;
        }
    }

    @media screen and (max-width: 768px){

        width: 250px;

        h1 { 
            font-size: 24px;
        }
    }

    @media screen and (max-width: 470px) {

        width: 180px;
    }

    @media screen and (max-width: 360px) {
        width: 130px;

        h1 {

            font-size: 18px;
        }
    }

    @media screen and (max-width: 320px){

        width: 100px;

        h1 {

            font-size: 16px;
        }

    }
    
`

export const IntroButton = styled.div`

    width: 450px;
    margin-top: 70px;
    display: flex;

    gap: 30px;

    @media screen and (max-width: 768px) {

        margin-top: 55px;
    }

    @media screen and (max-width: 470px) {

        gap: 15px;
        margin-top: 70px;
    }

    @media screen and (max-width: 360px) {
        width: 320px;
        gap: 5px;
        margin-top: 100px;
    }

    @media screen and (max-width: 320px){
        width: 180px;
    }
    
`

export const Button = styled.button`

    width: 180px;
    height: 80px;

    cursor: pointer;

    font-size: 22px;
    font-weight: bold;

    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 15px;
    color: white;

    &:nth-child(1){
        background: #5F5CD6;
    };

    &:nth-child(2){
        background: transparent;
    };

    @media screen and (max-width: 1024px){

        width: 160px;

    }

    @media screen and (max-width: 768px){

        width: 150px;
        height: 60px;
        font-size: 16px;

    }

    @media screen and (max-width: 470px) {
        width: 120px;
    }

    @media screen and (max-width: 360px) {

        width: 120px;
        height: 45px;
        font-size: 12px;
    }


    @media screen and (max-width: 320px){

        width: 160px;
        height: 40px;
        font-size: 10px;
        gap: 20px;
    }

`

export const IntroRight = styled.div`
    display: flex;
    max-width: 100%;
    max-height: 100%;
    flex-direction: row;

    position: absolute;
    right: 30px;
    margin-right: 70px;

    @media screen and (max-width: 1280px){

        right: 12px;

    }   

    @media screen and (max-width: 1024px){

        right: 10px;
        
    }

    @media screen and (min-width: 769px) and (max-width: 1023px){

        right: -35px;

    }

    @media screen and (max-width: 768px){

        right: -20px;

    }

    @media screen and (max-width: 650px){

        right: -32px;

    }

    @media screen and (max-width: 425px){

        right: -50px;

    }

    @media screen and (max-width: 320px){

        right: -60px;

    }
`

export const Phone = styled.img`
    width: 20em;

    @media screen and (max-width: 1024px){

        width: 19em;

    }

    @media screen and (min-width: 768px) and (max-width: 1024px){

        width: 15em;

    }

    @media screen and (max-width: 768px){

        width: 13em;

    }

    @media screen and (max-width: 710px){

        width: 10em;

    }

    @media screen and (max-width: 580px){

        width: 8em;

    }

    @media screen and (max-width: 505px){

        width: 7em;

    }

    @media screen and (max-width: 360px){

        width: 8em;
    }

    @media screen and (max-width: 320px){
        width: 6em;
    }
`

export const Logo = styled.img`
    width: 200px;
    position: absolute;
    bottom: 0;
    right: -45px;

    @media screen and (max-width: 1024px){

        width: 180px;

    }

    @media screen and (max-width: 768px){

        width: 150px;

    }

    @media screen and (max-width: 650px){

        width: 120px;

    }


    @media screen and (max-width: 550px){

        width: 95px;

    }

    @media screen and (max-width: 425px){

        width: 90px;
        right: -30px;

    }

    @media screen and (max-width: 375px){

        width: 65px;
        right: -20px;

    }

    @media screen and (max-width: 320px){

        width: 50px;
        right: -15px;

    }
`