const e=JSON.parse('{"key":"v-f652553e","path":"/posts/fdTools/webpack5%E6%8F%90%E5%8D%87.html","title":"webpack5提升","lang":"zh-CN","frontmatter":{"description":"webpack5提升 持久化缓存cache 将构建过程的 webpack 模板进行缓存，大幅提升二次构建速度、打包速度，当构建突然中断，二次进行构建时，可以直接从缓存中拉取 过时的dll(暂时这么认为) 辅助配置 dll 的插件 autodll-webpack-plugin，结果上面直接写了 webpack5 开箱即用的持久缓存是比 dll更优的解决方案。 无需使用cache-loader 同样的cache-loader也无需引入","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/fdTools/webpack5%E6%8F%90%E5%8D%87.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"webpack5提升"}],["meta",{"property":"og:description","content":"webpack5提升 持久化缓存cache 将构建过程的 webpack 模板进行缓存，大幅提升二次构建速度、打包速度，当构建突然中断，二次进行构建时，可以直接从缓存中拉取 过时的dll(暂时这么认为) 辅助配置 dll 的插件 autodll-webpack-plugin，结果上面直接写了 webpack5 开箱即用的持久缓存是比 dll更优的解决方案。 无需使用cache-loader 同样的cache-loader也无需引入"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-04T01:54:24.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:modified_time","content":"2024-03-04T01:54:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webpack5提升\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-04T01:54:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"持久化缓存cache","slug":"持久化缓存cache","link":"#持久化缓存cache","children":[{"level":3,"title":"过时的dll(暂时这么认为)","slug":"过时的dll-暂时这么认为","link":"#过时的dll-暂时这么认为","children":[]},{"level":3,"title":"无需使用cache-loader","slug":"无需使用cache-loader","link":"#无需使用cache-loader","children":[]}]},{"level":2,"title":"减少loader的使用","slug":"减少loader的使用","link":"#减少loader的使用","children":[{"level":3,"title":"资源模块（asset module）","slug":"资源模块-asset-module","link":"#资源模块-asset-module","children":[]},{"level":3,"title":"为loader指定include","slug":"为loader指定include","link":"#为loader指定include","children":[]}]},{"level":2,"title":"优化解析","slug":"优化解析","link":"#优化解析","children":[{"level":3,"title":"extensions","slug":"extensions","link":"#extensions","children":[]},{"level":3,"title":"modules","slug":"modules","link":"#modules","children":[]},{"level":3,"title":"symlinks","slug":"symlinks","link":"#symlinks","children":[]}]},{"level":2,"title":"多进程","slug":"多进程","link":"#多进程","children":[{"level":3,"title":"htread-loader","slug":"htread-loader","link":"#htread-loader","children":[]},{"level":3,"title":"happyPack","slug":"happypack","link":"#happypack","children":[]}]},{"level":2,"title":"devtool","slug":"devtool","link":"#devtool","children":[]},{"level":2,"title":"减小打包体积","slug":"减小打包体积","link":"#减小打包体积","children":[{"level":3,"title":"TerserWebpackPlugin 来压缩 JS","slug":"terserwebpackplugin-来压缩-js","link":"#terserwebpackplugin-来压缩-js","children":[]},{"level":3,"title":"CssMinimizerWebpackPlugin 压缩 CSS","slug":"cssminimizerwebpackplugin-压缩-css","link":"#cssminimizerwebpackplugin-压缩-css","children":[]},{"level":3,"title":"Tree Shaking","slug":"tree-shaking","link":"#tree-shaking","children":[]}]}],"git":{"createdTime":1709516568000,"updatedTime":1709517264000,"contributors":[{"name":"gift","email":"test@example.com","commits":2}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"posts/fdTools/webpack5提升.md","localizedDate":"2024年3月4日","excerpt":"<h1> webpack5提升</h1>\\n<h2> 持久化缓存cache</h2>\\n<p>将构建过程的 webpack 模板进行缓存，大幅提升二次构建速度、打包速度，当构建突然中断，二次进行构建时，可以直接从缓存中拉取</p>\\n<h3> 过时的dll(暂时这么认为)</h3>\\n<p>辅助配置 dll 的插件 <code>autodll-webpack-plugin</code>，结果上面直接写了 webpack5 开箱即用的持久缓存是比 <code>dll</code>更优的解决方案。</p>\\n<h3> 无需使用cache-loader</h3>\\n<p>同样的cache-loader也无需引入</p>","autoDesc":true}');export{e as data};
