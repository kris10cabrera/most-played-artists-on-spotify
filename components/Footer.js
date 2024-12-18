import Marquee from "react-fast-marquee";
import Box from "./Box";

export default function Footer({ genres, isLoading, arr }) {
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
      {isLoading ? (
        <Box
          css={{
            height: 31,
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
        >
          {arr.map((index) => (
            <Box
              key={index}
              css={{
                width: 16,
                height: 16,
              }}
            />
          ))}
        </Box>
      ) : (
        <Marquee
          direction="left"
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
                marginLeft: 6,
              }}
            >
              {genre}
              {genres.length - 1 !== index && " /"}
            </Box>
          ))}
        </Marquee>
      )}

      <Box css={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Box
          css={{
            fontFamily: "FT88",
            zIndex: 5,
            fontSize: 15,
            fontStyle: "italic",
            color: "#000",
            background: "rgb(255 255 255 / 85%)",
            padding: 6,
            border: "1px solid #000",
            borderRadius: 11,
            width: "fit-content",
          }}
        >
          encuentra fuerza en el sonido
        </Box>
        <Box
          css={{
            fontFamily: "FT88",
            zIndex: 5,
            fontStyle: "italic",
            color: "#000",
            background: "rgb(255 255 255 / 85%)",
            paddingTop: 3,
            paddingBottom: 5,
            paddingRight: 5,
            border: "1px solid #000",
            borderRadius: 11,
            width: "fit-content",
            fontSize: 15,

            "@bp0": {
              fontSize: 20,

              padding: 10,
            },
          }}
        >
          <Box as="span" css={{ fontSize: 15, "@bp0-max": { fontSize: 13 } }}>
            *:✧*･ﾟ
          </Box>{" "}
          made by{" "}
          <Box
            as="a"
            href="https://www.kristencabrera.com/"
            target="_blank"
            rel="noreferrer"
            css={{
              background: "#000",
              color: "#fff",
              padding: 5,
              textDecoration: "underline",
              "@hover": {
                "&:hover": {
                  color: "#000",
                  background: "unset",
                },
              },
            }}
          >
            kris10cabrera
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
