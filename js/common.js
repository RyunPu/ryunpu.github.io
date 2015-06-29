$(function() {
    var Page = {
        init: function() {
            this.bind();
            $('.footer').find('.' + current).addClass('active');
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
                    case 'night2':
                        $body.attr('class', 'night2');
                        localStorage.time = 'night2';
                        break;
                    case 'all':
                        localStorage.time = '';
                        location.reload();
                        break;
                }

                $('.footer .choose a').removeClass('active');
                $(this).addClass('active');
            });
        }
    };

    Page.init();
});