import {IEmployee} from './IEmployee';
import {IKeyValuePair} from './IKeyValuePair';
import {IPerson} from './IPerson';
import {humanSex} from './IPerson';

export class Employee implements IPerson, IEmployee {
  private _fullname: string;

  constructor(
      private _firstname: string, private _lastname: string,
      private _birthdate: Date, private _sex: humanSex,
      private _baseSalary: number) {
    this._fullname = '';
    this.UpdateFullname();
  }

  get fullname(): string {
    return this._fullname;
  }

  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get birtdate(): Date {
    return this._birthdate;
  }

  get sex(): humanSex {
    return this._sex;
  }

  public CalculateSalary(): number {
    return this._baseSalary * 1.78;
  }

  public PrintTestUnionParam(discrimnatedUnionTest: string|number): void {
    console.log(discrimnatedUnionTest.toString());
  }

  private UpdateFullname() {
    this._fullname = `${this._firstname} ${this._lastname}`;
  }
}
