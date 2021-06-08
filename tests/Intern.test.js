const Intern = require("../lib/Intern");

describe("intern", () => {
    const intern = new Intern('Liz', '12345', 'test@email.com', 'ECU');
    it("getName = name", () => {
      expect(intern.getName()).toEqual('Liz');
    })
    it("getID = id", () => {
      expect(intern.getId()).toEqual('12345');
    })
    it("getEmail = email", () => {
      expect(intern.getEmail()).toEqual('test@email.com');
    })
    it("getSchool = school", () => {
      expect(intern.getSchool()).toEqual('ECU');
    })    
  });