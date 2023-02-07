type employeeWithOptional = {
  id: number;
  firstName?: string;
  lastName?: string;
};

type removeOptional<Type> = {
  //for every property, remove the option
  [Property in keyof Type]-?: Type[Property];
};

// enforce read only
type makeReadOnly<Type> = {
  readonly [Property in keyof Type]: Type[Property];
};

type employeeWithoutOptional = removeOptional<employeeWithOptional>;
type employeeReadOnly = makeReadOnly<employeeWithOptional>;

let testEmp: employeeWithoutOptional = {
  id: 4,
  firstName: 'John',
  lastName: 'Doe',
};
