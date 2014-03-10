

// call this when AJAX request returns
function complete_task(response,status,xhr)
{
    if (response == "success")
	{
		$("#waiting_container").hide();
		window.location.replace("/study/fsess");
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
    
    $.post("/study/save_post_data", data, complete_task);
    
/*             if ($("#willreport").is(":checked")) {
                
                $.post("/study/formcount/0");    
                } else if ($("#reportedonpaper").is(":checked")) {
                    $.post("/study/formcount/1")
                }
                
        if (photo){
           $.post("/study/save_post_data", data, complete_task_and_upload);
        } else {
            
        }
  */  
    /*if ($('#picupload').val() != "") {
            
            //$.post("/study/upload");
            var csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
            $.ajax({
                        csrfmiddlewaretoken: csrf_token,
                        type: 'POST',
                        url : '/study/upload/',
                        enctype: "multipart/form-data",
                        data  : {
                            'file': $('#picupload').val()
                        },
                        success: function(data) {
                            console.log("UPLOAD SUCCESSFUL");
                            console.log(data);
                        }
                    })
        }*/
	
	//data += "&custom_data=Whatever you want";
	
    
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



