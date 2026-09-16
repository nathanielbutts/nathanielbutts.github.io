document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.getElementById("ares-calendar");
  const buttons = document.querySelectorAll(".calendar-view-button");

  if (!iframe) return;

  const calendarId = window.WCKY_ARES_CALENDAR_ID;
  const timezone = window.WCKY_ARES_CALENDAR_TIMEZONE || "America/Chicago";

  function buildCalendarUrl(mode) {
    const params = new URLSearchParams({
      src: calendarId,
      ctz: timezone,
      mode: mode,
      showTitle: "0",
      showNav: "1",
      showDate: "1",
      showPrint: "0",
      showTabs: "0",
      showCalendars: "0",
      showTz: "0"
    });

    return "https://calendar.google.com/calendar/embed?" + params.toString();
  }

  function setView(mode) {
    iframe.src = buildCalendarUrl(mode);

    buttons.forEach(function (button) {
      const active = button.dataset.mode === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setView(button.dataset.mode);
    });
  });

  setView("MONTH");
});
