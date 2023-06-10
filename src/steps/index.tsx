import styled from "styled-components";
import { Boxes, Container, Icon, Image, Step, StepsContainer, StepsMain, StepsSubtitle, StepsTitle } from "./steps.style";
import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons";
import senhora from '../images/senhora.jpeg'

function Steps () {

    return (
        <StepsMain>

            <StepsContainer>

                <StepsTitle>

                    <h2>Como começar?</h2>

                </StepsTitle>

                <StepsSubtitle>

                    <h1>Com uma interface intuitiva e recursos inteligentes, nossa plataforma transforma a forma como você lida com as demandas do dia a dia.</h1>

                </StepsSubtitle>

                <Container>

                    <Step>

                        <Boxes>

                            <Icon icon={fa1} className="icon1"></Icon>
                            <hr />
                            <h2>Baixe nosso aplicativo clicando abaixo</h2>


                        </Boxes>
                        <Boxes>

                            <Icon icon={fa2}></Icon>
                            <hr />
                            <h2>Coloque seus dados pessoais nos campos</h2>

                        </Boxes>
                        <Boxes>

                            
                            <Icon icon={fa3}></Icon>
                            <hr />
                            <h2>Crie uma conta, escolha o número e o tipo dela</h2>

                        </Boxes>
                        <Boxes>

                            <Icon icon={fa4}></Icon>
                            <hr />
                            <h2>Pronto! <br></br> Tudo certo para você fazer sua primeira transferência</h2>

                        </Boxes>

                    </Step>

                    <Image>

                        <img src={senhora} alt="" />

                    </Image>

                </Container>

            </StepsContainer>

        </StepsMain>
    )
}

export default Steps;