import { IEmployee } from "./IEmployee";
import { IPerson } from "./IPerson";
import { humanSex } from "./IPerson";

export class Employee implements IPerson, IEmployee {
    private fullname: string;

    constructor(
        private firstname: string,
        private lastname: string,
        private birthdate: Date,
        private sex: humanSex,
        private baseSalary: number
    ) {
        this.fullname = "";
        this.UpdateFullname();
    }

    get Fullname(): string {
        return this.fullname;
    }

    get Firstname(): string {
        return this.firstname;
    }

    get Lastname(): string {
        return this.lastname;
    }

    get birtdate(): Date {
        return this.birthdate;
    }

    get Sex(): humanSex {
        return this.sex;
    }

    public CalculateSalary(): number {
        return this.baseSalary * 1.78;
    }

    public PrintTestUnionParam(discrimnatedUnionTest: string | number): void {
        console.log(discrimnatedUnionTest.toString());
    }

    private UpdateFullname() {
        this.fullname = `${this.firstname} ${this.lastname}`;
    }
}
