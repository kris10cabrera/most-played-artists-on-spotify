import Box from "./Box";

export default function Heading() {
  return (
    <Box
      as="h1"
      css={{
        display: "inline-block",
        fontFamily: "FT88",
        fontWeight: "bold",
        zIndex: 5,
        fontSize: 27,
        color: "#fff",
        mixBlendMode: "color-burn",
        border: "1px solid red",
        background: "#000",
        borderRadius: 11,
        backdropFilter: "blur(3px)",

        padding: 22,
        textShadow: "rgb(0 12 255) 0px 0px 11px",
        "@bp0": {
          position: "sticky",
          padding: 20,
          top: 15,
          fontSize: 37,
        },
      }}
    >
      these are my spotify crushes of the last 6 months.
    </Box>
  );
}
