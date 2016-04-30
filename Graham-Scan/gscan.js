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

function gsPlotPoints() {

    contex = document.getElementById('gs_demo').getContext('2d');
    contex.clearRect(0, 0, 650, 650);
    contex.fillStyle = 'rgb(0,0,0)';
    my_points = getRandomPoints(5);

    for (var index in my_points) {
        var point = my_points[index];
        contex.fillRect(point[0], point[1], 2, 2);
    }
}

function findBottom(points) {

    var min_y;
    var bottom_index;

    for (var index in points) {
        var point = points[index];
        if (point[1] < min_y || !min_y) {
            min_y = point[1];
            bottom_index = index;
        }
    }

    var bottom = points[bottom_index];

return bottom;
}

function gsPlotConvexHull() {

    var bottom_point = findBottom(my_points);

}
