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
      borderCollapse: "collapse",
      textAlign: "center",
      position: "relative",
      height: "100%",
      width: "100%",
      margin: "0 auto",
      color: "#33C1B3",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
      overflowX: "auto",
      tableLayout: "fixed",
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
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
      fontWeight: "400",
      color: "#33C1B3",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
    },
  },
  cells: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#33C1B3",
      backgroundColor: `${({ theme }) => theme.colors.background}`,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
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
      cursor: "pointer",
      transition: "0.4s",
      "&:disabled": {
        cursor: "unset",
      },
      svg: {
        fill: "#33C1B3",
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
      color: "#33C1B3",
    },

  },
};

