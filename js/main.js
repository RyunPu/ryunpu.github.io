'use strict'
function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread()
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance')
}
function _iterableToArray(t) {
  if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t)
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) {
    for (var e = 0, a = new Array(t.length); e < t.length; e++) a[e] = t[e]
    return a
  }
}
var per_page = 10,
  corsApi = 'https://cors-anywhere.herokuapp.com/',
  q = '',
  qarr = [
    '',
    'design',
    'art',
    'cute',
    'girl',
    'concept',
    'scenery',
    'anime',
    'fashion',
    'draw',
    'photo',
    'illustration',
  ]
function initPalette() {
  if (0 !== $('.dream-tags').length) {
    $('.dream-palette')
    var t = localStorage.getItem('colors')
    t
      ? addBGC(t.split(','))
      : $.ajax({
          dataType: 'json',
          url: ''.concat(corsApi, 'http://www.colourlovers.com/api/palettes/top'),
          data: { format: 'json', numResults: 6 },
          success: function (t) {
            if (Array.isArray(t)) {
              var a = t.reduce(function (t, e) {
                return t.concat(_toConsumableArray(e.colors))
              }, [])
              ;(a.length = $('.dream-tags a').length),
                addBGC(a),
                localStorage.setItem('colors', a),
                $('.dream-tags')
                  .children()
                  .map(function (t) {
                    var e = $(this).attr('title')
                    localStorage.setItem(e, a[t]), $(this).css('background', '#'.concat(a[t])).attr('class', 'ui label')
                  })
            }
          },
        })
  }
}
function addBGC(n) {
  var t = $('.dream-palette')
  if (0 !== t.length)
    return 6 !== n[0].length || (n.length !== $('.dream-tags a').length && n.length <= 30)
      ? (localStorage.clear(), void initPalette())
      : void t
          .find('.card')
          .each(function (t, e) {
            var a = '#'.concat(n[t])
            $(e).css('background', a).find('.meta').html(a)
          })
          .addClass('bgc')
}
function initCover(t) {
  if (0 !== $('.dream-column').length) {
    var a = $('.random-img:not(.inited)')
    if (0 < a.length) {
      var e = location.href,
        n = location.href.split('/page/')
      if ((!t && n[1] && (t = Number.parseInt(n[1])), e.includes('categories'))) {
        var i = location.href.split('/categories/')
        q = i[1].split('/')[0]
      } else if (e.includes('tags')) {
        var r = location.href.split('/tags/')
        q = r[1].split('/')[0]
      }
      $.ajax({
        dataType: 'json',
        url: 'https://pixabay.com/api/?key='.concat('14551560-202ad086904416c08de2a423c'),
        data: { q: q, page: t, per_page: per_page },
        success: function (t) {
          var n = t.hits
          if (0 < n.length) {
            var e = $('.dream-grid')
            e.masonry(),
              a.each(function (t, e) {
                var a = n[t] && n[t].webformatURL
                a && $(e).attr('src', a).addClass('inited')
              }),
              e.imagesLoaded().progress(function () {
                e.masonry('layout')
              })
          }
        },
      })
    }
  }
}
;(q = qarr[Math.floor(Math.random() * qarr.length)]),
  $(function () {
    initPalette(), initCover()
  }),
  $(function () {
    if (
      (0 < $('#olddays').length && ($('body').hasClass('dark') || $('#theme-switch').click()), 0 < $('#hello').length)
    ) {
      var t = new Date().getHours(),
        e = ''
      0 < t && (e = '该休息了'),
        6 < t && (e = '上午好'),
        12 < t && (e = '下午好'),
        18 < t && (e = '晚上好'),
        $('#hello').html(e)
    }
    $('.js-demo-1').html(
      (function (t, e) {
        for (var a in e) e.hasOwnProperty(a) && (t = t.replace(new RegExp('\\$' + a, 'ig'), e[a]))
        return t
      })('Hello, <strong>$name</strong>, Today is <strong>$date</strong>', {
        name: 'There',
        date: new Date().toLocaleString(),
      })
    ),
      (function (t, e, a) {
        var n = $(t)
        $(window).on('scroll', function () {
          $(this).scrollTop() > (e || $(this).height() / 2) ? n.fadeIn() : n.fadeOut()
        }),
          n.on('click', function (t) {
            $('html, body').animate({ scrollTop: 0 }, a || 300), t.preventDefault()
          })
      })('.js-demo-backtotop', 10),
      (function () {
        var t = $('.css-demo-animate-title'),
          e = $('.css-demo-animate-btn'),
          a = 'bounce'
        $('.css-demo-animate-grid .ui.dropdown').on('change', function () {
          ;(a = $(this).val()), t.attr('class', 'animated css-demo-animate-title ' + a)
        }),
          e.on('click', function () {
            t.removeClass(a),
              setTimeout(function () {
                t.addClass(a)
              }, 0)
          })
      })()
  })
