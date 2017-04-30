






var Reporter = {
    NEWLINE: "\n",

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
    generateReport: function(score_economic, score_social){
        score_economic = this._massageNumericInput(score_economic);
        score_social = this._massageNumericInput(score_social);

        var report = "";
        report += "<pre>";

        report += "score_economic: " + score_economic;
        report += this.NEWLINE;
        report += "score_social: " + score_social;


        report += "</pre>";
        return report;
    }



};

jQuery(document).ready(function(){
    jQuery('form#beliefs a').on('click',function(){
        var score_economic = jQuery('input#economic').val();
        var score_social = jQuery('input#social').val();
        var report = Reporter.generateReport(score_economic, score_social);
        jQuery('#output').html(report);
    });
});
