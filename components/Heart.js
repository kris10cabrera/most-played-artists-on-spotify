import Box from "./base/Box";

export default function Heart(props) {
  const { artist } = props;
  return (
    <Box
      key={artist.artist}
      css={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        zIndex: 1,
        transition: "transform 100ms",
      }}
    >
      <Box
        as="a"
        href={artist.url}
        css={{
          fontSize: 21,
          lineHeight: 1.2,
          fontFamily: "FT88 Gothique",
          zIndex: 3,
          color: "#fff",
          background: "#000",
          maxWidth: "100%",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          paddingTop: 2,
          paddingLeft: 4,
          paddingRight: 4,
          borderRadius: "4px",
        }}
      >
        {artist.artist}
      </Box>
      <Box
        css={{
          width: 260,
          height: 240,
          position: "relative",
          filter: "drop-shadow(red 0px 0px 10px)",
          background: "#fff",
          borderRadius: "71px",

          "&::after": {
            content: "",
            position: "absolute",
            width: 260,
            height: 240,
            left: 0,
            right: 0,
            borderRadius: "71px",
            bottom: 0,
            transition: "opacity 300ms",
            opacity: 1,
            zIndex: "-2",
            boxShadow:
              "inset 0px 33px 25px 0 #000, inset 0 66px 15px 0px #ccc, inset 0 99px 5px 0px #fff",
            filter: "drop-shadow(red 0px 0px 10px)",
          },
          "@hover": {
            "&:hover": {
              "&::after": {
                opacity: 0,
              },
            },
          },
        }}
      >
        <Box
          className="artist-image"
          css={{
            background: "blue",
            backgroundImage: `url(${artist.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: 240,
            height: 236,

            margin: "auto",
            "@bp0-max": {
              width: 80,
              height: 80,
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
}
