import { createGlobalStyle } from 'styled-components';

const fonts = createGlobalStyle`
@font-face {
    font-family: 'Red Hat Display';
    src: url('/static/fonts/text/RedHatDisplay-Regular.woff2') format('woff2'),
        url('/static/fonts/text/RedHatDisplay-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Red Hat Display';
    src: url('/static/fonts/text/RedHatDisplay-MediumItalic.woff2') format('woff2'),
        url('/static/fonts/text/RedHatDisplay-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Red Hat Display';
    src: url('/static/fonts/text/RedHatDisplay-Italic.woff2') format('woff2'),
        url('/static/fonts/text/RedHatDisplay-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Red Hat Display';
    src: url('/static/fonts/text/RedHatDisplay-Medium.woff2') format('woff2'),
        url('/static/fonts/text/RedHatDisplay-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Red Hat Display';
    src: url('/static/fonts/text/RedHatDisplay-BoldItalic.woff2') format('woff2'),
        url('/static/fonts/text/RedHatDisplay-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Red Hat Display';
    src: url('/static/fonts/text/RedHatDisplay-Bold.woff2') format('woff2'),
        url('/static/fonts/text/RedHatDisplay-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Red Hat Display';
    src: url('/static/fonts/text/RedHatDisplay-Black.woff2') format('woff2'),
        url('/static/fonts/text/RedHatDisplay-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Red Hat Display';
    src: url('/static/fonts/text/RedHatDisplay-BlackItalic.woff2') format('woff2'),
        url('/static/fonts/text/RedHatDisplay-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Smythe';
    src: url('/static/fonts/text/Smythe.woff2') format('woff2'),
        url('/static/fonts/text/Smythe.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export default fonts;
