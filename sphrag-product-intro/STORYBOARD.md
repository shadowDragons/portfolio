---
format: 1080x1920
duration: 10s
message: "13 年企业系统与 AI 应用全栈经验，能把复杂项目从 0 到 1 落地。"
arc: Hook → Proof → Systems montage → CTA
audience: "需要企业系统、AI 应用或复杂后台交付的潜在商业客户"
mode: autonomous
music: confident minimal tech underscore
captions: skipped
---

## Video direction

- palette system: 使用 Broadside 的双寄存器系统。Frame 1 与 4 为 fire-orange 平面与 ink-black 字；Frame 2 与 3 为 ink-black 平面、cream 文字与 fire-orange 唯一强调色。真实产品截图只作为证据表面，保留其原生色彩，不额外引入装饰性渐变。
- type system: Avenir Next 作为 display / reading 主字体，IBM Plex Mono 仅用于时间码、分类标签与网址辅助信息；大标题保持小写式的紧凑重量感，中文以重字重和留白建立层级。
- motion grammar: 所有入场与停靠使用平滑长尾节奏（power3）；信息在对应旁白语义点逐段出现，绝不在开头一次性铺满。镜头内只用有限、可 seek 的 GSAP 动画，内部切换采用速度匹配的 zoom-through 或 cut-the-curve。
- rhythm: Frame 1 以短促宣言建立注意力；Frame 2 让数字完成上升后短暂停读；Frame 3 依次展示三类真实系统并在最后一张停住；Frame 4 将网址作为最长、最安静的结束停留。
- keep-out: 全部关键文字与界面 focal 均位于顶部 83% 安全区域，底部 17% 只保留背景与非关键信息。
- negative list: 不使用浏览器外框、鼠标指针、导航栏、无关通用素材、圆角卡片堆叠、渐变光球、紫蓝 AI 背景、循环漂浮、呼吸缩放，或“先全部出现再冻结”的幻灯片式动画。

## Frame 1 — 能落地的人

- scene: 橙色宣言画面，以大字提出客户面对复杂项目时真正需要的能力。
- voiceover: "复杂项目，要能落地的人。"
- duration: 1.8s
- poster: 1.1s
- transition_in: cut
- status: built
- src: compositions/frames/01-deliver.html
- type: hook
- persuasion: Outcome-first direct address
- beat: curiosity + trust
- blueprint: kinetic-type-beats (Adapt)
- asset_candidates:

- focal: 复杂项目，要能落地的人。
- roles: 空资产候选集；fire-orange 全屏平面为背景，宣言大字为唯一前景主体。
- sfx: tight impact, short reverse whoosh

Adapt: 保留 kinetic-type-beats 的多拍文字接力与最终锁定；将英文中心单词替换为两段中文商业宣言，以橙色平面和字重变化完成视觉推进。
Scene 1 (0.0–0.55s): fire-orange 全屏平面先占满画面，顶部左侧出现小型 mono `SPHRAG / 01`；居中的“复杂项目”以 kinetic beat-slam (`kinetic-beat-slam`) 压入，Centered、低密度、单一大字主体。
Scene 2 (0.55–1.20s): “复杂项目”沿同一前进方向做 zoom-through 内部切换（`cut-catalog.md`），新句“要能落地的”逐词 per-word staggered reveal (`dynamic-content-sequencing`)；Centered，文字占画面约一半，高对比且保留大量留白。
Scene 3 (1.20–1.80s): “人。”作为最后 token hard-cut / flash word-swap (`discrete-text-sequence`) 落下，整句锁定为“复杂项目，要能落地的人。”；黑色细线短促 self-draw (`svg-path-draw`) 后静止，结尾停读。

narrativeRole: 用客户的结果语言建立第一秒的相关性，而不是从技术栈或个人介绍开始。
keyMessage: 商业客户需要的是能把复杂需求做成系统的人。

## Frame 2 — 13 年的证据

- scene: 深黑底上的巨大数字从 0 增长到 13，随后出现“年企业系统与 AI 交付”和“12+ 系统”。
- voiceover: "13 年经验，12+ 系统，持续交付。"
- duration: 2.0s
- poster: 1.0s
- transition_in: zoom-through
- status: built
- src: compositions/frames/02-proof.html
- type: social_proof
- persuasion: Statistical proof
- beat: confidence
- blueprint: dataviz-countup (Adapt)
- asset_candidates:

- focal: 13 年
- roles: 空资产候选集；深黑画面为背景，数字环、13 年、12+ 系统与持续交付为前景信息层。
- sfx: rising tick sequence, soft impact

Adapt: 保留 dataviz-countup 的数字与环形进度同步上升、最终指标停读；去除虚构图表和附加卡片，仅用真实、可验证的三个资历信号。
Scene 1 (0.0–0.65s): 深黑底中央先出现细 fire-orange 环形轮廓；数值从 0 到 13 的 value-scaled counter (`counting-dynamic-scale`) 与 SVG ring sweep (`stat-bars-and-fills` → `svg-path-draw`) 同步完成。Centered，主数字占画面约 45%。
Scene 2 (0.65–1.35s): 数字停在“13 年”，下方“企业系统与 AI 交付”以 per-word staggered reveal (`dynamic-content-sequencing`) 出现；镜头仅作一次短促 push / focus (`multi-phase-camera`) 后停稳，底部安全区保持干净。
Scene 3 (1.35–2.00s): 左右两条 1px 分隔线展开，`12+ 系统` 和 `持续交付` 作为 supporting stat 依次以 cut-the-curve (`cut-catalog.md`) 落位；数字与环保持不动，形成可读的证据停帧。

