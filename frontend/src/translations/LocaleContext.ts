import React from "react";

const defaultValue = {
  locale: "pt",
  setLocale: () => {},
};

export default React.createContext(defaultValue);