var SemanticUIColors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
]
function randomInt(t, e) {
  return (t = Math.ceil(t)), (e = Math.floor(e)), Math.floor(Math.random() * (e - t)) + t
}
function initTags() {
  $('.dream-tags')
    .children()
    .map(function () {
      var t = $(this).attr('title'),
        e = localStorage.getItem(t)
      e
        ? $(this).css('background', '#'.concat(e))
        : ((e = SemanticUIColors[randomInt(0, SemanticUIColors.length)]), $(this).addClass(e))
    })
}
function initAccordion() {
  $('.dream-categories .ui.accordion').accordion({
    selector: { trigger: '.title .icon' },
    onChange: function () {
      $('.flip-container').height(getFilpHeights()[0]), $('.dream-grid').masonry('layout')
    },
  })
}
function _slicedToArray(t, e) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _nonIterableRest()
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function _iterableToArrayLimit(t, e) {
  if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) {
    var a = [],
      n = !0,
      i = !1,
      r = void 0
    try {
      for (
        var o, s = t[Symbol.iterator]();
        !(n = (o = s.next()).done) && (a.push(o.value), !e || a.length !== e);
        n = !0
      );
    } catch (t) {
      ;(i = !0), (r = t)
    } finally {
      try {
        n || null == s.return || s.return()
      } finally {
        if (i) throw r
      }
    }
    return a
  }
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t
}
per_page = 10
var search = null
function preload() {
  if (0 !== $('.homepage').length) {
    var e = ink(),
      a = $('.loading-bar .item'),
      n = ($('.loading-mask'), $('.normal-mask')),
      t = new createjs.LoadQueue(!0)
    t.loadManifest([
      '/js/vendor.js',
      '/css/github-markdown.css',
      '/css/site.css',
      '/img/404.png',
      '/img/bg-dark.jpg',
      '/img/bg-white.jpg',
      '/img/default.jpg',
      '/img/Caveat-Regular.ttf',
      '/img/work/homepage.jpg',
      '/img/project/self.jpg',
      '/img/project/mxdia.jpg',
      '/img/project/lehuomao.jpg',
      '/img/project/gq.jpg',
      '/img/project/hyym.jpg',
      '/img/project/heytea.jpg',
    ]),
      t.on('progress', function (t) {
        a.show().animate({ width: (t.loaded / t.total) * 100 + '%' }, 100)
      }),
      t.on('complete', function (t) {
        a.fadeOut(), n.hide(), setTimeout(e, 1e3)
      })
  }
}
function initSearch() {
  search = instantsearch({
    appId: 'Z0690YNRW8',
    apiKey: '406f17048982e0c3f5941783f0e3dd4f',
    indexName: 'algolia',
    searchFunction: function (t) {
      var e = $('#search-results')
      '' !== t.state.query ? (t.search(), e.show()) : e.hide()
    },
  })
  var a = $('#search-status'),
    n = $('#search-results')
  search.addWidgets([
    {
      render: function (t) {
        var e = t.searchMetadata
        ;(void 0 === e ? {} : e).isSearchStalled
          ? (n.hide(), a.html('<div><div class="loading"></div></div>'))
          : (a.html(''), n.show())
      },
    },
  ]),
    (Date.prototype.format = function (t) {
      var e = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds(),
      }
      for (var a in (/(y+)/.test(t) &&
        (t = t.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))),
      e))
        new RegExp('(' + a + ')').test(t) &&
          (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[a] : ('00' + e[a]).substr(('' + e[a]).length)))
      return t
    })
  search.addWidget(
    instantsearch.widgets.searchBox({ container: '#search-box', placeholder: 'Search...', autofocus: !0 })
  ),
    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          item: function (t) {
            if (null !== t) {
              var e = t._highlightResult.title.value,
                a = t.url,
                n = t.date ? new Date(1e3 * t.date).format('yyyy-MM-dd') : ''
              return a.includes('/categories/') || a.includes('/tags/') || a.includes('/about/')
                ? null
                : '\n      <li>\n        <a href="'
                    .concat(a, '">\n          ')
                    .concat(e, '\n          <span class="entry-date">\n            <time>')
                    .concat(n, '</time>\n          </span>\n        </a>\n      </li>\n    ')
            }
          },
        },
      })
    ),
    search.addWidget(instantsearch.widgets.pagination({ container: '#pagination', maxPage: 10, scrollTo: !1 })),
    search.start()
}
function ink() {
  $('.cd-modal-trigger')
  var t = $('.cd-transition-layer'),
    i = t.children(),
    e = $('.cd-modal'),
    r = !1
  function a() {
    var t,
      e,
      a = $(window).width(),
      n = $(window).height()
    1.78 < a / n ? (t = (e = a) / 1.78) : (e = 1.78 * (t = 1.2 * n)),
      i.css({ width: 25 * e + 'px', height: t + 'px' }),
      (r = !1)
  }
  return (
    a(),
    $(window).on('resize', function () {
      r || ((r = !0), window.requestAnimationFrame ? window.requestAnimationFrame(a) : setTimeout(a, 300))
    }),
    t.addClass('visible opening'),
    setTimeout(function () {
      e.addClass('visible')
    }, 200),
    function () {
      t.addClass('closing'),
        e.removeClass('visible'),
        i.one('animationend', function () {
          t.removeClass('closing opening visible'), i.off('animationend')
        })
    }
  )
}
function closeOverlay() {
  $('.search-mask').removeClass('overlay').find('.ais-search-box--input').val(''),
    search && search.helper.setQuery('').search(),
    $('body').removeClass('modal-open')
}
function init() {
  var e = $('.search-mask'),
    t = $('.search-icon'),
    a = $('.ais-search-box--input')
  e.click(function (t) {
    0 === $(t.target).closest('.search-area').length && closeOverlay()
  }),
    a.keydown(function (t) {
      27 === t.which && closeOverlay()
    }),
    $(document).keydown(function (t) {
      t.altKey && 70 === t.which && $('.search-icon').trigger('click')
    }),
    t.click(function (t) {
      e.addClass('overlay'),
        $('body').addClass('modal-open'),
        setTimeout(function () {
          a.focus()
        }, 400)
    }),
    $('.dream-single a').each(function () {
      this.hostname !== window.location.hostname && (this.target = '_blank')
    }),
    $('.infinite').hover(
      function () {
        $(this).stop().removeClass('animated')
      },
      function () {
        $(this).stop().addClass('animated')
      }
    ),
    $('.arrow-down').click(function () {
      $('html, body')
        .stop()
        .animate({ scrollTop: $(window).height() })
    }),
    $('.top-nav').sticky({ context: '#container', offset: 14 })
  var n = $('.backToTop')
  $(window).scroll(function () {
    $(this).scrollTop() > $(this).height() ? n.fadeIn() : n.fadeOut()
  }),
    n.click(function () {
      $('html, body').stop().animate({ scrollTop: 0 })
    })
}
function initPhotoswipe() {
  if (0 !== $('.pswp').length && 0 !== $('.pswp-list').length) {
    var i = $('.pswp')[0],
      t = $('.pswp-list'),
      e = $('img[data-size]'),
      s = []
    t.each(function (o) {
      ;(s[o] = []),
        $(this)
          .find('img[data-size]')
          .each(function (t) {
            var e = $(this).attr('src'),
              a = $(this).data('size').split('x'),
              n = _slicedToArray(a, 2),
              i = n[0],
              r = n[1]
            $(this).attr({ 'data-index': t, 'data-list-index': o }), s[o].push({ src: e, w: i, h: r })
          })
    }),
      e.on('click', function (t) {
        var e = $(this).data('index'),
          a = $(this).data('list-index'),
          n = { index: e, bgOpacity: 0.7, showHideOpacity: !0 }
        s[a] && new PhotoSwipe(i, PhotoSwipeUI_Default, s[a], n).init()
      })
  }
}
function initGrid() {
  if (0 !== $('.dream-column').length) {
    var t = $('.dream-grid').masonry({ itemSelector: '.dream-column' })
    t.imagesLoaded().progress(function () {
      t.masonry('layout')
    }),
      initInfiniteScroll(t.data('masonry'))
  }
}
function initInfiniteScroll(t) {
  var e = $('.dream-post').length
  if (per_page <= e) {
    var a = !1,
      n = 1,
      i = location.href.split('/page/'),
      r = new InfiniteScroll('.dream-grid', {
        path: function () {
          return (
            !a && i[1] && ((n = Number.parseInt(i[1])), (a = !0)),
            ''.concat(i[0], 'page/').concat(this.loadCount + n + 1)
          )
        },
        append: '.dream-post',
        status: '.scroller-status',
        outlayer: t,
      })
    'function' == typeof initCover &&
      r.on('append', function (t, e, a) {
        var n = e.split('/page/')
        initCover(Number.parseInt(n[1]))
      })
  }
}
function _slicedToArray(t, e) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _nonIterableRest()
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function _iterableToArrayLimit(t, e) {
  if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) {
    var a = [],
      n = !0,
      i = !1,
      r = void 0
    try {
      for (
        var o, s = t[Symbol.iterator]();
        !(n = (o = s.next()).done) && (a.push(o.value), !e || a.length !== e);
        n = !0
      );
    } catch (t) {
      ;(i = !0), (r = t)
    } finally {
      try {
        n || null == s.return || s.return()
      } finally {
        if (i) throw r
      }
    }
    return a
  }
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t
}
function initFilp() {
  var i = $('.flip-container')
  i.height(getFilpHeights()[0]),
    $('.dream-flip-toggle').click(function () {
      var t = getFilpHeights(),
        e = _slicedToArray(t, 2),
        a = e[0],
        n = e[1]
      i.toggleClass('flip-it'), i.hasClass('flip-it') ? i.height(n) : i.height(a)
    }),
    i.on('transitionend', function () {
      0 !== $('.dream-column').length && $('.dream-grid').masonry('layout')
    })
}
function getFilpHeights() {
  var a = 0,
    n = 0
  return (
    $('.flipper-block').each(function (t, e) {
      0 === t && (a = $(e).height()), 1 === t && (n = $(e).height())
    }),
    [a, n]
  )
}
$(document).ready(function () {
  preload(), initFilp(), initGrid(), initTags(), initAccordion(), initSearch(), initPhotoswipe(), init()
})
var dark = 'inverted',
  localStore = window.localStorage,
  darkHeaderElements = function () {
    if ($('.dream-header').length) {
      var t = $('.dream-header .ui.segment'),
        e = $('.dream-header .ui.top.segment .ui.header'),
        a = $('.dream-header .ui.top.segment .ui.list'),
        n = $('.dream-header .ui.segment .ui.accordion')
      t.map(function () {
        $(this).toggleClass(dark)
      }),
        e.toggleClass(dark),
        a.toggleClass(dark),
        n.toggleClass(dark)
    }
  },
  darkBack = function () {
    var t = $('.dream-back .ui.segment')
    t.length &&
      t.map(function () {
        $(this).toggleClass(dark)
      })
  },
  darkPostsSection = function () {
    var t = $('.ui.segment.dream-posts-section')
    t.length && t.toggleClass(dark)
  },
  darkTagsSection = function () {
    var t = $('.ui.segment.dream-tags-section')
    t.length && t.toggleClass(dark)
  },
  darkCategoriesSection = function () {
    var t = $('.ui.segment.dream-categories-section')
    t.length && t.toggleClass(dark)
  },
  darkSingle = function () {
    var t = $('.dream-single .ui.segment')
    t.length &&
      (t.map(function () {
        $(this).toggleClass(dark)
      }),
      $('.dream-single .ui.top.segment .ui.header').toggleClass(dark))
  }
