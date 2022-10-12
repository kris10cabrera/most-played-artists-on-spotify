import Box from "./base/Box";

export default function SecondaryHeading() {
  return (
    <Box
      as="h2"
      css={{
        fontFamily: "FT88 Gothique",
        fontSize: 27,
        color: "#000",
        textShadow: "0 0 7px white",
        paddingTop: 10,
        marginBottom: 15,
        "@bp0-max": {
          fontSize: 16,
        },
      }}
    >
      your genres are described as:
    </Box>
  );
}
