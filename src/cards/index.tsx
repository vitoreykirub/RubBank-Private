import styled from "styled-components";
import { Card1, Card2, Card3, CardContainer, CardMain, CardSubtitle, CardTitle, Cards, Icon1, Icon2, Icon3 } from "./cards.style";
import { faMedal, faShield, faStar, faUnlockKeyhole, faLock } from "@fortawesome/free-solid-svg-icons";

function Card () {
    
    

    return (
        <CardMain>

            <CardContainer>

                <CardTitle>

                    <h2>Escolha ser RubBank</h2>

                </CardTitle>

                <CardSubtitle>

                    <h1>Com o RubBank, você terá acesso a uma experiência bancária inigualável, 
projetada pensando em você e nas suas necessidades financeiras. </h1>

                </CardSubtitle>

                <Cards>

                    <Card1 className="card">
                        
                        <Icon1 icon={faMedal} className="card__icon"></Icon1>

                        <h2>Multicontas</h2>

                        <h1>Você pode organizar suas finanças de forma eficiente, separando suas despesas pessoais, negócios e economias, tudo em um só lugar. </h1>

                    </Card1>

                    <Card2 className="card">

                        <Icon2 icon={faStar} className="card__icon"></Icon2>

                        <h2>Simples e Intuitivo</h2>

                        <h1>Com uma interface limpa e amigável, você encontrará facilmente todas as funcionalidades e recursos essenciais. </h1>

                    </Card2>

                    <Card3 className="card">

                        <Icon3 icon={faLock} className="card__icon"></Icon3>

                        <h2>Segurança em 1° lugar</h2>

                        <h1>Comprometidos em garantir a segurança absoluta das suas informações e transações financeiras. </h1>

                    </Card3>

                </Cards>

            </CardContainer>

        </CardMain>
    )
}

export default Card;