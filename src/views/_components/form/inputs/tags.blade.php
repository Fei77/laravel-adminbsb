<div class="form-group">
  @isset($label)
    <label class="control-label">{{ $label }}</label>    
  @endisset
  <div class="form-line">
    <input type="text" data-role="tagsinput" class="form-control" name="{{ $name or '' }}"
      value="{{ $value or '' }}">
  </div>
</div>
