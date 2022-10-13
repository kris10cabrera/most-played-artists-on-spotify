import Box from "./Box";

import Image from "next/image";

const SIZE = 240;

export default function Heart(props) {
  const { artist } = props;

  return (
    <Box
      as="a"
      target="_blank"
      rel="noreferrer"
      href={artist.url}
      key={artist.artist}
      css={{
        position: "relative",
        width: SIZE,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        filter: "drop-shadow(red 0px 0px 10px)",
        img: {
          objectFit: "cover",
          objectPosition: "center",
        },
        "&::after": {
          content: "",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          borderRadius: "71px",
          transition: "opacity 300ms",
          opacity: 1,
          zIndex: -2,
          boxShadow:
            "inset 0px 33px 25px 0 #000, inset 0 66px 15px 0px #ccc, inset 0 99px 5px 0px #fff",
          filter: "drop-shadow(red 0px 0px 10px)",
        },
        "@hover": {
          "&:hover": {
            "&::after": {
              opacity: artist.artist ? 0 : 1,
            },
          },
        },
      }}
    >
      {artist.artist && (
        <Box
          css={{
            textTransform: "lowercase",
            fontSize: 21,
            lineHeight: 1.2,
            fontFamily: "FT88 Gothique",
            color: "#fff",
            background: "#000",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            paddingTop: 4,
            paddingLeft: 4,
            paddingRight: 4,
            borderRadius: 4,
            "@bp0-max": {
              fontSize: 18,
            },
          }}
        >
          {artist.artist}
        </Box>
      )}
      {artist.image ? (
        <Image
          alt={artist.name}
          src={artist.image}
          width={SIZE}
          height={SIZE}
          style={{
            clipPath:
              "path('M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9 C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z')",
          }}
        />
      ) : (
        <Box
          css={{
            height: SIZE,
            width: SIZE,
            background: "white",
            mixBlendMode: "color-burn",
            borderRadius: "71px",
          }}
        />
      )}
    </Box>
  );
}
