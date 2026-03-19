chrome.runtime.onInstalled.addListener(() => {
  console.log("Noodmelder versie 10.0 actief.");
});

// Maak een alarm dat elke minuut checkt
chrome.alarms.create("noodCheck", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "noodCheck") {
    console.log("Controleren op meldingen...");
  }
});
