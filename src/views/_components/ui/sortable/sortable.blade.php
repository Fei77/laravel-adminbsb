<div class="sortable-wrapper">

  <ol
    {{ isset($id) ? 'id='.$id : '' }}
    class="sortable vertical m-t-30"
    data-sortable-url="{{ $route or '' }}"
    data-sortable-group="{{ $group or '' }}">

    {{ $slot }}

  </ol>

</div>
