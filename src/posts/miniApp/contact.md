---
icon: profile
date: 2022-01-05
category:
  - 小程序
tag:
  - 保存到通讯录
---

# 小程序保存到通讯录

## 提示
[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html)

**firstName是必传项**

### 代码实现

```js
/**
  * 保存到通讯录
  */
saveMailList(){
    wx.getSetting({
        success (res) {
            // 先判断是否授权通讯录
            if (res.authSetting["scope.addPhoneContact"]){
                wx.addPhoneContact({
                    firstName: 'xxxx', // firstName必传,不然报错
                    nickName: 'xx',
                    mobilePhoneNumber: '123456', //手机号
                    success: function () {
                        wx.showToast({title: '保存成功'})
                    }
                })
            }else{
                wx.addPhoneContact({
                    firstName: 'xxxx', // firstName必传,不然报错
                    nickName: 'xx',
                    mobilePhoneNumber: '123456', //手机号
                    success: function () {
                        wx.showToast({title: '保存成功'})
                    },
                    fail: function (err) {
                        // wx.openSetting需要通过wx.showModal触发
                        // 用户拒绝授权才弹出, 取消不算
                        if(err.errMsg=="addPhoneContact:fail auth deny"){
                            wx.showModal({
                                title: '温馨提示',
                                content: '需要获取您的通讯录权限',
                                success: tip=> {if (tip.confirm) {wx.openSetting()}}
                            })
                        }
                    }
                });
            }
        }
    })  
},
```
