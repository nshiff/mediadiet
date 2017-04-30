// parsing https://www.allsides.com/bias/bias-ratings

var news_source = ".source-title";
var allsides_bias_rating = ".views-field-field-bias-image";
var what_do_you_think = ".what-do-you-think";
var community_feedback = "community-feedback";


console.log("news_source,allsides_bias_rating");

var rows = jQuery(".views-table tr").each(function(){

    var output = "";
    output += jQuery(this).find(news_source + " a").html();
    output += ",";

    output += jQuery(this).find(allsides_bias_rating + " a").attr("href");

    console.log(output);

});



