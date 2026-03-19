chrome.runtime.onInstalled.addListener(() => {
  console.log("Noodmelder succesvol gestart.");
});

// Luister naar kliks op het icoontje (optioneel, als je iets wilt doen bij klik)
chrome.action.onClicked.addListener((tab) => {
  console.log("Icoon geklikt op tab:", tab.id);
});

// Een simpel alarm om de verbinding met de server te simuleren
chrome.alarms.create("checkUpdate", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "checkUpdate") {
    console.log("Systeem controleert op actieve noodmeldingen...");
    // Hier komt later je fetch() naar de server
  }
});
