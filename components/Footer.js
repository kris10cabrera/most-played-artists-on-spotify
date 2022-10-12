import Marquee from "react-fast-marquee";
import Box from "./base/Box";
import SecondaryHeading from "./SecondaryHeading";

export default function Footer({ genres }) {
  return (
    <Box
      as="footer"
      css={{
        position: "fixed",
        transform: "translateX(-50%)",
        left: "50%",
        width: "max-content",
        maxWidth: "96%",
        bottom: 20,
      }}
    >
      <SecondaryHeading />
      <Marquee
        direction="right"
        pauseOnHover
        style={{
          zIndex: 4,
          background: "#fff",
          borderRadius: 30,
          backdropFilter: "blur(1px)",
          boxShadow:
            "rgb(171 171 171) 1px 1px 20px 1px, inset 0 0 14px 0px #ff00e5",
          paddingTop: 10,
          paddingBottom: 5,
          borderRadius: 5,
          marginBottom: 10,
          border: "1px solid rgb(255 0 229 / 60%)",
        }}
        speed={16}
        gradient={false}
      >
        {genres.map((genre, index) => (
          <Box
            as="span"
            key={genre}
            css={{
              fontFamily: "FT88",
              letterSpacing: 1,
              marginRight: 3,
              color: "blue",
              fontSize: 17,
              "@bp0-max": { fontSize: 14 },
            }}
          >
            {genre}
            {genres.length - 1 !== index && ","}
          </Box>
        ))}
      </Marquee>
      <Box
        css={{
          fontFamily: "FT88",
          zIndex: 5,
          fontSize: 18,
          fontStyle: "italic",
          color: "#000",
          background: "rgb(255 255 255 / 85%)",
          padding: 5,
          bottom: 20,

          border: "1px solid #000",

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
