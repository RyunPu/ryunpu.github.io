$(function() {
    var Page = {
        init: function() {
            this.bind();
        },
        bind: function() {
            $('.footer .choose a').on('click', function() {
                var time = $(this).html();

                switch (time) {
                    case 'dawn':
                        $body.attr('class', 'dawn');
                        localStorage.time = 'dawn';
                        break;
                    case 'daylight':
                        $body.attr('class', 'daylight');
                        localStorage.time = 'daylight';
                        break;
                    case 'sunset':
                        $body.attr('class', 'sunset');
                        localStorage.time = 'sunset';
                        break;
                    case 'night':
                        $body.attr('class', 'night');
                        localStorage.time = 'night';
                        break;
                    case 'all':
                        localStorage.time = '';
                        location.reload();
                        break;
                }
            });
        }
    };

    Page.init();
});