<div class="form-group {{ isset($float) ? 'form-float' : ''}}">
  @if (!isset($float))
    @isset($label)
      <label class="form-label">{{ $label or '' }}</label>
    @endisset
  @endif
  <div class="form-line">
    <input type="{{ $type or 'text' }}" name="{{ $name or '' }}" class="form-control {{ $class or '' }}" value="{{ $value or '' }}" placeholder="{{ $placeholder or '' }}">
    @if (isset($float))
      @isset($label)
        <label class="form-label">{{ $label or '' }}</label>
      @endisset
    @endif
  </div>
</div>
