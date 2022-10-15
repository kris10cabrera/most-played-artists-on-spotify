import Box from "./Box";

import Image from "next/image";
import { useMedia } from "react-use";
import { config } from "../stitches.config";

export default function Heart(props) {
  const { artist } = props;
  const isMobile = useMedia(config.media["bp2-max"]);

  const size = isMobile ? 190 : 240;

  return (
    <Box
      as="a"
      target="_blank"
      rel="noreferrer"
      href={artist.url}
      key={artist.artist}
      css={{
        minWidth: "fit-content",
        position: "relative",
        width: size,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        filter: "drop-shadow(red 0px 0px 10px)",
        img: {
          objectFit: "cover",
          objectPosition: "center",
          maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' preserveAspectRatio='none'%3E%3Cpath d='M.5 1C.5 1 0 .7 0 .3A .25.25 1 1 1 .5.3A.25 .25 1 1 1 1 .3C1 .7 .5 1 .5 1Z'/%3E%3C/svg%3E")`,
          WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' preserveAspectRatio='none'%3E%3Cpath d='M.5 1C.5 1 0 .7 0 .3A .25.25 1 1 1 .5.3A.25 .25 1 1 1 1 .3C1 .7 .5 1 .5 1Z'/%3E%3C/svg%3E")`,
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
            fontsize: 21,
            lineHeight: 1.2,
            fontFamily: "FT88 Gothique",
            color: "#fff",
            // background: "#000",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            paddingTop: 4,
            paddingLeft: 4,
            paddingRight: 4,
            borderRadius: 4,
            "@bp0-max": {
              fontsize: 18,
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
          width={size}
          height={size}
        />
      ) : (
        <Box
          css={{
            height: size,
            width: size,
            borderRadius: "71px",
          }}
        />
      )}
    </Box>
  );
}
