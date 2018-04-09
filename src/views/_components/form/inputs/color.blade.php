<div class="form-group">
  @isset($label)
    <label for="subject" class="control-label">{{ $label }}</label>
  @endisset
  <div class="input-group colorpicker">
    <div class="form-line">
      <input type="text" class="form-control" name="{{ $name or '' }}" value="{{ $value or '' }}" {{ isset($required) ? 'required' : '' }}>
    </div>
    <span class="input-group-addon">
      <i></i>
    </span>
  </div>
</div>
