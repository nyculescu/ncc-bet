chrome.runtime.onMessage.addListener(function(request) {
    switch (request.type) {
        case 'open_facebook_page':
            var newURL = 'https://www.facebook.com/nccbet';
            chrome.tabs.create({ url: newURL });
            break;

        default:
            break;
    }
});

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    suggest([
        { content: "today all bets", description: "today all bets" },
        { content: "big odds", description: "big odds" },
        { content: "balanced odds", description: "balanced odds" }
    ]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
    switch (text) {
        case 'today all bets':
            break;
        case 'big odds':
            break;
        case 'balanced odds':
            break;
        default:
            alert('We cannot figure it out what do you want to search.' +
                '\nTip! Type a letter, then use the down arrow to select the most suitable option for your search.');
            break;
    }
});