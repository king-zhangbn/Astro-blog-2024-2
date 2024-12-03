---
title: 记录一次py的代码片段
description: 文件名称的更替方案，由Python 实现效果
publishDate: 2024-11-29
tags:
  - "折腾分享"
language: CH
---
# 记录一次 py 的代码片段

实现的功能如下：posts 有 n 个文件夹，每个文件夹里面含有 index.md 文件，实现每个index.md 文件换成对应该文件夹的名称，并且全部导出到 posts 文件夹。

post 文件夹路径为/Volumes/STUDIO/somethings/厕所/post，

posts 文件夹路径为/Volumes/STUDIO/somethings/厕所/posts

```
import os
import shutil
import tkinter as tk
from tkinter import ttk, messagebox

def update_files():
    # 设置文件夹路径
    post_dir = '/Volumes/STUDIO/somethings/厕所/post'
    posts_dir = '/Volumes/STUDIO/somethings/厕所/posts'
    
    # 获取所有子文件夹
    folders = [f for f in os.listdir(post_dir) if os.path.isdir(os.path.join(post_dir, f))]
    total_folders = len(folders)
    
    # 更新进度条最大值
    progress_bar['maximum'] = total_folders
    
    for i, folder in enumerate(folders):
        index_path = os.path.join(post_dir, folder, 'index.md')
        
        if os.path.exists(index_path):
            # 新的文件路径
            new_file_path = os.path.join(posts_dir, f'{folder}.md')
            
            # 复制并重命名文件
            shutil.copy(index_path, new_file_path)
        
        # 更新进度条
        progress_bar['value'] = i + 1
        root.update_idletasks()
    
    messagebox.showinfo("完成", "所有文件已成功处理并导出！")

# 创建主窗口
root = tk.Tk()
root.title("文件处理器")

# 创建并放置进度条
progress_bar = ttk.Progressbar(root, orient='horizontal', length=300, mode='determinate')
progress_bar.pack(pady=20)

# 创建并放置按钮
process_button = ttk.Button(root, text="开始处理", command=update_files)
process_button.pack(pady=10)

# 运行主循环
root.mainloop()

```
