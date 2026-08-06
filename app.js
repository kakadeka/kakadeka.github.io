(() => {
  const DOWNLOAD =
    "https://github.com/kakadeka/KakadekaToolBox/releases/download/v1.0.3/KakadekaToolBox_1.0.3_x64-setup.exe";

  const dict = {
    zh: {
      "nav.features": "功能",
      "nav.privacy": "本地优先",
      "nav.tools": "工具",
      "nav.download": "下载",
      "nav.cta": "下载",
      "hero.badge": "免费 · 开源 · 本地优先",
      "hero.line1": "文档转换。",
      "hero.line2": "文件留在本机。",
      "hero.lede":
        "把 PDF、扫描件和图片转成 Word，也能合并、拆分、压缩 PDF。默认离线运行，不做遥测。",
      "hero.download": "免费下载",
      "hero.github": "查看源码",
      "hero.c1": "Windows 10/11",
      "hero.c2": "默认离线",
      "hero.c3": "AGPL-3.0",
      "preview.title": "本地转换 · 不上传",
      "preview.side": "功能",
      "preview.i1": "扫描 PDF → Word",
      "preview.i2": "文字 PDF → Word",
      "preview.i3": "图片 → Word",
      "preview.i4": "PDF 工具",
      "preview.docKicker": "本机任务",
      "preview.docTitle": "scan_contract.pdf",
      "preview.docBody":
        "在本机做离线 OCR，尽量保留段落和表格，输出可编辑 Word。文件不会离开这台电脑。",
      "preview.s1": "离线识别",
      "preview.s2": "版式还原",
      "preview.s3": "本机保存",
      "stats.s1v": "本地",
      "stats.s1l": "默认离线处理",
      "stats.s2v": "OCR",
      "stats.s2l": "扫描件转 Word",
      "stats.s3v": "PDF",
      "stats.s3l": "合并 · 拆分 · 压缩",
      "stats.s4v": "开源",
      "stats.s4l": "源码可审查",
      "feat.eyebrow": "核心能力",
      "feat.title": "结果在本机生成，不必先上传。",
      "feat.lede": "覆盖转换、识别和 PDF 整理等高频场景，安装后即可使用。",
      "feat.c1t": "文字版 PDF → Word",
      "feat.c1d":
        "把可复制文本的 PDF 在本机转成可编辑 Word，适合报告与日常材料。",
      "feat.c2t": "扫描 PDF / 图片 → Word",
      "feat.c2d": "对扫描件和拍照件做离线 OCR，减少手工录入。",
      "feat.c3t": "PDF 实用工具",
      "feat.c3d": "合并、拆分、旋转、压缩，都在同一个桌面工具里完成。",
      "tools.eyebrow": "工具箱",
      "tools.title": "常用文档能力，集中在一处。",
      "tools.lede": "一个桌面入口完成转换与整理，少在多个网站之间来回切换。",
      "tools.t1": "PDF → Word",
      "tools.d1": "文字版本地转换",
      "tools.t2": "扫描 → Word",
      "tools.d2": "离线 OCR",
      "tools.t3": "图片 → Word",
      "tools.d3": "拍照件识别",
      "tools.t4": "Word → PDF",
      "tools.d4": "需本机 LibreOffice",
      "tools.t5": "PDF 整理",
      "tools.d5": "合并拆分旋转压缩",
      "tools.t6": "Office → MD",
      "tools.d6": "可选 Markdown 导出",
      "why.eyebrow": "为什么本地",
      "why.title": "少上传，多掌控。",
      "why.lede": "合同、扫描件和内部资料，不必轻易交给在线转换站。",
      "why.c1t": "文件留在本机",
      "why.c1d": "默认离线运行：不上传用户文档，也不做遥测。",
      "why.c2t": "安装即可使用",
      "why.c2d": "官方安装包已内置转换运行环境，装好就能用核心功能。",
      "why.c3t": "开源可审查",
      "why.c3d":
        "源码公开在 GitHub，转换引擎采用 AGPL-3.0，可自行审查与反馈。",
      "dl.eyebrow": "开始使用",
      "dl.title": "下载安装包，马上开始用。",
      "dl.lede": "单个安装包，无需注册、无需订阅。支持 Windows 10/11 64 位。",
      "dl.cta": "下载 KakadekaToolBox 1.0.3",
      "dl.notes": "查看发行说明 →",
      "dl.note":
        "OCR 与复杂版式效果受开源引擎限制，请以本机实测为准。若需 Word 转 PDF，请另行安装 LibreOffice。",
      "footer.tag": "本地文档工具箱 · 开源",
      "footer.product": "产品",
      "footer.resources": "资源",
      "footer.license": "许可",
      "footer.copy": "© Kakadeka。软件按现状提供。",
    },
    en: {
      "nav.features": "Features",
      "nav.privacy": "Local-first",
      "nav.tools": "Tools",
      "nav.download": "Download",
      "nav.cta": "Download",
      "hero.badge": "Free · open source · local-first",
      "hero.line1": "Convert documents.",
      "hero.line2": "Keep files local.",
      "hero.lede":
        "Turn PDFs, scans, and images into Word. Merge, split, and compress PDFs too. Offline by default—no telemetry.",
      "hero.download": "Download for free",
      "hero.github": "View source",
      "hero.c1": "Windows 10/11",
      "hero.c2": "Offline by default",
      "hero.c3": "AGPL-3.0",
      "preview.title": "Local convert · no upload",
      "preview.side": "Features",
      "preview.i1": "Scan PDF → Word",
      "preview.i2": "Text PDF → Word",
      "preview.i3": "Image → Word",
      "preview.i4": "PDF tools",
      "preview.docKicker": "Local job",
      "preview.docTitle": "scan_contract.pdf",
      "preview.docBody":
        "Run offline OCR on this machine, keep paragraphs and tables where possible, and export editable Word. Files never leave your PC.",
      "preview.s1": "Offline OCR",
      "preview.s2": "Layout recovery",
      "preview.s3": "Save locally",
      "stats.s1v": "Local",
      "stats.s1l": "Offline by default",
      "stats.s2v": "OCR",
      "stats.s2l": "Scans to Word",
      "stats.s3v": "PDF",
      "stats.s3l": "Merge · split · compress",
      "stats.s4v": "Open",
      "stats.s4l": "Auditable source",
      "feat.eyebrow": "Capabilities",
      "feat.title": "Results stay on your PC—no upload first.",
      "feat.lede":
        "Built for convert, OCR, and PDF cleanup. Ready to use after install.",
      "feat.c1t": "Digital PDF → Word",
      "feat.c1d":
        "Convert text-based PDFs to editable Word locally—ideal for reports and everyday files.",
      "feat.c2t": "Scanned PDF / image → Word",
      "feat.c2d": "Offline OCR for scans and photos, so you type less.",
      "feat.c3t": "PDF utilities",
      "feat.c3d": "Merge, split, rotate, and compress in one desktop app.",
      "tools.eyebrow": "Toolbox",
      "tools.title": "Everyday document tools, in one place.",
      "tools.lede":
        "One desktop entry for convert and cleanup—less hopping between websites.",
      "tools.t1": "PDF → Word",
      "tools.d1": "Local text PDF convert",
      "tools.t2": "Scan → Word",
      "tools.d2": "Offline OCR",
      "tools.t3": "Image → Word",
      "tools.d3": "Photo recognition",
      "tools.t4": "Word → PDF",
      "tools.d4": "Needs LibreOffice",
      "tools.t5": "PDF cleanup",
      "tools.d5": "Merge, split, rotate, compress",
      "tools.t6": "Office → MD",
      "tools.d6": "Optional Markdown export",
      "why.eyebrow": "Why local",
      "why.title": "Less uploading. More control.",
      "why.lede":
        "Contracts, scans, and internal docs shouldn’t go to online converters lightly.",
      "why.c1t": "Files stay local",
      "why.c1d": "Offline by default: no document uploads, no telemetry.",
      "why.c2t": "Ready after install",
      "why.c2d":
        "The official installer bundles the conversion runtime for core features.",
      "why.c3t": "Open and auditable",
      "why.c3d":
        "Source is on GitHub. The conversion engine is AGPL-3.0—review and give feedback.",
      "dl.eyebrow": "Get started",
      "dl.title": "Download the installer and start.",
      "dl.lede":
        "One setup file. No account, no subscription. Windows 10/11 x64.",
      "dl.cta": "Download KakadekaToolBox 1.0.3",
      "dl.notes": "Release notes →",
      "dl.note":
        "OCR and complex layouts depend on open engines—verify on your machine. Word→PDF needs LibreOffice installed separately.",
      "footer.tag": "Local document toolbox · open source",
      "footer.product": "Product",
      "footer.resources": "Resources",
      "footer.license": "License",
      "footer.copy": "© Kakadeka. Provided as is.",
    },
  };

  const key = "kakadeka-site-lang-v4b";
  const toggle = document.getElementById("langToggle");
  const label = toggle?.querySelector("[data-lang-label]");

  function detect() {
    const saved = localStorage.getItem(key);
    if (saved === "zh" || saved === "en") return saved;
    return "en";
  }

  let lang = detect();

  function apply(next) {
    lang = next;
    localStorage.setItem(key, lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    const pack = dict[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (pack[k] != null) el.textContent = pack[k];
    });
    if (label) label.textContent = lang === "zh" ? "EN" : "中文";
  }

  toggle?.addEventListener("click", () => apply(lang === "zh" ? "en" : "zh"));
  document
    .querySelectorAll('a[href*="KakadekaToolBox_1.0.3_x64-setup.exe"]')
    .forEach((a) => {
      a.href = DOWNLOAD;
    });

  apply(lang);
})();
