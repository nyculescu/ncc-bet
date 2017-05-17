// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
document.addEventListener('DOMContentLoaded', function() {
    var status = 'Welcome to NCC Bet';
    document.getElementById('status').textContent = statusText;
});

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var f = d.createElement('form');
            f.action = 'https://www.facebook.com/nccbet/';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
}, false);

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    suggest([
        { content: text + " one", description: "the first one" },
        { content: text + " number two", description: "the second entry" }
    ]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
    alert('You just typed "' + text + '"');
});

//chrome.browserAction.setBadgeText({ text: "nyc" });