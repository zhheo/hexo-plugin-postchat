const cheerio = require('cheerio');

// 仅为文章页面插入 id="postchat_postcontent" 的 div 容器
hexo.extend.filter.register('after_post_render', function (data) {
  // 检查页面类型是否为文章
  if (data.layout === 'post') {
    data.content = '<div id="postchat_postcontent">' + data.content + '</div>';
  }
  return data;
});

// 为所有HTML页面插入必要的脚本和样式
hexo.extend.filter.register('after_render:html', function (data) {
  // 使用 cheerio 加载HTML内容
  const $ = cheerio.load(data);

  // 读取配置项
  const config = hexo.config.postchat || {};

  const {
    account = {},
    summary = {},
    chat = {}
  } = config;

  const {
    key = "70b649f150276f289d1025508f60c5f58a"
  } = account;

  const {
    enableSummary = true,
    postSelector = "#postchat_postcontent",
    title = "文章摘要",
    summaryStyle = "https://ai.tianli0.top/static/public/postChatUser_summary.min.css",
    postURL = "/^https?://[^/]+/[0-9]{4}/[0-9]{2}/[0-9]{2}/",
    blacklist = "",
    wordLimit = "1000",
    typingAnimate = true,
    beginningText = "这篇文章介绍了",
    summaryTheme = "default",
    podcast = false
  } = summary;

  const {
    enableAI = true,
    backgroundColor = "#3e86f6",
    fill = "#FFFFFF",
    bottom = "16px",
    left = "16px",
    width = "44px",
    frameWidth = "375px",
    frameHeight = "600px",
    defaultInput = true,
    upLoadWeb = true,
    showInviteLink = true,
    userTitle = "PostChat",
    userDesc = "如果你对网站的内容有任何疑问，可以来问我哦～",
    addButton = true,
    userIcon = "https://ai.tianli0.top/static/img/PostChat.webp",
    userMode = "magic",
    defaultChatQuestions = ["你好", "你是谁"],
    defaultSearchQuestions = ["视频压缩", "设计"],
    recommend = 0,
    hotWords = false
  } = chat;

  // 插入脚本代码
  const script = `
    <link rel="stylesheet" href="${summaryStyle}">
    <script>
        let tianliGPT_key = '${key}';
        let tianliGPT_postSelector = '${postSelector}';
        let tianliGPT_Title = '${title}';
        let tianliGPT_postURL = '${postURL}';
        let tianliGPT_blacklist = '${blacklist}';
        let tianliGPT_wordLimit = '${wordLimit}';
        let tianliGPT_typingAnimate = ${typingAnimate};
        let tianliGPT_theme = '${summaryTheme}';
        ${podcast ? "let tianliGPT_podcast = true;" : ""}
        var postChatConfig = {
          backgroundColor: "${backgroundColor}",
          bottom: "${bottom}",
          left: "${left}",
          fill: "${fill}",
          width: "${width}",
          frameWidth: "${frameWidth}",
          frameHeight: "${frameHeight}",
          defaultInput: ${defaultInput},
          upLoadWeb: ${upLoadWeb},
          showInviteLink: ${showInviteLink},
          userTitle: "${userTitle}",
          userDesc: "${userDesc}",
          addButton: ${addButton},
          beginningText: "${beginningText}",
          userIcon: "${userIcon}",
          userMode: "${userMode}",
          defaultChatQuestions: ${JSON.stringify(defaultChatQuestions)},
          defaultSearchQuestions: ${JSON.stringify(defaultSearchQuestions)},
          recommend: ${Math.min(10, Math.max(0, parseInt(recommend, 10) || 0))},
          hotWords: ${hotWords}
        };
    </script>
    <script data-postChat_key="${key}" src="%s"></script>
  `;

  // 确定插入的JS文件地址
  let scriptSrc;
  if (enableAI && enableSummary) {
    scriptSrc = "https://ai.tianli0.top/static/public/postChatUser_summary.min.js";
  } else if (enableAI) {
    scriptSrc = "https://ai.tianli0.top/static/public/postChatUser.min.js";
  } else if (enableSummary) {
    scriptSrc = "https://ai.tianli0.top/static/public/tianli_gpt.min.js";
  } else {
    scriptSrc = "";
  }

  if (scriptSrc) {
    $('body').append(script.replace("%s", scriptSrc));
  }

  data = $.html();

  return data;
});
