var page = new tabris.Page({
  title: "Peli",
  topLevel: true
})

var count = 0;
var time = -1;
var toggle = 0;

var timer = new tabris.TextView({
  layoutData: {top: 10, right: 10},
  text: "",
  alignment: "right"
}).appendTo(page);

var button = new tabris.Button({
  layoutData: {centerX: 0, top: 56, height: 450, width: 350},
  text: "0",
  font: "50px"
}).on("select", function(widget) {
  	point(widget)
}).appendTo(page);

var start = new tabris.ToggleButton({
  layoutData: {left: 10, top: 10, width: 55},
  text: "Start",
  selection: true
}).once("change:selection", function(widget, button, selection) {
  setInterval(timeri, 1000, widget);
  timer.set("text", (time = "30"));
}).appendTo(page);

var toggle = new tabris.TextView({
  layoutData: {centerX: 0, top: -200},
  text: "0"
}).appendTo(page);

page.open();

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