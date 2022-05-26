import {
  DataGrid,
  GridColDef,
  GridSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useState } from "react";

const tableData: any = {
  234: {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    weight: "100",
  },
  235: {
    firstName: "anuj",
    lastName: "sah",
    age: 22,
    weight: "69",
  },
  236: {
    firstName: "harsh",
    lastName: "gor",
    age: 23,
    weight: "68",
  },
  237: {
    firstName: "kar",
    lastName: "kumar",
    age: 24,
    weight: "67",
  },
  238: {
    firstName: "sachin",
    lastName: "kumar",
    age: 25,
    weight: "66",
  },
  239: {
    firstName: "rahul",
    lastName: "jeet",
    age: 26,
    weight: "65",
  },
  240: {
    firstName: "saurav",
    lastName: "kumar",
    age: 27,
    weight: "64",
  },
  241: {
    firstName: "sanjay",
    lastName: "bargav",
    age: 28,
    weight: "63",
  },
  242: {
    firstName: "souraj",
    lastName: "sa",
    age: 29,
    weight: "62",
  },
  243: {
    firstName: "sourav",
    lastName: "kumar",
    age: 30,
    weight: "61",
  },
  244: {
    firstName: "sour",
    lastName: "sanu",
    age: 31,
    weight: "60",
  },
  245: {
    firstName: "souj",
    lastName: "kumar",
    age: 32,
    weight: "59",
  },
};

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
let rowData = Object.keys(tableData).map((key) => {
  return {
    id: key,
    firstName: ` ${tableData[key].firstName}`,
    lastName: ` ${tableData[key].lastName}`,
    age: ` ${tableData[key].age}`,
    weight: ` ${tableData[key].weight}`,
  };
});

const DataTable = () => {
  const [rows, setRows] = useState(rowData);
  //delete item from object
  const delItem = (item: GridSelectionModel) => {
    let newRows = rows.filter((row) => {
      return row.id !== item[0];
    });
    console.log("🚀 ~ file: Index.tsx ~ line 143 ~ newRows ~ rows", rows);
    setRows(newRows);
    console.log(item);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(item) => delItem(item)}
      />
    </div>
  );
};
export default DataTable;
