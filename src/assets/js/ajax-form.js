const formJsAction = {
  reload: function(data=null) {
    location.reload()
  },
  redirect: function(data) {
    window.location.href = data
  },
  prevent: function() {
    return
  }
}

$('.js-delete-component').on('click', function(e) {
  e.preventDefault()
  var button = $(this)
  var url = $(this).attr("href")
  var card = button.closest(".card")
  helpers.ajaxCall(url, 'DELETE', {_method: 'DELETE'}, function(response){
    showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
    button.closest(".card").remove()
  }, card)
})

$('.js-style-component').on('click', function(e) {
  e.preventDefault()
  var modal = $($(this).attr("data-target"))
  var url = $(this).attr("href")
  var card = $(this).closest(".card")

  helpers.ajaxCall(url, 'get', {}, function(response){
    var data = response.data.item
    modal.find("form").attr("action", response.data.updateRoute)
    modal.modal("show")
  }, card)
})

$('.js-delete-tags').on('click', function(e) {
  e.preventDefault()
  var element = $(this).closest('li')
  var url = $(this).attr("href")
  helpers.ajaxCall(url, 'DELETE', {_method: 'DELETE'}, function(response){
    showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
    element.remove()
  }, element)
})

$('.js-add-nav').on("change", function(){
  var check = $(this).prop('checked')
  var url = $(this).attr("data-url")
  console.log(url)
  helpers.ajaxCall(url, 'PUT', {is_nav: check}, function(response){
    showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
  })
})

$(".js-ajax-form").on("submit", function(e) {
  e.preventDefault()
  tinyMCE.triggerSave()
  var form = $(this)
  var button = form.find('button[type="submit"]')
  var url = form.attr("action")
  var modal = $(this).closest(".modal")
  var sortable = form.attr("data-sortable")

  // // Export cropper if found
  if (form.find(".image-cropper").length) {
    $.each(form.find(".image-cropper"), function(index) {
      var cropper = $(this)
      var realWidth = cropper.attr("data-width")
      var cropperWidth = cropper.cropit("previewSize")
      var encode = cropper.attr("data-encode")
      var exportZoom = realWidth / cropperWidth.width
      cropper.cropit("exportZoom", exportZoom)
      var image = cropper.cropit("export", {
        type: encode ? encode : 'image/jpeg'
      })

      cropper.find(".input-name").val(image)
    })
  }
  //
  // // Check for file inputs.
  if (form.find('[type=file]').length) {

    // If found, prepare submission via FormData object.
    var input       = form.serializeArray(),
        data        = new FormData(),
        contentType = false;

    // Append input to FormData object.
    $.each(input, function(index, input) {
      data.append(input.name, input.value);
      // console.log(input.value);
    });

    // Append files to FormData object.
    $.each(form.find('[type=file]'), function(index, input) {
      if (input.files.length == 1) {
        data.append(input.name, input.files[0]);
      } else if (input.files.length > 1) {
        data.append(input.name, input.files);
      }
    });
  }
  //
  // // If no file input found, do not use FormData object (better browser compatibility).
  else {
    var data        = form.serialize(),
        contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
  }
  //
  helpers.ajaxCall(url, 'POST', data, function(response){
    var data = response.data

    if (sortable != null) {
      console.log(sortable);
      console.log(data);
      if ('item' in data) {
        var item = data.item

        if($(sortable).find("li[data-sortable-id='" + item.id + "']").length > 0 ) {
          var element = $(sortable).find("li[data-sortable-id='" + item.id + "']")
          // alert('element with same id found')
        } else if ($(sortable).find("li.sortable-item:first-child").length > 0) {
          var element = $(sortable).find("li.sortable-item:first-child").clone()
          var addButton = $(sortable).find(".js-sortable-add")
          if (addButton != null) {
            element.insertBefore(addButton)
          } else {
            $(sortable).append(element)
          }
          // alert('first child found')
        } else {
          // alert('nothing found')
          formJsAction['reload']()
        }

        if (element != null ) {
          console.log(item);
          element.find("img").attr("src", item.previewUrl).attr("alt", item.alt)
          element.attr("data-sortable-id", item.id)
          element.find(".js-sortable-caption").text(item.caption)
          element.find(".js-sortable-icon").find('i').attr("class", item.icon + " fa-2x")
          element.find(".js-sortable-title").text(item.title)
          element.find(".js-sortable-edit").attr("href", data.editRoute)
          element.find(".js-sortable-delete").attr("href", data.deleteRoute)
        }

      }

    }

    showNotification('bg-green', data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
    if (modal != '') {
      modal.modal("hide")
    }

    if ('action' in data) {
      console.log(data)
      formJsAction[data.action](data.param ? data.param : null)
    }

  }, button)

})

// Reset input inside modal
$(".modal").on("hidden.bs.modal", function(e) {
  var modal = $(this)
  modal.find("input.js-reset-input").val("")
  modal.find("textarea.js-reset-input").text("")
  modal.find("select.js-reset-input").val("")
  modal.find(".image-cropper").cropit("imageSrc", null)
  modal.find("input[type=checkbox], input[type=radio]").prop("checked", "")
  $.each(modal.find(".image-cropper"), function(index) {
    var cropper = $(this)
    cropper.cropit("imageSrc", null)
    cropper.find(".cropit-preview-image").attr("src", null)
    cropper.find("input[type='hidden']").val()
  })
})
