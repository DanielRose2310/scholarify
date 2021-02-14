function doJstor(info,tab) {
    chrome.tabs.create({  
      url: "https://www.jstor.org/action/doBasicSearch?Query=" + info.selectionText,
    });
  }
function doAcademia(info,tab) {
    chrome.tabs.create({  
      url: "https://www.academia.edu/search?q=" + info.selectionText,
    });
  }
function DoGoogleScholar(info,tab) {
    chrome.tabs.create({  
      url: "https://scholar.google.com/scholar?q=" + info.selectionText
    });
  }
  chrome.contextMenus.create({
    title: "JSTOR: \"%s\"", 
    contexts:["selection"], 
    onclick: doJstor
  });
  chrome.contextMenus.create({
    title: "Academia.edu: \"%s\"", 
    contexts:["selection"], 
    onclick: doAcademia
  });
  chrome.contextMenus.create({
    title: "Google Scholar: \"%s\"", 
    contexts:["selection"], 
    onclick: DoGoogleScholar
  });
/*   chrome.contextMenus.create({
    title: "Search: %s", 
    contexts:["selection"], 
    onclick: getString
  }); */