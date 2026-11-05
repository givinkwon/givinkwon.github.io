(() => {
  const apply = (language) => {
    const selected = language === 'ko' ? 'ko' : 'en';
    document.documentElement.lang = selected;
    document.querySelectorAll('[data-lang]').forEach(section => { section.hidden = section.dataset.lang !== selected; });
    document.querySelectorAll('[data-set-lang]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.setLang === selected)); });
  };
  let saved;
  try { saved = localStorage.getItem('support-language'); } catch (_) { /* Language controls still work. */ }
  apply(saved || (navigator.language.startsWith('ko') ? 'ko' : 'en'));
  document.querySelectorAll('[data-set-lang]').forEach(button => button.addEventListener('click', () => {
    apply(button.dataset.setLang);
    try { localStorage.setItem('support-language', button.dataset.setLang); } catch (_) { /* Optional preference. */ }
  }));
})();
