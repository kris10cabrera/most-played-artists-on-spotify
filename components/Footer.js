import Box from "./base/Box";

export default function Footer() {
  return (
    <Box
      as="footer"
      css={{
        fontFamily: "FT88",
        letterSpacing: 1,
        zIndex: 5,
        fontSize: 18,
        fontStyle: "italic",
        letterSpacing: -1,
        position: "fixed",
        color: "#000",
        background: "rgb(255 255 255 / 85%)",
        padding: 5,
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        position: "fixed",
        border: "1px solid #000",
        width: "max-content",
        maxWidth: "96%",
        borderRadius: 11,
        backdropFilter: "blur(3px)",
        "@bp0": {
          padding: 10,
          fontSize: 25,
        },
      }}
    >
      encuentra fuerza en el sonido{" "}
      <Box as="span" css={{ fontSize: 15, "@bp0-max": { fontSize: 13 } }}>
        *:･ﾟ✧*:･ﾟ
      </Box>{" "}
      made by{" "}
      <Box
        as="a"
        href="https://www.kristencabrera.com/"
        target="_blank"
        css={{ textDecoration: "underline" }}
      >
        kris10cabrera
      </Box>
    </Box>
  );
}
