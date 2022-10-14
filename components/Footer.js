import Marquee from "react-fast-marquee";
import Box from "./Box";

export default function Footer({ genres }) {
  return (
    <Box
      as="footer"
      css={{
        zIndex: 9,
        position: "relative",
      }}
    >
      <Box
        as="h2"
        css={{
          fontFamily: "FT88 Gothique",
          color: "#000",
          textShadow: "0 0 7px white",
          fontSize: 30,
          paddingTop: 10,
        }}
      >
        your genres are described as:
      </Box>
      <Marquee
        direction="left"
        pauseOnHover
        style={{
          background: "#fff",
          borderRadius: 30,

          boxShadow:
            "rgb(171 171 171) 1px 1px 20px 1px, rgb(157 157 157) 0px 0px 14px 0px inset",
          paddingTop: 10,
          paddingBottom: 5,
          borderRadius: 50,
          marginTop: 10,
          marginBottom: 20,
        }}
        speed={14}
        gradient={false}
      >
        {genres.map((genre, index) => (
          <Box
            as="span"
            key={genre}
            css={{
              fontFamily: "FT88",
              fontSize: 16,
            }}
          >
            {genre}
            {` `}
            {genres.length - 1 !== index && " /"}
          </Box>
        ))}
      </Marquee>
      <Box
        css={{
          fontFamily: "FT88",
          zIndex: 5,
          fontSize: 22,
          fontStyle: "italic",
          color: "#000",
          background: "rgb(255 255 255 / 85%)",
          padding: 5,
          bottom: 20,
          border: "1px solid #000",
          borderRadius: 11,

          maxWidth: 700,
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
          rel="noreferrer"
          css={{
            textDecoration: "underline",
            "@hover": {
              "&:hover": {
                background: "#000",
                color: "#fff",
              },
            },
          }}
        >
          kris10cabrera
        </Box>
      </Box>
    </Box>
  );
}
