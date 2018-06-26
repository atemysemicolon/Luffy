// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {

    	console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    	console.log(document.all[0].outerHTML.slice(0,200));

    	//Make an element tree out of the html
    	var html = document.createElement('html')
    	html.innerHTML = document.all[0].outerHTML.trim();
    	console.log("Firrst child is" + html.firstChild);

    	var html_jquery = $($.parseHTML(document.all[0].outerHTML));
		var links = html_jquery.find("#botstuff").find("a").attr("href");
		console.log(links)
    	
 


        // Call the specified callback, passing
        // the web-page's DOM content as argument
        //sendResponse(document.all[0].outerHTML);
    }
});