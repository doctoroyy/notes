


### 个人信息

姓名：**欧阳煜**

手机号：15107050762

邮箱：1445245708@qq.com

在校时间：2016.9 - 2020.6

院校信息：宜春学院/本科/软件工程/大四


Github：https://github.com/doctoroyy

个人博客：[https://blog.csdn.net/doctor_oyy](https://blog.csdn.net/doctor_oyy)

求职意向：Web前端开发


### 竞赛/获奖经历

- 2019.07 ACM/CCPC 江西省赛铜奖
- 2019.06 ACM/ICPC 南昌邀请赛荣誉奖
- 2019.05 第十届蓝桥杯北京决赛国家三等奖
- 2019.04 团体程序设计天梯赛团队三等奖
- 2018.04 第九届蓝桥杯大赛省二等奖


### 掌握技能
- 熟悉常用的数据结构和算法
- 熟悉HTML/CSS， 了解并能实现常见的布局、动画
- 熟悉JavaScript，熟悉ECMAScript 6部分标准
- 熟悉使用前端框架React.js, 了解其基于虚拟DOM的基本渲染原理
- 熟悉使用Git版本控制工具
- 了解后端语言Python，有Python后端框架Django使用经验

### 实习经历
- 2019年8月-6月 上海富数科技有限公司 前端实习生
- 工作内容：
	- 参与 [富数安全计算平台](https://fmpc-help.fudata.cn/) 前端部分的开发⼯作，阅读相关项目文档，与产品、后端积极沟通，理解部分复杂业务及其前端逻辑实现
	- 负责 [富数官网](https://www.fudata.cn/) 的开发与维护，独立完成移动端适配
	- 负责 [富数营销市场](https://marketingchain.fudata.cn/) 的开发、维护

### 项目经历

**[富数官网移动端](https://m.fudata.cn/)**

4月中旬开始移动端官网开发，采用 **postcss-px-to-viewport** 方案进行移动端适配，期间发现微信X5浏览器的视频永远出于顶部的问题，之后添加 x5-video-player-type：h5-page 配置解决

**[Visualgo](https://visualgo.doctoroyy.net/ "Visualgo")**

受可视化算法学习平台 [visualgo.net](https://visualgo.net/) 的启发，一个偶然的机会（十一国庆宅在家）一个好玩的project就诞生啦

动画部分主要使用CSS 的transition属性，结合setTimeout定时器保存每一次排序的交换动作，目前实现了**快速排序**、**冒泡排序**的动画

**[书虫小说](https://book.doctoroyy.net/ "书虫小说")**

2019年6月给自己写的一个小说网站，支持小说搜索、阅读，localStorage本地缓存等功能
解决的问题：
  - 小说目录详情页有1-2s的白屏时间，调试后发现获取的json数据高达200+KB，请求时间在700-1500ms，开启nginx压缩，数据减小到30+KB，请求时间减少到200-300ms。
  - 其次，发现小说章节数超过1000+，渲染长列表相当消耗性能，尝试使用懒加载方式，优化过后大大减少页面加载时间。
  - 对于小说章节加载慢的问题，为了缓解用户等待时间，尝试使用 CSS3 动画实现loading效果，并将其加入全局状态，优化了阅读体验。
  - 对于小说章节内容，使用多级缓存：在服务端利用python-memcached在内存中缓存获取章节的views；对返回的章节以文件的形式缓存，避免下一次请求再次爬取；最后，在客户端使localStorage缓存章节；降低了章节详情页平均响应时间。

**[IMDB-TOP-250 电影爬虫](https://github.com/doctoroyy/IMDB-TOP-250 "IMDB-TOP-250 电影爬虫")**

IMDB TOP 250 收集了全球最优秀的250部电影，爬虫提取页面关键信息（排名，影片名），再到豆瓣电影根据获取到的英文关键字爬取对应的导演中文名、影片中文名，最后以excel文件的形式导出。爬虫脚本已上传至[PyPi](https://pypi.org/project/imov/)，借助 **Github Workflows** 工具，零成本实现每日抓取榜单并发送到邮箱的机器人[https://github.com/doctoroyy/Movie-IMDB-Bot](https://github.com/doctoroyy/Movie-IMDB-Bot)


### 自我描述
- 2016年的暑假加入了Leida团队，跟着老师看IMDB TOP 250、听古典音乐、玩魔兽、参加竞赛，是我人生中最宝贵的经历
- 日常使用Google，平时主要通过StackOverflow、Github解决技术上、开发上的问题
- 有好奇心 + 爱折腾，6月8日回学校的晚上成功实验：利用UDP53端口+第三方服务器，实现锐捷校园网免认证上网
