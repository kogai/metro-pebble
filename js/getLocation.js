var options = {
  enableHighAccuracy: true,
  timeout: 30000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var geo = {
    lat: crd.latitude,
    lon: crd.longitude
  };
  ajax(
    {
      url: 'https://api.tokyometroapp.jp/api/v2/places?rdf:type=odpt:Station&lon=' + geo.lon + '&lat=' + geo.lat + '&radius=1000&acl:consumerKey=' + confidence.consumerKey,
      type: 'json'
    },
    function(data){
      var prace = data[0]['owl:sameAs'];
      getInfo(prace);
    },
    function(err){
      console.log(err);
    }
  );
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.msg);
  if(err.code === 3){
    for (var keys in err){
      console.log('keys:' + keys + ' value:' + err[keys]);
    }
  }
}

window.navigator.geolocation.getCurrentPosition(success, error, options);