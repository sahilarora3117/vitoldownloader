

function downloadVideo () {
    browser.tabs.executeScript({file: "/vitol.js"})
    .then( downloader)
    .catch(reportExecuteScriptError);
    
}
document.getElementById("download").addEventListener("click", downloadVideo); 
document.getElementById("download").click()

var showShowError = true;

function reportExecuteScriptError() {
    if (showShowError) {
        document.querySelector("#error-content").classList.remove("hidden");
        document.querySelector("#download").classList.add("hidden");
    
    }
    }

  function downloader() {
    browser.runtime.onMessage.addListener(handleMessage);
    async function handleMessage(request) {
            function onStartedDownload(id) {
                showShowError  = false;
              }
              
              function onFailed(error) {
                console.log(`Download failed: ${error}`);
              }
                        
              var downloading =  browser.downloads.download({
                url : request.video_link,
                filename : request.video_name
              });
              
             await downloading.then(onStartedDownload, onFailed);
             showShowError  = false;

          }
        
}