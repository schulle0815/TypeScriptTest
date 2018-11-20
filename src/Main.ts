import {Employee} from './Employee'
import {humanSex} from './IPerson'
import {getKeysFromObject, getProperty} from './Utils'

let emp1 = new Employee(
    'Hans', 'Muster', new Date('December 17, 1995'), humanSex.Male, 2390, 1.56)
let emp1Salary = emp1.CalculateSalary()

let keysOfEmp1 = getKeysFromObject<Employee>(emp1)
let p1 = getProperty(emp1, 'Fullname')

console.log(emp1.Fullname)
console.log(emp1Salary)
