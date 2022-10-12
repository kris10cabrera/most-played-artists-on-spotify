import Box from "./Box";

import Image from "next/image";

export default function Heart(props) {
  const { artist, index } = props;
  const divisible = index % 3 === 0;

  return (
    <Box
      as="a"
      target="_blank"
      rel="noreferrer"
      href={artist.url}
      key={artist.artist}
      css={{
        position: "relative",
        width: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: divisible ? "center" : "flex-end",
        filter: "drop-shadow(red 0px 0px 10px)",
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
          width={300}
          height={300}
          style={{
            mixBlendMode: "color-burn",
            clipPath:
              index % 3 === 0
                ? "path('M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9 C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z')"
                : "url(#svgClip)",
          }}
        />
      ) : (
        <Box
          css={{
            height: 300,
            width: 300,
            background: "white",
            mixBlendMode: "color-burn",
            borderRadius: "71px",
          }}
        />
      )}
      <svg width="0" height="0">
        <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
          <path d="M0.75815095,0.0579477769 C1.597983708,0.187288937 0.902165272,0.77587654 0.799370955,0.785996249 C0.627963035,10.966765889 0.26163708,0.91434951 0.111342491,0.755791573 C-0.932137967,0.603287436 -0.035795248,0.382887577 0.0965066612,0.173955315 C0.200239457,0.10101396315 0.648923894,-0.0580965318 0.75815095,0.0579477 "></path>{" "}
        </clipPath>
      </svg>
    </Box>
  );
}
