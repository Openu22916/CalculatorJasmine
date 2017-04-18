describe("Controller", function() {
  var controller;
  var inputElement;
  var errorLabel;

  beforeEach(function() {
      controller = new Controller();
      controller.clear();
  });

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

});