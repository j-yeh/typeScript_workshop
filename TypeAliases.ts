type Employee = {
  fName: string;
  lName: string;
  //options property
  middleName?: string;
  id: number;
};

type contractEmployee = {
  tenure: number;
  agency: string;
};

//intersection
//it has the type of both
type intern = contractEmployee & Employee;
let myIntern: intern = {
  fName: ' abc',
  lName: 'edd',
  middleName: 'rr',
  id: 2,
  tenure: 2,
  agency: 'ABC',
};

let myNum: number = 5;
let myEmployee: Employee = {
  fName: 'John',
  lName: 'Smith',
  id: 4,
};

//union
//if the data type is any one of these type, it will not throw error
type employeeAge = number | string | null;

let testAge: employeeAge = 14;
testAge = 'ten';
