// type alias definition: Union
type test = number | string;

export interface IPerson {
  PrintTestUnionParam(discrimnatedUnionTest: test): void;
}

export enum humanSex {
  Male,
  Female
}
