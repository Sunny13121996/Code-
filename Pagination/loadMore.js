/*
	[LOAD MORE] 
*/

// ----------- NODEJS backend ----------

app.get('/', (req, res) => {
	const generatePagination = (params) => {
		if(params.pageNum != undefined) {
		    page = parseInt(params.pageNum, 10) - 1;
		}
		let limit  = 4;
		let offset = page * limit;
	 	return `${offset}, ${limit}`;
	};
	let SELECT = ``;
	if (Object.keys(req.query).length > 0) {
		SELECT = `SELECT id, eventname, (SELECT MAX(id) FROM toolbox_staging.tbox_events) as maxRecordId FROM toolbox_staging.tbox_events WHERE id > ${req.query.lastId} LIMIT ${generatePagination(req.query)}`;
	} else {
		SELECT = `SELECT id, eventname FROM toolbox_staging.tbox_events LIMIT 4`;
	}
	CONNECTION().query(SELECT, (err, results) => {
		if (!err) {
			if (Object.keys(req.query).length > 0) {
				res.json({ users: results, maxRecordId: results[0].maxRecordId })
			} else {
				res.render('index.ejs', { users: results })
			}
		} else {
			throw err;
		}
	})
})

//---------- pagination.ejs ------------

/*
<div class="container">
	<div class="row" id="usersRecords">
	  <% if (users.length > 0) { %>
	    <% users.forEach((el) => { %>
	      <div class="col-md-3 mt-4">
	        <div class="card">
	          <div class="card-body"><p><%= el.eventname %> <sup><%= el.id %></sup></p></div>
	        </div>
	      </div>
	    <% }) %>
	  <% } %>
	</div>
	<div class="text-center mt-4">
	  <button type="button" class="btn btn-primary" id="loadMore" data-page="1" data-last_record_id="<%= users[users.length-1].id %>">Load More</button>
	</div>
</div>
<script type="text/javascript">
  const loadRecords = (params) => { return new Promise((resolve, reject) => { $.ajax({ type : "GET", url  : window.location.pathname, data  : `pageNum=${params.pageNum}&lastId=${Number(params.lastId)}`, success: function(res) { resolve(res); }, error : function (err) { reject(res); } }); }) };
  $("#loadMore").click(async function() { let data = await loadRecords({ pageNum: $(this).data('page'), lastId : $(this).data('last_record_id') }); if (data.users.length > 0) { data.users.forEach((el) => { $(`#usersRecords`).append(` <div class="col-md-3 mt-4"> <div class="card"> <div class="card-body"><p>${el.eventname} <sup>${el.id}</sup></p></div> </div> </div> `); }); $(this).data('last_record_id', data.users[data.users.length-1].id); if (Number(data.maxRecordId) == Number(data.users[data.users.length-1].id)) { $(this).parent().remove(); } }
  });
</script>

*/