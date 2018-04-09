@navtabs()

  @foreach ($tabs as $tab)

    @navtabsitem([
      'action' => $tab['id'],
      'active' => ($loop->first ? true : false)
    ])
      {{ $tab['label'] }}
    @endnavtabsitem

  @endforeach

@endnavtabs
