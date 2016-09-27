var mainmenu = new tabris.Page({
  title: "Games",
  topLevel: true
});

var bCATS = new tabris.Button({
  layoutData: {left: 40, centerY: 0},
  text: "CATS"
}).on("select", function(button) {
  CATS.open();
}).appendTo(mainmenu);

var bCLICKER = new tabris.Button({
  layoutData: {left: 60, centerY: 0},
  text: "CLICKER"
}).on("select", function(button) {
  CLICKER.open();
}).appendTo(mainmenu);

mainmenu.open();

var CATS = new tabris.Page({
  title: "Games",
  topLevel: true
});

var CLICKER = new tabris.Page({
  title: "CLICKER",
  topLevel: true
})

var Games = new tabris.Button({
  layoutData: {centerX: 0, top: 10},
  text: "Back"
}).on("select", function(button) {
  mainmenu.open();
}).appendTo(CLICKER,CATS);

var textView = new tabris.TextView({
  layoutData: {left: 10, right: 10, top: "5%"},
  alignment: "center",
  font: "22px sans-serif",
  text: "50"
}).appendTo(CATS);

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
}).appendTo(CATS);

var slider1 = new tabris.Slider({
  layoutData: {left: 50, top: [textView, 5], right: 50},
  minimum: 0,
  selection: 150,
  maximum: 300
}).on("change:selection", function(slider, selection) {
  imageView.set("layoutData", {centerX: 0, centerY: 0, width: selection, height: selection});
  textView.set("text", selection);
}).appendTo(CATS);
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
}).appendTo(CATS);

var count = 0;
var time = -1;
var toggle = 0;

var timer = new tabris.TextView({
  layoutData: {top: 10, right: 10},
  text: "",
  alignment: "right"
}).appendTo(CLICKER);

var button = new tabris.Button({
  layoutData: {centerX: 0, top: 56, height: 450, width: 350},
  text: "0",
  font: "50px"
}).on("select", function(widget) {
  	point(widget)
}).appendTo(CLICKER);

var start = new tabris.ToggleButton({
  layoutData: {left: 10, top: 10, width: 57},
  text: "Start",
  selection: true
}).once("change:selection", function(widget, button, selection) {
  setInterval(timeri, 1000, widget);
  timer.set("text", (time = "30"));
}).appendTo(CLICKER);

var toggle = new tabris.TextView({
  layoutData: {centerX: 0, top: -200},
  text: "0"
}).appendTo(CLICKER);

function timeri(widget) {
  if (time == "0") {
      button.set({text: "Your points: " + count, font: "25px"});
      toggle.set("text", "0");
  } else {
    toggle.set("text", "1");
    timer.set("text", "30");
    timer.set("text", (--time));
  }
}
function point(widget) {
  if (time >= "1") {
     button.set({text: (++count)});
 }
}
      
