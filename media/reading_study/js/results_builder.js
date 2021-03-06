

// Load the user's answers from the tangra server
var url = "/exe_interface/get_user_data";
var data = null;
var dataType =" json";

$.ajax({
    url: url,
    data: data,
    success: success,
    dataType: dataType
});


global_results = new Array();


function parse_results_string(results_string)
{
    var results =   { 
                        "strongly_disagree":new Array(), 
                        "disagree": new Array(),
                        "dont_know": new Array(),
                        "neutral": new Array()
                    };
    
    var results_array = results_string.trim().split("\n");
    for (var i=0; i<results_array.length; i++) {
        var question_data = results_array[i].split(",");
        var response = question_data[1];
        var question_id = question_data[0];
        var question_num = parseInt(question_id.substring(1));
        
        if (results[response]) {
            results[response].push(question_num)
        }
    }
    
    return results;
}


function success(data, textStatus, jqXHR)
{
    var injury_results_string = data["rural_medicine_questionairre"][0];
    var parsed_injury_results = parse_results_string(injury_results_string);
    generate_response("#tab1box", parsed_injury_results, injury_descriptions, injury_questions, injury_links);
    
    var housing_results_string = data["rural_medicine_questionairre"][1];
    var parsed_housing_results = parse_results_string(housing_results_string);
    generate_response("#tab2box", parsed_housing_results, housing_descriptions, housing_questions, housing_links);
    
    $("#shipley_form").show();
    $("#loading_box").hide();
}


function write_question(with_text, and_link) 
{
    html_string = '\
        <div class="question_container">\
            <div class="the_question">\
                <p>' + with_text + '</p>\
            </div>\
            <div class="the_answers">\
                <center><a href="'+and_link +'">' + and_link + '</a></center>\
            </div>\
        </div>';
    
    return html_string;
}

function generate_response(in_this_div, from_these_results, with_interventions, questions, and_links)
{
    var response_categories = ["strongly_disagree", "disagree", "dont_know", "neutral"];
    var english_translation = ["strongly disagreed that:", "disagreed that:", "didn't know if:", "were neutral about whether:"];
    var html_string = "";
    
    for (var i=0; i<response_categories.length; i++) 
    {
        // TODO: pass paramater
        var answers_in_category = from_these_results[response_categories[i]];
        for(var j=0; j<answers_in_category.length; j++)
        {
            html_string += '                                                    \
                <div class="intervention_box">                                  \
                    <div class="intervention_header">                           \
                        Because you ' + english_translation[i] + '              \
                    </div>                                                      \
                    <div class="intervention_question">                         \
                        ' + questions[i] + '                                    \
                    </div>                                                      \
                    <div class="intervention_header">                           \
                        You may be interested in the following:                 \
                    </div>';
                    
            var answer_num = answers_in_category[j];
            var the_description =  with_interventions[answer_num];
            var the_intervention = and_links[answer_num];
            
            if ($.isArray(the_description)) {
                for (var k=0; k<the_description.length; k++)
                {
                    html_string += write_question(the_description[k], the_intervention[k])
                }
            } else {
                html_string += write_question(the_description, the_intervention);
            }
            
            html_string += '</div>';
        }
    }
    
    $(in_this_div).append(html_string);
}
