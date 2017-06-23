//From Backlog : this is a Test Class according to Task #15
describe("Controller", function() {
  var controller;
  var inputElement;
  var errorLabel;

  beforeEach(function() {
      controller = new Controller();
      controller.clear();
  });

  //From Backlog : This Simple Test within the Test Class of Task #15
  it("should add 6 with 4", function() {
      controller.press("6");
    expect(HTMLElements["mainInput"].value).toEqual("6");

      controller.press("+");
      controller.press("4");
      controller.calc();
      expect(HTMLElements["mainInput"].value).toEqual("10");
  });

  it("should show unexpected end of input error", function() {
      controller.press("+");
      expect(HTMLElements["mainInput"].value).toEqual("+");

      controller.calc();
      expect(HTMLElements["error"].innerText).toEqual("Unexpected end of input");
  });
  
  it("should throw the sample error to reproduce issue 1317", function() {
	 expect(function() {
        controller.ThrowSampleError();
    }).toThrowError(Error); 
	
	expect(function() {
        controller.ThrowSampleError();
    }).toThrowError(); 
  });

});