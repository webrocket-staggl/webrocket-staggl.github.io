---
title: view_item
layout: default
parent: Ecommerce Tracking
nav_order: 3
---

# view_item

When you click on the 'push view_item' button the follwoing information gets pushed into the datalayer:

```js
dataLayer.push({
  event: "view_item",
  ecommerce: {
    currency: "USD",
    value: 30.03,
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 10.01,
      quantity: 3
    }
    ]
  }
});
```

<button id="view_item" type="button" name="button" class="btn">Push view_item</button>

<script src="{{ site.baseurl }}{% link assets/js/load_gtm.js %}"> </script>
<script src="{{ site.baseurl }}{% link assets/js/datalayer.js %}"> </script>