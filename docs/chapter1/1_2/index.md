# 第二个月：仿真进阶

> 定位：**从 Demo 到项目复现——在仿真环境中跑通强化学习抓取全流程。**
>
> 核心任务：Isaac Lab RL Demo → DexGraspNet 项目解析 → UniDexGrasp 完整复现。

第二个月是实训营的技术核心，你将亲手跑通灵巧手的强化学习抓取 demo，然后深入理解两个顶会级别的抓取生成项目，最终完成从数据生成到策略训练的完整复现。

> 📘 第二个月完整课程文档：[飞书文档](https://l1brwoqoomu.feishu.cn/docx/LSQkdRJwyoZyjZxylREcQDIunce)

## 第 5 周：Isaac Lab 强化学习 Demo

**核心任务：**

1. 用 Isaac Lab 跑通灵巧手抓取小球的 RL demo（PPO 算法）
2. 跑通灵巧手关节到达指定位置的 RL demo
3. 分析两个 demo 中 PPO 算法的奖励函数构建思路
4. 安装 Isaac Gym Preview 4 环境

**参考代码：** 见课程文档附件（handrl_grasp.zip / handrl.zip）

**FAQ 讨论区：** [第 5 周 FAQ](https://ivjep4wm9di.feishu.cn/wiki/H0iQwqlQ8izF0EkYDJtc8tNNnkh?from=from_copylink)

## 第 6 周：DexGraspNet & UniDexGrasp 项目解析

> 本周以理解和阅读为主，不需要跑代码。

**核心任务：**

1. 精读 DexGraspNet 论文（[arXiv:2210.02697](https://arxiv.org/abs/2210.02697)），理解抓取生成模块的目录结构与作用
2. 理解 UniDexGrasp 项目结构，重点拆解 PPO 算法核心代码（`module.py` / `ppo.py` / `storage.py`）
3. 对比两个项目的联系与区别

**FAQ 讨论区：** [第 6 周 FAQ](https://ivjep4wm9di.feishu.cn/wiki/DQB1wAWSIiS9PGkJN1xcwg2GnUK?from=from_copylink)

## 第 7–8 周：Isaac Sim 可视化 & UniDexGrasp 完整复现

**核心任务：**

1. 在 Isaac Sim 中可视化三个灵巧手抓取场景（L20 手抓杯子 / L20 手抓点云 / Shadow 手抓点云）
2. 分别复现 UniDexGrasp 的 generation 部分和 policy 部分（PPO 训练）

**环境配置提示：** generation 和 policy 两部分需要**分别创建不同的虚拟环境**，按照各自 readme 配置。generation 部分复现参考：[知乎教程](https://zhuanlan.zhihu.com/p/650320613)。云平台常见报错及解决方法见课程文档附件。

**FAQ 讨论区：** [第 7 周 FAQ](https://ivjep4wm9di.feishu.cn/wiki/Sx0jwAhp4iAEd7kowuHclZTHnAh?from=from_copylink) | [第 8 周 FAQ](https://ivjep4wm9di.feishu.cn/wiki/WK57wqw2biPVCDky01tcXfrRndd?from=from_copylink)

## 挑战任务（选做）

- 随机化代码解读参考，见课程文档附件（random.md）
- 学有余力的同学可以进一步学习 UniDexGrasp 中 PPO 以外的其他 RL 算法

## 🎓 优秀代码复现教程

第一期实训营的优秀学员 **张嘉桐** 对 DexGraspNet 和 UniDexGrasp 两个项目做了非常详细且深入的解析，包括完整的代码复现教程。想深入研究这两个项目的同学可以结合以下资料学习：
>github路径在 ```docs\chapter1\1_2\reference```

| 文档 | 说明 |
| :--- | :--- |
| [DexGraspNet 项目分析](reference/DexGraspNet项目分析.docx) | 项目结构与算法流程深度解析 |
| [DexGraspNet 项目复现](reference/dexgraspnet项目复现.docx) | 代码级复现教程 |
| [UniDexGrasp 项目分析](reference/unidexgrasp项目分析.docx) | 改进思路与核心模块拆解 |
| [UniDexGrasp 项目复现](reference/unidexgrasp项目复现.docx) | 完整复现步骤与注意事项 |


我们也保留了官方团队的教学录屏：
> 🎥 讲解视频：[腾讯会议录屏](https://meeting.tencent.com/crm/2kOqjBoo4a)
https://meeting.tencent.com/crm/2kOqjBoo4a
https://meeting.tencent.com/crm/KEDaYPadb8
https://meeting.tencent.com/crm/23Y8ZQ1L75
---

## 📦 课件与参考代码

第二个月用到的代码包与文档均随课程发放，包括：
- handrl_grasp.zip / handrl.zip（RL Demo 代码）
- DexGraspNet-main.zip（项目源码）
- linkerhand-init.zip + Linker_UniDexGrasp 项目结构解读.docx
- PPO 强化学习代码详解.docx
- linkerhand-init-recurrence.rar（Isaac Sim 脚本）
- 云平台数据集下载方法及报错解决.docx
