import Box from "./Box";

export default function Heading() {
  return (
    <Box
      as="h1"
      css={{
        display: "inline-block",
        mixBlendMode: "color-burn",
        fontFamily: "FT88",
        fontWeight: "bold",
        zIndex: 5,
        fontSize: 27,
        color: "#000",
        border: "1px solid red",
        background: "#000",
        borderRadius: 11,
        backdropFilter: "blur(3px)",
        padding: 22,
        textShadow:
          "rgb(255 0 220) 0px 0px 15px, rgb(255 0 213) 0px 0px 15px, rgb(255 0 0) 0px 0px 15px, rgb(255 0 0) 0px 0px 15px, rgb(255 0 0) 0px 0px 15px, rgb(255 0 0) 0px 0px 15px, rgb(255 0 0) 0px 0px 15px, rgb(255 0 0) 0px 0px 15px",
        "@bp0": {
          padding: 20,
          fontSize: 37,
        },
      }}
    >
      these are my spotify crushes of the last 6 months.
    </Box>
  );
}
