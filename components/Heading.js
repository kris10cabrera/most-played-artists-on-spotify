import Box from "./base/Box";

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
        marginBottom: 40,
        padding: 22,
        "@bp0": {
          position: "sticky",
          padding: 20,
          top: 15,
          fontSize: 37,
          textShadow: "0 0 11px #ff0000",
        },
      }}
    >
      these are my spotify crushes of the last 6 months.
    </Box>
  );
}
