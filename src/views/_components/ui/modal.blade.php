<div class="modal fade" id="{{ $id or '' }}" tabindex="-1" role="dialog">
  <div class="modal-dialog {{ $size or 'modal-lg' }}" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title pull-left">{{ $title or '' }}</h4>
        <a href="#" data-dismiss="modal" class="pull-right">
          <h4>
            <i class="material-icons">close</i>
          </h4>
        </a>
      </div>

      <div class="modal-body">
      	{{ $slot }}
      </div>

    </div>
  </div>
</div>
