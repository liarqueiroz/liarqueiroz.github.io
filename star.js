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

document.addEventListener("DOMContentLoaded", function(event) {

    var svgEl = document.getElementsByTagName('svg')[0],
        arms = 5,
        outerRadius = 50,
        innerRadius = 25,
        centers = [
            {x: 640, y: 470},
            {x: 780, y: 640},
            {x: 800, y: 900},
            {x: 115, y: 840},
            {x: -170, y: 870},
            {x: 75, y: 540},
            {x: 670, y: 300},
            {x: 900, y: 180},
            {x: 970, y: 290}
        ];

    centers.forEach(function(center, index) {
        var starIndex = index + 1;
            id = 'star' + starIndex,
            star = document.getElementById(id);

        star.setAttribute('points', CalculateStarPoints(center.x, center.y, arms, outerRadius, innerRadius));
    });

    var path = document.getElementById('path'),
        points = centers[0].x + ',' + centers[0].y + ' ' +
                 centers[1].x + ',' + centers[1].y + ' ' +
                 centers[2].x + ',' + centers[2].y + ' ' +
                 centers[3].x + ',' + centers[3].y + ' ' +
                 centers[4].x + ',' + centers[4].y + ' ' +
                 centers[5].x + ',' + centers[5].y + ' ' +
                 centers[0].x + ',' + centers[0].y + ' ' +
                 centers[6].x + ',' + centers[6].y + ' ' +
                 centers[7].x + ',' + centers[7].y + ' ' +
                 centers[8].x + ',' + centers[8].y;

    path.setAttribute('points', points);
});