function toggleDark() {
  darkHeaderElements(),
    darkBack(),
    darkPostsSection(),
    darkTagsSection(),
    darkCategoriesSection(),
    darkSingle(),
    darkOther()
}
function darkOther() {
  var e = $('body')
  e.css('backgroundImage')
  localStorage.getItem('hugo-theme-dream-is-dark')
    ? ($('body').addClass('dark'),
      $('.dream-menu').addClass(dark),
      $('.button').addClass(dark),
      onImgLoad('/img/bg-dark.jpg', function (t) {
        t && e.css('backgroundImage', 'url("'.concat(t, '")'))
      }))
    : ($('body').removeClass('dark'),
      $('.dream-menu').removeClass(dark),
      $('.button').removeClass(dark),
      onImgLoad('/img/bg-white.jpg', function (t) {
        t && e.css('backgroundImage', 'url("'.concat(t, '")'))
      }))
}
function onImgLoad(t, e) {
  var a = new Image()
  ;(a.src = t),
    (a.onload = function () {
      e(t)
    }),
    (a.onerror = function (t) {
      e(!1)
    })
}
var isDark = localStore.getItem('hugo-theme-dream-is-dark'),
  iconSwitch = $('#theme-switch')
isDark ? (iconSwitch.addClass('moon'), toggleDark()) : iconSwitch.addClass('sun')
var themeSwitch = function () {
  ;(isDark = isDark
    ? (iconSwitch.removeClass('moon'),
      iconSwitch.addClass('sun'),
      localStore.removeItem('hugo-theme-dream-is-dark'),
      null)
    : (iconSwitch.removeClass('sun'),
      iconSwitch.addClass('moon'),
      localStore.setItem('hugo-theme-dream-is-dark', 'y'),
      'y')),
    toggleDark()
}