narrativeRole: 将“能落地”的承诺立即落到可记忆的资历和项目规模上。
keyMessage: 经验不是履历，而是反复完成复杂交付的证据。

## Frame 3 — 系统正在运行

- scene: 三张真实界面从纵深中依次推进：企业订单、深度研搜 AI Agent、企业工作流平台；每张只保留一个大标签。
- voiceover: "企业系统，AI Agent，工作流平台。"
- duration: 3.8s
- poster: 2.1s
- transition_in: push-slide UP
- status: built
- src: compositions/frames/03-systems.html
- type: feature_showcase
- persuasion: Show-don't-tell proof
- beat: power + trust
- blueprint: device-surface-showcase (Adapt)
- asset_candidates: assets/enterprise-orders.png — 企业订单管理系统截图; assets/deep-research-agent.png — 深度研搜 AI Agent 截图; assets/workflow-platform.png — 企业工作流平台截图

- focal: assets/deep-research-agent.png
- roles: enterprise-orders.png = supporting 首段企业交付表面；deep-research-agent.png = cutout 主焦点 AI Agent 表面；workflow-platform.png = supporting 收束的工作流平台表面；ink-black = background。
- sfx: three soft surface impacts, forward whoosh, final lock click

Adapt: 保留 device-surface-showcase 的“表面建立 → 屏幕推进 → 最终停读”结构；以三张真实系统截图替代单一设备内的状态切换，让每张证据表面在同一纵深画面中依次获得焦点，签名动作为逐段 surface establish 与最终 focus-lock。
Scene 1 (0.0–0.95s): ink-black 背景上，企业订单截图以略微倾斜的 3D page-scroll reveal (`3d-page-scroll`) 从左下建立，旁侧仅出现标签“企业系统”；Asymmetric 60/40，截图为主视觉约 55%，以暗层和橙色发光细线形成三层深度。
Scene 2 (0.95–2.05s): 镜头沿同一方向 zoom-through（`cut-catalog.md`）穿过首张截图，deep-research-agent.png 以更正的竖直角度在中心建立；`AI Agent` 用 keyword glow (`asr-keyword-glow`) 对应旁白落点。Centered，Agent 截图占画面约 62%，其余表面退为低亮度 supporting 层。
Scene 3 (2.05–3.10s): workflow-platform.png 从右侧 surface establish（`3d-page-scroll`）接入，主画面在三个真实表面间完成分段 focus-lock（`viewport-change`）；标签“工作流平台”在上方逐词出现，Triptych 深度排布但只让当前截图最清晰。
Scene 4 (3.10–3.80s): 三张截图以同向 cut-the-curve (`cut-catalog.md`) 对齐为紧凑纵向证据堆栈，中央保留 Agent 截图为 focal；橙色细线 self-draw (`svg-path-draw`) 把三类能力连成一条路径，停读，不再继续推镜。

narrativeRole: 用真实系统界面证明能力边界，承接前一幕的数字主张。
keyMessage: 从业务流程到 AI 编排，复杂系统已被实际做成并运行。

## Frame 4 — 找我合作

- scene: 三张界面被橙色平面收束，留下“把复杂想法做成系统”、sphrag.com 与“找我合作”。
- voiceover: "把复杂想法，做成系统。找我合作。"
- duration: 2.4s
- poster: 1.5s
- transition_in: squeeze
- status: built
- src: compositions/frames/04-cta.html
- type: cta
- persuasion: Clear commercial invitation
- beat: urgency-to-act
- blueprint: kinetic-type-beats (Adapt)
- asset_candidates:

- focal: sphrag.com
- roles: 空资产候选集；来自上一帧的三张系统表面作为短暂背景残影，fire-orange 平面为最终背景，CTA 文案和网址为前景。
- sfx: orange sweep, resolved impact, clean end sting

Adapt: 保留 CTA kinetic-type-beats 的逐拍文案接力与 URL 长停留；前半段用上一幕真实表面的收束建立连续性，后半段让网址成为唯一主角。
Scene 1 (0.0–0.55s): 上一帧的三张真实系统表面沿同方向被 fire-orange 平面覆盖，形成一次 scale-swap (`scale-swap-transition`)；“把复杂想法”以 kinetic beat-slam (`kinetic-beat-slam`) 在上半部落下，Centered、低密度。
Scene 2 (0.55–1.20s): “做成系统。”以 hard-cut / flash word-swap (`discrete-text-sequence`) 接力替换，黑色短线从左向右 SVG self-draw (`svg-path-draw`)；保持橙色平面与黑字的强对比。
Scene 3 (1.20–2.40s): `sphrag.com` 以 segment-by-segment URL build (`discrete-text-sequence`) 在视觉中心形成，`找我合作` 作为较小但清晰的行动语于其上方落位；网址进入后完全静止，作为全片最长的结束停读。

narrativeRole: 将前面的可信度与能力证明转化为明确、可执行的合作邀请。
keyMessage: sphrag.com 是将复杂业务、AI 与产品交付连接起来的合作入口。
