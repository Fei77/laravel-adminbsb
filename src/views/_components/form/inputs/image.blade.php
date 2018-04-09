<div class="forn-group js-input-image-wrapper">
  @isset($label)
    <label class="control-label">{{ $label }}</label>
  @endisset
  <div class="js-img-preview">
    <img src="{{ $src ? asset($src) : asset('images/not-found.jpg') }}" class="img-responsive js-img-preview">
    <input type="file" name="{{ $name or '' }}" class="js-input-image">
  </div>
</div>
