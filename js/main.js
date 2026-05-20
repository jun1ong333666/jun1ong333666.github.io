/* ==========================================
   张俊龙 个人网站 — 交互逻辑 + 双语切换
   ========================================== */

(function () {
  'use strict';

  // ── 翻译字典 ──────────────────────────────────
  const i18n = {
    zh: {
      'preloader.hint': '选择语言 / Select Language',

      'nav.name': '张俊龙',
      'nav.nameEn': 'ZHANG Junlong',
      'nav.about': '关于',
      'nav.work': '工作经历',
      'nav.projects': '项目经历',
      'nav.hobbies': '兴趣爱好',
      'nav.contact': '联系',

      'hero.tag': '就业方向：海外运营 / 海外市场 / 游戏运营 / 赛事运营策划',
      'hero.title1': '张俊',
      'hero.title2': '龙',
      'hero.desc': '体育管理背景 · 海外赛事运营经验<br>擅长用户增长与跨团队协作<br>具备数据分析与风险识别能力<br>注重合规性与流程性',
      'hero.scroll': '向下滚动',

      'about.heading': '关于我',
      'about.lead': '具备海外赛事运营与用户增长经验，参与澳大利亚篮球联赛及国际学生体育活动运营。熟悉活动策划、用户运营、现场执行及跨团队协调。',
      'about.text': '毕业于迪肯大学体育管理专业，主修市场营销、财务分析、管理经济学及商业分析。具备数据分析能力，能够通过用户行为分析优化活动参与率。英语可作为工作语言，具备国际化沟通及跨文化协作能力。熟练使用 ChatGPT、Gemini 等 AI 工具，并能够使用 Claude Code和Codex 进行代码编写和提高工作效率，以及 AI 生图进行设计画图等工作。',
      'about.eduTitle': '教育背景',
      'about.eduLink': '迪肯大学',
      'about.eduDegree': '— 本科学士 · 体育管理',
      'about.skill1': '赛事运营',
      'about.skill2': '活动策划',
      'about.skill3': '用户增长',
      'about.skill4': '数据分析',
      'about.skill5': '跨团队协作',
      'about.skill6': '商务合作',
      'about.skill7': '英语工作语言',
      'about.skill8': 'AI 工具应用',
      'about.skill9': '合规性流程性',

      'work.heading': '工作经历',
      'work.pba': '统筹管理赛季50场比赛的裁判与球员排班，共协调1000人次，确保赛事顺畅无调度事故；同时参与海外市场调研与用户洞察，通过海外市场调研分析消费者的行为制定激励机制，尝试提升女性参与度。协助赞助商沟通及权益执行，推动赞助方案落地，协调赛事品牌曝光与合作执行。',
      'work.pbaTag1': '赛事组织运营与策划',
      'work.pbaTag2': '海外市场调研',
      'work.pbaTag3': '市场调研',
      'work.shinewingCompany': '信永中和会计师事务所（深圳）',
      'work.shinewing': '参与项目数据整理，使用 Excel 处理上万条业务记录，通过交叉比对识别异常数据，确保信息准确完整；协助香港团队完成国际品牌（如 Under Armour、Calvin Klein）在内地的库存盘点与核验，并独立撰写差异分析报告，提升跨境协作能力；将核查过程、问题及建议整理为标准化报告，规范文档形式，提高跨团队信息同步效率。',
      'work.shinewingTag1': '数据整理与流程核查',
      'work.shinewingTag2': '跨境业务协作',
      'work.shinewingTag3': '报告撰写与流程合规',

      'projects.heading': '项目经历',
      'projects.card1Title': '维多利亚国际学生运动节',
      'projects.card1Desc': '协助澳大利亚大学体育协会举办国际学生运动节，吸引来自26个国家约500名参与者。负责活动流程策划及现场执行，协调高校队伍、场馆及赛事工作人员。',
      'projects.card1Tag1': '活动策划',
      'projects.card1Tag2': '现场运营',
      'projects.card1Tag3': '跨团队协调',
      'projects.card2Company': '华商能源科技股份有限公司',
      'projects.card2TitleSuffix': '年度审计项目',
      'projects.card2Desc': '参与项目数据整理，利用 Excel 处理上万条业务记录进行数据分析，通过交叉比对发现异常，确保业务信息准确完整。',
      'projects.card2Tag1': '数据整理与流程核查',
      'projects.card3Company': '尚普（国际）控股有限公司',
      'projects.card3TitleSuffix': '项目',
      'projects.card3Desc': '协助香港团队完成国际品牌在内地的审计工作，独立撰写差异分析报告，提升多方协作下处理复杂信息的能力。将核查流程、问题及改进建议整理为标准化报告，用于跨团队及外部沟通，提高文档规范性和信息同步效率。',
      'projects.card3Tag1': '跨境业务协作',
      'projects.card3Tag2': '报告撰写',

      'hobbies.heading': '兴趣爱好',
      'hobbies.card1Title': '篮球 / 体育赛事',
      'hobbies.card1Desc': '热爱篮球运动，长期关注 NBA 及国际篮球赛事。关注赛事运营、球员数据与战术分析，将体育管理专业知识与个人兴趣相结合。',
      'hobbies.card1Tag1': '篮球',
      'hobbies.card1Tag2': '赛事分析',
      'hobbies.card1Tag3': '体育运动',
      'hobbies.card2Title': '游戏 / 电子竞技',
      'hobbies.card2Desc': '热爱各类电子游戏及电竞赛事，关注游戏运营、用户增长及电竞赛事策划。喜欢研究游戏机制与用户体验，将游戏运营思维融入职业发展。',
      'hobbies.card2Tag1': '电子游戏',
      'hobbies.card2Tag2': '电竞赛事',
      'hobbies.card2Tag3': '用户运营',
      'hobbies.card2Tag4': '重度FPS玩家',
      'hobbies.card2Tag5': '高分玩家',
      'hobbies.card2Detail': '游戏详情 →',
      'hobbies.card3Title': 'AI 工具探索',
      'hobbies.card3Desc': '热衷于探索各类 AI 工具（ChatGPT、Claude、AI 生图等），研究如何将 AI 应用于运营效率提升、内容创作及数据分析等实际工作场景。',
      'hobbies.card3Tag1': 'AI 应用',
      'hobbies.card3Tag2': '效率工具',
      'hobbies.card3Tag3': '技术探索',

      'contact.heading': '联系我',
      'contact.text': '如果你有合作机会或想了解更多，<br>欢迎随时联系。',
      'contact.location': '深圳 · 南山',
      'notice.text': '网站内容长期更新~',

      'footer.copy': '© 2026 张俊龙',
    },

    en: {
      'preloader.hint': '选择语言 / Select Language',

      'nav.name': 'Junlong Zhang',
      'nav.nameEn': 'ZHANG Junlong',
      'nav.about': 'About',
      'nav.work': 'Experience',
      'nav.projects': 'Projects',
      'nav.hobbies': 'Hobbies',
      'nav.contact': 'Contact',

      'hero.tag': 'Career: Overseas Operations / Marketing / Game Operations / Event Planning',
      'hero.title1': 'Junlong',
      'hero.title2': 'Zhang',
      'hero.desc': 'Sports Management Background · Overseas Event Operations<br>Skilled in User Growth & Cross-team Collaboration<br>Data Analysis & Risk Identification Capabilities<br>Compliance & Process-Oriented',
      'hero.scroll': 'Scroll Down',

      'about.heading': 'About Me',
      'about.lead': 'Experienced in overseas event operations and user growth, having participated in the Australian Basketball League and international student sports activities. Proficient in event planning, user operations, on-site execution, and cross-team coordination.',
      'about.text': 'Graduated from Deakin University with a degree in Sports Management, majoring in Marketing, Financial Analysis, Managerial Economics, and Business Analytics. Possesses data analysis skills to optimize event participation rates through user behavior analysis. English as a working language with international communication and cross-cultural collaboration capabilities. Proficient in using AI tools such as ChatGPT and Gemini, and capable of coding with Claude Code and Codex to improve work efficiency, as well as AI image generation for design and graphics.',
      'about.eduTitle': 'Education',
      'about.eduLink': 'Deakin University',
      'about.eduDegree': '— Bachelor\'s Degree · Sports Management',
      'about.skill1': 'Event Operations',
      'about.skill2': 'Event Planning',
      'about.skill3': 'User Growth',
      'about.skill4': 'Data Analysis',
      'about.skill5': 'Cross-team Collaboration',
      'about.skill6': 'Business Development',
      'about.skill7': 'English (Working Language)',
      'about.skill8': 'AI Tool Application',
      'about.skill9': 'Compliance & Process',

      'work.heading': 'Work Experience',
      'work.pba': 'Coordinated referee and player scheduling for 50 matches per season, managing a total of 1,000 personnel assignments to ensure smooth tournament operations without scheduling incidents. Participated in overseas market research and user insights, analyzing consumer behavior to develop incentive mechanisms aimed at increasing female participation. Assisted in sponsor communication and rights execution, driving sponsorship plan implementation and coordinating event brand exposure and partnership execution.',
      'work.pbaTag1': 'Event Operations & Planning',
      'work.pbaTag2': 'Overseas Market Research',
      'work.pbaTag3': 'Market Research',
      'work.shinewingCompany': 'ShineWing Certified Public Accountants (Shenzhen)',
      'work.shinewing': 'Participated in project data organization, processing tens of thousands of business records using Excel to identify anomalies through cross-referencing, ensuring data accuracy and completeness. Assisted the Hong Kong team in inventory verification for international brands such as Under Armour and Calvin Klein in mainland China, independently drafting discrepancy analysis reports to enhance cross-border collaboration capabilities. Standardized verification processes, issues, and recommendations into formal reports to improve cross-team information synchronization efficiency.',
      'work.shinewingTag1': 'Data Organization & Process Verification',
      'work.shinewingTag2': 'Cross-border Collaboration',
      'work.shinewingTag3': 'Report Writing & Process Compliance',

      'projects.heading': 'Project Experience',
      'projects.card1Title': 'Victoria International Student Sports Festival',
      'projects.card1Desc': 'Assisted the Australian University Sports Association in organizing the International Student Sports Festival, attracting approximately 500 participants from 26 countries. Responsible for event process planning and on-site execution, coordinating university teams, venues, and event staff.',
      'projects.card1Tag1': 'Event Planning',
      'projects.card1Tag2': 'On-site Operations',
      'projects.card1Tag3': 'Cross-team Coordination',
      'projects.card2Company': 'CM Energy Incorporated',
      'projects.card2TitleSuffix': ' Annual Audit Project',
      'projects.card2Desc': 'Participated in project data organization, processing tens of thousands of business records using Excel for data analysis, identifying anomalies through cross-referencing to ensure data accuracy and completeness.',
      'projects.card2Tag1': 'Data Organization & Process Verification',
      'projects.card3Company': 'Forward Fashion (International) Holdings Company Limited',
      'projects.card3TitleSuffix': ' Project',
      'projects.card3Desc': 'Assisted the Hong Kong team in completing audits of international brands in mainland China, independently drafting discrepancy analysis reports to enhance the ability to handle complex information in multi-party collaboration. Standardized verification processes, issues, and improvement recommendations into formal reports for cross-team and external communication, improving documentation standardization and information synchronization efficiency.',
      'projects.card3Tag1': 'Cross-border Collaboration',
      'projects.card3Tag2': 'Report Writing',

      'hobbies.heading': 'Hobbies & Interests',
      'hobbies.card1Title': 'Basketball / Sports Events',
      'hobbies.card1Desc': 'Passionate about basketball, following NBA and international basketball events. Interested in sports event operations, player data and tactical analysis, combining professional sports management knowledge with personal interest.',
      'hobbies.card1Tag1': 'Basketball',
      'hobbies.card1Tag2': 'Game Analysis',
      'hobbies.card1Tag3': 'Sports',
      'hobbies.card2Title': 'Gaming / E-sports',
      'hobbies.card2Desc': 'Passionate about video games and e-sports events, following game operations, user growth and e-sports event planning. Enjoys studying game mechanics and user experience, integrating game operations thinking into career development.',
      'hobbies.card2Tag1': 'Video Games',
      'hobbies.card2Tag2': 'E-sports',
      'hobbies.card2Tag3': 'User Operations',
      'hobbies.card2Tag4': 'Hardcore FPS Player',
      'hobbies.card2Tag5': 'High-Rank Player',
      'hobbies.card2Detail': 'Game Details →',
      'hobbies.card3Title': 'AI Tool Exploration',
      'hobbies.card3Desc': 'Keen on exploring various AI tools (ChatGPT, Claude, AI image generation, etc.), researching how to apply AI to operational efficiency improvement, content creation and data analysis in practical work scenarios.',
      'hobbies.card3Tag1': 'AI Application',
      'hobbies.card3Tag2': 'Productivity Tools',
      'hobbies.card3Tag3': 'Tech Exploration',

      'contact.heading': 'Contact Me',
      'contact.text': 'If you have collaboration opportunities<br>or want to learn more, feel free to reach out.',
      'contact.location': 'Shenzhen · Nanshan',
      'notice.text': 'The website content is updated on a long-term basis',

      'footer.copy': '© 2026 Junlong Zhang',
    },
  };

  let currentLang = localStorage.getItem('lang') || null;

  // ── 应用语言 ──────────────────────────────────
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.documentElement.setAttribute('data-lang', lang);

    const dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // 保留内部 HTML 标签（如 <br>）
        if (dict[key].includes('<br>')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
  }

  // 如果已选择过语言，立即应用
  if (currentLang) {
    applyLang(currentLang);
  }

  // ── 预加载已移除，内容直接可见 ──────────────────

  // ── 导航栏语言切换按钮 ─────────────────────────
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const next = currentLang === 'zh' ? 'en' : 'zh';
      document.body.classList.add('lang-fading');
      setTimeout(() => {
        applyLang(next);
        document.body.classList.remove('lang-fading');
      }, 350);
    });
  }

  // ── 滚动渐显 (Intersection Observer) ────────────
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));

  // ── 鼠标视差（Hero 光晕 + 气泡） ──────────────
  const heroGlow = document.querySelector('.hero__glow');
  const heroSection = document.querySelector('.hero');
  const heroOrbs = document.querySelectorAll('.hero__orb');

  // 每个气泡的视差深度 (不同速度/方向)
  var orbDepths = [12, -18, 8, -22, 15, -10];
  var mouseOnHero = false;
  var mouseMoveX = 0;
  var mouseMoveY = 0;

  if (heroGlow && heroSection) {
    heroSection.addEventListener('mousemove', function (e) {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseMoveX = (x - centerX) / centerX;
      mouseMoveY = (y - centerY) / centerY;

      heroGlow.style.transform = 'translate(calc(-50% + ' + (mouseMoveX * 35) + 'px), calc(-50% + ' + (mouseMoveY * 35) + 'px))';
    });

    heroSection.addEventListener('mouseleave', function () {
      mouseOnHero = false;
      heroGlow.style.transform = 'translate(-50%, -50%)';
      heroGlow.style.transition = 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)';
      heroOrbs.forEach(function (orb) {
        orb.style.transition = 'transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
      });
    });

    heroSection.addEventListener('mouseenter', function () {
      mouseOnHero = true;
      heroGlow.style.transition = 'none';
      heroOrbs.forEach(function (orb) {
        orb.style.transition = 'none';
      });
    });
  }

  // 统一更新气泡位置 (合并鼠标视差 + 滚动漂移)
  function updateOrbPositions(scrollY) {
    heroOrbs.forEach(function (orb, i) {
      var tx = 0;
      var ty = 0;
      // 滚动漂移
      var drift = 0.05 + i * 0.03;
      ty += scrollY * drift;
      // 鼠标视差 (仅当鼠标在 Hero 区域时)
      if (mouseOnHero) {
        var depth = orbDepths[i];
        tx += mouseMoveX * depth;
        ty += mouseMoveY * depth;
      }
      orb.style.transform = 'translate(' + tx + 'px, ' + ty + 'px)';
    });
  }

  // ── 回到顶部 ──────────────────────────────────
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── 主题切换 ──────────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  function getTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  setTheme(getTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // ── 导航栏滚动效果 ─────────────────────────────
  const nav = document.getElementById('nav');

  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  // ── 作品卡片点击 ───────────────────────────────
  const projectCards = document.querySelectorAll('.project-card:not([href])');

  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.project-card__title')?.textContent;
      console.log(`查看作品: ${title}`);
    });
  });

  // ── 1. 滚动进度条 ──────────────────────────────
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.prepend(progressBar);

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  // ── 2. Hero 视差 ────────────────────────────────
  const heroText = document.querySelector('.hero__text');
  const heroVisual = document.querySelector('.hero__visual');

  // 性能优化
  if (heroText) heroText.style.willChange = 'transform, opacity';
  if (heroVisual) heroVisual.style.willChange = 'transform, opacity';

  function updateParallax() {
    const scrollY = window.scrollY;
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;

    if (scrollY <= heroHeight) {
      if (heroText) {
        heroText.style.transform = `translateY(${scrollY * 0.08}px)`;
        heroText.style.opacity = Math.max(0, 1 - scrollY / heroHeight * 0.9);
      }
      if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrollY * 0.18}px)`;
        heroVisual.style.opacity = Math.max(0, 1 - scrollY / heroHeight * 0.7);
      }
      // 气泡随滚动漂移 (与鼠标视差合并)
      updateOrbPositions(scrollY);
    }
  }

  // ── 3. 当前章节高亮导航 ──────────────────────────
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const sections = [];

  navLinks.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);
    if (section) sections.push({ el: section, link: link });
  });

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;

    let currentId = null;
    sections.forEach(({ el, link }) => {
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        currentId = link;
      }
    });

    navLinks.forEach((link) => {
      if (link === currentId) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  }

  // ── 4. 卡片滚动微交互 ───────────────────────────
  const allCards = document.querySelectorAll('.project-card');

  allCards.forEach(function (card) {
    card.style.transition = 'transform 0.3s ease-out';
  });

  function updateCardTilt() {
    const viewportMid = window.innerHeight / 2;

    allCards.forEach(function (card) {
      const rect = card.getBoundingClientRect();
      const cardMid = rect.top + rect.height / 2;
      const distFromCenter = (cardMid - viewportMid) / viewportMid;

      if (Math.abs(distFromCenter) < 0.8) {
        const scale = 1 + (0.8 - Math.abs(distFromCenter)) * 0.02;
        const translateY = distFromCenter * -8;
        card.style.transform = 'scale(' + scale + ') translateY(' + translateY + 'px)';
      } else {
        card.style.transform = '';
      }
    });
  }

  // ── 5. 卡片鼠标聚光灯 ────────────────────────────
  allCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });

    card.addEventListener('mouseleave', function () {
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });

  // ── 合并滚动监听 (rAF 节流) ─────────────────────
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgress();
        updateParallax();
        updateActiveNav();
        updateCardTilt();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // 初始调用
  updateProgress();
  updateActiveNav();
  updateCardTilt();

  // ── 浮动通知关闭 ──────────────────────────────────
  const floatingNotice = document.getElementById('floatingNotice');
  const noticeClose = document.getElementById('noticeClose');
  if (floatingNotice && noticeClose) {
    if (sessionStorage.getItem('noticeClosed')) {
      floatingNotice.classList.add('floating-notice--hidden');
    }
    noticeClose.addEventListener('click', function () {
      floatingNotice.classList.add('floating-notice--hidden');
      sessionStorage.setItem('noticeClosed', '1');
    });
  }

})();
