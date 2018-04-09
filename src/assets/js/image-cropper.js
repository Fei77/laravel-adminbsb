var croppers = document.getElementsByClassName("image-cropper")

function getCropperData(cropper) {
  var data = {
    height: cropper.attr("data-height"),
    width: cropper.attr("data-width"),
    size: cropper.attr("data-max-size"),
    src: cropper.attr("data-src"),
    name: cropper.attr("data-input-name")
  }

  return data
}

function createElement(name, className=null, type=null) {
  var createdElement = document.createElement(name)
  if (className != '') {
    createdElement.className = className
  }
  if (type != '') {
    createdElement.type = type
  }
  return createdElement
}

function getRealWidth(obj) {
  if (obj.is(".modal-dialog")) {
    var clone = obj.clone()
    clone.css("visibility","hidden");
    $('body').append(clone)
    var width = clone.find(".image-cropper").parent().outerWidth()
    clone.remove()
  } else {
    var width = obj.outerWidth()
  }

  return width
}

function getParent(obj) {
  var modal = obj.closest(".modal-dialog")
  if (modal.length > 0) {
    return modal
  } else {
    return obj.parent()
  }
}

function calculateDimension(num, exportZoom){
  if (exportZoom < 1) {
    return (num * exportZoom)
  } else {
    return (num / exportZoom)
  }
}

for (const cropper of croppers) {
  var container = $(cropper)
  var data = getCropperData(container)
  var exportZoom = getRealWidth(getParent(container)) / data.width


  var inputName = createElement("input", "input-name", "hidden")
    inputName.setAttribute("name", data.name)

  var cropitPreview = createElement("div", "cropit-preview")
    cropitPreview.style.height = calculateDimension(data.height, exportZoom) + "px"
    cropitPreview.style.width = calculateDimension(data.width, exportZoom) + "px"
    cropitPreview.style.margin = "0 auto"

  var imageRules = createElement("div", "image-rules")
  var ruleHeight = createElement("small", "rule")
    ruleHeight.innerHTML = 'Min height: ' + data.height + 'px '

  var ruleWidth = createElement("small", "rule")
    ruleWidth.innerHTML = 'Min width: ' + data.width + 'px '

  var ruleSize = createElement("small", "rule")
    ruleSize.innerHTML = 'Max size: ' + data.size

  var inputImage = createElement("input", "cropit-image-input", "file")

  var inputRange = createElement("input", "cropit-image-zoom-input range-slider", "range")
  var rotateLeft = createElement("i", "material-icons js-rotate-left")
  rotateLeft.innerHTML = "rotate_left"
  var rotateRight = createElement("i", "material-icons js-rotate-right")
  rotateRight.innerHTML = "rotate_right"
  var cropitControls = createElement("div", "cropit-controls")
    cropitControls.append(rotateLeft)
    cropitControls.append(inputRange)
    cropitControls.append(rotateRight)

  imageRules.appendChild(ruleHeight)
  imageRules.appendChild(ruleWidth)
  imageRules.appendChild(ruleSize)

  container.append(cropitPreview)
  container.append(imageRules)
  container.append(inputImage)
  container.append(inputName)
  container.append(cropitControls)
  container.cropit({
    minZoom: 'fit',
    smallImage: 'stretch',
    initialZoom: 'min',
    freeMove: false,
    allowDragNDrop: false,
    imageBackgroundBorderWidth: [15, 0, 15, 0]
  })
  if (data.src != '') {
    container.cropit('imageSrc', data.src)
  }

}

window.onresize = function(e) {
  for (var cropper of croppers) {
    var container = $(cropper)
    var data = getCropperData(container)
    var exportZoom = getRealWidth(getParent(container)) / data.width

    var cropitPreview = container.find(".cropit-preview")
      cropitPreview.css("height", calculateDimension(data.height, exportZoom) + "px")
      cropitPreview.css("width", calculateDimension(data.width, exportZoom) + "px")

    container.cropit('exportZoom', exportZoom)
  }
}

// Handle rotation
$('.js-rotate-left').click(function() {
  $(this).closest('.image-cropper').cropit('rotateCCW')
})
$('.js-rotate-right').click(function() {
  $(this).closest('.image-cropper').cropit('rotateCW')
})

// Validate image dimension
$(".cropit-image-input").bind("change", function() {
  var cropperHeight = $(this).closest('.image-cropper').attr("data-height"),
      cropperWidth = $(this).closest('.image-cropper').attr("data-width"),
      tmp = this.files && this.files[0]

  if (tmp) {
    var img = new Image()

    img.src = window.URL.createObjectURL(tmp)

    img.onload = function() {
      var width = img.naturalWidth,
          height = img.naturalHeight

      if (width < cropperWidth || height < cropperHeight) {
        alert("For better result please select image with minimum dimension of "+cropperWidth+"x"+cropperHeight+" px")
      }

    }
  }
});

$(".js-cropper-export-trigger").on("click", function(e) {
  var form = $(this).closest("form")
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
  form.submit()
})
