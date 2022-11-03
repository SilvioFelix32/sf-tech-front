import { createTheme } from "react-data-table-component";

export const darkTable = createTheme("dark", {
  background: {
    background: "#1A202C",
  },
});

createTheme("dark", {
  background: {
    default: "transparent",
  },
});
