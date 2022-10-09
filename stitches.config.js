import { createStitches } from "@stitches/react";

const stitches = createStitches({
  theme: {
    fontSizes: {
      0: "14px",
      1: "16px",
      2: "18px",
      3: "24px",
      4: "36px",
      5: "46px",
      6: "56px",
      7: "66px",
      8: "76px",
      9: "86px",
      10: "126px",
    },
    letterSpacings: {
      0: 0,
      1: 0,
      2: 0,
      3: "-0.01em",
      4: "-0.02em",
      5: "-0.02em",
      6: "-0.02em",
      7: "-0.02em",
      8: "-0.025em",
      9: "-0.025em",
      10: "-0.03em",
    },
  },
  media: {
    bp0: "(min-width: 40em)",
    ["bp0-max"]: "(max-width: 40em)",
    bp1: "(min-width: 52em)",
    ["bp1-max"]: "(max-width: 52em)",
    bp2: "(min-width: 64em)",
    ["bp2-max"]: "(max-width: 64em)",
    bp3: "(min-width: 72em)",
    ["bp3-max"]: "(max-width: 72em)",
    bp4: "(min-width: 80em)",
    ["bp4-max"]: "(max-width: 80em)",
    hover: "(hover: hover)",
    bpxs: "(max-width: 350px)",
  },
  utils: {
    margin: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    padding: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  prefix: "st-",
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches;
