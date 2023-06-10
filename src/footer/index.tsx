import styled from "styled-components";
import { Button, FooterApps, FooterButtons, FooterContainer, FooterMain, FooterUpLeft, FooterUpRight, List } from "./footer.style";
import googleplay from '../images/googleplay.png'
import appstore from '../images/appstore.png'
import logo from '../images/logo.png'
import {fa1} from '@fortawesome/free-solid-svg-icons';
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineYoutube, AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineInbox, AiOutlineInstagram} from 'react-icons/ai'

function Footer () {

    return (
        <FooterMain>

            <FooterContainer>
        
                    <FooterUpLeft>
                    
                        <List>
                            <h3>RubBank</h3>
                                <ul>
                                    <li>Sobre nós</li>
                                    <li>Perguntas frequentes</li>
                                    <li>Contato</li>
                                    <li>Comunidade</li>
                                </ul>
                        </List>

                        <List>
                            <h3>Fale conosco</h3>
                                <ul>
                                    <li>0800 XXX-XXXX</li>
                                    <li>contato@rubcube.com</li>
                                    <li>Canal de atendimentos em libras</li>
                                </ul>

                        </List>

                    </FooterUpLeft>

                    <FooterUpRight>

                        <FooterButtons>

                            <h3>Baixe o app</h3>

                            <Button>
                                <img src={appstore} alt="" />
                                <img src={googleplay} alt="" />
                            </Button>

                            
                            <h3>Siga o RubBank</h3>

                        </FooterButtons>

                            <FooterApps>

                                <AiOutlineYoutube />
                                <AiOutlineWhatsApp  />
                                <AiOutlineFacebook />
                                <AiOutlineInbox />
                                <AiOutlineInstagram />

                            </FooterApps>

                        
                
                    </FooterUpRight>
                
            </FooterContainer>

        </FooterMain>
    )
}

export default Footer;