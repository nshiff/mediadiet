






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



        this.echoline("");


        var count_keys = Object.keys(news_dict).length;

        for(var i=0; i<20; i++) {
            var random_subscript = Math.floor(Math.random() * count_keys);
            var random_key = Object.keys(news_dict)[random_subscript];
            var organization_name = pageToName[random_key];
            var organization_score = news_dict[random_key];
            this.echoline(organization_name + "," + organization_score);
        }




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
