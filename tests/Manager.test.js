const manager = require("lib/Manager.js");

describe("manager", () => {
    const manager = new manager('Liz', '12345', 'test@email.com', '123-456-6789');
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
      expect(manager.getSchool()).toEqual('123-456-6789');
    })    
  });