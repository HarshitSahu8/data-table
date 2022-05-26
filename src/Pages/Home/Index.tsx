import React from "react";
import DataTable from "../../Components/DataTable/Index";
import tableData from "../../constant/tableData";

const rowData = Object.keys(tableData).map((key) => {
  return {
    id: key,
    firstName: tableData[key].firstName,
    lastName: tableData[key].lastName,
    age: tableData[key].age,
    weight: tableData[key].weight,
  };
});

const Home = () => {
  return (
    <div>
      <DataTable rowData={rowData} />
    </div>
  );
};

export default Home;
