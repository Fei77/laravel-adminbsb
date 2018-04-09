<div class="form-group">
  @isset($label)
    <label class="form-label">{{ $label }}</label>    
  @endisset
  <div class="form-line">
    <input type="{{ $type or 'text' }}"
      name="{{ $name or '' }}"
      class="{{ $class or 'datepicker' }} form-control"
      value="{{ $value or '' }}" placeholder="{{ $placeholder or '' }}">
  </div>
</div>
