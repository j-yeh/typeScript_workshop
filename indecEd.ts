type Employee1 = {
  id: number;
  fName: string;
  lName: string;
  //options property
  jobDesc?: {
    term: string;
    tenureInYears: number;
    active: boolean;
  };
};
