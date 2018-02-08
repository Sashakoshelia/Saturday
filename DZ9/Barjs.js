function chartBar(canvas, data, width, height, color) {

    if (typeof canvas == "string") canvas = document.getElementById(canvas);
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = '2px solid red'
    var context = canvas.getContext("2d");

    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    var scale = height / max;
    var barWidth = Math.floor(width / data.length);

    for (var i = 0; i < data.length; i++) {
       
        var barHeight = data[i] * scale,
            x = barWidth ,
            y = height - barHeight;

        context.fillStyle = color;
        context.fillRect(x, y, barHeight, barWidth - 2 );
    }
}