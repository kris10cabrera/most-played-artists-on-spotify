import Box from "./base/Box";

export default function SecondaryHeading() {
  return (
    <Box
      as="h2"
      css={{
        fontFamily: "FT88 Gothique",
        fontSize: 27,
        color: "#000",
        marginTop: 60,
        zIndex: 3,
        textShadow: "0 0 7px white",
        position: "relative",
        "@bp0-max": {
          fontSize: 16,
        },
      }}
    >
      your genres are described as:
    </Box>
  );
}
