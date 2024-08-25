import { globalStyle, GlobalStyleRule } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

const defaultLayout: GlobalStyleRule = {
  whiteSpace: "pre-wrap",
  padding: 0,
  margin: 0,
  width: "100%",
  height: "100%",
};

globalStyle("html", defaultLayout);

globalStyle("body", defaultLayout);

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
