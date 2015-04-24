$(function() {
    var currentHours = new Date().getHours(),
        $body = $('body');

    if (currentHours >= 17 && currentHours <= 19) {
        $body.attr('class', 'sunset');
    } else if ((currentHours > 19 && currentHours <= 24) || currentHours < 5) {
        $body.attr('class', 'night');
    } else if (currentHours >= 5 && currentHours <= 7) {
        $body.attr('class', 'dawn');
    } else {
        $body.attr('class', 'daylight');
    }
});