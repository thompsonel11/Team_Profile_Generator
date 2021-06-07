const engineer = require("lib/Engineer.js");

describe("engineer", () => {
    const engineer = new engineer('Liz', '12345', 'test@email.com');
    it("getName = name", () => {
      expect(engineer.getName()).toEqual('Liz');
    })
    it("getID = id", () => {
      expect(engineer.getId()).toEqual('12345');
    })
    it("getEmail = email", () => {
      expect(engineer.getEmail()).toEqual('test@email.com');
    })
  });