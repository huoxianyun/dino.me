import BLOG from '@/blog.config'

const lang = {
  en: {
    NAV: {
      Home: 'Home',
      Poems: 'Poems',
      Photos: 'Photograph',
      Music: 'Music',
      Tools: 'Tools'
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next'
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top'
    }
  },
  'zh-CN': {
    NAV: {
      Home: '主页',
      Poems: '作词',
      Photos: '影记',
      Music: '音乐',
      Tools: '工具'
    },
    PAGINATION: {
      PREV: '上一页',
      NEXT: '下一页'
    },
    POST: {
      BACK: '返回',
      TOP: '回到顶部'
    }
  },
  'zh-HK': {
    NAV: {
      Home: '主頁',
      Poems: '作詞',
      Photos: '影記',
      Music: '音樂',
      Tools: '工具'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    }
  },
  'zh-TW': {
    NAV: {
      Home: '主頁',
      Poems: '作詞',
      Photos: '影記',
      Music: '音樂',
      Tools: '工具'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    }
  },
  ja: {
    NAV: {
      Home: '家',
      Poems: '詩',
      Photos: '写真撮影',
      Music: '音楽',
      Tools: '道具'
    },
    PAGINATION: {
      PREV: '前ページ',
      NEXT: '次ページ'
    },
    POST: {
      BACK: '戻る',
      TOP: 'トップに戻る'
    }
  },
  es: {
    NAV: {
      Home: 'Home',
      Poems: 'Poems',
      photos: 'Photos',
      Music: 'Music',
      Tools: 'Tools'
    },
    PAGINATION: {
      PREV: 'Anterior',
      NEXT: 'Siguiente'
    },
    POST: {
      BACK: 'Atrás',
      TOP: 'Arriba'
    }
  }
}

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return lang['zh-CN']
    case 'zh-hk':
      return lang['zh-HK']
    case 'zh-tw':
      return lang['zh-TW']
    case 'ja':
    case 'ja-jp':
      return lang.ja
    case 'es':
    case 'es-ES':
      return lang.es
    case 'en':
    case 'en-us':
    default:
      return lang.en
  }
}
