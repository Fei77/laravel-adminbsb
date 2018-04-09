// const PhotoSwipe = require('photoswipe');
// const PhotoSwipeDefaultUi = require('photoswipe/src/js/ui/photoswipe-ui-default')
// Masonry
// var Masonry = function() {
//     "use strict";
//
//     // Handle Masonry Grid
//     var handleMasonryGrid = function() {
//       var $container = $('.masonry-grid');
//
//       // initialize Masonry after all images have loaded
//       $container.imagesLoaded( function() {
//         let msnr = $container.masonry({
//           itemSelector: '.masonry-grid-item', // use a separate class for itemSelector, other than .col-
//           columnWidth: '.masonry-grid-sizer',
//           percentPosition: true
//         });
//       });
//
//       $.fn.masonryImagesReveal = function( $items ) {
// 	  	var msnry = this.data('masonry');
// 	  	var itemSelector = msnry.options.itemSelector;
// 	  	// hide by default
// 	  	$items.hide();
// 	  	// append to container
// 	  	this.append( $items );
// 	  	$items.imagesLoaded().progress( function( imgLoad, image ) {
// 		    // get item
// 		    // image is imagesLoaded class, not <img>, <img> is image.img
// 		    var $item = $( image.img ).parents( itemSelector );
// 		    // un-hide item
// 		    $item.show();
// 		    // masonry does its thing
// 		    msnry.appended( $item );
// 	  	});
//
//       msnry.on('click', '.masonry-grid-item', function(e) {
//         // e.preventDefault()
//         alert('asd')
//       })
//
// 	  	return this;
// 		};
//   }
//
//   return {
//     init: function() {
//       handleMasonryGrid(); // initial setup for masonry grid
//     }
//   }
// }();
//
// $(document).ready(function() {
//   Masonry.init();
// });

// Handle image clicks
$(".work-popup-trigger").on("click", function() {
  var url = $(this).attr("data-url")
  // axios.post(url)
  //   .then(response => {
  //     var items = response.data.result
  //     var pswpElement = document.querySelectorAll('.pswp')[0];
  //     var options = {
  //       history: true,
  //       focus: true,
  //
  //       showAnimationDuration: 0,
  //       hideAnimationDuration: 0,
  //       index: response.data.index // start at first slide
  //     };
  //
  //     // Initializes and opens PhotoSwipe
  //     var gallery = new PhotoSwipe( pswpElement, PhotoSwipeDefaultUi, items, options);
  //     gallery.init();
  //   })
})

$(document).on("click", ".js-album-delete", function(e) {
  e.preventDefault()
  var url = $(this).attr("href")
  var element = $(this).closest(".masonry-grid-item")
  var album = $(this).closest('.js-album')
  // album.masonry.layout()
  helpers.ajaxCall(url, 'DELETE', {}, function(response){
    showNotification('bg-green', response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
    element.remove()
  }, element)
})
