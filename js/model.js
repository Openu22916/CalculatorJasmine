function Model() {
    this._phrase = "";
}


Model.prototype.performEval = function()
{
	var result = {
	    type : "good",
        data : 0
    };
	try {
		var solution = eval(this._phrase);
        result.data = solution;
	}
	catch(ex)
	{
        result = {
            type : "bad",
            data : ex.message
        };
	}
	
	
	return result;
};

Model.prototype.addPressedKey = function(key)
{
    this._phrase+= key;
};

Model.prototype.clearData = function()
{
    this._phrase = "";
};