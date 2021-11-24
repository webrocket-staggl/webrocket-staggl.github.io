/*var consentmode = window.localStorage.getItem("consentmode");

if(consentmode === null){
  consentmode = {};
  consentmode.ad_storage = "granted";
  consentmode.analytics_storage = "granted";
  consentmode.ads_data_redaction = "false"
}else {
  consentmode = JSON.parse(consentmode);
}

window.localStorage.setItem("consentmode", JSON.stringify(consentmode));
*/
var setConsentmodeState  = function(){
  if(consentmode.analytics_storage === "denied"){
    $("#analytics_switch")[0].checked = false;
  }

  if(consentmode.ad_storage === "denied"){
    $("#ad_switch")[0].checked = false;
  }

  if(consentmode.ads_data_redaction === "true"){
    $("#ads_data_switch")[0].checked = false;
  }

  $("#analytics_storage")[0].innerText = consentmode.analytics_storage;
  $("#ad_storage")[0].innerText = consentmode.ad_storage;
  $("#ads_data_redaction")[0].innerText = consentmode.ads_data_redaction;

  window.localStorage.setItem("consentmode", JSON.stringify(consentmode));
}

function firepageview() {
  gtag('consent', 'update', {
      'ad_storage': consentmode.ad_storage,
      'analytics_storage': consentmode.analytics_storage,
      'ads_data_redaction': consentmode.ads_data_redaction
    });

    gtag('event', 'page_view');
}


function firepurchase() {
  gtag('consent', 'update', {
      'ad_storage': consentmode.ad_storage,
      'analytics_storage': consentmode.analytics_storage,
      'ads_data_redaction': consentmode.ads_data_redaction
    });

    gtag('event', 'purchase', {
    "transaction_id": "24.031608523954162",
    "affiliation": "Google online store",
    "value": 23.07,
    "currency": "EUR",
    "tax": 1.24,
    "shipping": 0,
    "items": [
      {
        "id": "P12345",
        "name": "Android Warhol T-Shirt",
        "list_name": "Search Results",
        "brand": "Google",
        "category": "Apparel/T-Shirts",
        "variant": "Black",
        "list_position": 1,
        "quantity": 2,
        "price": '2.0'
      },
      {
        "id": "P67890",
        "name": "Flame challenge TShirt",
        "list_name": "Search Results",
        "brand": "MyBrand",
        "category": "Apparel/T-Shirts",
        "variant": "Red",
        "list_position": 2,
        "quantity": 1,
        "price": '3.0'
      }
    ]
  });
}


$(function() {
    console.log( "ready!" );
    setConsentmodeState();

    $("#analytics_switch").on("click",function(){
      var bChecked = $("#analytics_switch")[0].checked;
      consentmode.analytics_storage = bChecked ? "granted" : "denied"
      setConsentmodeState();
    });

    $("#ad_switch").on("click",function(){
      var bChecked = $("#ad_switch")[0].checked;
      consentmode.ad_storage = bChecked ? "granted" : "denied"
      setConsentmodeState();
    });

    $("#ads_data_switch").on("click",function(){
      var bChecked = $("#ads_data_switch")[0].checked;
      consentmode.ads_data_redaction = bChecked ? "false" : "true"
      setConsentmodeState();
    });
});
