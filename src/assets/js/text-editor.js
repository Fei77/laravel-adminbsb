//TinyMCE
tinymce.init({
    selector: "textarea.js-tinymce",
    theme: "modern",
    height: 300,
    plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools'
    ],
    toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    toolbar2: 'print preview media | forecolor backcolor emoticons',
    image_advtab: true
});

// hljs.configure({
//   useBR: true,
//   languages: ['css']
// });
//
// $('div.js-code').each(function(i, block) {
//   hljs.highlightBlock(block);
// });

// require('quill-image-resize-module/image-resize.min')

// var elements = document.getElementsByClassName("textarea.js-tinymce")
//
// function selectLocalImage(editor) {
//   var input = document.createElement('input');
//   input.setAttribute('type', 'file');
//   input.click();
//
//   input.onchange = () => {
//     var file = input.files[0];
//
//     if (/^image\//.test(file.type)) {
//       saveToServer(file, function(res) {
//         var range = editor.getSelection();
//         editor.insertEmbed(range.index, 'image', res);
//       })
//     } else {
//       console.warn('You could only upload images.');
//     }
//   };
// }
//
// function saveToServer(image, callback) {
//   var data = new FormData()
//   data.append('image', image)
//
//   helpers.ajaxCall(route('api.image.push'), 'POST', data, function(response){
//     callback(response.data.link)
//   })
// }
//
// for (var element of elements) {
//   var inputName = element.getAttribute("data-input-name")
//   var textArea = document.createElement("textarea")
//
//   textArea.setAttribute("name", inputName)
//   textArea.style.display = "none"
//   element.parentNode.appendChild(textArea)
//
//   var editor = new Quill(element, {
//     modules: {
//       imageResize: {},
//       toolbar: [
//         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//         ['bold', 'italic', 'underline', 'strike'],
//         ['link', 'blockquote', 'code-block', 'image'],
//         [{ list: 'ordered' }, { list: 'bullet' }],
//         [{ 'align': [] }]
//       ]
//     },
//     theme: "snow"
//   })
//   editor.getModule('toolbar').addHandler('image', () => {
//     selectLocalImage(editor)
//   });
//   textArea.innerHTML = editor.root.innerHTML
//
//   editor.on("text-change", function() {
//     textArea.innerHTML = editor.root.innerHTML
//   })
// }
