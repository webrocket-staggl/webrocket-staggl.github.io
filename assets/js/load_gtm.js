var settings = localStorage.getItem('gtm_settings') !== null ? JSON.parse(localStorage.getItem('gtm_settings')) : false;
if (settings) {
    window.gtm_settings = window.gtm_settings || {};
    window.gtm_settings.gtm_id = settings.gtm_id;
    window.gtm_settings.cmp = settings.cmp;

    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', settings.gtm_id);
}
