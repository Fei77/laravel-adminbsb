var elements = document.getElementsByClassName("sortable")

function sortelement() {
  for (let sortElement of elements) {
    var url = sortElement.getAttribute("data-sortable-url")
    Sortable.create(sortElement, {
      animation: 150,
      // filter: ".card",
      // preventOnFilter: false,
      onEnd: function(event) {
        let list = []

        var childs = document.querySelectorAll("ol#" + sortElement.getAttribute("id") + ">li.sortable-item")

        console.log(sortElement.getAttribute("id") + 'asdasd');
        console.log(childs);
        console.log(list)

        for (var child of childs) {
          list.push(child.getAttribute("data-sortable-id"))
        }

        helpers.ajaxCall(url, 'post', {list: list}, function(response){
          showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
        })
      }
    })
  }
}
$(document).on("ready", function() {
  sortelement()
})

// Handle add
$(document).on("click", ".js-sortable-add", function(e) {
  e.preventDefault()
  var modal = $($(this).attr("data-target"))
  var url = $(this).attr("href")
  var sortable = $(this).attr("data-sortable")
  var section = $(this).attr("data-section")
  if (section != null) {
    modal.find("input[name='section_id']").val(section)
  }
  modal.find("input[name='_method']").val("POST")
  modal.find("form").attr("action", url).attr("data-sortable", sortable)
  modal.modal("show")
})
// Handle edit
$(document).on("click", ".js-sortable-edit", function(e) {
  e.preventDefault()
  var modal = $($(this).attr("data-target"))
  var url = $(this).attr("href")
  var sortable = $(this).closest("ol.sortable").attr("id")
  modal.find("form").attr("data-sortable", "#" + sortable)

  helpers.ajaxCall(url, 'get', {}, function(response){
    var data = response.data.item
    var cropper = modal.find(".image-cropper")

    if (cropper.length >0) {
      cropper.cropit("imageSrc", data.originalUrl)
    }

    for (var translation of data.translations) {
      // console.log(translation)
      var caption = modal.find("input[name='translations[" + translation.locale + "][caption]']")
      var title = modal.find("input[name='translations[" + translation.locale + "][title]']")
      var content = modal.find("input[name='translations[" + translation.locale + "][content]']")

      if (caption.length > 0) {
        caption.val(translation.caption)
      }
      if (title.length > 0) {
        title.val(translation.title)
      }
      if (content.length > 0) {
        content.text(translation.content)
      }

    }
    modal.find("input[name='_method']").val("PUT")
    modal.find("form").attr("action", response.data.updateRoute)
    modal.modal("show")
  })
})

$(document).on("click", ".js-sortable-delete", function(e) {
  e.preventDefault()
  var url = $(this).attr("href")
  var element = $(this).closest(".sortable-item")
  helpers.ajaxCall(url, 'DELETE', {}, function(response){
    showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
    element.remove()
  })
})
