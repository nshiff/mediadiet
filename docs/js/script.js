






var Reporter = {
    NEWLINE: "\n",
    _report: "",
    _isNumeric: function(n) {
        // http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    _massageNumericInput: function(inputValue){
        var afterMassage = 0;
        if(!this._isNumeric(inputValue)){
            return afterMassage;
        }
        afterMassage = Math.min(10, inputValue);
        afterMassage = Math.max(-10, afterMassage);
        return afterMassage;
    },

    echoline: function(line){
        this._report += line + this.NEWLINE;
    },

    generateReportAsHtml: function(score_economic, score_social){
        this._report = "";
        score_economic = this._massageNumericInput(score_economic);
        score_social = this._massageNumericInput(score_social);
        this.echoline("--- Summary ---");
        this.echoline("score_economic: " + score_economic);
        this.echoline("score_social: " + score_social);

        return '<pre>' + this._report + '</pre>';
    }

};

jQuery(document).ready(function(){
    jQuery('form#beliefs a').on('click',function(){
        var score_economic = jQuery('input#economic').val();
        var score_social = jQuery('input#social').val();
        var report = Reporter.generateReportAsHtml(score_economic, score_social);
        jQuery('#output').html(report);
    });
});
