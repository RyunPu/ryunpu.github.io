// 每页文章数
const per_page = 10
// 搜索
let search = null

$(document).ready(() => {
  preload()
  initFilp()
  initGrid()
  initTags()
  initAccordion()
  initSearch()
  initPhotoswipe()
  init()
})

function preload() {
  if ($('.homepage').length === 0) return

  const initInk = ink()
  const $bar = $('.loading-bar .item')
  const $mask = $('.loading-mask')
  const $nmask = $('.normal-mask')
  const queue = new createjs.LoadQueue(true)
  // TODO: 提前加载的静态资源，根据需要修改
  const resources = [
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
  ]

  queue.loadManifest(resources)
  queue.on('progress', (e) => { $bar.show().animate({ width: (e.loaded / e.total * 100) + '%' }, 100) })
  queue.on('complete', (e) => {
    $bar.fadeOut()
    $nmask.hide()
    setTimeout(initInk, 1000)
  })
}

function initSearch() {
  search = instantsearch({
    // TODO: 配置你自己的 appId，apiKey 和 indexName，查询地址 https://www.algolia.com/dashboard，相关文章 https://dp2px.com/2019/09/07/hugo-algolia/
    appId: 'HZ02OH7T6I',
    apiKey: '9abdcad75712be7ca136135c15e532a4',
    indexName: 'dev_Blog',
    searchFunction(helper) {
      const $searchResults = $('#search-results')

      if (helper.state.query === '') {
        $searchResults.hide()
        return;
      }

      helper.search()
      $searchResults.show()
    }
  })

  const $status = $('#search-status')
  const $results = $('#search-results')

  search.addWidgets([{
    render: ({ searchMetadata = {} }) => {
      const { isSearchStalled } = searchMetadata
      const tpl = '<div><div class="loading"></div></div>'

      if (isSearchStalled) {
        $results.hide()
        $status.html(tpl)
      } else {
        $status.html('')
        $results.show()
      }
    }
  }])

  Date.prototype.format = function(format) {
    var o = {
      'M+': this.getMonth() + 1, // month
      'd+': this.getDate(), // day
      'h+': this.getHours(), // hour
      'm+': this.getMinutes(), // minute
      's+': this.getSeconds(), // second
      'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
      'S': this.getMilliseconds() // millisecond
    }

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
          o[k] :
          ('00' + o[k]).substr(('' + o[k]).length));
      }
    }

    return format;
  };

  const hitTemplate = function(hit) {
    if (hit === null) return

    const title = hit._highlightResult.title.value
    const url = hit.url
    let date = hit.date ? new Date(hit.date * 1000).format('yyyy-MM-dd') : ''

    if (url.includes('/categories/') || url.includes('/tags/') || url.includes('/about/')) return null

    return `
      <li>
        <a href="${url}">
          ${title}
          <span class="entry-date">
            <time>${date}</time>
          </span>
        </a>
      </li>
    `
  }

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search...',
      autofocus: true
    })
  )

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: hitTemplate
      }
    })
  )

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination',
      maxPage: 10,
      scrollTo: false
    })
  )

  search.start()
}

function ink() {
  var modalTrigger = $('.cd-modal-trigger')
  const transitionLayer = $('.cd-transition-layer')
  const transitionBackground = transitionLayer.children()
  const modalWindow = $('.cd-modal')
  const frameProportion = 1.78 //png frame aspect ratio
  const frames = 25 //number of png frames
  let resize = false

  //set transitionBackground dimentions
  setLayerDimensions()
  $(window).on('resize', function() {
    if (!resize) {
      resize = true;
      (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions)
    }
  })

  transitionLayer.addClass('visible opening')
  setTimeout(function() {
    modalWindow.addClass('visible')
  }, 200)

  function setLayerDimensions() {
    const windowWidth = $(window).width()
    const windowHeight = $(window).height()
    let layerHeight
    let layerWidth

    if (windowWidth / windowHeight > frameProportion) {
      layerWidth = windowWidth
      layerHeight = layerWidth / frameProportion
    } else {
      layerHeight = windowHeight * 1.2
      layerWidth = layerHeight * frameProportion
    }

    transitionBackground.css({
      'width': layerWidth * frames + 'px',
      'height': layerHeight + 'px',
    })

    resize = false
  }

  return function () {
    transitionLayer.addClass('closing')
    modalWindow.removeClass('visible')
    transitionBackground.one('animationend', function() {
      transitionLayer.removeClass('closing opening visible')
      transitionBackground.off('animationend')
    })
  }
}

