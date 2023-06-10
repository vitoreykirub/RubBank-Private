import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png'
import { Globe, HeaderItemMenu, HeaderLeft, HeaderLogo, HeaderMain, HeaderMenu, HeaderRight, HeaderStart, Mark, List, LogoLanguage, HeaderArea, HeaderNavBar, HeaderNavBarItem, Button} from './header.style';
import { useState, useEffect } from 'react';

function Header () {

    const [getMargin, setMargin] = useState(false);

    const ListClick = () => {
        setMargin(!getMargin)

        console.log(getMargin)
    }


  return (

    <HeaderArea>

        <HeaderMain>

            <HeaderMenu>

                <HeaderLeft>

                    <HeaderLogo>

                        <img src={logo} />
                        <p><strong>Rub</strong></p><p>Bank</p>

                    </HeaderLogo>

                    <HeaderItemMenu>
                                            
                        <a href="" className='item'>HOME</a>
                        <a href="" className='item'>CONTATO</a>
                        <a href="" className='item'>SOBRE</a>
                        <a href="" className='item'>COMUNIDADE</a>
                        
                    </HeaderItemMenu>

                </HeaderLeft>

                <List icon={faBars} onClick={ListClick}/>

                <HeaderRight>

                    <LogoLanguage>

                        <Globe icon={faGlobe}/>
                        <p>English</p>

                    </LogoLanguage>
                    
                    <HeaderStart>

                        <a href="">COMECE AGORA</a>

                    </HeaderStart>

                </HeaderRight>

            </HeaderMenu>

        </HeaderMain>
        
        <hr />

        <HeaderNavBar style={{marginRight: getMargin ? '0' : '100vw'}}>

            <HeaderNavBarItem>

                <Button>
                    <a href="">COMECE AGORA</a>
                </Button>

                <a href="" className='item'>HOME</a>
                <a href="" className='item'>CONTATO</a>
                <a href="" className='item'>SOBRE</a>
                <a href="" className='item'>COMUNIDADE</a>

                <LogoLanguage>
                    <Globe icon={faGlobe} className='globe'/>
                    <p>English</p>
                </LogoLanguage>

            </HeaderNavBarItem>


        </HeaderNavBar>

      </HeaderArea>

    
  )
}

export default Header;
