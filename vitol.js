var ROOT = "http://vitol.ac.in";

var video_asset = get_video_asset ();
var video_name = extract_video_name (video_asset)
var video_link =  ROOT + video_asset;
download_video (video_link, video_name);

function get_video_asset () {
    return document.getElementsByClassName("video-player")[0].children[0].children[0].children[0].getAttribute ("src");
}
  
function extract_video_name (video_asset) {
    return video_asset.slice(video_asset.lastIndexOf("@")+1, video_asset.lastIndexOf("?"));
}

function download_video (video_link, video_name) {
    var downloader = document.createElement("a");
    downloader.download = video_name;
    downloader.href = video_link;
    document.body.appendChild(downloader);
    downloader.click();
    document.body.removeChild(downloader);
    delete downloader;
}
