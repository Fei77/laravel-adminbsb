<ul class="nav nav-tabs tab-nav-right" role="tablist">
  @foreach (LaravelLocalization::getSupportedLocales() as $lang => $properties)
    <li class="{{ $loop->first ? 'active' : '' }}" role="presentation">
      <a
        href="#{{ $id }}-{{ $lang }}" data-toggle="tab">{{ strtoupper($lang) }}
      </a>
    </li>
  @endforeach
</ul>

<section class="tab-content m-t-20">
  @foreach (LaravelLocalization::getSupportedLocales() as $lang => $properties)
    <div class="tab-pane fade {{ $loop->first ? 'in active' : '' }}"
      id="{{ $id }}-{{ $lang }}" role="tabpanel">

      @foreach ($fields as $field)

        @if ($field['type'] === 'textarea')
          @textarea([
            'label' => (isset($field['label']) ? $field['label'] : ''),
            'name' => 'translations['.$lang.']['.$field['name'].']',
            'value' => isset($translations) && $translations->hasTranslation($lang) ? $translations->translate($lang)[$field['name']] : old('translations.'.$lang.'.'.$field['name'])
          ])
          @endtextarea
        @endif

        @if ($field['type'] === 'text')
          @input([
            'label' => (isset($field['label']) ? $field['label'] : ''),
            'name' => 'translations['.$lang.']['.$field['name'].']',
            'value' => isset($translations) && $translations->hasTranslation($lang) ? $translations->translate($lang)[$field['name']] : old('translations.'.$lang.'.'.$field['name'])
          ])
          @endinput
        @endif

        @if ($field['type'] === 'editor')
          @editor([
            'label' => (isset($field['label']) ? $field['label'] : ''),
            'name' => 'translations['.$lang.']['.$field['name'].']',
            'value' => isset($translations) && $translations->hasTranslation($lang) ? $translations->translate($lang)[$field['name']] : old('translations.'.$lang.'.'.$field['name'])
          ])
          @endeditor
        @endif

      @endforeach


    </div>
  @endforeach
</section>
