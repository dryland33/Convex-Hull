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

var my_points;

function jmPlotPoints() {

    contex = document.getElementById('jm_demo').getContext('2d');
    contex.clearRect(0, 0, 650, 650);
    contex.fillStyle = 'rgb(0,0,0)';
    my_points = getRandomPoints(5);

    for (var index in my_points) {
        var point = my_points[index];
        contex.fillRect(point[0], point[1], 2, 2);
    }
}

function findLeftMost(points) {

    var min_x;
    var curr_min;
    var left_index;

    for (var index in points) {
        var point = points[index];
        if (point[0] < min_x || !min_x) {
            curr_min = point;
            min_x = point[0];
            left_index = index;
        }
    }

    var leftMost = points[left_index];

return leftMost;
}

function jmPlotConvexHull() {
    var left_point = findLeftMost(my_points);
    window.alert("Left point's x value is: " + left_point[0]);
}
