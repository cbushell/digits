function initDigits() {

    var x = 0;
    var y = 0;
    var pixelWidth = 10;
    var numberOfPixelsPerRow = 28;
    var distanceBetweenPixels = 1;
    var distanceBetweenDigits = 10;

    d3.csv("small.csv", function (row) {
        var container = d3.select("body")
            .append("svg")
            .attr("width", numberOfPixelsPerRow * (pixelWidth + distanceBetweenPixels))
            .attr("height", numberOfPixelsPerRow * (pixelWidth + distanceBetweenPixels) * row.length);

        row.forEach(function (digit) {
            chunk(d3.values(digit), numberOfPixelsPerRow).forEach(function (pixels) {
                pixels.forEach(function (pixel) {
                    container.append("rect")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("width", pixelWidth)
                        .attr("height", pixelWidth)
                        .attr("class", "pixel-" + pixel);

                    x += pixelWidth + distanceBetweenPixels;
                });

                x = 0;
                y += pixelWidth + distanceBetweenPixels;
            });

            y += distanceBetweenDigits;
        });
    });

    function chunk(a, chunkSize) {
        var array = a;

        return [].concat.apply([],
            array.map(function (elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
            })
        );
    }

}

window.onload = function () {
    initStyles();
    initDigits();
};