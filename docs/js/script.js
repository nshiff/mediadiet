






var Reporter = {
    NEWLINE: "\n",
    generateReport: function(score_economic, score_social){


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
