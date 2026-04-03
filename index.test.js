import { describe, it, expect} from "vitest";
import { EmployeeStatistics } from ".";



describe("EmployeeStatisticsTest 1", () => {
    const employees = [
        { name: "Masztur Bálint", age: 30, salary: 50000 },
        { name: "Gipsz Jakab", age: 20, salary: 60000 },
        { name: "John Fortnite", age: 40, salary: 55000 }
    ];
    const stats = new EmployeeStatistics(employees);
    
    it("GetAverageSalary", () => {
        expect(stats.GetAverageSalary()).toBe(55000);
    });

    it("GetMaxSalary", () => {
        expect(stats.GetMaxSalary()).toBe(60000);
    });

    it("GetMinSalary", () => {
        expect(stats.GetMinSalary()).toBe(50000);
    });

    it("GetAvarageAge", () => {
        expect(stats.GetAvarageAge()).toBe(30);
    }); 

    it("GetHighestPaidEmployee", () => {
        expect(stats.GetHighestPaidEmployee()).toBe("Gipsz Jakab");
    });
});


describe("EmployeeStatisticsTest 2", () => {
    const employees = [
        { name: "Masztur Bálint", age: 60, salary: 100000 },
        { name: "Gipsz Jakab", age: 50, salary: 50000 },
        { name: "John Fortnite", age: 40, salary: 75000 }
    ];
    const stats = new EmployeeStatistics(employees);
    
    it("GetAverageSalary", () => {
        expect(stats.GetAverageSalary()).toBe(75000);
    });

    it("GetMaxSalary", () => {
        expect(stats.GetMaxSalary()).toBe(100000);
    });

    it("GetMinSalary", () => {
        expect(stats.GetMinSalary()).toBe(50000);
    });

    it("GetAvarageAge", () => {
        expect(stats.GetAvarageAge()).toBe(50);
    }); 

    it("GetHighestPaidEmployee", () => {
        expect(stats.GetHighestPaidEmployee()).toBe("Masztur Bálint");
    });
});



describe("ConstructorEmployeeStatistics", () => {
    it("should throw error, EmptyArray", () => {
        expect(() => new EmployeeStatistics([])).toThrow();
    });

    it("should throw error, nullArray", () => {
        expect(() => new EmployeeStatistics(null)).toThrow();   
    })

    it("should throw error, NotAnArray", () => {
        expect(() => new EmployeeStatistics("Jeff")).toThrow();
    })
})
