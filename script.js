
function downloadVideo () {
    browser.tabs.executeScript({file: "/vitol.js"})
    .then(console.log("downloading"))
    .catch(reportExecuteScriptError);
}
document.getElementById("download").addEventListener("click", downloadVideo); 

function reportExecuteScriptError() {
    document.querySelector("#error-content").classList.remove("hidden");
    document.querySelector("#download").classList.add("hidden");
  }
