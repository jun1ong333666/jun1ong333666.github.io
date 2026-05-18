/* ==========================================
   张俊龙 个人网站 — 交互逻辑
   ========================================== */

(function () {
  'use strict';

  // ── 预加载动画 ──────────────────────────────────
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('mainContent');

  function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add('preloader--exit');
    mainContent.style.visibility = 'visible';
    preloader.addEventListener('animationend', function handler() {
      preloader.style.display = 'none';
      preloader.removeEventListener('animationend', handler);
    });
  }

  // 初始隐藏主内容
  if (mainContent) {
    mainContent.style.visibility = 'hidden';
  }

  // 在预加载动画完成后（最后一个字揭示 + 0.6s 结束 + 0.5s 留白）
  // charReveal: char3 delay 0.5s + duration 0.6s = 1.1s, 再加 1s 呼吸
  // overlay animation: 0.8s
  const PRELOADER_DURATION = 2200; // ms
  setTimeout(hidePreloader, PRELOADER_DURATION);

  // 任意点击跳过预加载
  if (preloader) {
    preloader.addEventListener('click', hidePreloader);
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

  // ── 鼠标视差（Hero 肖像光晕） ──────────────────
  const heroGlow = document.querySelector('.hero__glow');
  const heroSection = document.querySelector('.hero');

  if (heroGlow && heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = (x - centerX) / centerX;
      const moveY = (y - centerY) / centerY;

      heroGlow.style.transform = `translate(calc(-50% + ${moveX * 30}px), calc(-50% + ${moveY * 30}px))`;
    });

    heroSection.addEventListener('mouseleave', () => {
      heroGlow.style.transform = 'translate(-50%, -50%)';
      heroGlow.style.transition = 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)';
    });

    heroSection.addEventListener('mouseenter', () => {
      heroGlow.style.transition = 'none';
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
    return localStorage.getItem('theme') || 'dark';
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

  // ── 导航栏滚动阴影 ─────────────────────────────
  const nav = document.getElementById('nav');

  if (nav) {
    const navBgDark = 'rgba(8, 8, 8, 0.85)';
    const navBgLight = 'rgba(243, 243, 243, 0.9)';
    const navBorderDark = '1px solid rgba(255,255,255,0.04)';
    const navBorderLight = '1px solid rgba(0,0,0,0.06)';

    window.addEventListener('scroll', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      if (window.scrollY > 50) {
        nav.style.background = isDark ? navBgDark : navBgLight;
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.borderBottom = isDark ? navBorderDark : navBorderLight;
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.borderBottom = 'none';
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

})();
