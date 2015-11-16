
//=========================== initialization ==================================

function initInputSelection(options) {
   $('#logo').wrap('<a href="/" />');
}

//=========================== get data ========================================

function getNewDashboardData() {
   $.ajax({
      url:      '/dashboard/json/',
      dataType: 'json',
      success:  refreshDashboard_cb
   });
}

//=========================== set data ========================================

// post to set the mote's LED
function changeLEDstate(mac,ledStatus) {
   jQuery.ajax({
      type:       'POST',
      url:        '/motedata/json/send?mac='+mac+'&app=OAPLED/',
      data:       JSON.stringify({'status':ledStatus})
   });
}

// post to set the mote's Sound
function changeSoundState(mac,soundStatus) {
   jQuery.ajax({
      type:       'POST',
      url:        '/motedata/json/send?mac='+mac+'&app=OAPsound/',
      data:       JSON.stringify({'status':soundStatus})
   });
}
