# 第 5 周

# isaaclab的环境配置：

## 虚拟环境配置&#x20;

## 软链接

需要把 sim 作为快捷方式放到 lab 里面。大家问下 ai

## 版本

**一定要下 python 3.11&#x20;**&#x4E0D;能是 3.10 不然会报错：`No module named ‘carb._carb’`

```plain&#x20;text
conda create -n isaaclab python=3.11
```

在handrl\_grasp\source\handrl 目录下执行安装命令。这是因为该目录下包含 setup.py 文件，它是 Python 识别安装规则的入口。

建议使用的完整命令（确保已激活你的虚拟环境）：

```plain&#x20;text
pip install -e .
```

-e (editable mode)：非常重要。这意味着你对代码的修改会立即生效，而不需要每次都重新安装。

`. `：表示安装当前目录（即 source\handrl）下的包。

***

> build-essential 是 Ubuntu 编译 C/C++ 程序的基础依赖，提供 gcc/g++/make 等核心编译工具；
>
> cmake 是跨平台构建配置工具，用于生成适配不同系统的编译配置文件（替代手写 Makefile）；
>
> 二者组合是 Linux 下从源码编译安装绝大多数 C/C++ 项目的 “标配”。



```plain&#x20;text
sudo apt install cmake build-essential
cd /opt/IsaacLab
pip install flatdict==4.0.1 --no-build-isolation
./isaaclab.sh --install
source _isaac_sim/setup_conda_env.sh
```

## 测试代码：

加载空的界面

```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py
./isaaclab.sh -p scripts/reinforcement_learning/sb3/train.py --task Isaac-Cartpole-v0 --num_envs 64
./isaaclab.sh -p scripts/tutorials/05_controllers/run_diff_ik.py --robot franka_panda --num_envs 128
```

## ModuleNotFoundError: No module named 'isaacsim'

![](<images/第5周 FAQ-696a7fcb8cae276afdc41073a2c66633.png>)

解决方法：**在你想要运行脚本的终端先执行：**

```python
source /opt/IsaacSim/setup_conda_env.sh 
```

> 这一步的作用是：
>
> 1. 激活 IsaacSim 推荐的 conda 虚拟环境（比如 isaac-sim）。
>
> 2. 设置好相关的环境变量（如 PYTHONPATH、LD\_LIBRARY\_PATH、PATH 等），确保 Python 能找到 isaacsim 及其依赖。
>
> 3. 让你后续在终端直接运行 IsaacSim 相关 Python 脚本时不会遇到找不到模块的问题。

就可以正常启动了





# task1: 抓球

### 1. 把 文件夹路径改完

### 2. usd文件

一种方法：生成 usd 文件，去github repo 下载 urdf，然后用 Isaac sim import，save 成 usd（如：/home/5boxfr\_i/HandGraspBall）并更新路径

另一种方法: 找到线上实习第一个月文档里第3-4周的L6\_left.zip文件，使用left/linkerhand\_l6\_left目录下的linkerhand\_l6\_left.usd文件即可。

### 3. 改文件夹名字

/home/5boxfr\_i/HandGraspBall/source/handrl/handrl/tasks/direct/handrl/agents/skrl\_ppo\_cfg.yaml

> handrl\_env\_cfg.py 里面大拇指 m 拼错了，不要去动它，改了运行不了，保持和 usd 里面的 joint name 一致
>
> &#x20;   `    "thumb_cmc_roll",  # 这里打错了`

### 训练

```python
python scripts/skrl/train.py --task handgrasp 
```

训练的时候不渲染，会更快：

```python
python scripts/skrl/train.py --task handgrasp --headless
```

同样是 4800 步我的效果并不好，我在想可能是训练步数不够的问题。

```python
python scripts/skrl/train.py --task handgrasp --checkpoint logs/skrl/HandRLExperiments/2026-02-25_23-51-35_ppo_torch/checkpoints/best_agent.pt
```

继续训练了一次就效果很好

# task2：移动到指定位姿

1. 使用之前的虚拟环境

2. 同task1把“play.py, env\_cfg, train文件和usd文件“为你的真实文件路径。（**直接全局搜索 chen 关键字即可**）

### 报错:gymnasium.error.NameNotFound: Environment \`handrl\` doesn't exist. Did you mean: \`handgrasp\`?

这些找不到 env 等的问题都是因为没有改路径导致的，把路径改了就可以了

* 然后在 handrl 总目录下运行以下命令即可。

```plain&#x20;text
python scripts/skrl/play.py --task handrl
```

## 任务解释：

这是一个“五指关节位置到达”任务（`source/handrl/handrl/tasks/direct/handrl/handrl_env_cfg.py`）,让预设灵巧手的五个手指关节（thumb/index/middle/ring/pinky）分别移动到各自的目标角度（target position）。

