# tools-set
A collection of commonly used tool functions

目录结构：
- fn
    - util
        - index.js
        - obj2String.js
        - clone.js
    - api
        - index.js
        - interceptorLink.js
        - arr_index.js
        - arr_split.js

- api 
    - index.js
    - interceptorLink.js
    - arr_index.js
    - arr_split.js

- demo
    - interceptorLink.js

fn 文件夹相当于一个npm包，集成了各个方法，api文件中的方法可能会依赖util中的方法
api 文件夹相当于独立文件夹，里面的每个方法都能独自运行
demo 文件夹相当于方法使用的集合