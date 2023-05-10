// ==UserScript==
// @name         QuillBlot_Cullwen
// @namespace    https://github.com/MrGovindDubey
// @version      0.1
// @description  quillbot PREMIUM
// @author       Govind Dubey
// @match        https://quillbot.com/*
// @icon         https://quillbot.com/favicon.png
// @require      https://gist.githubusercontent.com/MrGovindDubey/7d9509f7c173377ccd58a6996f36e6e0/raw/cd4fe8e7309c96b1341e03b43d71e801597b5aa7/gistfile1.txt
// @run-at       document-start
// @grant        none
// @license      MIT
// ==/UserScript==
/* global ajaxHooker*/
(function() {
    'use strict';
    // https://github.com/MrGovindDubey
    ajaxHooker.hook(request => {
        if (request.url.endsWith('get-account-details')) {
            request.response = res => {
                const json=JSON.parse(res.responseText);
                const a="data" in json?json.data:json;
                a.profile.accepted_premium_modes_tnc=true;
                a.profile.premium=true;
                res.responseText=JSON.stringify("data" in json?(json.data=a,json):a);
            };
        }
    });
})();
