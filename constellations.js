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
                {x: 5, y: 1000},
                {x: 150, y: 1270},
                {x: 250, y: 1470},
                {x: 140, y: 1370}
            ],
            path: [0, 1, 2, 3, 1]
        },
        leoConstellation = {
            name: 'leo',
            starCenters: [
                {x: 630, y: 860},
                {x: 550, y: 1000},
                {x: 750, y: 1200},
                {x: 930, y: 1150},
                {x: 1000, y: 1000},
                {x: 1170, y: 890},
                {x: 1260, y: 1540},
                {x: 1370, y: 1740},
                {x: 1060, y: 1600}
            ],
            path: [0, 1, 2, 3, 4, 5, 6, 7, 8, 3]
        };

    createConstellation(leoMinorConstellation);
    createConstellation(leoConstellation);
});