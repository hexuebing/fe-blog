# NestJS入门

尽管 Node（和服务器端 JavaScript）存在大量出色的库、辅助程序和工具，但它们都没有有效解决以下主要问题： - 架构。

使用 Nest CLI 构建项目
```shell
$ npm i -g @nestjs/cli
$ nest new project-name
```

## Controller

每个控制器都有**不止一条路由**，不同的路由可以执行不同的操作。

创建控制器

```shell
$ nest g controller [name]
```

Nest 为所有标准的 HTTP 方法提供装饰器：`@Get()、@Post()、@Put()、@Delete()、@Patch()、@Options() 、@Head()`此外，`@All()` 定义了一个端点来处理所有这些。

示例
```typescript

// @Controller() 装饰器中使用路径前缀可以让我们轻松地对一组相关路由进行分组，并最大限度地减少重复代码
@Controller('cats')
export class CatsController {
  // @Get() HTTP 请求方法装饰器告诉 Nest 为 HTTP 请求的特定端点创建处理程序
  @Get()
  async findAll(): Promise<string[]> {
    throw new UnauthorizedException('Not Found', {
      cause: new Error(),
      description: 'Not Found',
    });
  }

  @Post() //POST 请求，默认响应为 201
  testPost(): string {
    return 'This action adds a new cat';
  }

  @Get('/test')
  @HttpCode(201) //默认情况下响应状态代码始终为 200。我们可以通过在处理程序级别添加 @HttpCode(...) 装饰器来轻松更改此行为。
  // 我们在这里选择的方法名称是完全任意的。显然，我们必须声明一个方法来绑定路由，但 Nest 对所选择的方法名称没有任何意义。
  test(): { name: string; age: number } {
    // 当请求处理程序返回 JavaScript 对象或数组时，它将自动序列化为 JSON。
    return { name: 'hxb', age: 18 };
  }

  @Get('/name/:id/age/:age')
  findOne(@Param() params: any): string {
    console.log(params.id, params.age);
    // 当它返回 JavaScript 基本类型（例如 string、 number、 boolean）时，Nest 将仅发送该值，而不尝试对其进行序列化。
    return `This action returns a #${params.id} cat`;
  }

  @Post('create')
  // 这里的参数没获取到 AI建议@Req() request: Request来获取body
  async createCat(@Body() createCatDto: CreateCatDto): Promise<string> {
    console.log('请求参数', createCatDto.name);
    return 'This action adds a new cat';
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    throw new ForbiddenException();
  }
}
```

## 提供器

控制器应该处理 HTTP 请求并将更复杂的任务委托给提供器。提供程序是在 module 中声明为 `providers` 的纯 JavaScript 类。

CLI创建服务：
```shell
$ nest g service [name]
```




