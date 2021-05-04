// define the variables
var color = document.getElementById('colorPicker');
var grid = document.getElementById('pixelCanvas');
var gridsize = document.getElementById('sizePicker');
var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;


function selection(event) {
};

//set grid size according to input
sizePicker.addEventListener ('click', function (event1) {
  selection(event1);
  event1.preventDefault();
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  grid.innerHTML = "";
  makeGrid(height, width);
});

//make the grid
function makeGrid(height, width) {
  for (var r = 0; r < height; r++) {
    var row = grid.insertRow(r);
    for (var c = 0; c < width; c++) {
      var cell = row.insertCell(c);
//set the colour according to selection
      cell.addEventListener('click', function (event2) {
        event2.target.style.background = colorPicker.value;
      });
    };
  };
};
