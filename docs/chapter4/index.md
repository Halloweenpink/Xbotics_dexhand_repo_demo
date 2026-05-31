# 第4章 仿真环境 & 学术基准（手部）

> 做算法对比 / RL / IL / World Models 时常用的仿真任务。

- **Gymnasium-Robotics · Adroit / ShadowHand 任务族**
  - Adroit（Door / Hammer / Pen / Relocate）：https://robotics.farama.org/envs/adroit_hand/
  - ShadowHand 任务（Block / Egg / Pen etc.）：https://robotics.farama.org/envs/shadow_dexterous_hand/

- **IsaacGymEnvs（NVIDIA）**
  - 带 ShadowHand 等 dex 任务与 DexPBT 代码：https://github.com/isaac-sim/IsaacGymEnvs

- **Bi-DexHands（PKU-MARL）**
  - 双手 / 双臂 dex 任务，高并行 Isaac Gym：https://github.com/PKU-MARL/DexterousHands

- **ManiSkill Dextrous 子集**
  - 文档（D'Claw 旋阀等灵巧任务，多难度等级）：https://maniskill.readthedocs.io/en/latest/tasks/dextrous/
  - 仓库：https://github.com/haosulab/ManiSkill

- **DexArt（Dexterous Articulated Object Manipulation）**
  - 基于 Allegro / Shadow 等的可泛化关节物体任务：https://ar5iv.labs.arxiv.org/html/2305.05706

- **Safety-Gymnasium · ShadowHand 扩展任务**
  - 例如双手抛接等带安全约束的灵巧任务：https://safety-gymnasium.readthedocs.io/en/latest/environments/safe_isaac_gym/shadowhand_catch_over2_underarm_safe_finger.html

- **GraspIt!（Columbia）抓取仿真器**
  - 支持任意手型与接触建模：
    - 站点：https://graspit-simulator.github.io/
    - 手册：https://www.cs.columbia.edu/~cmatei/graspit/html-manual/graspit-manual_1.html
