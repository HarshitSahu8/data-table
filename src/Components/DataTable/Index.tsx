import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useState } from "react";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 100,
    sortable: false,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 100,
    sortable: false,
  },

  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "weight",
    headerName: "Weight",
    type: "number",
    width: 90,
  },
];

const DataTable = (rowData: any) => {
  const [rows, setRows] = useState(rowData.rowData);
  //delete item from object
  const delItem = (item: GridSelectionModel) => {
    let newRows = rows.filter((row: { id: GridRowId }) => {
      return row.id !== item[0];
    });
    setRows(newRows);
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(item) => delItem(item)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
export default DataTable;
