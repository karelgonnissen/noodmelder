chrome.runtime.onInstalled.addListener(() => {
  console.log("Noodmelder versie 10.0 succesvol gestart.");
});

chrome.alarms.create("checkUpdate", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "checkUpdate") {
    console.log("Systeem is actief en controleert op meldingen.");
  }
});
