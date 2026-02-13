<div align="center">
    <a href="https://ai.tianli0.top/" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/user-attachments/assets/63202383-660f-421a-aacd-ea01d675f968" alt="icon"/>
    </a>
    <h1 align="center">PostChat</h1>
    <span>PostChat的WordPress插件，也支持文章摘要用户使用</span>
</div>

## 简介

![quickshot.webp](https://github.com/user-attachments/assets/27668d1d-4e29-4692-81ec-e616a7910e7b)

PostChat是一个专为中小开发者与站长开发的AI增强工具，可以在网站中插入聊天机器人和智能摘要生成的功能。本项目提供专为Hexo博客系统的插件安装包，你可以在Hexo博客中安装使用，避免了插入代码的繁琐。

## 功能

这个插件支持PostChat用户和文章摘要用户使用。文章摘要用户可以在插件设置中关闭“智能对话”功能即可。

- 文章摘要生成功能
- 文章知识库功能
- 文章知识库对话功能
- 文章AI搜索功能

更多功能可以参见：https://ai.tianli0.top/

## 本插件在Hexo中的表现

[预览地址](https://hexo.zhheo.com/2024/07/09/hello-world/)

## PostChat在更多网站中的表现

[张洪Heo](https://blog.zhheo.com/)

[Tianli](https://tianli-blog.club/)

## 安装方式

使用命令行工具或终端cd进入你的Hexo博客根目录。

```
cd /Users/这是一个例子/HexoDemo
```

然后在博客根目录下执行

```
npm install hexo-plugin-postchat --save
```

然后根据下面的插件配置进行配置即可。

## 插件配置

编辑根目录下的`_config.yaml`，在plugin中添加PostChat：

```yaml
plugins:
  - hexo-plugin-postchat
```

然后在配置文件最后添加配置项目：

```yaml
postchat:
  account:
    key: "70b649f150276f289d1025508f60c5f58a" # 使用PostChat的用户请前往 https://ai.tianli0.top/ 获取 KEY，只使用文章摘要的用户前往 https://summary.zhheo.com/ 获取 KEY 。示例的Key不支持文章摘要和自定义的知识库问答，但可以使用作者的知识库对话
  summary:
    enableSummary: true # 开启文章摘要需要在 https://summary.zhheo.com/ 绑定你的网站
    postSelector: "#postchat_postcontent" # 文章选择器，用于选择文章内容。如果没有正常显示摘要，你需要访问 https://postsummary.zhheo.com/theme/custom.html#%E8%8E%B7%E5%8F%96tianligpt-postselector 学习获取，也可以联系 zhheo@qq.com 发送你的网站地址后获取
    title: "文章摘要" # 摘要标题，用于显示在摘要顶部的自定义内容
    summaryStyle: "https://ai.tianli0.top/static/public/postChatUser_summary.min.css" # 摘要样式css地址，如果你需要自定义摘要的css样式，可以自行修改。
    postURL: "/^https?://[^/]+/[0-9]{4}/[0-9]{2}/[0-9]{2}/" # 在符合url条件的网页执行文章摘要功能，默认的配置为Hexo的默认文章路由，如果你自定义了文章的地址格式，那么需要修改。https://postchat.zhheo.com/summary.html#tianligpt-posturl
    blacklist: "" # 填写相关的json地址，帮助文档：https://postsummary.zhheo.com/parameters.html#tianligpt-blacklist
    wordLimit: "1000" # 危险操作！如果没有在文章摘要中开启url绑定，更改此变量损失已消耗过的key，因为你提交的内容发生了变化。（PostChat用户无影响，因为摘要数量是无限的）可以设置提交的字数限制，默认为1000字。，帮助文档：https://postsummary.zhheo.com/parameters.html#tianligpt-wordlimit
    typingAnimate: true # 智能的打字效果，模拟流处理的感觉
    beginningText: "这篇文章介绍了" #自定义开头语，默认为"这篇文章介绍了"
    summaryTheme: "default" #切换文章摘要主题，详情请见 https://postchat.zhheo.com/theme.html
    podcast: false # 设为 true 时启用 AI 播客功能（文章摘要功能），默认关闭
  chat:
    enableAI: true # 开启PostChat智能对话，添加按钮点击对话的功能，如果你并非PostChat用户，而是仅文章摘要用户，建议关闭此功能
    userMode: "magic" # 用户模式，可选值为"magic"和"iframe"，默认为"magic"
    backgroundColor: "#3e86f6" # 按钮背景颜色
    fill: "#FFFFFF" # 按钮填充颜色
    bottom: "80px" # 按钮底部距离
    left: "20px" # 按钮左边距离
    width: "44px" # 按钮宽度
    frameWidth: "375px" # 聊天界面框架宽度
    frameHeight: "600px" # 聊天界面框架高度
    defaultInput: true # 默认输入
    upLoadWeb: true # 上传网站
    showInviteLink: true # 显示邀请链接
    userTitle: "PostChat" # 界面标题
    userDesc: "如果你对网站的内容有任何疑问，可以来问我哦～" # 聊天界面描述
    userIcon: "https://ai.tianli0.top/static/img/PostChat.webp" # PostChat聊天界面图标，仅在Magic模式下有效
    defaultChatQuestions: ["你好","你是谁"] # 默认聊天问题，仅在Magic模式下有效
    defaultSearchQuestions: ["视频压缩","设计"] # 默认搜索问题，仅在Magic模式下有效
    addButton: true # 是否显示按钮
    recommend: 0 # 文章底部推荐文章数量，0 为不显示，最大 10，默认关闭
    hotWords: false # 是否启用热词功能，true 为启用，false 为不启用

```

## 主题适配

此插件支持所有的PostChat开发API，提供主题开发者对于PostChat的控制能力。包括深色模式切换：`postChatUser.setPostChatTheme('dark')`；聊天窗口输入框：`postChatUser.setPostChatInput(content)`等。

详见开发者文档：https://postchat.zhheo.com/advanced/theme.html

## 开发者

PostChat由[张洪Heo](https://github.com/zhheo)与[Tianli](https://github.com/TIANLI0)共同构建，技术支持请联系：zhheo@qq.com（一个工作日内回复）
