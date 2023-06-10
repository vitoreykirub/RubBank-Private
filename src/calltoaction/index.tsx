import styled from "styled-components";
import { CallButtons, CallContainer, CallLeft, CallMain, CallRight, CallSubtitle, CallTitle } from "./call.style";
import mulher from '../images/mulher-apontando.jpg'
import googleplay from '../images/googleplay.png'
import appstore from '../images/appstore.png'

function CallToAction () {

    return (
        <CallMain>

            <CallContainer>

                <CallLeft>

                    <img src={mulher} alt="" />

                </CallLeft>

                <CallRight>

                    <CallTitle>

                        <h1>Torne-se RubBank!</h1>

                    </CallTitle>


                    <CallSubtitle>

                        <h2>Não perca tempo! Faça o download do nosso aplicativo agora mesmo e descubra uma maneira completamente nova de interagir com seu banco. </h2>

                    </CallSubtitle>

                    <CallButtons>

                        <img src={googleplay} alt="" />

                        <img src={appstore} alt="" />

                    </CallButtons>


                </CallRight>

            </CallContainer>

        </CallMain>
    )
}

export default CallToAction;