function closeOverlay() {
  $('.search-mask').removeClass('overlay').find('.ais-search-box--input').val('')
  if (search) search.helper.setQuery('').search()
  $('body').removeClass('modal-open')
}

function init() {
  const $searchMask = $('.search-mask')
  const $searchIcon = $('.search-icon')
  const $searchBox = $('.ais-search-box--input')

  $searchMask.click(function(e) {
    if ($(e.target).closest('.search-area').length === 0) {
      closeOverlay()
    }
  })

  $searchBox.keydown(function(e) {
    if (e.which === 27) closeOverlay()
  })

  $(document).keydown(function(e) {
    if (e.altKey && e.which === 70) {
      $('.search-icon').trigger('click')
    }
  })

  $searchIcon.click(function(e) {
    $searchMask.addClass('overlay')
    $('body').addClass('modal-open')
    setTimeout(() => { $searchBox.focus() }, 400)
  })

  $('.dream-single a').each(function() {
    if (this.hostname !== window.location.hostname) {
      this.target = '_blank'
    }
  })

  $('.infinite').hover(
    function() { $(this).stop().removeClass('animated') },
    function() { $(this).stop().addClass('animated') }
  )

  $('.arrow-down').click(() => {
    $('html, body').stop().animate({ scrollTop: $(window).height() })
  })

  $('.top-nav').sticky({
    context: '#container',
    offset: 14
  })

  const $backToTop = $('.backToTop')

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $backToTop.fadeIn()
    } else {
      $backToTop.fadeOut()
    }
  })

  $backToTop.click(function() {
    $('html, body').stop().animate({ scrollTop: 0 })
  })

  // 仅在首页，为 '.sre' 元素添加入场动画
  if ($('.homepage').length > 0) {
    ScrollReveal().reveal($('.sre'), {
      distance: '10px',
      delay: 300,
      cleanup: true
    })
  }
}

function initPhotoswipe() {
  // 每一组图库外层添加 pswp-list 类，每一张图片添加 data-size 属性，格式 1440x900，默认使用图片的 src，请根据需要修改
  if ($('.pswp').length === 0 || $('.pswp-list').length === 0) return

  const $pswp = $('.pswp')[0]
  const $list = $('.pswp-list')
  const $imgs = $('img[data-size]')
  let items = []

  $list.each(function(index) {
    items[index] = []

    $(this).find('img[data-size]').each(function(itemIndex) {
      const href = $(this).attr('src')
      const size = $(this).data('size').split('x')
      const [width, height] = size

      $(this).attr({ 'data-index': itemIndex, 'data-list-index': index })

      items[index].push({
        src: href,
        w: width,
        h: height
      })
    })
  })

  $imgs.on('click', function(event) {
    const index = $(this).data('index')
    const listIndex = $(this).data('list-index')
    const options = {
      index: index,
      bgOpacity: 0.7,
      showHideOpacity: true
    }

    if (!items[listIndex]) return
    const pswp = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items[listIndex], options);
    pswp.init()
  })
}

function initGrid() {
  if ($('.dream-column').length === 0) return

  const $grid = $('.dream-grid').masonry({
    itemSelector: '.dream-column'
  })

  $grid.imagesLoaded().progress(() => {
    $grid.masonry('layout')
  })

  initInfiniteScroll($grid.data('masonry'))
}

function initInfiniteScroll(msnry) {
  const postLen = $('.dream-post').length

  if (postLen >= per_page) {
    let hasInited = false
    let currentPage = 1
    const arr = location.href.split('/page/')
    const infiniteScroll = new InfiniteScroll('.dream-grid', {
      path: function() {
        if (!hasInited && arr[1]) {
          currentPage = Number.parseInt(arr[1])
          hasInited = true
        }

        return `${arr[0]}page/${this.loadCount + currentPage + 1}`
      },
      append: '.dream-post',
      status: '.scroller-status',
      outlayer: msnry
    })

    if (typeof initCover === 'function') {
      infiniteScroll.on('append', function(response, path, items) {
        const arr = path.split("/page/")
        initCover(Number.parseInt(arr[1]))
      })
    }
  }
}
