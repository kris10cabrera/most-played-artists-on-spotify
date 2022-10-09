export default function Heart(props) {
  const { artist } = props;
  return (
    <div
      key={artist.artist}
      className="artist-wrapper"
      style={{
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
      <a
        href={artist.url}
        className="artist-name"
        style={{
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
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
      >
        {artist.artist}
      </a>
      <div
        className="glitter-heart"
        style={{
          width: 260,
          height: 240,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          transition: "filter 300ms, color 300ms",
          filter: "drop-shadow(red 0px 0px 10px)",
          boxShadow: "#717171b5 0px 0px 20px 20px",
          borderRadius: "71px",
        }}
      >
        <div
          className="artist-image"
          style={{
            background: "blue",
            backgroundImage: `url(${artist.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: 240,
            height: 236,
            maskImage: `url(https://favorite-artists.vercel.app/heart.png)`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
            WebkitMaskImage: `url(https://favorite-artists.vercel.app/heart.png)`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",

            // note to self: maybe it's too many styles being recalculacated on render
            margin: "auto",
          }}
        ></div>
      </div>
    </div>
  );
}
