// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
/*
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    }
    
    //ARCHIVE https://telegra.ph/APIs-08-12
};
*/
const API_SITES = {
    stymei1_channel: {
        name: "📌关注TG频道@stymei1",
        remark: "✈️TG频道@stymei1",
        api: "https://heimuer.ggff.net/api.php/tvbox",
        disabled: true // 这是一个非视频源的推广链接，建议禁用或移除
    },
    airport_promo: {
        name: "👇🏻2元1000G机场分享👇🏻",
        remark: "✈️TG频道@stymei1",
        api: "https://mozhuazy.com/api.php/provide/vod/?ac=list",
        disabled: true // 这同样是推广链接
    },
    kelayun: {
        name: "https://kelayun.notepin.co",
        remark: "✈️TG频道@stymei1",
        api: "http://caiji.dyttzyapi.com/api.php/provide/vod/?ac=list"
    },
    douban: {
        name: "👖豆瓣",
        remark: "✈️TG频道@stymei1",
        api: "https://caiji.dbzy5.com/api.php/provide/vod/from/dbm3u8/at/josn"
    },
    maotai: {
        name: "👖茅台",
        remark: "✈️TG频道@stymei1",
        api: "https://caiji.maotaizy.cc/api.php/provide/vod/from/mtm3u8/at/josn"
    },
    ruyi: {
        name: "👖如意",
        remark: "✈️TG频道@stymei1",
        api: "http://cj.rycjapi.com/api.php/provide/vod/?ac=list"
    },
    liangzi: {
        name: "👖量子",
        remark: "✈️TG频道@stymei1",
        api: "https://cj.lziapi.com/api.php/provide/vod/?ac=list"
    },
    wolong: {
        name: "👖卧龙",
        remark: "✈️TG频道@stymei1",
        api: "https://collect.wolongzy.cc/api.php/provide/vod/at/xml/?ac=list"
    },
    baofeng: {
        name: "👖暴风",
        remark: "✈️TG频道@stymei1",
        api: "http://by.bfzyapi.com/api.php/provide/vod"
    },
    s360: {
        name: "👖360",
        remark: "✈️TG频道@stymei1",
        api: "https://360zyzz.com/api.php/provide/vod/from/360m3u8/at/json"
    },
    jisu: {
        name: "👖极速",
        remark: "✈️TG频道@stymei1",
        api: "https://jszyapi.com/api.php/provide/vod/from/jsm3u8/at/json"
    },
    uku: {
        name: "👖U酷",
        remark: "✈️TG频道@stymei1",
        api: "https://api.ukuapi88.com/api.php/provide/vod/?ac=list"
    },
    tianya: {
        name: "👖天涯",
        remark: "✈️TG频道@stymei1",
        api: "https://tyyszyapi.com/api.php/provide/vod/?ac=list"
    },
    wujin: {
        name: "👖无尽",
        remark: "✈️TG频道@stymei1",
        api: "https://api.wujinapi.me/api.php/provide/vod/?ac=list"
    },
    iqiyi: {
        name: "👖iQIYI",
        remark: "✈️TG频道@stymei1",
        api: "https://iqiyizyapi.com/api.php/provide/vod/from/snm3u8/at/xml"
    },
    ikun: {
        name: "👖ikun",
        remark: "✈️TG频道@stymei1",
        api: "https://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/at/json"
    },
    modu: {
        name: "👖魔都",
        remark: "✈️TG频道@stymei1",
        api: "https://www.mdzyapi.com/api.php/provide/vod/?ac=list"
    },
    baiduyun: {
        name: "👖百度云",
        remark: "✈️TG频道@stymei1",
        api: "https://api.apibdzy.com/api.php/provide/vod/?ac=list"
    },
    shandian: {
        name: "👖闪电",
        remark: "✈️TG频道@stymei1",
        api: "https://xsd.sdzyapi.com/api.php/provide/vod/?ac=list"
    },
    hongniu: {
        name: "👖红牛",
        remark: "✈️TG频道@stymei1",
        api: "https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/at/josn"
    },
    guangsu: {
        name: "👖光速",
        remark: "✈️TG频道@stymei1",
        api: "https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8"
    },
    xinlang: {
        name: "👖新浪",
        remark: "✈️TG频道@stymei1",
        api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod/from/xlm3u8"
    },
    kuaiche: {
        name: "👖快车",
        remark: "✈️TG频道@stymei1",
        api: "https://caiji.kuaichezy.org/api.php/provide/vod/?ac=list"
    },
    jinying: {
        name: "👖金鹰",
        remark: "✈️TG频道@stymei1",
        api: "https://jyzyapi.com/provide/vod/from/jinyingm3u8/at/json"
    },
    maoyan: {
        name: "👖猫眼",
        remark: "✈️TG频道@stymei1",
        api: "https://api.maoyanapi.top/api.php/provide/vod"
    },
    wangwang: {
        name: "👖旺旺",
        remark: "✈️TG频道@stymei1",
        api: "https://api.wwzy.tv/api.php/provide/vod/?ac=list"
    },
    huya: {
        name: "👖虎牙",
        remark: "✈️TG频道@stymei1",
        api: "https://www.huyaapi.com/api.php/provide/vod/from/hym3u8/at/json"
    },
    haohua: {
        name: "👖豪华",
        remark: "✈️TG频道@stymei1",
        api: "https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/at/json"
    },
    subo: {
        name: "👖速播",
        remark: "✈️TG频道@stymei1",
        api: "https://subocj.com/api.php/provide/vod/from/subm3u8/at/json"
    },
    feifan: {
        name: "👖非凡",
        remark: "✈️TG频道@stymei1",
        api: "http://api.ffzyapi.com/api.php/provide/vod/?ac=list"
    },
    yinghua: {
        name: "👖樱花",
        remark: "✈️TG频道@stymei1",
        api: "https://m3u8.apiyhzy.com/api.php/provide/vod/?ac=list"
    },
    youzhi: {
        name: "👖优质",
        remark: "✈️TG频道@stymei1",
        api: "http://api.yzzy-api.com/inc/apijson.php?ac=list"
    },
    yaya: {
        name: "👖鸭鸭",
        remark: "✈️TG频道@stymei1",
        api: "https://cj.yayazy.net/api.php/provide/vod/?ac=list"
    },
    pubupan: {
        name: "👖瀑布盘",
        remark: "✈️TG频道@stymei1",
        api: "https://dh.ha.cn/api.php/provide/vod/?ac=list"
    },
    niuniu: {
        name: "👖牛牛",
        remark: "✈️TG频道@stymei1",
        api: "https://api.niuniuzy.me/api.php/provide/vod/from/nnm3u8/at/xml"
    },
    zuida: {
        name: "👖最大",
        remark: "✈️TG频道@stymei1",
        api: "http://zuidazy.me/api.php/provide/vod"
    },
    piaoling: {
        name: "👖飘零",
        remark: "✈️TG频道@stymei1",
        api: "https://p2100.net/api.php/provide/vod"
    },
    s1080: {
        name: "👖1080",
        remark: "✈️TG频道@stymei1",
        api: "https://api.1080zyku.com/inc/apijson.php"
    },
    shenma: {
        name: "👖神马",
        remark: "✈️TG频道@stymei1",
        api: "https://img.smdyw.top/api.php/provide/vod"
    },
    guazi_app: {
        name: "👖瓜子影视App",
        remark: "✈️TG频道@stymei1",
        api: "https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_gzapp.txt"
    },
    guazi_web: {
        name: "👖瓜子影视Web",
        remark: "✈️TG频道@stymei1",
        api: "https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_gzys.js"
    },
    xiuluo: {
        name: "👖修罗影视",
        api: "https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_biliys.js"
    },
    hanju: {
        name: "👖韩剧看看",
        api: "https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_hjkk.js"
    },
    s4kav: {
        name: "👖4k-av",
        api: "https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_4kav.js"
    },
    xiaozhang: {
        name: "👖校长影视",
        remark: "✈️TG频道@stymei1",
        api: "https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Pan_xzys.txt"
    },
    bttwo: {
        name: "👖2个BT",
        api: "https://cdn.jsdelivr.net/gh/yswag/uzVideo@main/js/spider/bttwo.js",
        remark: "✈️TG频道@stymei1"
    }
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
