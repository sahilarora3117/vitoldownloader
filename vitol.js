var ROOT = "http://vitol.ac.in";

var video_asset = get_video_asset ();
var video_name = extract_video_name (video_asset)
var video_link =  ROOT + video_asset;
// download_video (video_link, video_name);
var sending = browser.runtime.sendMessage({
    video_link: video_link,
    video_name: video_name
  });
  sending.then(handleResponse, handleError);  

function handleResponse(message) {
    console.log(`Message from the background script:  ${message.video_link}`);
}
  
function handleError(error) {
    console.log(`Error: ${error}`);
}
  
function get_video_asset () {
    return document.getElementsByClassName("video-player")[0].children[0].children[0].children[0].getAttribute ("src");
}
  
function extract_video_name (video_asset) {
    return video_asset.slice(video_asset.lastIndexOf("@")+1, video_asset.lastIndexOf("?"));
}

