# 使用 bento4 完成普通 mp4 转换为流式播放的 mp4

# 设置命令行的 PATH

```
export PATH="/Users/xxx/Downloads/Bento4-SDK-1-6-0-641.universal-apple-macosx/bin:$PATH"
```

# 转换视频

```
mp4fragment input.mp4 output.mp4
```

可能上面处理过的视频无法播放，可以使用 ffemeg 来处理

```
ffmpeg -i input.mp4 -c:v libx264 -hls_time 4 -hls_playlist_type vod output.m3u8
```
