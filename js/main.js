function getInfo(prace){
  ajax(
    {
      url:'https://api.tokyometroapp.jp/api/v2/datapoints?rdf:type=odpt:StationTimetable&odpt:station=' + prace + '&acl:consumerKey=' + confidence.consumerKey,
      type:'json'
    },
    function(data) {
      var menus = parseData(data);
      var menu = new UI.Menu({
        sections: [{
          title: time,
          items: menus
        }]
      });
      menu.show();
      Vibe.vibrate('double');
      menu.on('select', function(e){
        var detail = menus[e.itemIndex];
        var detailCard = new UI.Card({
          title:'NEXT TRAIN',
          subtitle:detail.subtitle,
          body: detail.title
        });
        detailCard.show();
      });
      splashWindow.hide();
    },
    function(error) {
      console.log('Download failed: ' + error);
    }
  );
}

function parseData(data){
  var menus = [];
  var lists = data[0]['odpt:weekdays'];
  var time  = new Date();
  var hours = time.getHours();
  var minutes   = time.getMinutes();
  for (var i = 0; i < lists.length; i++) {
    var station = lists[i]['odpt:destinationStation'];
        station = station.replace('odpt.Station:','');
        station = station.replace('TokyoMetro.','');
    var time    = lists[i]['odpt:departureTime'];
    if((time[0] + time[1]) == hours && (time[3] + time[4]) < minutes){
      continue;
    }else if((time[0] + time[1]) < hours){
      continue;
    }else{
      menus.push({
        title: station,
        subtitle:time
      });
    }
    if(menus.length > 10) break;
  }
  return menus;
}
// module.exports = getInfo;