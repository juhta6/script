var page = new tabris.Page({
  title: "CATS",
  topLevel: true
});

var textView = new tabris.TextView({
  layoutData: {left: 10, right: 10, top: "5%"},
  alignment: "center",
  font: "22px sans-serif",
  text: "50"
}).appendTo(page);

var touched = 0;
var imageView = new tabris.ImageView({
  layoutData: {centerX: 0, centerY: 0},
  image: {src: "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg"},
  highlightOnTouch: true,
  scaleMode: "auto"
}).on("tap", function() {
  touched++;
  imageView.animate({
    transform: {
      rotation: 360 * Math.PI / 180
    }
  },
  {
    delay: 0,
    duration: 3000,
    repeat: 3,
    easing: "ease-out"
  });
}).appendTo(page);

var slider1 = new tabris.Slider({
  layoutData: {left: 50, top: [textView, 5], right: 50},
  minimum: 0,
  selection: 150,
  maximum: 300
}).on("change:selection", function(slider, selection) {
  imageView.set("layoutData", {centerX: 0, centerY: 0, width: selection, height: selection});
  textView.set("text", selection);
}).appendTo(page);
var slider2 = new tabris.Slider({
  layoutData: {left: 50, top: 420, right: 50},
  minimum: 0,
  selection: 180,
  maximum: 360
}).on("change:selection", function(slider2, selection) {
  imageView.animate({
    transform: {
      rotation: selection * Math.PI / 180
    }
  });
}).appendTo(page);

page.open();

      
      
      
      
      