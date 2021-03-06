<form
  action="{{ $action or '' }}"
  class="{{ $class or '' }}"
  method="{{ isset($method) && strtolower($method) === 'get' ? $method : 'POST' }}"
  {{ isset($files) ? 'enctype="multipart/form-data"' : ''}}>

  @csrf
  @method(isset($method) ? $method : 'POST')

  {{ $slot }}

  @if (isset($sumbit) && $submit === false)
  @else
    <button type="submit" class="btn btn-sm btn-warning">
      <i class="material-icons">save</i> Submit
    </button>
  @endif
</form>
