---
icon: nodeJS
date: 2022-06-17
category:
  - CLI
tag:
  - Node
star: true
sticky: true
---

# Node源码安装

```bash
wget https://nodejs.org/dist/v12.16.3/node-v12.16.3.tar.gz

tar zxvf node-v12.16.3.tar.gz

cd node-v12.16.3

./configure

make

sudo make install

node —version
```