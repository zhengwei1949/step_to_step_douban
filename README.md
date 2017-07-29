## 如何完成作业
1. 在自己的github上面创建一个新的项目
2. 把自己完成的代码传上去
3. 把最终的效果录一个gif，并同代码传到github(录gif请使用软件GifCam)
## 如何消除挫败感
- 把补充知识中的代码研究明白再来玩这个项目

## 练习时候的问题
- 出错了不知道怎么办
    + 首先心态放平，写代码遇到错误不可避免，不要焦虑
    + 找关键词法，大胆的猜
    + 排除法 
    + 谷歌翻译法
    + 多去百度里面找(到我们这个课程阶段，开网络的原因有一条就是让大家养成百度查资料的习惯，不要遇到不懂的立马放弃)，有可能别人遇到了同样的错误
    + 把一些常用的错误贴到自己的博客上面，下次出现了就记一下https://github.com/zhengwei1949/myblog/issues/26

### 路由如何使用
- 基本思路：
    1. 一个锚点对应一个路由，一个路由对应一个控制器+视图
        + 把spa.html这个例子用路由改写
    2. 再看看有没有合并的可能性(路由参数)
        + $routeParams
        + ?号的情况
    3. 考虑404的情况(otherwise)
        + otherwise


### 如何把代码模块化(把上面的代码改写一下)


### 豆瓣的例子应该如何写(视频中跳过了前面的几步，所以大家可能会觉得蒙蔽)

### 为什么视频中刚开始的时候实现分页是通过点击事件切换，后面都换成了通过改变url锚点来切换?
从Ajax翻页的问题说起

请想象你正在看一个视频下面的评论，在翻到十几页的时候，你发现一个写得稍长，但非常有趣的评论。正当你想要停下滚轮细看的时候，手残按到了F5。然后，页面刷新了，评论又回到了第一页，所以你又要重新翻一次。

再或者，你想把这个评论发给别人分享，一面给了别人页面地址（为什么不直接复制呢？因为要连带视频等场景啊），一面又要加一句嘱咐：请翻到下面评论的第XX页的XX楼。

这就是问题。试想一下，如果浏览器能记住你当前的状态（比如看到了第十几页），而不是一刷新就还原，是不是就显得智能多了？

为什么用Ajax？

用Ajax实现翻页等内容切换是有原因的。在传统的无Ajax的站点里，页面A和页面B可能只有10%的地方是不同的，其他90%的内容（尤其是导航、页脚等公用元素）都是一样的，但却仍然需要浏览器下载并显示新的一整个页面。而如果使用Ajax，不仅节省了浏览器需要下载的资源，而且无刷新切换明显比页面跳转更平滑、流畅。

就视频下面的评论来说，Ajax可以说是必须的。视频这样的重量级元素，动不动给你重新加载一次，不能忍。

传统的跳转翻页的可取之处

传统的不使用Ajax的站点，每一个翻页是一个跳转，然后你可以在浏览器地址栏里看到诸如?page=2这样的参数。每一页就这样通过地址栏的URL做了标记，每一次请求，浏览器都会根据参数返回正确的页码。

所以，传统的跳转翻页，刷新也不会丢失状态。

结合两者

现在我们就可以想到，如果在Ajax更新页面局部内容的同时，也在地址栏的URL里更新状态参数，就可以做出更完美的Ajax翻页了。
