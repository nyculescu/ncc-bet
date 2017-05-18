chrome.runtime.onMessage.addListener(function(request) {
    switch (request.type) {
        case 'open_facebook_page':
            var newURL = "https://www.facebook.com/nccbet";
            chrome.tabs.create({ url: newURL });
            break;

        default:
            break;
    }
});

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    suggest([
        { content: text + "today", description: "today all bets" },
        { content: text + "big", description: "big odds" },
        { content: text + "balanced", description: "balanced odds" }
    ]);
});
/*chrome.omnibox.onInputEntered.addListener(function(text) {
    alert('You just typed "' + text + '"');
});*/