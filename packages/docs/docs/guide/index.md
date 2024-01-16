# Competition文档

## 文件夹目录

```
- competition
├─node_modules //依赖
├─public  //静态文件
└─src
    ├─api
    ├─assets
    ├─components
    ├─hooks   //使用swr封装的hooks
    ├─store   //使用zustand封装的状态管理
    ├─pages
    ├─types   //ts类型
    └─utils   //工具函数
```

尽量减少使用`usestate`进行状态管理，增加`zustand`进行状态管理，增加代码的可维护性。
