function CalculateStarPoints(centerX, centerY, arms, outerRadius, innerRadius)
{
   var results = "";

   var angle = Math.PI / arms;

   for (var i = 0; i < 2 * arms; i++)
   {
      // Use outer or inner radius depending on what iteration we are in.
      var r = (i & 1) == 0 ? outerRadius : innerRadius;

      var currX = centerX + Math.cos(i * angle) * r;
      var currY = centerY + Math.sin(i * angle) * r;

      // Our first time we simply append the coordinates, subsequet times
      // we append a ", " to distinguish each coordinate pair.
      if (i == 0)
      {
         results = currX + "," + currY;
      }
      else
      {
         results += ", " + currX + "," + currY;
      }
   }

   return results;
}

function createLine(lineElement, point1, point2) {
    lineElement.setAttribute('x1', point1.x);
    lineElement.setAttribute('y1', point1.y);

    lineElement.setAttribute('x2', point2.x);
    lineElement.setAttribute('y2', point2.y);
}

document.addEventListener("DOMContentLoaded", function(event) {

    var svgEl = document.getElementsByTagName('svg')[0],
        arms = 5,
        outerRadius = 50,
        innerRadius = 25,
        centers = [
            {x: -150, y: 940},
            {x: 115, y: 840},
            {x: 75, y: 540},
            {x: 1100, y: 750},
            {x: 1000, y: 590},
            {x: 790, y: 470},
            {x: 1090, y: 200},
            {x: 930, y: 70},
            {x: 740, y: 300}
        ];

    centers.forEach(function(center, index) {
        var starIndex = index + 1;
            id = 'star' + starIndex,
            star = document.getElementById(id);

        star.setAttribute('points', CalculateStarPoints(center.x, center.y, arms, outerRadius, innerRadius));
    });

    createLine(document.getElementById('line1'), centers[0], centers[1]);
    createLine(document.getElementById('line2'), centers[0], centers[2]);
    createLine(document.getElementById('line3'), centers[1], centers[3]);
    createLine(document.getElementById('line4'), centers[3], centers[4]);
    createLine(document.getElementById('line5'), centers[4], centers[5]);
    createLine(document.getElementById('line6'), centers[5], centers[8]);
    createLine(document.getElementById('line7'), centers[2], centers[5]);
    createLine(document.getElementById('line8'), centers[8], centers[7]);
    createLine(document.getElementById('line9'), centers[7], centers[6]);
});