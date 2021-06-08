const Manager = require("../lib/Manager");

describe("manager", () => {
    const manager = new Manager('Liz', '12345', 'test@email.com', '123-456-6789');
    it("getName = name", () => {
      expect(manager.getName()).toEqual('Liz');
    })
    it("getID = id", () => {
      expect(manager.getId()).toEqual('12345');
    })
    it("getEmail = email", () => {
      expect(manager.getEmail()).toEqual('test@email.com');
    })
    it("getNumber = number", () => {
      expect(manager.getNumber()).toEqual('123-456-6789');
    })    
  });