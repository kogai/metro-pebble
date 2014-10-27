var rect = new UI.Rect({
  size: new Vector2(144, 168),
  backgroundColor:'white'
});

var time = new UI.TimeText({
  position: new Vector2(0, 30),
  size: new Vector2(144, 56),
  text: '%X',
  font:'GOTHIC_28_BOLD',
  textOverflow:'wrap',
  color:'black',
  textAlign:'center'
});
splashWindow.add(rect);
splashWindow.add(time);
splashWindow.show();