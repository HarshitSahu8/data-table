interface dataType {
  firstName: string;
  lastName: string;
  age: number;
  weight: string;
}

interface tableDataTypes {
  [key: string]: dataType;
}

const tableData: tableDataTypes = {
  "234": {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    weight: "100",
  },
  "235": {
    firstName: "anuj",
    lastName: "sah",
    age: 22,
    weight: "69",
  },
  "236": {
    firstName: "harsh",
    lastName: "gor",
    age: 23,
    weight: "68",
  },
  "237": {
    firstName: "kar",
    lastName: "kumar",
    age: 24,
    weight: "67",
  },
  "238": {
    firstName: "sachin",
    lastName: "kumar",
    age: 25,
    weight: "66",
  },
  "239": {
    firstName: "rahul",
    lastName: "jeet",
    age: 26,
    weight: "65",
  },
  "240": {
    firstName: "saurav",
    lastName: "kumar",
    age: 27,
    weight: "64",
  },
  "241": {
    firstName: "sanjay",
    lastName: "bargav",
    age: 28,
    weight: "63",
  },
  "242": {
    firstName: "souraj",
    lastName: "sa",
    age: 29,
    weight: "62",
  },
  "243": {
    firstName: "sourav",
    lastName: "kumar",
    age: 30,
    weight: "61",
  },
  "244": {
    firstName: "sour",
    lastName: "sanu",
    age: 31,
    weight: "60",
  },
  "245": {
    firstName: "souj",
    lastName: "kumar",
    age: 32,
    weight: "59",
  },
};

export default tableData;
