var a=localStorage.newTabUrl;chrome.tabs.create({url:a?JSON.parse(a):"/index.html"});window.close();