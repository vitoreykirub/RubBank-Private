import styled from "styled-components";
import { Button, ScreenButton, ScreenContainer, ScreenImage, ScreenLeft, ScreenMain, ScreenRight, ScreenSubtitle, ScreenTitle } from "./youfirst.style";
import image from '../images/youfirst.jpg'

function YouFirst () {

    return (

        <ScreenMain>

            <ScreenContainer>

                <ScreenLeft>

                    <ScreenImage>

                        <img src={image}/>

                    </ScreenImage>

                </ScreenLeft>

                <ScreenRight>

                    <ScreenTitle>

                        <h2>Você em primeiro lugar</h2>

                    </ScreenTitle>

                    <ScreenSubtitle>

                    <h1>Colocamos você em primeiro lugar em cada aspecto dos nossos 
serviços. Nosso compromisso é oferecer uma experiência 
bancária excepcional, criada exclusivamente pensando em você.</h1>

                    </ScreenSubtitle>

                    <ScreenButton>

                        <Button>

                            VAMOS COMEÇAR

                        </Button>

                    </ScreenButton>

                </ScreenRight>


            </ScreenContainer>

        </ScreenMain>
    )
}

export default YouFirst