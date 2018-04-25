## 写less时的注意事项

### styles下文件夹和文件的介绍

```

  ├─styles
  │  │  common.less                 //  全局样式的书写             
  │  │  index.less                  //  入口文件
  │  │  README.md
  │  │  reset.less                  //  重置浏览器默认样式
  │  │  variables.less              //  书写less变量
  │  │
  │  └─mixins                       //   书写mixins
  │          index.less

```

### 书写less时的注意事项
1.  颜色的值，尽量全部使用变量，以备将来小组有UI加入的时候来统一公司的形象色
2.  通用的一些css，尽量写到mixins中去