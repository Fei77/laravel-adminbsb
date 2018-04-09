<div class="form-group">
  @isset($label)
    <label for="content" class="control-label">{{ $label }}</label>
  @endisset
  @isset($desc)
    <small>{{ $desc }}</small>
  @endisset
  <div class="form-line">
    <textarea name="{{ $name or '' }}" class="form-control js-tinymce" rows="5">{!! $value or '' !!}</textarea>
  </div>
</div>
