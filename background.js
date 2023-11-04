chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("meet.google.com")) {
      // Perform actions specific to Google Meet here, such as opening a popup.
      chrome.tabs.sendMessage(tabId, { type: "NEW" });
    }
});
  