const mainColor = {
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#8092AF',
  grey4: '#EDEEF0',
  grey5: '#B1B7C2',
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  blue1: '#0066CB',
  black1: '#000',
  black2: 'rgba(0, 0, 0, 0.5)',
};

export const colors = {
  white: 'white',
  black: 'black',
  green: mainColor.green1,
  background: mainColor.dark1,
  tabNav: mainColor.dark1,
  button: {
    primary: {
      background: mainColor.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColor.dark1,
    },
  },
  text: {
    first: mainColor.dark1,
    second: mainColor.grey1,
    tertiary: mainColor.grey3,
    menuActive: mainColor.green1,
    menuInactive: mainColor.dark2,
  },
  border: mainColor.grey2,
  borderActive: mainColor.blue1,
  card: mainColor.green2,
  card2: mainColor.green1,
  textInput: {
    background: mainColor.grey4,
    backgroundActive: mainColor.blue1,
    text: mainColor.grey5,
  },
  loadingBackground: mainColor.black2,
};
