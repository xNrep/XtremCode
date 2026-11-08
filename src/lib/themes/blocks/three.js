const blockColors = {
    motion: {
        primary: '#4C97FF',
        secondary: '#4280D7',
        tertiary: '#3373CC',
        quaternary: '#3373CC'
    },
    looks: {
        primary: '#9966FF',
        secondary: '#855CD6',
        tertiary: '#774DCB',
        quaternary: '#774DCB'
    },
    sounds: {
        primary: '#CF63CF',
        secondary: '#C94FC9',
        tertiary: '#BD42BD',
        quaternary: '#BD42BD'
    },
    control: {
        primary: '#FFAB19',
        secondary: '#EC9C13',
        tertiary: '#CF8B17',
        quaternary: '#CF8B17'
    },
    event: {
        primary: '#FFBF00',
        secondary: '#E6AC00',
        tertiary: '#CC9900',
        quaternary: '#CC9900'
    },
    sensing: {
        primary: '#5CB1D6',
        secondary: '#47A8D1',
        tertiary: '#2E8EB8',
        quaternary: '#2E8EB8'
    },
    pen: {
        primary: '#0fBD8C',
        secondary: '#0DA57A',
        tertiary: '#0B8E69',
        quaternary: '#0B8E69'
    },
    operators: {
        primary: '#59C059',
        secondary: '#46B946',
        tertiary: '#389438',
        quaternary: '#389438'
    },
    data: {
        primary: '#FF8C1A',
        secondary: '#FF8000',
        tertiary: '#DB6E00',
        quaternary: '#DB6E00'
    },
    // This is not a new category, but rather for differentiation
    // between lists and scalar variables.
    data_lists: {
        primary: '#FF661A',
        secondary: '#FF5500',
        tertiary: '#E64D00',
        quaternary: '#E64D00'
    },
    more: {
        primary: '#FF6680',
        secondary: '#FF4D6A',
        tertiary: '#FF3355',
        quaternary: '#FF3355'
    },
    addons: {
        primary: '#29beb8',
        secondary: '#3aa8a4',
        tertiary: '#3aa8a4',
        quaternary: '#3aa8a4'
    },
    text: '#FFFFFF',
    workspace: '#08131f',
    toolboxHover: '#123c48',
    toolboxSelected: '#102c3d',
    toolboxText: '#c2d8e8',
    toolbox: '#0b1928',
    blackText: '#575E75',
    flyout: '#0b1928',
    scrollbar: '#315064',
    scrollbarHover: '#20f6e5',
    textField: '#FFFFFF',
    textFieldText: '#575E75',
    insertionMarker: '#20f6e5',
    insertionMarkerOpacity: 0.2,
    dragShadowOpacity: 0.6,
    stackGlow: '#FFF200',
    stackGlowSize: 4,
    stackGlowOpacity: 1,
    replacementGlow: '#FFFFFF',
    replacementGlowSize: 2,
    replacementGlowOpacity: 1,
    colourPickerStroke: '#FFFFFF',
    // CSS colours: support RGBA
    fieldShadow: 'rgba(255, 255, 255, 0.3)',
    dropDownShadow: 'rgba(0, 0, 0, .3)',
    numPadBackground: '#547AB2',
    numPadBorder: '#435F91',
    numPadActiveBackground: '#435F91',
    numPadText: 'white', // Do not use hex here, it cannot be inlined with data-uri SVG
    valueReportBackground: '#102235',
    valueReportBorder: '#20f6e5',
    valueReportForeground: '#e7fbff',
    menuHover: 'rgba(0, 0, 0, 0.2)',
    contextMenuBackground: '#0b1928',
    contextMenuBorder: '#315064',
    contextMenuForeground: '#e7fbff',
    contextMenuActiveBackground: '#173247',
    contextMenuDisabledForeground: '#718a9d',
    flyoutLabelColor: '#c2d8e8',
    checkboxInactiveBackground: '#102235',
    checkboxInactiveBorder: '#718a9d',
    checkboxActiveBackground: '#20cfc6',
    checkboxActiveBorder: '#20f6e5',
    checkboxCheck: '#07111d',
    buttonBorder: '#c6c6c6',
    buttonActiveBackground: '#173247',
    buttonForeground: '#c2d8e8',
    zoomIconFilter: 'none',
    gridColor: '#183a4a'
};

const extensions = {};

export {
    blockColors,
    extensions
};
