//https://github.com/jbetancur/react-data-table-component/blob/master/src/DataTable/styles.ts
import { TableStyles } from "react-data-table-component";

export const customStyles: TableStyles = {
  table: {
    style: {
      overflowX: "auto",
    },
  },
  tableWrapper: {
    style: {
      display: "table",
      minHeight: "400px",
      width: "100%",
      margin: "0 auto",
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
      width: "100%",
      fontSize: "13px",
      minHeight: "56px",
    },
    pageButtonsStyle: {
      borderRadius: "50%",
      height: "40px",
      width: "40px",
      padding: "8px",
      margin: "px",
      cursor: "pointer",
      transition: "0.4s",
      backgroundColor: "transparent",
      "&:disabled": {
        cursor: "unset",
      },
      "&:hover:not(:disabled)": {},
      "&:focus": {
        outline: "none",
      },
    },
  },
  noData: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  progress: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
};
