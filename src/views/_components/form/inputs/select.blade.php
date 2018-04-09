<div class="form-group">
  @isset($label)
    <label for="subject" class="control-label">{{ $label or '' }}</label>
  @endisset
  <select name="{{ $name or '' }}" class="form-control" {{ isset($search) ? 'data-live-search=true' : '' }}>
    {{ $slot }}
  </select>
</div>
