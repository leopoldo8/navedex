import { createGlobalStyle } from 'styled-components';

const icomoonEot = '/static/fonts/icon/icomoon.eot';
const icomoonTtf = '/static/fonts/icon/icomoon.ttf';
const icomoonWoff = '/static/fonts/icon/icomoon.woff';
const icomoonSvg = '/static/fonts/icon/icomoon.svg';

const fonts = createGlobalStyle`
@font-face {
  font-family: 'icomoon';
  src:  url(${`${icomoonEot}?svq22x`});
  src:  url(${`${icomoonEot}?svq22x#iefix`}) format('embedded-opentype'),
    url(${`${icomoonTtf}?svq22x`}) format('truetype'),
    url(${`${icomoonWoff}?svq22x`}) format('woff'),
    url(${`${icomoonSvg}?svq22x#icomoon`}) format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-notice:before {
  content: "\\e905";
}
.icon-delete:before {
  content: "\\e900";
}
.icon-edit:before {
  content: "\\e901";
}
.icon-arrow:before {
  content: "\\e902";
}
.icon-close:before {
  content: "\\e903";
}
.icon-logo:before {
  content: "\\e904";
}
`;

export default fonts;
