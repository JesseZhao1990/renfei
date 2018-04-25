## 前端代码里的一些配置项

## 使用场景
思考一下，如果一些配置，在项目中多处使用，如果有修改，仅改此一处就ok。是不是省心省力？
如果有一些配置，在开发环境和发布环境不一样，怎么办？在发布前修改代码？是不是闹心？
此配置文件大概解决如上两个问题。

## 规范
* 1.开发环境和发布环境一样的配置，写到base.js中
* 2.开发环境的配置，写到dev.js中
* 3.发布环境的配置，写到build.js中

## 原理解释
通过webpack的alias，开发和发布时，加载不同文件来解决开发和发布两个环境的配置不一样的问题

```

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'cfg':process.env.NODE_ENV === 'production'
      ? path.join(__dirname, '..', 'src/config/build.js')
      : path.join(__dirname, '..', 'src/config/dev.js')   
    }
  }

```

## 使用方法

```
import cfg from 'cfg';
console.log(cfg.XXX);

```

