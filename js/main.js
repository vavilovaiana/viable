(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Language switcher (EN default, RU translation)
  var LANG_KEY = "viable-lang";
  var ARIA_LABEL = { en: "Change language", ru: "Сменить язык" };

  function applyLanguage(lang) {
    var els = document.querySelectorAll("[data-ru], [data-ru-html]");
    els.forEach(function (el) {
      var isMeta = el.tagName === "META";
      var current = isMeta ? el.getAttribute("content") : el.hasAttribute("data-ru-html") ? el.innerHTML : el.textContent;

      if (!el.hasAttribute("data-en-cache")) {
        el.setAttribute("data-en-cache", current);
      }

      if (lang === "ru") {
        if (isMeta) {
          el.setAttribute("content", el.getAttribute("data-ru"));
        } else if (el.hasAttribute("data-ru-html")) {
          el.innerHTML = el.getAttribute("data-ru-html");
        } else {
          el.textContent = el.getAttribute("data-ru");
        }
      } else {
        var enValue = el.getAttribute("data-en-cache");
        if (isMeta) {
          el.setAttribute("content", enValue);
        } else if (el.hasAttribute("data-ru-html")) {
          el.innerHTML = enValue;
        } else {
          el.textContent = enValue;
        }
      }
    });

    // Swap href/download for links that point to a different target per language
    // (e.g. Presentation -> RU prototype, CV -> RU resume file)
    var attrSwaps = [
      { data: "data-ru-href", attr: "href" },
      { data: "data-ru-download", attr: "download" }
    ];
    attrSwaps.forEach(function (swap) {
      document.querySelectorAll("[" + swap.data + "]").forEach(function (el) {
        var cacheAttr = "data-en-" + swap.attr + "-cache";
        if (!el.hasAttribute(cacheAttr)) {
          el.setAttribute(cacheAttr, el.getAttribute(swap.attr) || "");
        }
        if (lang === "ru") {
          el.setAttribute(swap.attr, el.getAttribute(swap.data));
        } else {
          el.setAttribute(swap.attr, el.getAttribute(cacheAttr));
        }
      });
    });

    document.documentElement.lang = lang;

    var langToggle = document.getElementById("langToggle");
    if (langToggle) {
      langToggle.setAttribute("aria-label", ARIA_LABEL[lang]);
    }

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — language just won't persist across visits */
    }
  }

  var langToggleBtn = document.getElementById("langToggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", function () {
      var nextLang = document.documentElement.lang === "ru" ? "en" : "ru";
      applyLanguage(nextLang);
    });

    var savedLang = null;
    try {
      savedLang = localStorage.getItem(LANG_KEY);
    } catch (e) {
      /* localStorage unavailable — fall back to default language */
    }
    if (savedLang === "ru") {
      applyLanguage("ru");
    }
  }
})();
