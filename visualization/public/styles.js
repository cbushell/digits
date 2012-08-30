function initStyles() {
    var styles = [];

    for (var i = 0; i < 256; i++) {
        styles.push(".pixel-" + i + "{fill: rgb(" + i + ", " + i + ", " + i + ");}");
    }

    var styleElement = document.createElement('style');
    styleElement.setAttribute("type", "text/css");
    styleElement.innerHTML = styles.join("\n");

    document.head.appendChild(styleElement);
};
