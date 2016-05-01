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
    my_points = getRandomPoints(50);

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
            var curr_point = points[index];

            var m1 = (next_point[1] - left_point[1]) / (next_point[0] - left_point[0]);
            var m2 = (curr_point[1] - left_point[1]) / (curr_point[0] - left_point[0]);
            if (m1 > m2) {
                next_point = curr_point;
            }
        }
    }

return next_point;
}

function turn(pt1, pt2, pt3) {

        var val = (pt2[1] - pt1[1]) * (pt3[0] - pt2[0]) - (pt2[0] - pt1[0]) * (pt3[1] - pt2[1]);
 
        var ret;

        //straight
        if (val == 0)
            ret = 0;
        //right
        else if (val > 0) 
            ret = 1;
        //left
        else ret = 2;

return ret;
}

function nextSide(points, left_point) {

    var next_point;
    var pnt = points[0];

    if (pnt[0] == left_point[0] && pnt[1] == left_point[1]) {
        var next_point = points[1];
    } else {
        next_point = points[0];
    }

    for (var index in points) {

        if (pnt[0] == point[0] && pnt[1] == point[1]) {
            continue;
        } 
        else {
            if(dot_product(points[index], point) < dot_product(points[index], next_point)) {
                next_point = point;
            }
        }
    }

return next_point;
}

function plotSide(side, color) {
    var context = document.getElementById('jm_demo').getContext('2d');
    var pt1 = side[0]
    var pt2 = side[1];
    context.save()
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(pt1[0], pt1[1]);
    context.lineTo(pt2[0], pt2[1]);
    context.stroke();
    context.restore();
}

function jmPlotConvexHull() {
    var left_point = findLeftMost(my_points);
    var next_point = smallestRiseToRun(my_points, left_point);

    context = document.getElementById('jm_demo').getContext('2d'); 
    context.fillStyle = 'rgb(255,0,0)';
    context.fillRect(left_point[0], left_point[1], 2, 2);
    context.fillRect(next_point[0], next_point[1], 2, 2);

    var sides = [[left_point, next_point]];

    plotSide(sides[0], 'rgb(255,0,0)');

}
