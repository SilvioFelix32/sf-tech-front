//https://github.com/jbetancur/react-data-table-component/blob/master/src/DataTable/styles.ts

import { TableStyles } from "react-data-table-component";

const customStyles: TableStyles = {
  tableWrapper: {
    style: {
      display: "table",
      width: "95vw",
      margin: "0 auto 0 auto",
      overflowX: "auto",
    },
  },
  table: {
    style: {
      display: "block",
      alignItems: "center",
      justifyContent: "center",
      overflowX: "auto",
    },
  },
  rows: {
    style: {
      textAlign: "center",
      minHeight: "60px",
      padding: "6px",
    },
  },
  headCells: {
    style: {
      textTransform: "uppercase",
      color: "var(--gray-500)",
      letterSpacing: "1px",
      fontWeight: "400",
      tableLayout: "fixed",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  cells: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "var(--gray-300)",
      fontWeight: "400",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
  headRow: {
    style: {
      minHeight: "52px",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
    },
  },
  pagination: {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "90vw",
      color: "var(--gray-300)",
      fontSize: "13px",
      minHeight: "56px",
      backgroundColor: "var(--white)",
    },
    pageButtonsStyle: {
      borderRadius: "50%",
      height: "40px",
      width: "40px",
      padding: "8px",
      margin: "px",
      cursor: "pointer",
      transition: "0.4s",
      color: "var(--gray-300)",
      fill: "var(--gray-300)",
      backgroundColor: "transparent",
      "&:disabled": {
        cursor: "unset",
        color: "var(--gray-100)",
        fill: "var(--gray-100)",
      },
      "&:hover:not(:disabled)": {
        backgroundColor: "var(--gray-100)",
      },
      "&:focus": {
        outline: "none",
        backgroundColor: "var(--white)",
      },
    },
  },
  noData: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--gray-300)",
      backgroundColor: "var(--white)",
    },
  },
  progress: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--gray-300)",
      backgroundColor: "var(--gray-100)",
    },
  },
};

export default customStyles;
