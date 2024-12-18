---
title: Challenges
layout: default
nav_order: 5
---

# Challenges:

## Beginner:

### Part 1:
- Create a new GTM container
- Create a new Google Analytics Property
- Add a Google Tag to your GTM with a trigger of **initialize all pages**
- Connect the GTM with the GTM Playground under Configuration
- Check if your GTM and Tag gets loaded in preview.
- Check if data gets send to GA4 using the [debuge_mode](https://support.google.com/analytics/answer/7201382?hl=en#zippy=%2Cgoogle-tag-manager).

### Part 2:
Under Ecommerce>view_item you can push a view_item event to the dataLayer.

- create a tag in GTM that listens to this dataLayer push and then pushes a GA4 view_item event with all the related product data to GA4

## Intermediate:

### Part 1: custom triggers

- create a custom event "image_click" everytime a user clicks on one of the images below.
- create a custom event "this_is_fine" when a user clicks on the second image.

<img src="../../assets/images/qa.jpg" alt="qa_testing" width="500" height="600">
<img src="../../assets/images/this_is_fine.webp" id="thisisfine" alt="this is fine" width="500" height="600">


<script src="{{ site.baseurl }}{% link assets/js/load_gtm.js %}"> </script>
<script src="{{ site.baseurl }}{% link assets/js/datalayer.js %}"> </script>