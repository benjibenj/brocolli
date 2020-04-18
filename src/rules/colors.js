// Primary colors
const orange = {
  default: "#f45d48",
  lighter: "#ED992F",
  darker: "#E6592F",
}

const eggShell = {
  default: "#f8f5f2",
}

const blue = {
  default: "#078080",
}

// Utility colors
const white = {
  default: "#f8f5f2",
}
const black = {
  default: "#333132",
}

const headline = {
  default: "#232323",
}
const subHeadline = {
  default: "#222525",
}
const paragraph = {
  default: "#222525",
}

const Colors = {
  primary: {
    orange,
    blue,
    eggShell,
  },
  utility: {
    headline,
    subHeadline,
    paragraph,
    white,
    black,
  },
  darkTheme: {
    mainColor: black.default,
  },
  lightTheme: {
    mainColor: eggShell.default,
  },
}

export default Colors;
