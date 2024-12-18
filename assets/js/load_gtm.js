var settings = localStorage.getItem('gtm_settings') !== null ? JSON.parse(localStorage.getItem('gtm_settings')) : false;
if (settings) {
    window.gtm_settings = window.gtm_settings || {};
    window.gtm_settings.gtm_id = settings.gtm_id;
    window.gtm_settings.cmp = settings.cmp;
    window.gtm_settings.sgtm_domain = settings.sgtm_domain;

    //load cookiebanner
    if (typeof settings.cmp !== 'undefined' && settings.cmp !== '') {
        var cookiefirst = document.createElement('script');
        cookiefirst.src = 'https://consent.cookiefirst.com/sites/gtmplayground.webrocket.com-' + settings.cmp + '/consent.js';
        document.head.appendChild(cookiefirst);
    }

    var gtm_source = 'www.googletagmanager.com';
    if (typeof settings.sgtm_domain !== 'undefined' && settings.sgtm_domain !== '') {
        gtm_source = settings.sgtm_domain;
    }

    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://' + gtm_source + '/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', settings.gtm_id);
}
