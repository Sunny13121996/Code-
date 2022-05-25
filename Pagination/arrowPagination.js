/*
	[<] prev [>] next
*/

// ----------- ROUTES ------------------

app.get('/arrowPagination/:name', arrowPagination);

// ----------- NODEJS backend ----------

function arrowPagination (req, res) {
	let params = req.query;
	if(params.pageNum != undefined){
	    page = parseInt(params.pageNum, 10) - 1;
	}
	var limit  = 12;
	var offset = page * limit;
	appModel.query(`SELECT * FROM table LIMIT ${offset}, ${limit}`, (err, success)=>{
		if(err){
			console.log(err)
		}else{
			res.render('arrowPagination.ejs', {
			    rows        : success,
			    params      : params,
			    pageHeading : `${req.params.name}`,
			    no_pages    : success.length,
			    cur_page    : params.pageNum,
			    categoryId  : params.category_id
			});
		}
	})
}

//---------- arrowPagination.ejs ------------
/*
<% if(rows.length > 0) { %>
	<% if(rows.length > 11) { %>
	  	<div class="pagnaitions">
	    	<% if (no_pages > 0) { %>
	      		<nav class="text-center">
	        		<ul class="pagination justify-content-center">  
		            	<% 
		              		let pagination_href = `/arrowPagination/${pageHeading}/?parent=${params.parent}&category_id=${params.category_id}&mainId=${params.mainId}`;
		            	%>
		            	<% if (cur_page == 1) { %>
		              		<li class="page-item disabled">
		                		<a class="page-link" href="#" tabindex="-1"><i class="far fa-arrow-alt-circle-left"></i> </a>
		              		</li>
		            	<% } else { %>
		              		<li class="page-item active">
		                		<a class="page-link" href="<%= pagination_href %>&pageNum=<%= cur_page-1 %>"><i class="far fa-arrow-alt-circle-left"></i> </a>
		              		</li>
		            	<% } %> 
		            	<% if (cur_page == no_pages) { %>
		              		<li class="page-item disabled"><a class="page-link" href="#"><i class="far fa-arrow-alt-circle-right"></i> </a></li>
		            	<% } else{ %>
		              		<li class="page-item active"><a class="page-link" href="<%= pagination_href %>&pageNum=<%= Number(cur_page)+1 %>"><i class="far fa-arrow-alt-circle-right"></i> </a></li>
		            	<% } %> 
	        		</ul>
	    		</nav>
	    	<% } %> 
	  	</div>
	<% } %>
<% } else{ %>
	<div class="d-flex align-items-center mb-2">
	  <div class="w-100 position-relative">
	    <div id="rendercls" class="border border-left-5 rounded small fw-bold text-secondary px-2 py-3 cursor-pointer text-start cursor-pointer text-start" data-id="<%= locals.user%>">No records found!
	    </div>
	  </div>
	</div> 
<% } %>
*/