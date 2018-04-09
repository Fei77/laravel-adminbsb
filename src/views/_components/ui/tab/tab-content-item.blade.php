<div role="tabpanel" class="tab-pane fade {{ isset($active) && $active === true ? 'in active' : '' }}" id="{{ $id or '' }}">
  {{ $slot }}
</div>
