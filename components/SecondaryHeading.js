import Box from "./Box";

export default function SecondaryHeading() {
  return (
    <Box
      as="h2"
      css={{
        fontFamily: "FT88 Gothique",
        color: "#000",
        textShadow: "0 0 7px white",
        fontSize: 27,
        paddingTop: 10,
        marginBottom: 15,
        "@bp0-max": {
          fontSize: 23,
        },
      }}
    >
      your genres are described as:
    </Box>
  );
}
