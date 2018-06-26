// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {

    	//console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    	//console.log(document.all[0].outerHTML.slice(0,200));

    	//Make an element tree out of the html
    	//var html = document.createElement('html')
    	//html.innerHTML = document.all[0].outerHTML.trim();
    	//console.log("Firrst child is" + html.firstChild);

        //Get relevant div
    	var html_jquery = $($.parseHTML(document.all[0].outerHTML));
		var links = html_jquery.find("#botstuff").find("a");
        var links_href = []

        // Search and parse relevant link
        links.each(function(){
            var linkurl = $(this).attr("href")
            if(linkurl.indexOf("chillingeffects")>0){
                links_href.push(linkurl.replace("http","https   "))
            }
        });
		console.log(links_href);

    	
        //$("#search").prepend('<iframe id="content" src="about:blank"></iframe>');
        //.(links_href)
        //$("#content").attr("src",links_href[0]);
        //chrome.tabs.create({ url: links_href[0] });
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse({'data':"hello-world"});
        //sendResponse(links_href.join("|||"));
    }
    return true;
});

// chrome.browserAction.onClicked.addListener(function(activeTab)
// {
//     var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
//     chrome.tabs.create({ url: newURL });
// });