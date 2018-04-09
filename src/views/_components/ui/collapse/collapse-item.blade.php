<div class="panel panel-col-teal">
  <div class="panel-heading" role="tab">
    <h4 class="panel-title">
      <a role="button"
        data-toggle="collapse"
        class="{{ isset($active) && $active === true ? '' : 'collapsed' }}"
        data-parent="#{{ $parent_id or '' }}" href="#{{ $id or '' }}"
        aria-expanded="{{ isset($active) && $active === true ? 'true' : 'false' }}"
        aria-controls="{{ $id or '' }}">
        {{ $header or '' }}
      </a>
    </h4>
  </div>
  <div
    id="{{ $id or '' }}"
    class="panel-collapse collapse {{ isset($active) && $active === true ? 'in' : '' }}"
    role="tabpanel"
    aria-labelledby="{{ $id or '' }}">
    <div class="panel-body">
      {{ $slot }}
    </div>
  </div>
</div>
