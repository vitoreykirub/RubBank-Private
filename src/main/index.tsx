import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import phone from '../images/phone.png'
import logo from '../images/logo.png'
import { Button, IntroButton, IntroContainer, IntroLeft, IntroMain, IntroRight, IntroSubtitle, IntroTitle, Logo, Phone } from "./intro.style";

function Main() {

    return (

        <IntroMain>
            <IntroContainer>

                <IntroLeft>

                    <IntroTitle>

                        <h2>Crie sua conta com alguns cliques</h2>

                    </IntroTitle>

                    <IntroSubtitle>

                        <h1>Gerenciar suas finanças nunca foi tão fácil e eficiente</h1>

                    </IntroSubtitle>

                    <IntroButton>

                        <Button>INSCREVA-SE</Button>
                        <Button>SAIBA MAIS</Button>

                    </IntroButton>

                </IntroLeft>

                <IntroRight>

                    <Phone src={phone}></Phone>

                </IntroRight>

            </IntroContainer>
        </IntroMain>
    )
}

export default Main