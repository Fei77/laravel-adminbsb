@isset($label)
  <label class="control-label">{{ $label }}</label>
@endisset
<div class="input-group spinner" data-trigger="spinner">
  <div class="form-line">
    <input type="text" data-max="null" class="form-control text-center js-reset-input" name="{{ $name or '' }}" value="{{ isset($value) ? $value : 0 }}" data-rule="quantity">
  </div>
  <span class="input-group-addon">
    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
  </span>
</div>
