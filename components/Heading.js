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
        top: 15,
        fontSize: 27,
        position: "sticky",
        color: "#fff",
        mixBlendMode: "color-burn",
        border: "1px solid red",
        background: "#000",
        borderRadius: 11,
        backdropFilter: "blur(3px)",
        marginBottom: 40,
        padding: 5,
        "@bp0": {
          padding: 20,
          fontSize: 40,
        },
      }}
    >
      these are my spotify crushes of the last 6 months.
    </Box>
  );
}
