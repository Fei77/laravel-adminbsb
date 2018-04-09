// Handle add input
$(".js-removable-input-add").on("click", function(e) {
	e.preventDefault()
	var element = $(this).prev().clone()
	element.find("input").val("")
  element.insertBefore($(this))
})

// Handdle remove input
$(document).on("click", ".js-removable-input-trigger", function() {
  $(this).closest(".js-removable-input").remove()
})
