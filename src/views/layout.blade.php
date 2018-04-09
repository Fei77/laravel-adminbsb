<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

  {{-- Laravel CSRF Token --}}
  <meta name="csrf-token" content="{{ csrf_token() }}">

  {{-- Favicon --}}
  <link rel="icon" href="{{ $favicon or '' }}" type="image/x-icon">

  {{-- title --}}
  <title>{{ $title or '' }}</title>

  <!-- Styles -->
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">

  <!-- Font Awesome Core Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/font-awesome/css/font-awesome.css') }}" rel="stylesheet">

  <!-- Bootstrap Core Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/bootstrap/css/bootstrap.css') }}" rel="stylesheet">

  <!-- Jquery UI -->
  <link href="{{ asset('vendor/adminbsb/plugins/jquery-ui/jquery-ui.min.css') }}" rel="stylesheet">

  <!-- Select Plugin -->
  <link href="{{ asset('vendor/adminbsb/plugins/bootstrap-select/css/bootstrap-select.css') }}" rel="stylesheet">

  <!-- Colorpicker Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css') }}" rel="stylesheet" />

  <!-- Waves Effect Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/node-waves/waves.css') }}" rel="stylesheet" />

  <!-- Animation Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/animate-css/animate.css') }}" rel="stylesheet" />

  <!-- Morris Chart Css-->
  <link href="{{ asset('vendor/adminbsb/plugins/morrisjs/morris.css') }}" rel="stylesheet" />

  <!-- Dropzone Css -->
  {{-- <link href="{{ asset('vendor/adminbsb/plugins/dropzone/dropzone.css') }}" rel="stylesheet"> --}}

  <!-- Bootstrap Spinner Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/jquery-spinner/css/bootstrap-spinner.css') }}" rel="stylesheet">

  <!-- DataTables -->
  {{-- <link href="{{ asset('vendor/adminbsb/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css') }}" rel="stylesheet"> --}}
  {{-- <link href="{{ asset('vendor/adminbsb/plugins/jquery-datatable/skin/bootstrap/css/responsive.bootstrap.min.css') }}" rel="stylesheet"> --}}

  <!-- Sweetalert Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/sweetalert/sweetalert.css') }}" rel="stylesheet" />

  <!-- Wait Me Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/waitme/waitMe.css') }}" rel="stylesheet" />

  <!-- Range Slider Css -->
  {{-- <link href="{{ asset('vendor/adminbsb/plugins/ion-rangeslider/css/ion.rangeSlider.css') }}" rel="stylesheet" /> --}}
  {{-- <link href="{{ asset('vendor/adminbsb/plugins/ion-rangeslider/css/ion.rangeSlider.skinFlat.css') }}" rel="stylesheet" /> --}}

  <!-- Loading.css -->
  <link href="{{ asset('vendor/adminbsb/plugins/loading/loading.css') }}" rel="stylesheet" />

  <!-- Jquery Fileupload css -->
  {{-- <link href="{{ asset('vendor/adminbsb/plugins/jquery-fileupload/jquery.fileupload.css') }}" rel="stylesheet" /> --}}

  <!-- Bootstrap Tags Input -->
  <link href="{{ asset('vendor/adminbsb/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css') }}" rel="stylesheet" />

  <!-- Bootstrap Material Datetime Picker Css -->
  <link href="{{ asset('vendor/adminbsb/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css') }}" rel="stylesheet" />

  <!-- Hightlight.js Css -->
  {{-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"> --}}

  <!-- Custom Css -->
  <link href="{{ asset('vendor/adminbsb/css/style.css') }}" rel="stylesheet">
  <link href="{{ asset('vendor/adminbsb/css/helpers.css') }}" rel="stylesheet">
  {{-- <link href="{{ asset('vendor/adminbsb/css/sortable.css') }}" rel="stylesheet"> --}}
  {{-- <link href="{{ asset('vendor/adminbsb/css/image-cropper.css') }}" rel="stylesheet">
  <link href="{{ asset('vendor/adminbsb/css/removable-input.css') }}" rel="stylesheet">
  <link href="{{ asset('vendor/adminbsb/css/overrides.css') }}" rel="stylesheet">
  <link href="{{ asset('vendor/adminbsb/css/dropzone.css') }}" rel="stylesheet">
  <link href="{{ asset('vendor/adminbsb/css/album.css') }}" rel="stylesheet">
  <link href="{{ asset('vendor/adminbsb/css/custom.css') }}" rel="stylesheet"> --}}

  <!-- AdminBSB Themes. You can choose a theme from css/themes instead of get all themes -->
  <link href="{{ asset('vendor/adminbsb/css/themes/all-themes.css') }}" rel="stylesheet" />

  {{ $styles or ''}}

</head>
<body class="theme-red">

  {{-- page loader --}}
  @include('adminbsb::_includes.page-loader')

  {{-- include navbar --}}
  @include('adminbsb::_includes.navbar')

  {{-- include sidebar --}}
  @include('adminbsb::_includes.sidebar')

  <section class="content">
    {{ $slot }}
  </section>

  <!-- Jquery Core Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/jquery/jquery.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-ui/jquery-ui.min.js') }}"></script>

  <!-- Bootstrap Core Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/bootstrap/js/bootstrap.js') }}"></script>

  <!-- Select Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/bootstrap-select/js/bootstrap-select.js') }}"></script>

  <!-- Bootstrap Colorpicker Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js') }}"></script>

  <!-- Slimscroll Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-slimscroll/jquery.slimscroll.js') }}"></script>

  <!-- Waves Effect Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/node-waves/waves.js') }}"></script>

  <!-- Jquery CountTo Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-countto/jquery.countTo.js') }}"></script>

  <!-- Axios js -->
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <!-- Morris Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/raphael/raphael.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/morrisjs/morris.js') }}"></script>

  <!-- ChartJs -->
  {{-- <script src="{{ asset('vendor/adminbsb/plugins/chartjs/Chart.bundle.js') }}"></script> --}}

  <!-- Cropit  -->
  <script src="{{ asset('vendor/adminbsb/plugins/cropit/jquery.cropit.js') }}"></script>

  <!-- Sortablejs  -->
  <script src="{{ asset('vendor/adminbsb/plugins/sortablejs/sortable.min.js') }}"></script>

  <!-- Bootstrap Notify Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/bootstrap-notify/bootstrap-notify.js') }}"></script>

  <!-- Sparkline Chart Plugin Js -->
  {{-- <script src="{{ asset('vendor/adminbsb/plugins/jquery-sparkline/jquery.sparkline.js') }}"></script> --}}

  <!-- TinyMCE -->
  <script src="{{ asset('vendor/adminbsb/plugins/tinymce/tinymce.js') }}"></script>
  {{-- <script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script> --}}

  <!-- SweetAlert Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/sweetalert/sweetalert.min.js') }}"></script>

  <!-- Dropzone Plugin Js -->
  {{-- <script src="{{ asset('vendor/adminbsb/plugins/dropzone/dropzone.js') }}"></script> --}}

  <!-- Jquery Spinner Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-spinner/js/jquery.spinner.js') }}"></script>

  <!-- waitMe -->
  <script src="{{ asset('vendor/adminbsb/plugins/waitme/waitMe.min.js') }}"></script>

  <!-- Bootstrap Tags Input -->
  <script src="{{ asset('vendor/adminbsb/plugins/bootstrap-tagsinput/bootstrap-tagsinput.js') }}"></script>

  <!-- RangeSlider Plugin Js -->
  {{-- <script src="{{ asset('vendor/adminbsb/plugins/ion-rangeslider/js/ion.rangeSlider.js') }}"></script> --}}

  <!-- Jquery Fileuplaod Js -->
  {{-- <script src="{{ asset('vendor/adminbsb/plugins/jquery-fileupload/jquery.fileupload.js') }}"></script> --}}

  <!-- Moment Plugin Js -->
  {{-- <script src="{{ asset('vendor/adminbsb/plugins/momentjs/moment.js') }}"></script> --}}

  <!-- Bootstrap Material Datetime Picker Plugin Js -->
  <script src="{{ asset('vendor/adminbsb/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js') }}"></script>

  <!-- Masonry Plugin Js -->
  {{-- <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
  <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script> --}}

  <!-- Hightlight.js Js -->
  {{-- <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script> --}}

  <!-- Jquery DataTable Plugin Js -->
  {{-- <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/jquery.dataTables.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/extensions/export/dataTables.responsive.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/extensions/export/dataTables.buttons.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/extensions/export/buttons.flash.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/extensions/export/jszip.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/extensions/export/pdfmake.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/extensions/export/vfs_fonts.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/extensions/export/buttons.html5.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/plugins/jquery-datatable/extensions/export/buttons.print.min.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/table.js') }}"></script> --}}

  <!-- Custom Js -->
  <script src="{{ asset('vendor/adminbsb/js/admin.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/pages/index.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/text-editor.js') }}"></script>
  {{-- <script src="{{ asset('vendor/adminbsb/js/alert.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/helpers.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/ajax-form.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/image-cropper.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/sortable.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/dialog.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/removable-input.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/dropzone.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/album.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/list.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/colorpicker.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/date-time-picker.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/input-image.js') }}"></script> --}}

  <!-- Demo Js -->
  <script src="{{ asset('vendor/adminbsb/js/demo.js') }}"></script>
  <script src="{{ asset('vendor/adminbsb/js/script.js') }}"></script>

  {{ $scripts or '' }}
</body>
</html>
