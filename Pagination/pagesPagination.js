/*
	[1],[2],[3],[4],[5] .... 
*/


// ----------- ROUTES ------------------

app.get('/pagination/:pageNum', require('../controllers/frontend/pages').pagination);

// ----------- NODEJS backend ----------

function pagination (req, res) {
	if(pageNum != undefined){
	    page = parseInt(pageNum, 10) - 1;
	}
	var limit  = 12;
	var offset = page * limit;
	appModel.query(`SELECT * FROM table LIMIT ${offset}, ${limit}`, (err, success)=>{
		if(err){
			console.log(err)
		}else{
			res.render('pagination.ejs', {
	            cur_page: pageNum,
	            no_pages: success.length
	        });
		}
	})
}


//---------- pagination.ejs ------------

/*
<% if (no_pages > 0) { %>
    <nav aria-label="...">
        <ul class="pagination">  
            <%  var pagination_href = "/pagination" %>
            <% if (cur_page == 1) { %>
              	<li class="page-item disabled">
               	 	<a class="page-link" href="#" tabindex="-1">Previous</a>
              	</li>
            <% } else { %>
              	<li class="page-item active">
                	<a class="page-link" href="<%= pagination_href %>/<%= cur_page-1 %>">Previous</a>
              	</li>
            <% } %> 
            <% var i = (Number(cur_page) > 5 ? Number(cur_page) - 4 : 1) %>
            <% if (i !== 1) { %>
              	<li class="page-item disabled"><a>...</a></li>
            <% } %>
            <% for (; i <= (Number(cur_page) + 4) && i <= no_pages; i++) { %>
              	<% if (i == cur_page) { %>
                	<li class="page-item active"><a class="page-link"><%= i %></a></li>
              	<% } else { %>
                	<li class="page-item <% if(cur_page == i){ %>active<% } %>"><a class="page-link" href="<%= pagination_href %>/<%= i %>"><%= i %></a></li> 
              	<% } %>
              	<% if (i == Number(cur_page) + 4 && i < no_pages) { %>
                	<li class="page-item disabled"><a>...</a></li>
              	<% } %>
            <% } %>
            <% if (cur_page == no_pages) { %>
              <li class="page-item disabled"><a class="page-link" href="#">Next</a></li>
            <% } else{ %>
              <li class="page-item active"><a class="page-link" href="<%= pagination_href %>/<%= Number(cur_page)+1 %>">Next</a></li>
            <% } %> 
        </ul>
    </nav>
<% } %>
*/