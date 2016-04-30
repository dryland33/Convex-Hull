
function getRandomPoints(numPoints) {

    var points = new Array();
    var radius = 300;

    for (var i = 0; i < numPoints; i++) {
        x = Math.random() * 2 * radius - radius;
        ylim = Math.sqrt(radius * radius - x * x);
        y = Math.random() * 2 * ylim - ylim;
        x += radius;
        y += radius;
        points.push([x, y]);
    }

    return points
}

var points;

function jmPlotPoints() {

    contex = document.getElementById('jm_demo').getContext('2d');
    contex.clearRect(0, 0, 650, 650);
    contex.fillStyle = 'rgb(0,0,0)';
    points = getRandomPoints(500);

    for (var index in points) {
        var point = points[index];
        contex.fillRect(point[0], point[1], 2, 2);
    }
}
