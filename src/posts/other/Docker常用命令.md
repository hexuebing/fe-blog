# Docker 常用命令

## docker 打包命令

```bash
docker build -t welcome:latest -f ./docker/Dockerfile .
```

注意 PATH 的`.`

- Docker 打包出来的镜像并不会以「文件」形式直接出现在项目目录里，而是被保存在 本地 Docker 镜像仓库（image store） 中。
  你可以把它理解成一个由 Docker 引擎管理的内部数据库，位置与操作系统有关

## docker 镜像打包成 tar

```bash
# 把镜像导出成 tar 包，当前目录就会出现 welcome.tar
docker save -o welcome.tar welcome:latest
```

## docker load 导入

```bash
docker load -i welcome.tar
```

## docker 启动

```bash
docker run --name welcome-demo -d -p 8080:80 welcome:latest
```

- --name welcome-demo：给容器起个名字（可随意）。
- -d：让容器在后台运行（detached）。
- -p 8080:80：把容器里的 80 端口映射到宿主机的 8080 端口，这样你在浏览器里访问 http://localhost:8080 就能看到应用。
- welcome:latest：要使用的镜像。

## 停止并删除容器

```bash
docker stop welcome-demo && docker rm welcome-demo
```
