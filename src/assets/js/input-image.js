$('.js-input-image').on('change', function() {
  var parent = $(this).parents(".js-input-image-wrapper");
    readURLTrack(this);

    function readURLTrack(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        parent.find('img.js-img-preview').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
	}
});
