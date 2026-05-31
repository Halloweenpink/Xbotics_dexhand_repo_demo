---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Xbotics 灵巧手教程"
  text: "AI前沿知识开源教程"
  tagline: 开始学起来~
  image:
    src: /slogan.png
    alt: Xbotics 灵巧手教程
  actions:
    - theme: brand
      text: 开始学习
      link: /chapter1/

features:
  - title: 💥 前沿
    details: 紧跟具身智能前沿的知识
  - title: 🎁 线上+线下
    details: 知识库 & 企业合作实训营
  - title: 🌐 开源
    details: 知识库开源在 GitHub
---

<div align="center">
  <!-- <img src="/image.png" width="280" style="margin: 8px;" /> -->
  <! 学员反馈>
</div>

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Halloweenpink.png',
    name: '曹祥瑞',
    title: '核心贡献者：Xbotics 灵巧手 GitHub 知识库构建，强化学习文章和项目解读文章贡献',
    links: [
      { icon: 'github', link: 'https://github.com/Halloweenpink' },
    ]
  },
  {
    avatar: 'https://www.github.com/daizhou-xd.png',
    name: '周岱',
    title: '核心贡献者：Xbotics 灵心巧手合作线上线下实训营优秀作业贡献',
    links: [
      { icon: 'github', link: 'https://github.com/daizhou-xd' },
    ]
  },
  {
    avatar: 'https://www.github.com/hitven.png',
    name: '张嘉桐',
    title: '核心贡献者：DexGraspNet UniDexGrasp 教程贡献',
    links: [
      { icon: 'github', link: 'https://github.com/hitven' },
    ]
  },
  {
    avatar: 'https://www.github.com/fanfan142.png',
    name: '邵涵',
    title: '核心贡献者：Xbotics 灵心巧手线下实训营课程设计与代码贡献',
    links: [
      { icon: 'github', link: 'https://github.com/fanfan142' },
    ]
  }
]
</script>

<h2 align="center">Team</h2>
<VPTeamMembers size="small" :members />

<h2 align="center">往期照片</h2>

<div align="center">
  <img src="/往期照片/5.png" style="width:600px; margin:8px;" />
  <img src="/往期照片/image.png" style="width:600px; margin:8px;" />
  <img src="/image-4.png" style="width:600px; margin:8px;" />
</div>


<div align="center" style="display: flex; justify-content: center; align-items: flex-start; flex-wrap: wrap;">
  <img src="/往期照片/141a3c8d68d994861819461c86fcfeb5.jpg" style="width:300px; margin:8px;" />
  <img src="/往期照片/513ba2d4e8a45b945a0bf9a676c68f34.jpg" style="width:300px; margin:8px;" />
</div>
