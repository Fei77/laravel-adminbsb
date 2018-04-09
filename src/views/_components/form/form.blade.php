<form
  action="{{ $action or '' }}"
  class="{{ isset($js) ? 'js-ajax-form' : '' }}"
  method="{{ isset($method) && strtolower($method) === 'get' ? $method : 'POST' }}"
  {{ isset($files) ? 'enctype="multipart/form-data"' : ''}}>

  @csrf
  @method(isset($method) ? $method : 'POST')

  {{ $slot }}

  <button class="btn btn-sm btn-warning">
    Submit
  </button>

</form>