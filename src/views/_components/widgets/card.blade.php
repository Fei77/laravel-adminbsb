<div class="card">
  @if (isset($header))
    <div class="header">
      {{ $header }}
    </div>
  @endif

  <div class="body">
    {{ $slot }}
  </div>
</div>
