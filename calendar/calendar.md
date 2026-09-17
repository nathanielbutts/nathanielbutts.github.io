---
layout: default
title: Warren County ARES Calendar
---

<link rel="stylesheet" href="{{ '/calendar/assets/css/calendar.css' | relative_url }}">

Warren County ARES Calendar

Use the buttons below to switch between month, week, and agenda views.

<div class="ares-calendar-toolbar" role="group" aria-label="Calendar view">
  <button type="button" class="calendar-view-button active" data-mode="MONTH">Month</button>
  <button type="button" class="calendar-view-button" data-mode="WEEK">Week</button>
  <button type="button" class="calendar-view-button" data-mode="AGENDA">Agenda</button>
</div>

<div class="ares-calendar-wrap">
  <iframe
    id="ares-calendar"
    title="Warren County ARES Calendar"
    src=""
    loading="lazy"
    frameborder="0"
    scrolling="no">
  </iframe>
</div>

<p class="calendar-subscribe">
  <a href="https://calendar.google.com/calendar/ical/b553ac6e271a4225b6d3113d0068333b86298826e6b1d3feaa4f3195ed12c95a%40group.calendar.google.com/public/basic.ics">Subscribe / download this calendar (ICS)</a>
</p>

<noscript>
  <p><a href="https://calendar.google.com/calendar/ical/b553ac6e271a4225b6d3113d0068333b86298826e6b1d3feaa4f3195ed12c95a%40group.calendar.google.com/public/basic.ics">Open the public ICS calendar feed</a>.</p>
</noscript>

<script>
  window.WCKY_ARES_CALENDAR_ID = "b553ac6e271a4225b6d3113d0068333b86298826e6b1d3feaa4f3195ed12c95a@group.calendar.google.com";
  window.WCKY_ARES_CALENDAR_TIMEZONE = "America/Chicago";
</script>

<script src="{{ '/calendar/assets/js/calendar.js' | relative_url }}"></script>
