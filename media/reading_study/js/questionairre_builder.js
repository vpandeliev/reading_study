

function write_table() 
{
    docs = Array(
        {field:"Academic articles", short:'article' },
        {field:"Book or book chapter (incl. textbook)", short:'book' },
        {field:"Lecture slides", short:'slides' },
        {field:"My own notes", short:'mynotes' },
        {field:"Someone else's notes", short:'othernotes' },
        {field:"Encyclopedic article", short:'encyclopedia' },
        {field:"Tutorial or step-by-step procedure (e.g., assignment handout, API example)", short:'procedure' },
        {field:"Scholarly or library record", short:'record' },
        {field:"Programming code", short:'code' },
        {field:"Other (please describe below)", short:'other' }
        					
    );
    
    
    
    for (var i=0;i<docs.length;i++){
    document.write('<fieldset data-role="controlgroup" data-type="horizontal">');
    document.write('<legend>'+docs[i].field+'</legend>');
    };
/*	   
	      <label for="article-0">No documents</label>
	      <input type="radio" name="article" id="article-0" value="0" checked>
	      <label for="article-1">1 document</label>
	      <input type="radio" name="article" id="article-1" value="1"> 
	      <label for="article-24">2 - 4 documents</label>
	      <input type="radio" name="article" id="article-24" value="2"> 
	      <label for="article-510">5 - 10 documents</label>
	      <input type="radio" name="article" id="article-510" value="5"> 
	      <label for="article-11">11 or more documents</label>
	      <input type="radio" name="article" id="article-11" value="11"> 
	  </fieldset>
	
	
	
	
	document.write('<div class="question_container">');
	document.write('	<div class="the_question">')
	document.write('		<h3>' + with_text + "</h3>");
	document.write('	 </div>');
	
	var name = "rationale_" + number;
	document.write('<div class="rationale"><h2><a href="" onclick="return toggle_detail(\''+name+'\',$(this));" class="right">Rationale</a></h2>');
	document.write('<div id="'+name+'" style="display:none;"><p>'+and_rationale+'</p></div></div>');
	
	document.write('<div class="the_answers">');
	document.write('	<table width="100%"><tr>');
	document.write('		<th>No Answer</th>');
	document.write('		<th>Don\'t Know</th>');
	document.write('		<th>Strongly Disagree</th>');
	document.write('		<th>Disagree</th>');
	document.write('		<th>Neutral</th>');
	document.write('		<th>Agree</th>');
	document.write('		<th>Strongly Agree</th>');
	document.write('		<th>Not Applicable</th>');
	document.write('	</tr><tr>')
	document.write('		<td><input type="radio" name="q'+number+'" checked="checked" value="no_answer"></td>');
	document.write('		<td><input type="radio" name="q'+number+'" value="dont_know"></td>');
	document.write('		<td><input type="radio" name="q'+number+'" value="strongly_disagree"></td>');
	document.write('		<td><input type="radio" name="q'+number+'" value="disagree"></td>');
	document.write('		<td><input type="radio" name="q'+number+'" value="neutral"></td>');
	document.write('		<td><input type="radio" name="q'+number+'" value="agree"></td>');
	document.write('		<td><input type="radio" name="q'+number+'" value="strongly_agree"></td>');
	document.write('		<td><input type="radio" name="q'+number+'" value="not_applicable"></td>');
	document.write('	</tr></table>');
	
	document.write('</div>');
	
	document.write('</div>');*/
}
