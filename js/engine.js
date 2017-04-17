var _phrase = "";

function press(key)
{
    var input = document.getElementById('mainInput');
	input.value += key; 
	_phrase+= key;
}

function clear()
{
	_phrase = "";
}

function calc()
{
	var result = performEval(_phrase);
	if (result !== null)
	{
		setResult(result);
	}
	else
	{
        clear();
		setResult("");
	}
}

function setResult(result)
{
	var input = document.getElementById('mainInput');
	input.value = result;
}

function performEval(phrase)
{
	var result = 0;
	try {
		result = eval(phrase);
	}
	catch(ex)
	{
		result = null;
		alert(ex.message);
	}
	return result;
}