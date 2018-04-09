// require('jquery.tabulator')

let jsTables = document.getElementsByClassName("js-table")

for (let jsTable of jsTables) {
  let jsDt = $(jsTable)
  var columns = []

  $.each(jsDt.find("th"), function(i) {
    var field = $(this).attr("data-field")
    var title = $(this).text()

    columns.push({ data: field, name: field})
  })

  jsDt.dataTable({
    processing: true,
    serverSide: true,
    // responsive: true,
    columns: columns,
    ajax: {
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
			url: jsDt.attr("data-url"),
      method: 'POST'
    }
  })
}


// Handle add modal

$(".js-dt-add").on("click", function(e) {
  e.preventDefault()
  var url = $(this).attr("href")
  var modal = $($(this).attr("data-target"))
  modal.modal("show")
})
// Handle delete
$(document).on("click", ".js-dt-delete", function(e) {
  e.preventDefault()
  var url = $(this).attr("href")
  var table = $(this).closest("table")
  var button = $(this)
  helpers.ajaxCall(url, 'delete', {}, function(response) {
    showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
    table.DataTable().ajax.url(table.attr("data-url")).load()
  }, button)
})
