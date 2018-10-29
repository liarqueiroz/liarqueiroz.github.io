document.addEventListener("DOMContentLoaded", function(event) {

    function createConstellation(constellation) {
        var arms = 5,
            outerRadius = 30,
            innerRadius = 15;

        constellation.starCenters.forEach(function(center, index) {
            var starIndex = index + 1;
                id = constellation.name + '-' + starIndex,
                star = document.getElementById(id),
                duration = 1 + Math.random() * 3;

            star.setAttribute('points', CalculateStarPoints(center.x, center.y, arms, outerRadius, innerRadius));
            star.style.animation = duration + "s gleam infinite ease";
        });

        var path = '';

        constellation.path.forEach(function(pointIndex){
            path += constellation.starCenters[pointIndex].x + ',' + constellation.starCenters[pointIndex].y + ' ';
        });

        document.getElementById(constellation.name + '-path').setAttribute('points', path);
    }

    var leoMinorConstellation = {
        name: 'leo-minor',
        starCenters: [
            {x: 5, y: 1070},
            {x: 100, y: 1270},
            {x: 200, y: 1470},
            {x: 90, y: 1370}
        ],
        path: [0, 1, 2, 3, 1]
    }

    createConstellation(leoMinorConstellation);
});