

// call this when AJAX request returns
function complete_task(response,status,xhr)
{
	if (response == "success")
	{
		$("#waiting_container").hide();
		window.location = "/study/fsess";
	} else {
		$("#waiting_container").hide();
		$("#retry_container").show();
	}
}

// Send arbitrary JSON data to /???/save_data
function submit_data()
{
	//$("#submit_container").hide();
	//$("#waiting_container").show();
	
	var data = $("#diary_form").serialize();	
	var jsondata = $("#diary_form").serializeArray();

    
	//console.log(jsondata);
    var arrayLength = jsondata.length;
    for (var i = 0; i < arrayLength; i++) {
        if (jsondata[i]["name"] =="didyouread"){
            response_type = jsondata[i]["value"];
             if (response_type =="willreport") {
                
                $.post("/study/formcount");    
        }
        }
	}
	//data += "&custom_data=Whatever you want";
	
	$.post("/study/save_post_data", data, complete_task);
}


function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}

function go_to_survey() {
	$('#reading_background').toggle();
	$('#reading_questions').toggle();
	$('#reading_questions').style.display = 'block';
	
};



