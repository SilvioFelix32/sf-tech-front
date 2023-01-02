import { createTheme } from "react-data-table-component";

export const lightTable = createTheme(
  "light",
  {
    text: {
      primary: "#002",
      secondary: "#2D3748",
    },
    background: {
      default: "#FFFFFF",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "#aaa",
    },
  },
  "dark"
);

export const darkTable = createTheme(
  "dark",
  {
    text: {
      primary: "#FFF",
      secondary: "#fff",
    },
    background: {
      default: "#1A202C",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "#aaa",
    },
  },
  "light"
);
