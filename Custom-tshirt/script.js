/*
SHIRT IMAGE UPLOAD
https://codepen.io/miljkovicmisa/pen/QGRjNK
*/

var canvas = new fabric.Canvas('c');

function insertShape() {
  // create a rectangle with angle=45
  var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
  });
  canvas.add(rect);
}

//upload image
document.getElementById('imgLoader').onchange = function handleImage(e) {
  var reader = new FileReader();
  reader.onload = function (event){
    var imgObj = new Image();
    imgObj.src = event.target.result;
    imgObj.onload = function () {
      var image = new fabric.Image(imgObj);
      image.set({
        angle: 0,
        padding: 10,
        cornersize:10,
        height:110,
        width:110
      });
      canvas.centerObject(image);
      canvas.add(image);
      canvas.renderAll();
    }
  }
  reader.readAsDataURL(e.target.files[0]);
}

function onObjectSelected(e) {
  if ((e.target.get('type')) === "i-text") {
    document.getElementById("textMenu").className = "displayOperations";
  }
}
canvas.on('object:selected', onObjectSelected);

canvas.on('before:selection:cleared', function() {
  document.getElementById("textMenu").className = "hideOperations";
});