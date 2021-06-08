const Employee = require("../lib/Employee");

describe("employee", () => {
    const employee = new Employee('Liz', '12345', 'test@email.com');
    it("getName = name", () => {
      expect(employee.getName()).toEqual('Liz');
    })
    it("getID = id", () => {
      expect(employee.getId()).toEqual('12345');
    })
    it("getEmail = email", () => {
      expect(employee.getEmail()).toEqual('test@email.com');
    })
  });