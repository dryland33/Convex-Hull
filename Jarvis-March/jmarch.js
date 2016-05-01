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

    context = document.getElementById('jm_demo').getContext('2d');
    context.clearRect(0, 0, 650, 650);
    context.fillStyle = '#000000';
    context.fillRect(0, 0, 650, 650);
    context.fillStyle = 'rgb(255,255,255)';
    my_points = getRandomPoints(5);

    for (var index in my_points) {
        var point = my_points[index];
        context.fillRect(point[0], point[1], 2, 2);
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

function smallestRiseToRun(points, left_point) {

    var next_point;
    var pnt = points[0];

    if (pnt[0] == left_point[0] && pnt[1] == left_point[1]) {
        var next_point = points[1];
    } else {
        next_point = points[0];
    }

    for (var index in points) {
        pnt = points[index];
        if (pnt[0] == left_point[0] && pnt[1] == left_point[1]) {
            continue;
        } else {
            curr_point = points[index];

            var m1 = (next_point[1] - left_point[1]) / (next_point[0] - left_point[0]);
            var m2 = (curr_point[1] - left_point[1]) / (curr_point[0] - left_point[0]);
            if (m1 > m2) {
                next_point = curr_point;
            }
        }
    }

return next_point;
}

function jmPlotConvexHull() {
    var left_point = findLeftMost(my_points);
    var next_point = smallestRiseToRun(my_points, left_point);

    context = document.getElementById('jm_demo').getContext('2d'); 
    context.fillStyle = 'rgb(255,0,0)';
    context.fillRect(left_point[0], left_point[1], 2, 2);
    context.fillRect(next_point[0], next_point[1], 2, 2);
}
