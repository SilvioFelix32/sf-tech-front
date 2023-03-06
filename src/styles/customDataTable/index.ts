import { TableStyles } from "react-data-table-component";

export const customStyles: TableStyles = {
  table: {
    style: {
      color: "#33C1B3",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
  },
  tableWrapper: {
    style: {
      display: "table",
      minHeight: "400px",
      width: "100%",
      margin: "0 auto",
      color: "#33C1B3",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
  },
  rows: {
    style: {
      minHeight: "60px",
      padding: "6px",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
  },
  headCells: {
    style: {
      fontWeight: "400",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#33C1B3",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
  },
  cells: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textOverflow: "ellipsis",
      color: "#33C1B3",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
  },
  headRow: {
    style: {
      minHeight: "52px",
      color: "#33C1B3",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
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
      color: "#33C1B3",
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
