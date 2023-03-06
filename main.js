/**
 *
 *
 *
 *
 *
 *
 *
 */

const programCode = function (processingInstance) {
  with (processingInstance) {
    size(200, 275);
    frameRate(30);

    // write code here
    fill(0, 0, 0);
    var swap = function (array, firstIndex, secondIndex) {
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
    };

    var indexOfMinimum = function (array, startIndex) {
      var minValue = array[startIndex];
      var minIndex = startIndex;

      for (var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
          minIndex = i;
          minValue = array[i];
        }
      }
      return minIndex;
    };

    var selectionSort = function (array) {
      var position;

      let lineYStart = 60;
      let lineXStart = 60;
      for (var i = 0; i < array.length - 1; i++) {
        println(array + ' during for');

        // put text on canvas
        textFont(createFont('monospace'), 14);
        text(array, 50, (i + 1) * 55);

        // lines
        if (i > 0) {
          line(60 + position * 15, 5 + lineYStart, lineXStart, 35 + lineYStart);
          lineYStart += 55;
          lineXStart += 12;
          println(`${i}, ${position + 1}`);
        }

        position = indexOfMinimum(array, i);
        swap(array, i, position);
      }
    };

    var array = [1, 2, 8, 3, 5];
    selectionSort(array);
  }
};

// process canvas
const canvas = document.getElementById('mycanvas');
const processingInstance = new Processing(canvas, programCode);