```sql
    # per-joint target range (rad)
    target_pos_ranges = {
        "thumb_cmc_pitch": (0.0, 0.99),
        "index_mcp_pitch": (0.0, 1.26),
        "middle_mcp_pitch": (0.0, 1.26),
        "ring_mcp_pitch": (0.0, 1.26),
        "pinky_mcp_pitch": (0.0, 1.26),
    }
```

大家可以对比 Task1 的任务。这里没有负责的奖励设计，关节数也更少。

# 问题：

1. 由于我是将抓取和移动两个项目共用一个环境，在切换到另一个环境运行时必须要通过重新运行setup.py才能成功运行，否则会显示另一个环境没有被注册，这个问题大家有什么看法吗？



# Task 3：安装 Gym

流程：https://github.com/linker-bot/linkerhand-sim/blob/main/linker\_hand\_isaac\_gym\_urdf/README.md

## Pytorch 加速下载

正常太慢了，加个镜像快很多

```python
# 激活环境后
pip install torch==2.0.1 torchvision==0.15.2 -f https://download.pytorch.org/whl/torch-wheels/cu118
```

![](<images/第5周 FAQ-image-3.png>)

## Gym：

### 用地瓜桌面的已经有了，可以跳过下载

isaacgym 不在 home 下面，要用 sudo，可能有一定的风险

直接 pip install -e . 会覆盖之前 gpu 版本的 torch。要指定 python 编译器，让它找到虚拟环境的 cuda 版 torch

```python
cd /opt/isaacgym/python
sudo /home/5boxfr_i/miniconda3/envs/isaacgym/bin/python -m pip install -e .
```

添加一些文件路径：

```python
echo 'export LD_LIBRARY_PATH=/home/5boxfr_i/miniconda3/envs/isaacgym/lib:$LD_LIBRARY_PATH' >> ~/.bashrc
source ~/.bashrc
```

激活环境后执行：

```python
python isaac_urdf.py
```

这时导入我们灵心巧手 github 里面的 urdf 会出问题，不显示手指，原因是 urdf 里面 "thumb\_cmc\_pitch" 关节的 速度限制为 0 了。改成 1 就可以正常渲染

```python
<limit
      lower="0"
      upper="0.5149"
      effort="0"
      velocity="0" />
```



***

# 自己电脑上配置Isaac Lab 2.3跑demo遇到的问题

1. 做demo1的时候，运行训练代码之后，程序在启动 GUI 界面后立即闪退，并抛出 `ImportError` 导入错误

经过排查，该故障由以下两个层面的问题共同导致：

* **API 版本不兼容 (Primary)**： 由于 Isaac Lab 项目处于快速迭代中，`isaaclab.utils.io` 模块的内部结构发生了变化。当前安装的版本（2022-2026 版）仅导出了 `dump_yaml` 和 `load_torchscript_model`，而原始代码中尝试导入的 `dump_pickle` 已经在官方库中被移除或未被导出。

![](<images/第5周 FAQ-image-1.png>)

运行代码后发现只有dump\_yaml函数

在train.py中手动添加函数后解决

![](<images/第5周 FAQ-image-2.png>)

* **系统环境库冲突 (Secondary)**： Conda 环境中的某些动态链接库（如 `libicui18n`）需要更高版本的 C++ 标准库支持，导致报错 `ImportError: /lib/x86_64-linux-gnu/libstdc++.so.6: version 'CXXABI_1.3.15' not found`。

通过修正 `LD_LIBRARY_PATH`，确保程序优先调用 Conda 环境下较新版本的 `libstdc++.so`，解决底层 C++ 接口不匹配的问题。

```bash
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib:$LD_LIBRARY_PATH
```

* 运行demo2时， 运行`play.py` 时，程序提示 `ModuleNotFoundError`。错误指向 `isaaclab.utils.pretrained_checkpoint` 模块不存在，导致仿真环境在初始化阶段崩溃。

核心故障原因分析 (Root Cause Analysis)

* **模块重构与路径迁移**：在 Isaac Lab 的版本更迭中，原本独立于 `utils` 下的预训练模型获取函数（`get_published_pretrained_checkpoint`）迁移到了 **`isaaclab.utils.assets`** 子模块中。

* **脚本陈旧性**：由于 `handrl` demo 依然引用旧路径，导致 Python 搜索路径（PYTHONPATH）无法正确定位模块。

解决方案与实施 (Solutions & Implementation)

* **重定向导入路径 (Import Redirection)**： 将 `play.py` 第 110 行的导入语句从旧路径重定向至新路径：

  * **修改前**：`from isaaclab.utils.pretrained_checkpoint import ...`

  * **修改后**：`from isaaclab.utils.assets import ...`

* **鲁棒性处理**：在修改过程中引入了 `try-except` 捕获机制，确保在不同版本的 Isaac Lab 环境下均能尝试正确的导入路径，增强了代码的移植性。

![](<images/第5周 FAQ-image.png>)


