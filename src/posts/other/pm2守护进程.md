# pm2守护进程

在服务器上启动Node.js应用后，可以使用进程管理工具来守护进程，以确保应用在意外情况下能够持续运行。一个常用的进程管理工具是PM2（Process Manager 2）。

以下是使用PM2守护Node.js应用的一般步骤：

1. **安装PM2**：
   - 在服务器上运行`npm install pm2 -g`命令，全局安装PM2。

2. **启动应用**：
   - 在项目根目录运行`npm start`或`yarn start`命令，启动Node.js应用。

3. **使用PM2守护进程**：
   - 在项目根目录运行`pm2 start npm --name "app-name" -- start`命令，使用PM2守护进程。
   - `app-name`是你给应用起的名称，可以自定义。

4. **查看应用状态**：
   - 运行`pm2 list`命令，查看PM2管理的应用列表和状态。

5. **其他PM2命令**：
   - `pm2 stop app-name`：停止应用。
   - `pm2 restart app-name`：重启应用。
   - `pm2 delete app-name`：删除应用。
   - `pm2 logs app-name`：查看应用日志。

通过使用PM2守护进程，即使在应用崩溃或服务器重启时，PM2也会自动重新启动应用，确保应用的持续运行。

除了PM2，还有其他一些进程管理工具可供选择，如Forever、Supervisor等。具体选择哪个工具取决于你的需求和偏好。

希望这些信息对你有帮助！如果有其他问题，请随时向我提问。