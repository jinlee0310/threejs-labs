import { globalStyle, GlobalStyleRule } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  whiteSpace: "pre-wrap",
  padding: 0,
  margin: 0,
  width: "100%",
  height: "100%",
});

globalStyle("button", {
  outline: "none",
  border: "none",
  background: "none",
  cursor: "pointer",
  padding: 0,
  margin: 0,
  WebkitTapHighlightColor: "transparent",
});

globalStyle("ul", {
  listStyle: "none",
  margin: 0,
  padding: 0,
});

globalStyle("main", {
  padding: 10,
});

globalStyle("a", {
  textDecoration: "none",
  color: "#212121",
});

globalStyle("a:hover", {
  color: "#adbc9f",
});
