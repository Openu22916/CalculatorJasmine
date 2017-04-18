
inputElement = document.createElement("INPUT");
inputElement.type = "text";
inputElement.id = "mainInput";

errorLabel = document.createElement("Label");
errorLabel.id = "error";

var HTMLElements = {
    "mainInput" : inputElement,
    "error" : errorLabel
};

document.getElementById = jasmine.createSpy('HTML Element').and.callFake(function(ID) {
    if(!HTMLElements[ID]) {
        var newElement = document.createElement('div');
        HTMLElements[ID] = newElement;
    }
    return HTMLElements[ID];
});
