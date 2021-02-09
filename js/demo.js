;(function() {
  $(function() {
    if ($('#olddays').length > 0) {
      if (!$('body').hasClass('dark')) {
        $('#theme-switch').click()
      }
    }

    if ($('#hello').length > 0) {
      var hours = (new Date).getHours()
      var msg = ''

      if (hours > 0) msg = '该休息了'
      if (hours > 6) msg = '上午好'
      if (hours > 12) msg = '下午好'
      if (hours > 18) msg = '晚上好'

      $('#hello').html(msg)
    }

    $('.js-demo-1').html(parseTpl('Hello, <strong>$name</strong>, Today is <strong>$date</strong>', {
      name: 'There',
      date: new Date().toLocaleString()
    }));

    backToTop('.js-demo-backtotop', 10);
    animateIt();
  });

  function parseTpl(tpl, obj) {
    var tpl;

    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        tpl = tpl.replace(new RegExp('\\$' + property, 'ig'), obj[property]);
      }
    }

    return tpl;
  }

  function backToTop(selector, threshold, speed) {
    var $el = $(selector);

    $(window).on('scroll', function() {
      if ($(this).scrollTop() > (threshold ? threshold : $(this).height() / 2)) {
        $el.fadeIn();
      } else {
        $el.fadeOut();
      }
    });

    $el.on('click', function(e) {
      $('html, body').animate({
        scrollTop: 0
      }, speed ? speed : 300);

      e.preventDefault();
    });
  }

  function animateIt() {
    var $title = $('.css-demo-animate-title'),
      $btn = $('.css-demo-animate-btn'),
      titleClass = 'animated css-demo-animate-title',
      animateClass = 'bounce';

    $('.css-demo-animate-grid .ui.dropdown').on('change', function() {
      animateClass = $(this).val();
      $title.attr('class', titleClass + ' ' + animateClass);
    });

    $btn.on('click', function() {
      $title.removeClass(animateClass);
      setTimeout(function() { $title.addClass(animateClass); }, 0);
    });
  }
})();
