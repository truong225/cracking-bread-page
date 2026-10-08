// Cracking Bread Studio — language switch (VI/EN) and header state.
// Vietnamese is written directly in index.html; this file holds the English text
// and the Vietnamese originals so the page can switch back and forth.
(function () {
  "use strict";

  var STRINGS = {
    vi: {
      skip: "Bỏ qua tới nội dung",
      navLabel: "Chính",
      langLabel: "Ngôn ngữ",
      navNews: "Tin tức",
      navGame: "Đất Độc",
      navStudio: "Studio",
      hook: "Có những mảnh đất không bao giờ tha nợ.",
      cta: "Tìm hiểu về Đất Độc",
      newsTitle: "Tin tức",
      news1: "Trang chính thức của Cracking Bread Studio đã mở.",
      news2: "Đất Độc (Evil Hometown) đang trong giai đoạn phát triển. Thông tin mới sẽ được đăng tại đây.",
      news3: "Bắt đầu viết tài liệu thiết kế game (GDD). Bản chơi thử dạng concept prototype đang được sửa lỗi.",
      news4: "Ý tưởng về Đất Độc bắt đầu hình thành.",
      keyartAlt: "Một cái giếng làng trong đêm, phía sau là lũy tre",
      premise1: "Một người con xa quê trở về ngôi làng ven sông ở đồng bằng Bắc Bộ. Mọi thứ dường như vẫn vậy: lũy tre, bờ đê, cái giếng đầu ngõ, và những lời người già dặn nhau về những giờ không được ra đồng.",
      premise2: "Nhưng làng có những chuyện không ai kể cho hết. Càng đi sâu, bạn càng hiểu rằng mảnh đất này nhớ mọi thứ, và nó vẫn đang chờ được trả.",
      genreLabel: "Thể loại",
      genre: "Kinh dị khám phá, góc nhìn thứ nhất",
      platformLabel: "Nền tảng",
      engineLabel: "Engine",
      statusLabel: "Trạng thái",
      status: "Đang phát triển · concept prototype",
      ideaTitle: "Ý tưởng",
      p1Title: "Bước vào làng bằng đôi mắt của mình",
      p1Body: "Bạn đi, nhìn và nghe ở góc nhìn thứ nhất, tự ghép những mảnh chuyện rời rạc mà dân làng để lại.",
      p2Title: "Nỗi sợ của làng quê Việt",
      p2Body: "Cảm hứng từ tín ngưỡng dân gian và những điều kiêng kỵ ở nông thôn Bắc Bộ, những chuyện ai cũng từng nghe nhưng chẳng ai nói rõ.",
      p3Title: "Rợn người, không giật mình",
      p3Body: "Không hù dọa bằng tiếng động đột ngột. Nỗi sợ đến từ không khí, âm thanh, và những điều game cố tình không giải thích.",
      galleryTitle: "Hình ảnh",
      studioBody: "Cracking Bread Studio là studio game indie một người, làm những trò chơi bắt đầu từ những câu chuyện của quê nhà. Dự án hiện tại là Đất Độc.",
      founderLabel: "Người sáng lập & phát triển",
      startedLabel: "Khởi đầu",
      started: "Tháng 7/2026",
      contactLabel: "Liên hệ",
      claudeTitle: "Làm game cùng Claude",
      claudeIntro: "Là studio một người, Cracking Bread Studio dùng Claude của Anthropic như một cộng sự xuyên suốt quá trình phát triển Đất Độc.",
      u1Title: "Concept thiết kế ban đầu",
      u1Body: "Phác thảo và phát triển các concept thiết kế ban đầu cho game.",
      u2Body: "Xây dựng tài liệu thiết kế game (GDD), bắt đầu từ tháng 10/2026.",
      u3Title: "Asset prototype",
      u3Body: "Tạo asset prototype cho các bản chơi mẫu.",
      u4Title: "Hệ thống agent (đang lên ý tưởng)",
      u4Body: "Đang lên ý tưởng một hệ thống nhiều agent trên Claude, học hỏi từ mô hình mã nguồn mở Claude Code Game Studios, để vận hành pipeline phát triển game theo các sprint Agile Scrum.",
      backTop: "Về đầu trang",
      docTitle: "Cracking Bread Studio | Đất Độc"
    },
    en: {
      skip: "Skip to content",
      navLabel: "Main",
      langLabel: "Language",
      navNews: "News",
      navGame: "Evil Hometown",
      navStudio: "Studio",
      hook: "Some land never forgives a debt.",
      cta: "About Evil Hometown",
      newsTitle: "News",
      news1: "The official Cracking Bread Studio website is now live.",
      news2: "Evil Hometown (Đất Độc) is in development. New updates will be posted here.",
      news3: "Work on the game design document (GDD) has begun. The concept prototype build is being debugged.",
      news4: "The idea for Evil Hometown first took shape.",
      keyartAlt: "A village well at night with a bamboo hedge behind it",
      premise1: "Someone who left long ago returns to a riverside village in northern Vietnam's Red River Delta. Little seems to have changed: the bamboo hedges, the dyke, the well at the end of the lane, and the elders' warnings about the hours you must not go out to the fields.",
      premise2: "But the village keeps stories no one tells in full. The further you go, the clearer it becomes that this land remembers everything, and it is still waiting to be repaid.",
      genreLabel: "Genre",
      genre: "First-person exploration horror",
      platformLabel: "Platform",
      engineLabel: "Engine",
      statusLabel: "Status",
      status: "In development · concept prototype",
      ideaTitle: "The idea",
      p1Title: "Walk the village through your own eyes",
      p1Body: "Explore, look and listen in first person, piecing together the fragments of stories the villagers leave behind.",
      p2Title: "Fear from the Vietnamese countryside",
      p2Body: "Inspired by folk beliefs and the taboos of rural northern Vietnam: things everyone has heard about, but no one explains.",
      p3Title: "Dread, not jump scares",
      p3Body: "No sudden loud noises. The fear comes from atmosphere, sound, and what the game deliberately leaves unexplained.",
      galleryTitle: "Gallery",
      studioBody: "Cracking Bread Studio is a one-person indie game studio, making games that begin with stories from home. Its current project is Evil Hometown.",
      founderLabel: "Founder & developer",
      startedLabel: "Started",
      started: "July 2026",
      contactLabel: "Contact",
      claudeTitle: "Building with Claude",
      claudeIntro: "As a one-person studio, Cracking Bread Studio works with Anthropic's Claude as a collaborator throughout the development of Evil Hometown.",
      u1Title: "Early concept design",
      u1Body: "Sketching out and developing the game's initial design concepts.",
      u2Body: "Writing the game design document (GDD), started in October 2026.",
      u3Title: "Prototype assets",
      u3Body: "Creating prototype assets for sample playable builds.",
      u4Title: "Agent system (planning)",
      u4Body: "Planning a multi-agent system on Claude, inspired by the open-source Claude Code Game Studios template, to run the game development pipeline in Agile Scrum sprints.",
      backTop: "Back to top",
      docTitle: "Cracking Bread Studio | Evil Hometown"
    }
  };

  var STORAGE_KEY = "cbs-lang";

  function apply(lang) {
    var t = STRINGS[lang] || STRINGS.vi;
    document.documentElement.lang = lang;
    document.title = t.docTitle;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] != null) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (t[key] != null) el.setAttribute("alt", t[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (t[key] != null) el.setAttribute("aria-label", t[key]);
    });
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });
  }

  function saved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable: ignore */ }
  }

  // Priority: ?lang= in the URL, then the visitor's last choice, then Vietnamese.
  var fromUrl = new URLSearchParams(location.search).get("lang");
  var initial = STRINGS[fromUrl] ? fromUrl : (STRINGS[saved()] ? saved() : "vi");
  if (initial !== "vi") apply(initial);

  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      apply(lang);
      save(lang);
    });
  });

  // Header gets a solid background once the hero scrolls away.
  var bar = document.getElementById("topbar");
  var hero = document.querySelector(".hero");
  if ("IntersectionObserver" in window && hero) {
    new IntersectionObserver(function (entries) {
      bar.classList.toggle("is-solid", !entries[0].isIntersecting);
    }, { rootMargin: "-80px 0px 0px 0px" }).observe(hero);
  } else {
    bar.classList.add("is-solid");
  }
})();
