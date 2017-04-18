function Controller() {
    this.model = new Model();
}

    Controller.prototype.press = function(key)
    {
        this.setUIValue(key,false);
        this.model.addPressedKey(key);
        this.setErrorMsg("");
    };


    Controller.prototype.clear = function()
    {
        this.model.clearData();
        this.setUIValue("",true);
    };

    Controller.prototype.calc = function()
    {
        var result = this.model.performEval();
        if (result.type === "good")
        {
            this.setUIValue(result.data,true);
        }
        else
        {
            this.setErrorMsg(result.data);
            this.clear();
            this.setUIValue("",true);
        }
    };


    Controller.prototype.setUIValue = function(data,isSettingEntireValue)
    {
        var input = document.getElementById('mainInput');
        if (isSettingEntireValue) {
            input.value = data;
        }
        else
        {
            input.value += data;
        }
    };

    Controller.prototype.setErrorMsg = function(data)
    {
        var errorLabel = document.getElementById('error');
        errorLabel.innerText = data;
    };



_controller = new Controller();