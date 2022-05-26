import { createSlice } from "@reduxjs/toolkit";

interface tableDataTypes {
  data: any;
}

const initialState: tableDataTypes = {
  data: [],
};

const dataTableData = createSlice({
  name: "dataTableData",
  initialState,
  reducers: {
    data: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { data } = dataTableData.actions;
export default dataTableData.reducer;
