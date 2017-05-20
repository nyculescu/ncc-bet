// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('status').textContent = 'Welcome to NCC Bet';

    document.getElementById('checkPage').addEventListener('click', checkPage_hdl);
});

function checkPage_hdl() {
    //alert('checkPage_hdl was clicked');
    chrome.tabs.create({ active: true, url: 'https://www.facebook.com/nccbet' });
}

//chrome.browserAction.setBadgeText({ text: "nyc" });