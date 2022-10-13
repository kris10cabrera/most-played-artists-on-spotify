import Box from "./Box";

export default function Scrollbar() {
  return (
    <Box
      aria-hidden
      css={{
        transform: "rotate(315deg)",
        color: "red",
        display: "flex",
        flexWrap: "wrap",
        pointerEvents: "none",
        fontFamily: "FA_KJNZEIIUUL",
        overflowWrap: "break-word",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        fontSize: 80,
        transform: "scale(1.2)",
        "@bp0": {
          fontSize: 160,
        },
      }}
    >
      onmedonmedonmedonmedonmedonmedonmed
      onmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmed
      onmedonmedonmedonmedonmedonmedonmed onmedonmedonmedonmedonmedonmedonmed
      onmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmed
      onmedonmedonmedonmedonmedonmedonmed onmedonmedonmedonmedonmedonmedonmed
      onmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmed
      onmedonmedonmedonmedonmedonmedonmed onmedonmedonmedonmedonmedonmedonmed
      onmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmedonmed
      onmedonmedonmedonmedonmedonmedonmed
      {arr.map((elem, index) => {
        const divisible = index % 2 === 0;
        return (
          <Box
            as="span"
            key={index}
            css={{
              borderRadius: divisible ? 300 : 20,
              border: divisible ? "1px solid #19ff00" : "1px solid #fff",
              boxShadow: divisible
                ? "#b2b2b2 1px 1px 18px 0px inset"
                : "rgb(178 178 178) 1px 1px 8px 1px inset",
              color: "#b2b2b2",
              transform: divisible
                ? "rotate(90deg) rotateY(-45deg) skewX(-10deg)"
                : "rotate(33deg) scaleY(1.5)",
            }}
          >
            {elem}
          </Box>
        );
      })}
    </Box>
  );
}
