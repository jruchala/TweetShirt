window.onload = function{
  var button = document.getElementById("previewButton");
  button.onclick = previewHandler;
};

function previewHandler(){
  var canvas = document.getElementById("tshirtCanvas");
  var context = canvas.getContext("2d");

  var selectObj = document.getElementById("shape");
  var index = selectObj.selectedIndex;
  var shape = selectObj[index].value;

  if (shape == "squares"){
    for (var squares = 0; squares < 20; squares++){
      drawSquare(canvas, context);
    }
  }
}

