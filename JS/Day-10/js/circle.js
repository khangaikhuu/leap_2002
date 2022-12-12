var topLeft = new Point(100, 100);
var rectSize = new Size(200, 100);

var rect = new Rectangle(topLeft, rectSize);

var path = new Path.Circle(rect, 50);

path.fillColor = 'red';
path.strokeColor = 'blue';