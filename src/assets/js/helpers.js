function hexToRgb(hexCode) {
    var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
    var matches = patt.exec(hexCode);
    var rgb = "rgb(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + ")";
    return rgb;
}

function hexToRgba(hexCode, opacity) {
    var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
    var matches = patt.exec(hexCode);
    var rgb = "rgba(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + "," + opacity + ")";
    return rgb;
}
const helpers = {
  ajaxCall: function(url, method, data, callback, button = null) {
    if (button != null) {
      var text = button.html()
      button.waitMe({effect : 'win8_linear'})
    }
    axios({
      method: method,
      url: url,
      data: data
    }).then(response => callback(response))
      .catch(error => {
        if (error.response != null) {
          if( error.response.status === 401 ) {
            $(location).prop('pathname', 'auth/login')
          } else if ( error.response.status === 422 ) {
            var errors = error.response.data.errors
            $.each( errors, function(key, value) {
              showNotification('bg-red', value[0], 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
            })
          } else if ( error.response.status === 500 ) {
            showNotification('bg-red', error.response.data.message, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
          } else {
            showNotification('bg-red', error.response.statusText, 'top', 'right', 'animated fadeInRight', 'animated fadeOutRight');
          }
        } else {
          showNotification('bg-red', error.message, 'top', 'right', 'animated fadeInRight','animated fadeOutRight');
        }
      })
      .then(() => {
        if (button != null) {
          button.waitMe("hide")
        }
      })
  }
}
