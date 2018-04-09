<li role="presentation" class="{{ isset($active) && $active === true ? 'active' : '' }}">
  <a href="#{{ $action or '' }}" data-toggle="tab">
    {{ $slot }}
  </a>
</li>
