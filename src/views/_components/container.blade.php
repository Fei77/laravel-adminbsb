<div class="container-fluid">

    @isset($header)
      <div class="block-header">
        {{ $header }}
      </div>
    @endisset

    <div class="row clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

        {{ $slot }}

      </div>
    </div>

  </div>
