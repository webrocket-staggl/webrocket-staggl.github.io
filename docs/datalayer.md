---
title: DataLayer Pushes
layout: default
nav_order: 2
---

## DataLayer Pushes

See Google [recomended Events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?hl=en&client_type=gtm)

<button id="clear_datalayer" type="button" name="button" class="btn btn-purple">Clear DataLayer</button>

### Content pushes:

<button id="virtual_pageview" type="button" name="button" class="btn btn-blue">virtual_pageview</button>

### Ecommerce pushes:

<button id="view_item_list" type="button" name="button" class="btn btn-blue">view_item_list</button>
<button id="select_item" type="button" name="button" class="btn btn-blue">select_item</button>
<button id="view_item" type="button" name="button" class="btn btn-blue">view_item</button>
<button id="add_to_cart" type="button" name="button" class="btn btn-blue">add_to_cart</button>
<button id="view_cart" type="button" name="button" class="btn btn-blue">view_cart</button>
<button id="begin_checkout" type="button" name="button" class="btn btn-blue">begin_checkout</button>


<button id="add_shipping_info" type="button" name="button" class="btn btn-blue">add_shipping_info</button>
<button id="add_payment_info" type="button" name="button" class="btn btn-blue">add_payment_info</button>
<button id="purchase" type="button" name="button" class="btn btn-green">purchase</button>

<script src="{{ site.baseurl }}{% link assets/js/load_gtm.js %}"> </script>
<script src="{{ site.baseurl }}{% link assets/js/datalayer.js %}"> </script>