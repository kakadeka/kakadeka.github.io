(() => {
  "use strict";

  const DOWNLOAD =
    "https://github.com/kakadeka/KakadekaToolBox/releases/download/v1.0.3/KakadekaToolBox_1.0.3_x64-setup.exe";

  /* ─────────── 英中词典（默认英文） ─────────── */
  const dict = {
    en: {
      "brand.name": "KakadekaToolBox",
      "nav.features": "Features",
      "nav.compare": "Compare",
      "nav.users": "Who it's for",
      "nav.download": "Download",
      "nav.cta": "Download",
      "hero.badge": "Free · local · private",
      "hero.t1": "PDF to Word.",
      "hero.t2": "Beautifully local.",
      "hero.lede":
        "Convert PDFs, scans, and images into editable Word — entirely on your machine. No account, no subscription, no upload. Your files never leave your computer.",
      "hero.cta": "Download for Windows",
      "hero.ghost": "Learn more",
      "hero.sub": "Windows 10 / 11 · Free forever · AGPL-3.0 open source",
      "stage.caption": "Local conversion · nothing is uploaded",
      "win.sideLabel": "Converters",
      "win.n1": "PDF → Word",
      "win.n2": "Scan → Word",
      "win.n3": "Image → Word",
      "win.n4": "Word → PDF",
      "win.drop": "Drop a PDF / image here, or click to browse",
      "win.j1done": "Done",
      "win.j1out": "scan_contract.docx · saved locally",
      "win.j2doing": "Local OCR…",
      "s1.v": "Free",
      "s1.l": "Unlimited · no IAP",
      "s2.v": "Local",
      "s2.l": "Files never leave your PC",
      "s3.v": "Offline",
      "s3.l": "Works without internet",
      "s4.v": "Open",
      "s4.l": "AGPL-3.0 · auditable",
      "feat.eyebrow": "What it does",
      "feat.title": "Everything converts. Nothing uploads.",
      "feat.lede": "One toolbox for everyday document work — built to run entirely on your machine.",
      "tool1.t": "Text PDF → Word",
      "tool1.d": "Reports, papers, and contracts — converted to editable Word you can actually work in.",
      "tool1.t1": "Layout preserved",
      "tool1.t2": "Tables kept",
      "tool2.t": "Scanned PDF → Word",
      "tool2.d": "Offline OCR recognizes the text in scanned documents and turns it into editable content.",
      "tool2.t1": "Offline OCR",
      "tool2.t2": "Multi-page scans",
      "tool3.t": "Image → Word",
      "tool3.d": "Phone photos, screenshots, and scans — recognized and exported as editable Word.",
      "tool3.t1": "Camera photos",
      "tool3.t2": "Screenshots",
      "tool4.t": "Word → PDF",
      "tool4.d": "The reverse direction — export documents to PDF with a stable, shareable layout.",
      "tool4.t1": "Stable layout",
      "tool4.t2": "Print-ready",
      "tool5.t": "PDF utilities",
      "tool5.d": "Merge, split, rotate, and compress — the everyday PDF chores, all in one place.",
      "tool5.t1": "Merge & split",
      "tool5.t2": "Compress & rotate",
      "tool6.t": "Documents → Markdown",
      "tool6.d": "Export office documents to Markdown for writing, publishing, and archiving.",
      "tool6.t1": "Fast export",
      "tool6.t2": "Publishing-ready",
      "why.eyebrow": "Why local",
      "why.title": "Your documents never leave your computer.",
      "why.lede": "Local processing isn't just a feature — it's the whole point.",
      "why1.t": "Privacy by default",
      "why1.d": "Contracts, resumes, and internal documents stay on your machine. There is no upload step — and no third-party server to wonder about.",
      "why2.t": "Works offline",
      "why2.d": "No internet, no problem. Convert on a flight, in a meeting, or on a slow connection — the engine runs entirely on your computer.",
      "why3.t": "Free forever",
      "why3.d": "No subscriptions, no per-page pricing, no watermark, no upsell. Install once — every conversion is free, unlimited, and forever.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Questions, answered.",
      "faq.lede": "The things people usually ask before hitting download.",
      "faq1.q": "Is it really free?",
      "faq1.a": "Yes. No subscription, no per-page charges, no watermark, no hidden upgrade. The open-source engine (AGPL-3.0) is bundled in the installer, so all core conversions are free and unlimited.",
      "faq2.q": "Are my files uploaded anywhere?",
      "faq2.a": "No. Everything runs locally on your computer. There is no upload step, no account, and no telemetry — the files never leave your machine, and it works even without internet.",
      "faq3.q": "Can it convert scanned PDFs?",
      "faq3.a": "Yes. Scanned PDFs and images go through offline OCR, which recognizes the text and exports it as an editable Word document — paragraphs, and tables where possible.",
      "faq4.q": "Is there a limit on file size or number of files?",
      "faq4.a": "No daily quotas, no paid tiers, no waiting in line. Since conversion happens locally, the practical limit is your computer's own resources — most daily documents convert in seconds.",
      "faq5.q": "Which Windows does it support?",
      "faq5.a": "Windows 10 and 11, 64-bit. The installer bundles the conversion engine, so core features work right after installation — no separate runtime to download.",
      "cmp.eyebrow": "Why local",
      "cmp.title": "The online flow, vs. the local one.",
      "cmp.lede": "The same file, two very different journeys.",
      "cmp.beforeTag": "Online converters",
      "cmp.b1": "Sign up, then upload your file",
      "cmp.b2": "Wait in a queue, hit quotas",
      "cmp.b3": "Pay for premium or get watermarked output",
      "cmp.b4": "Your file stays on their server",
      "cmp.afterTag": "KakadekaToolBox",
      "cmp.a1": "Install once — free forever",
      "cmp.a2": "Drag in a file, done locally",
      "cmp.a3": "Editable Word, no watermark",
      "cmp.a4": "Offline, ad-free, files stay on your PC",
      "cmp.cta": "Download free",
      "users.eyebrow": "Who it's for",
      "users.title": "Made for people who live in documents.",
      "users.lede": "No time for fiddly tools — just the job done, securely.",
      "u1.t": "Office workers",
      "u1.d": "Contracts, quotes, and forms arrive as PDFs and must become editable Word — several a day.",
      "u2.t": "Students & job seekers",
      "u2.d": "Papers and resume templates are mostly PDF — quote, edit, submit without a budget line for a plan.",
      "u3.t": "Freelancers & small business",
      "u3.d": "Client scans, receipts, and licenses to archive — without trusting sensitive files to a random website.",
      "u4.t": "Admin / clerks / HR",
      "u4.d": "Resumes and spreadsheets daily. A stable, offline tool that works forever after one install.",
      "dl.eyebrow": "Get started",
      "dl.title": "Download once. Free for good.",
      "dl.lede": "Single installer · no account · no subscription · Windows 10/11 64-bit",
      "dl.cta": "Download KakadekaToolBox 1.0.3",
      "dl.notes": "Release notes & changelog →",
      "dl.fine":
        "OCR and complex layout results depend on the open engine — verify on your machine. Word → PDF requires LibreOffice installed separately. The installer bundles the conversion engine and works offline.",
      "footer.copy": "© Kakadeka",
    },

    zh: {
      "brand.name": "卡卡的卡ToolBox",
      "nav.features": "功能",
      "nav.compare": "对比",
      "nav.users": "适用人群",
      "nav.download": "下载",
      "nav.cta": "下载",
      "hero.badge": "免费 · 本地 · 私密",
      "hero.t1": "PDF 转 Word",
      "hero.t2": "不必交会员费",
      "hero.lede":
        "把 PDF、扫描件和图片转成可编辑的 Word，全程都在你自己的电脑上完成。不需要账号、不需要订阅、不需要上传，文件永远只留在本机。",
      "hero.cta": "下载 Windows 版",
      "hero.ghost": "了解更多",
      "hero.sub": "Windows 10 / 11 · 永久免费 · AGPL-3.0 开源",
      "stage.caption": "本地转换 · 什么都不上传",
      "win.sideLabel": "转换工具",
      "win.n1": "PDF → Word",
      "win.n2": "扫描 → Word",
      "win.n3": "图片 → Word",
      "win.n4": "Word → PDF",
      "win.drop": "把 PDF / 图片拖到这里，或点击选择文件",
      "win.j1done": "转换完成",
      "win.j1out": "scan_contract.docx · 已保存在本机",
      "win.j2doing": "本地 OCR 中…",
      "s1.v": "免费",
      "s1.l": "无限次转换 · 无内购",
      "s2.v": "本地",
      "s2.l": "文件不出你的电脑",
      "s3.v": "离线",
      "s3.l": "断网也能转换",
      "s4.v": "开源",
      "s4.l": "AGPL-3.0 · 源码可查",
      "feat.eyebrow": "能做什么",
      "feat.title": "什么都能转，什么都不上传。",
      "feat.lede": "一个工具箱，覆盖日常文档处理——全部在你自己的电脑上运行。",
      "tool1.t": "文字版 PDF → Word",
      "tool1.d": "报告、论文、合同，转成可编辑的 Word，转完就能直接改。",
      "tool1.t1": "保留版式",
      "tool1.t2": "保留表格",
      "tool2.t": "扫描 PDF → Word",
      "tool2.d": "离线 OCR 识别扫描件里的文字，转成可编辑的内容。",
      "tool2.t1": "离线 OCR",
      "tool2.t2": "多页扫描件",
      "tool3.t": "图片 → Word",
      "tool3.d": "手机拍照、截图、扫描图，都能识别后导出成可编辑的 Word。",
      "tool3.t1": "手机拍照",
      "tool3.t2": "截图",
      "tool4.t": "Word → PDF",
      "tool4.d": "反向转换，把文档导出成排版稳定、方便分享的 PDF。",
      "tool4.t1": "排版稳定",
      "tool4.t2": "适合打印",
      "tool5.t": "PDF 整理",
      "tool5.d": "合并、拆分、旋转、压缩，日常 PDF 操作都集中在一处。",
      "tool5.t1": "合并拆分",
      "tool5.t2": "压缩旋转",
      "tool6.t": "文档 → Markdown",
      "tool6.d": "把办公文档导出成 Markdown，方便写作、发布和归档。",
      "tool6.t1": "快速导出",
      "tool6.t2": "便于发布",
      "why.eyebrow": "为什么要本地",
      "why.title": "你的文档，永远不离开你的电脑。",
      "why.lede": "本地处理不只是功能，更是这款工具的理念所在。",
      "why1.t": "默认私密",
      "why1.d": "合同、简历、内部资料都留在你的电脑上。没有上传这一步——也不用担心文件落到了哪台服务器上。",
      "why2.t": "离线可用",
      "why2.d": "没有网络也没关系。在飞机上、开会时、网速很慢的地方都能转换——引擎完全在你的电脑上运行。",
      "why3.t": "永久免费",
      "why3.d": "没有订阅、没有按页收费、没有水印、没有诱导升级。装一次——之后每次转换都免费、不限次数、永远有效。",
      "faq.eyebrow": "常见问题",
      "faq.title": "问答",
      "faq.lede": "大家在点击下载之前，通常会问的问题。",
      "faq1.q": "真的免费吗？",
      "faq1.a": "是的。没有订阅、没有按页收费、没有水印、也没有隐藏的升级收费。开源的转换引擎（AGPL-3.0）已经内置在安装包里，所有核心转换都免费且不限次数。",
      "faq2.q": "我的文件会被上传吗？",
      "faq2.a": "不会。所有转换都在你本地电脑上完成。没有上传这一步、不需要账号、也不做任何遥测——文件永远不会离开你的电脑，甚至断网也能用。",
      "faq3.q": "能转换扫描版的 PDF 吗？",
      "faq3.a": "可以。扫描版 PDF 和图片会经过离线 OCR 识别，把文字还原成可编辑的 Word 文档——尽量保留段落和表格。",
      "faq4.q": "文件大小或数量有限制吗？",
      "faq4.a": "没有每日配额、没有付费档位、也不用排队。因为转换在本地完成，实际限制只取决于你电脑本身的性能——多数日常文档几秒就能转完。",
      "faq5.q": "支持哪个版本的 Windows？",
      "faq5.a": "Windows 10 和 11 的 64 位版本。安装包已经内置转换引擎，装完核心功能就能直接用——不需要另外下载运行时。",
      "cmp.eyebrow": "为什么要本地",
      "cmp.title": "在线转换和本地转换，差距在哪？",
      "cmp.lede": "同一份文件，两种截然不同的体验。",
      "cmp.beforeTag": "在线转换站",
      "cmp.b1": "先注册账号，再把文件上传",
      "cmp.b2": "排队等待，还会碰到次数限制",
      "cmp.b3": "要么付费升级，要么拿到带水印的结果",
      "cmp.b4": "转换完成后，文件还留在他们的服务器上",
      "cmp.afterTag": "KakadekaToolBox",
      "cmp.a1": "安装一次，之后永久免费",
      "cmp.a2": "把文件拖进窗口，本地直接转换",
      "cmp.a3": "得到可编辑的 Word，没有水印",
      "cmp.a4": "全程离线、无广告，文件只留在你的电脑上",
      "cmp.cta": "免费下载",
      "users.eyebrow": "适用人群",
      "users.title": "给每天都要和文档打交道的人",
      "users.lede": "不想折腾工具，只想安全、省心地把事情办完。",
      "u1.t": "办公室白领",
      "u1.d": "合同、报价单、表单大多是 PDF，要改成可编辑的 Word——一天还好几份。",
      "u2.t": "学生与求职者",
      "u2.d": "文献和简历模板大多是 PDF，要引用、要改、要提交，预算里可没有「转换会员」这一项。",
      "u3.t": "自由职业 / 小生意",
      "u3.d": "客户发来的扫描件、票据、执照要归档，又不想把敏感文件交给来路不明的网站。",
      "u4.t": "行政 / 文员 / HR",
      "u4.d": "每天都要处理简历和表格，需要装一次就能一直用的、稳定又离线的工具。",
      "dl.eyebrow": "开始使用",
      "dl.title": "下载一次，永久免费。",
      "dl.lede": "单个安装文件 · 无需账号 · 无需订阅 · Windows 10/11 64 位",
      "dl.cta": "下载 KakadekaToolBox 1.0.3",
      "dl.notes": "查看发行说明与更新日志 →",
      "dl.fine":
        "OCR 与复杂版式效果受开源引擎能力限制，请以本机实测为准；Word 转 PDF 需另行安装 LibreOffice。安装包内置转换引擎，离线可用。",
      "footer.copy": "© Kakadeka",
    },
  };

  const KEY = "kakadeka-site-lang-v8b";
  const THEME_KEY = "kakadeka-site-theme-v1";
  const toggle = document.getElementById("langToggle");
  const label = toggle && toggle.querySelector("[data-lang-label]");
  const themeBtn = document.getElementById("themeToggle");

  // 语言：手动切换优先；未选过时按浏览器语言检测（中文→zh，其他→en）
  function detectLang() {
    const saved = localStorage.getItem(KEY);
    if (saved === "zh" || saved === "en") return saved;
    const nav = (navigator.language || navigator.languages?.[0] || "").toLowerCase();
    return nav.startsWith("zh") ? "zh" : "en";
  }
  let lang = detectLang();

  // 主题：默认浅色；记忆深色选择
  function applyTheme(next) {
    const dark = next === "dark";
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch (_) {}
  }
  applyTheme(localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light");

  function apply(next) {
    lang = next;
    try { localStorage.setItem(KEY, lang); } catch (_) {}
    document.documentElement.classList.toggle("lang-zh", lang === "zh");
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    const pack = dict[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      const text = pack[k];
      if (text == null) return;
      el.innerHTML = text;
    });
    if (label) label.textContent = lang === "zh" ? "EN" : "中文";
  }

  if (toggle) {
    toggle.addEventListener("click", () => apply(lang === "zh" ? "en" : "zh"));
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const dark = document.documentElement.classList.contains("dark");
      applyTheme(dark ? "light" : "dark");
    });
  }

  // 下载按钮统一指向发布包
  document
    .querySelectorAll('a[href*="KakadekaToolBox_1.0.3_x64-setup.exe"]')
    .forEach((a) => { a.href = DOWNLOAD; });

  apply(lang);
})();
