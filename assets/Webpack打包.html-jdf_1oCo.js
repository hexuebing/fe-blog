const e=JSON.parse('{"key":"v-0b626808","path":"/posts/other/Webpack%E6%89%93%E5%8C%85.html","title":"Webpack","lang":"zh-CN","frontmatter":{"description":"Webpack 核心概念 入口(entry) 输出(output) 解析器（loader） 插件(plugin) 模式(mode) 作用 模块打包，Webpack可以将项目中的各种资源，如JavaScript、CSS、图片、字体等，视作模块，并通过loader将它们转换为合适的格式，最终打包成静态文件 编译兼容，通过loader将浏览器无法直接识别的文件，比如.less,.vue,.jsx这些文件，让开发的时候能使用高效的特性和语法。 构建优化，通过压缩js、CSS、图片等文件，减小文件体积，提升加载性能 能力扩展，通过plugin可以进一步实现按需加载、代码压缩","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/other/Webpack%E6%89%93%E5%8C%85.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"Webpack"}],["meta",{"property":"og:description","content":"Webpack 核心概念 入口(entry) 输出(output) 解析器（loader） 插件(plugin) 模式(mode) 作用 模块打包，Webpack可以将项目中的各种资源，如JavaScript、CSS、图片、字体等，视作模块，并通过loader将它们转换为合适的格式，最终打包成静态文件 编译兼容，通过loader将浏览器无法直接识别的文件，比如.less,.vue,.jsx这些文件，让开发的时候能使用高效的特性和语法。 构建优化，通过压缩js、CSS、图片等文件，减小文件体积，提升加载性能 能力扩展，通过plugin可以进一步实现按需加载、代码压缩"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/fe-blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-25T11:06:41.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Webpack"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:modified_time","content":"2024-02-25T11:06:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Webpack\\",\\"image\\":[\\"https://mister-hope.github.io/fe-blog/\\"],\\"dateModified\\":\\"2024-02-25T11:06:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":2,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":2,"title":"Loader作用","slug":"loader作用","link":"#loader作用","children":[{"level":3,"title":"常见Loder","slug":"常见loder","link":"#常见loder","children":[]}]},{"level":2,"title":"Plugin","slug":"plugin","link":"#plugin","children":[{"level":3,"title":"常见Plugin","slug":"常见plugin","link":"#常见plugin","children":[]}]},{"level":2,"title":"HRM原理","slug":"hrm原理","link":"#hrm原理","children":[]},{"level":2,"title":"Webpack的构建流程","slug":"webpack的构建流程","link":"#webpack的构建流程","children":[]}],"git":{"createdTime":1708859201000,"updatedTime":1708859201000,"contributors":[{"name":"gift","email":"test@example.com","commits":1}]},"readingTime":{"minutes":2.94,"words":882},"filePathRelative":"posts/other/Webpack打包.md","localizedDate":"2024年2月25日","excerpt":"<h1> Webpack</h1>\\n<h2> 核心概念</h2>\\n<ul>\\n<li>入口(entry)</li>\\n<li>输出(output)</li>\\n<li>解析器（loader）</li>\\n<li>插件(plugin)</li>\\n<li>模式(mode)</li>\\n</ul>\\n<h2> 作用</h2>\\n<ul>\\n<li><strong>模块打包</strong>，Webpack可以将项目中的各种资源，如JavaScript、CSS、图片、字体等，视作模块，并通过loader将它们转换为合适的格式，最终打包成静态文件</li>\\n<li><strong>编译兼容</strong>，通过loader将浏览器无法直接识别的文件，比如.less,.vue,.jsx这些文件，让开发的时候能使用高效的特性和语法。</li>\\n<li><strong>构建优化</strong>，通过压缩js、CSS、图片等文件，减小文件体积，提升加载性能</li>\\n<li><strong>能力扩展</strong>，通过plugin可以进一步实现按需加载、代码压缩</li>\\n</ul>","autoDesc":true}');export{e as data};
