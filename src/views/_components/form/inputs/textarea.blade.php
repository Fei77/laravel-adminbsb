<div class="form-group">
  @isset($label)
    <label for="content" class="control-label">{{ $label }}</label>
  @endisset
  <div class="form-line">
    <textarea name="{{ $name or '' }}" class="form-control js-reset-input" rows="5">{!! $value or '' !!}</textarea>
  </div>
</div>
