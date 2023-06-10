import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,600;0,700;0,800;1,200&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(0deg, #C9C1F9 13.17%, #A99BFF 17.46%, #BFB5FF 25.14%, #FFFFFF 29.9%, #FFFFFF 38.25%, #FFFFFF 44.25%, #E6C0FD 47.94%, #E6C0FE 60.72%, #FFFFFF 63.6%, #FCFCFD 80.64%, #A79FF3 85.54%, #DAC0FB 100%);
    width: 100vw;

    @media screen and (max-width: 1440px) {
      background: linear-gradient(180deg, #CDB8F9 1.94%, #C0BAF6 14.32%, rgba(213, 209, 249, 0.995917) 16.8%, rgba(255, 255, 255, 0.987523) 20.65%, rgba(240, 234, 253, 0.689524) 38.15%, #E6C0FD 43.24%, #E5C1FB 49.17%, rgba(255, 255, 255, 0.965248) 64.38%, #FFFFFF 72.03%, rgba(206, 187, 246, 0.937764) 78.68%, #C8C0F8 88.14%);
    }

    @media screen and (max-width: 1024px) {

      background: linear-gradient(0deg, #C9C1F9 12.17%, #A99BFF 17.46%, #BFB5FF 22.14%, #FFFFFF 25.9%, #FFFFFF 38.25%, #FFFFFF 45.25%, #E6C0FD 48.94%, #E5C1FB 52.89%, #E6C0FE 59.72%, #FFFFFF 63.6%, #FCFCFD 78.64%, #A79FF3 82.54%, #DAC0FB 100%);
    }

    @media screen and (max-width: 820px) {
      background: linear-gradient(0deg, #C9C1F9 12.17%, #A99BFF 15.46%, #BFB5FF 18.14%, #FFFFFF 19.9%, #FFFFFF 35.25%, #FFFFFF 36.25%, #E6C0FD 39.94%, #E5C1FB 50.89%, #FFFFFF 55.6%, #FCFCFD 86.64%, #A79FF3 87.54%, #DAC0FB 100%);
    }

    @media screen and (max-width: 545px) {
      background: linear-gradient(0deg, #C9C1F9 12.17%, #A99BFF 15.46%, #BFB5FF 17.14%, #FFFFFF 18.9%, #FFFFFF 35.25%, #FFFFFF 36.25%, #E6C0FD 37.94%, #E5C1FB 54.89%, #FFFFFF 57.6%, #FCFCFD 85.64%, #A79FF3 87.54%, #DAC0FB 100%);
    }

    @media screen and (max-width: 425px) {
      background: linear-gradient(0deg, #C9C1F9 12.17%, #A99BFF 15.46%, #BFB5FF 17.14%, #FFFFFF 18.9%, #FFFFFF 32.25%, #E6C0FD 37.94%, #E5C1FB 50.89%, #FFFFFF 53.6%, #FCFCFD 83.64%, #A79FF3 85.54%, #DAC0FB 100%);
    }

    @media screen and (max-width: 375px) {
      background: linear-gradient(180deg, #CDB8F9 1.94%, #C0BAF6 14.32%, rgba(213, 209, 249, 0.995917) 16.8%, rgba(255, 255, 255, 0.987523) 18.65%, rgba(240, 234, 253, 0.689524) 46.15%, #E6C0FD 48.24%, #E5C1FB 61.17%, rgba(255, 255, 255, 0.965248) 64.38%, #FFFFFF 78.03%, rgba(206, 187, 246, 0.937764) 82.68%, #C8C0F8 88.14%);
    }

    @media screen and (max-width: 320px) {
      background: linear-gradient(0deg, #C9C1F9 12.17%, #A99BFF 15.46%, #BFB5FF 19.14%, #FFFFFF 21.9%, #FFFFFF 34.25%, #E6C0FD 37.94%, #E5C1FB 49.89%, #FFFFFF 53.6%, #FCFCFD 80.64%, #A79FF3 85.54%, #DAC0FB 100%);
    }

    
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

`;