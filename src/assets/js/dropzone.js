var dropElement = document.getElementsByClassName('js-dropzone')
// for (var element of dropElement) {
//   var drop = $(element)
//   var url = drop.attr('data-url')
//   var name = drop.attr('name')
//   // drop.dropzone({
//   //   url: url,
//   //   paramName: name,
//   //   error: function(error) {
//   //     console.log(error)
//   //   }
//   // })
//   drop.on("change", function() {
//     var input = $(this)
//     var data = new FormData()
//     var file = input.value.split("\\");
//     var fileName = file[file.length-1];
//
//     data.append(name, file);
//
//     helpers.ajaxCall(url, 'POST', data, function(response){
//       showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight')
//     }, drop.closest('js-dropzone'))
//   })
// }

// $('#drop-input').on('change', function() {
//   var input = document.getElementById("#drop-input");
//   var file = input.value.split("\\");
//   var fileName = file[file.length-1];
//   var url = $(this).attr('data-url')
//   var name = $(this).attr('name')
//
//   var data = new FormData()
//
//   data.append(name, file)
//
//   helpers.ajaxCall(url, 'POST', data, function(response){
//     showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight')
//   }, $(input).closest('js-dropzone'))
// })

for (var element of dropElement) {
  var drop = $(this)
  var input = drop.find('#drop-input')
  var url = $('#drop-input').attr('data-url')
  var product_id = $('#drop-input').attr('data-product')
  console.log(product_id);
  console.log(url);

  $('#drop-input').fileupload({
      url: url,
      formData: {product_id: product_id},
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  	},
    error: function(msg) {
      if( msg.status === 401 ) {
        $(location).prop('pathname', 'auth/login');
      }
      if ( msg.status === 422 ) {
        var errors = msg.responseJSON;
        $.each( errors.errors, function(key, value) {
          showNotification('bg-red', value[0], 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
        });
      } else {
        showNotification('bg-red', msg.statusText, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
      }
    },
    success: function (response) {
      console.log(response)
      showNotification('bg-green', response.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
      $(".js-album-container").append(response.picture);
    },
    progressall: function (e, data) {
      var progress = parseInt(data.loaded / data.total * 100, 10);
      $('.progress .progress-bar').css(
        'width',
        progress + '%'
      );
    },
    complete: function() {
    	$('.progress .progress-bar').css(
          'width', '0%'
        );
    },
    limitConcurrentUploads: 1,
    sequentialUploads: true,
    }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');
}
