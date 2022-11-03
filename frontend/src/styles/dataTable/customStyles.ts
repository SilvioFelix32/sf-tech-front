//https://github.com/jbetancur/react-data-table-component/blob/master/src/DataTable/styles.ts

import { TableStyles } from "react-data-table-component";

export const customStyles: TableStyles = {
  table: {
    style: {
      overflowX: "auto",
      color: `${({ theme }) => theme.colors.primary}`,
      backgroundColor: "#a22",
    },
  },
  tableWrapper: {
    style: {
      display: "table",
      minHeight: "400px",
      width: "70%",
      margin: "0 auto",
      overflowX: "auto",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
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
      color: `${({ theme }) => theme.colors.text}`,
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
      color: `${({ theme }) => theme.colors.text}`,
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
      width: "70%",
      color: `${({ theme }) => theme.colors.primary}`,
      fontSize: "13px",
      minHeight: "56px",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
    pageButtonsStyle: {
      borderRadius: "50%",
      height: "40px",
      width: "40px",
      padding: "8px",
      margin: "px",
      cursor: "pointer",
      transition: "0.4s",
      color: `${({ theme }) => theme.colors.primary}`,
      fill: `${({ theme }) => theme.colors.text}`,
      backgroundColor: "transparent",
      "&:disabled": {
        cursor: "unset",
        color: `${({ theme }) => theme.colors.primary}`,
        fill: `${({ theme }) => theme.colors.primary}`,
      },
      "&:hover:not(:disabled)": {
        backgroundColor: `${({ theme }) => theme.colors.background}`,
      },
      "&:focus": {
        outline: "none",
        backgroundColor: `${({ theme }) => theme.color.background}`,
      },
    },
  },
  noData: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: `${({ theme }) => theme.colors.primary}`,
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
  },
  progress: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: `${({ theme }) => theme.colors.primary}`,
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
  },
};
