/* Google Analytics: eventos de interacción sin enviar datos personales. */
(function () {
  var track = function (name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  };

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a');
    if (!link) return;
    var href = link.href || '';
    var text = (link.textContent || '').trim().slice(0, 80);
    if (href.indexOf('mailto:') === 0) {
      track('contact_email_click', { link_text: text, link_url: href.split('?')[0] });
    } else if (href.indexOf('amazon.') !== -1) {
      track('book_purchase_click', { link_text: text, link_url: href });
    } else if (href.indexOf('x.com') !== -1 || href.indexOf('linkedin.com') !== -1) {
      track('social_profile_click', { platform: href.indexOf('x.com') !== -1 ? 'x' : 'linkedin', link_url: href });
    } else if (href.indexOf('arxiv.org') !== -1 || href.indexOf('esan.edu.pe') !== -1 || href.indexOf('iestpsarasara.edu.pe') !== -1) {
      track('source_click', { link_text: text, link_url: href });
    } else if (link.hostname && link.hostname !== window.location.hostname) {
      track('outbound_click', { link_text: text, link_url: href });
    } else if (link.hash) {
      track('section_navigation', { section: link.hash.slice(1), link_text: text });
    } else if (link.pathname) {
      track('internal_navigation', { page_path: link.pathname, link_text: text });
    }
  });

  var milestones = [25, 50, 75, 90];
  var reached = {};
  window.addEventListener('scroll', function () {
    var height = document.documentElement.scrollHeight - window.innerHeight;
    if (height <= 0) return;
    var percent = Math.round((window.scrollY / height) * 100);
    milestones.forEach(function (milestone) {
      if (percent >= milestone && !reached[milestone]) {
        reached[milestone] = true;
        track('scroll_depth', { percent_scrolled: milestone });
      }
    });
  }, { passive: true });
})();
