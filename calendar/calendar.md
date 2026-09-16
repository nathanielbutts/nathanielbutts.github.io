---
layout: default
title: Warren County ARES Calendar
---

<link rel="stylesheet" href="{{ 'assets/css/calendar.css' | relative_url }}">

# Warren County ARES Calendar

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
  <a href="https://calendar.google.com/calendar/ical/556f00c49b50d0bb4c4de3b0f744255209587c2f84085f6ae7c82bdf558c7819%40group.calendar.google.com/public/basic.ics">Subscribe / download this calendar (ICS)</a>
</p>

<noscript>
  <p><a href="https://calendar.google.com/calendar/ical/556f00c49b50d0bb4c4de3b0f744255209587c2f84085f6ae7c82bdf558c7819%40group.calendar.google.com/public/basic.ics">Open the public ICS calendar feed</a>.</p>
</noscript>

<script>
  window.WCKY_ARES_CALENDAR_ID = "556f00c49b50d0bb4c4de3b0f744255209587c2f84085f6ae7c82bdf558c7819@group.calendar.google.com";
  window.WCKY_ARES_CALENDAR_TIMEZONE = "America/Chicago";
</script>
<script src="{{ 'assets/js/calendar.js' | relative_url }}"></script>
