window.gtm_settings = window.gtm_settings || {};

// Get a reference to the form
const form = document.querySelector('form');

// Add an event listener to the form submit event
form.addEventListener('submit', function (event) {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Get the values from the form inputs
    const gtmId = document.getElementById('gtm_id').value;
    const cmpAPIKey = document.getElementById('cmp').value;
    const sgtm = document.getElementById('sgtm_domain').value;

    // Save the values to localStorage
    var storeage = JSON.stringify({
        gtm_id: gtmId,
        cmp: cmpAPIKey,
        sgtm_domain: sgtm
    });
    localStorage.setItem('gtm_settings', storeage);

    // Update the window.gtm_settings object
    window.gtm_settings.gtm_id = gtmId;
    window.gtm_settings.cmp = cmpAPIKey;
    window.gtm_settings.sgtm_domain = sgtm;

    console.log('Form values saved:');
    console.log('gtm_id:', gtmId);
    console.log('cmp:', cmpAPIKey);
    console.log('sgtm_domain:', sgtm);

    // Optionally, you can submit the form after saving
    location.reload();
    // form.submit();
});

var settings = localStorage.getItem('gtm_settings') !== null ? JSON.parse(localStorage.getItem('gtm_settings')) : false;
if (settings) {
    window.gtm_settings.gtm_id = settings.gtm_id;
    window.gtm_settings.cmp = settings.cmp;
    window.gtm_settings.sgtm_domain = settings.sgtm_domain;

    var infodiv = document.querySelector('#gtm_settings_disply');
    infodiv.innerHTML = `<li>GTM-ID: ${window.gtm_settings.gtm_id}</li><li>sGTM Domain: ${window.gtm_settings.sgtm_domain}</li><li>CMP: ${
        window.gtm_settings.cmp !== ''
    }</li>`;
}
