// 每页文章数
const per_page = 10
// 背景颜色查询 API
const corsApi = 'https://cors-anywhere.herokuapp.com/'
// 文章封面图查询条件
let q = 'design'

$(() => {
  initPalette()
  initCover()
})

// 为归档、标签和分类添加背景颜色
function initPalette() {
  if ($('.dream-tags').length === 0) return

  const $palette = $('.dream-palette')
  const localColors = localStorage.getItem('colors')

  if (localColors) {
    addBGC(localColors.split(','))
  } else {
    $.ajax({
      dataType: 'json',
      url: `${corsApi}http://www.colourlovers.com/api/palettes/top`,
      data: {
        format: 'json',
        numResults: 6
      },
      success(res) {
        if (Array.isArray(res)) {
          const colors = res.reduce((p, c) => p.concat([...c.colors]), [])
          colors.length = $('.dream-tags a').length
          addBGC(colors)
          localStorage.setItem('colors', colors)

          $('.dream-tags')
            .children()
            .map(function(index) {
              const title = $(this).attr('title')
              localStorage.setItem(title, colors[index])
              $(this).css('background', `#${colors[index]}`).attr('class', 'ui label')
            })
        }
      }
    })
  }
}

function addBGC(colors) {
  const $palette = $('.dream-palette')
  if ($palette.length === 0) return
  if (colors[0].length !== 6 || (colors.length !== $('.dream-tags a').length && colors.length <= 30)) {
    localStorage.clear()
    initPalette()
    return
  }

  $palette.find('.card').each((index, ele) => {
    const color = `#${colors[index]}`
    $(ele).css('background', color).find('.meta').html(color)
  }).addClass('bgc')
}

// 为文章添加封面图
function initCover(page) {
  // return false
  if ($('.dream-column').length === 0) return
  const $randomImg = $('.random-img:not(.inited)')

  if ($randomImg.length > 0) {
    const API_KEY = '14551560-202ad086904416c08de2a423c'
    const href = location.href
    const pageArr = location.href.split('/page/')

    if (!page && pageArr[1]) {
      page = Number.parseInt(pageArr[1])
    }

    if (href.includes('categories')) {
      const categoriesArr = location.href.split('/categories/')
      q = categoriesArr[1].split('/')[0]
    } else if (href.includes('tags')) {
      const tagsArr = location.href.split('/tags/')
      q = tagsArr[1].split('/')[0]
    }

    $.ajax({
      dataType: 'json',
      url: `https://pixabay.com/api/?key=${API_KEY}`,
      data: {
        q,
        page,
        per_page
      },
      success(res) {
        const hits = res.hits

        if (hits.length > 0) {
          const $grid = $('.dream-grid')
          $grid.masonry()

          $randomImg.each((index, ele) => {
            const src = hits[index] && hits[index].webformatURL
            if (!src) return
            $(ele).attr('src', src).addClass('inited')
          })

          $grid.imagesLoaded().progress(() => {
            $grid.masonry('layout')
          })
        }
      }
    })
  }
}
