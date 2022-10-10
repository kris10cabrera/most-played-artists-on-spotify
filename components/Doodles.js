import Box from "./base/Box";

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
        maxWidth: "60%",
        fontSize: 80,
        transformOrigin: "right",
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
    </Box>
  );
}
