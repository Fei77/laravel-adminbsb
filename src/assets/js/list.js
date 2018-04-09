$('.js-delete-list').on('click', function(e) {
  e.preventDefault()
  var button = $(this)
  var url = button.attr("href")
  var card = button.closest(".list-group-item")
  helpers.ajaxCall(url, 'DELETE', {_method: 'DELETE'}, function(response){
    showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
    card.remove()
  }, card)
})

// Handle edit
$(document).on("click", ".js-edit-list", function(e) {
  e.preventDefault()
  var button = $(this)
  var modal = $(button.attr("data-target"))
  var url = button.attr("href")
  var card = button.closest(".list-group-item")

  helpers.ajaxCall(url, 'get', {}, function(response){
    var data = response.data.item
    var cropper = modal.find(".image-cropper")

    if (cropper.length >0) {
      cropper.cropit("imageSrc", data.originalUrl)
    }

    for (var translation of data.translations) {
      // console.log(translation)
      var name = modal.find("input[name='translations[" + translation.locale + "][name]']")

      if (name.length > 0) {
        name.val(translation.name)
      }

    }
    modal.find("input[name='_method']").val("PUT")
    modal.find("form").attr("action", response.data.updateRoute)
    modal.modal("show")
  }, card)
})
