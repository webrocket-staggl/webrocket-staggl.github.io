---
title: Configuration
layout: home
nav_order: 1
---

This page is a GTM integration playground.

## Settings:

<form>
  <label for="gtm_id">GTM:</label><br>
  <input type="text" id="gtm_id" name="gtm_id" value="GTM-000000"><br>
  <label for="cmp">Cookiefirst API key</label><br>
  <input type="text" id="cmp" name="cmp"><br><br>
  <input type="submit" value="Save">
</form>

## Current Settings:

<div id="gtm_settings_disply"></div>

<script src="{{ site.baseurl }}{% link assets/js/gtm_settings.js %}"> </script>
<script src="{{ site.baseurl }}{% link assets/js/load_gtm.js %}"> </script>