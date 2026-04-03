export class EmployeeStatistics {
    constructor(employees) {
        if (IsNullOrUndefined(employees) || !Array.isArray(employees) || employees.length === 0)
        {
            throw new Error("A dolgozók mefadása kötelező")
        }
        else 
        {
        this.employees = employees;
        }
    }

    GetAverageSalary() {
        let total = 0;
        for (const employee of this.employees) {
            total += employee.salary;
        }
        return total / this.employees.length;
    }

    GetMaxSalary() {
        let max = this.employees[0];
        for (let i = 1; i < this.employees.length; i++) {
            const element = this.employees[i];
            if (element.salary > max.salary) {
                max = element;
            }
        }
        return max.salary;
    }

    GetMinSalary()
    {
        let min = this.employees[0];
        for (let i = 1; i < this.employees.length; i++) {
            const element = this.employees[i];
            if (element.salary < min.salary) {
                min = element;
            }
        }
        return min.salary;
    }

    GetAvarageAge() 
    {
        let total = 0;
        for (const employee of this.employees) {
            total += employee.age;
        }
        return total / this.employees.length;
    }

    GetHighestPaidEmployee() {
        let max = this.employees[0];
        for (let i = 1; i < this.employees.length; i++) {
            const element = this.employees[i];
            if (element.salary > max.salary) {
                max = element;
            }
        }
        return max.name;
    }
}

class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}