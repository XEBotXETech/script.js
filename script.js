function downloadReel() {
    var videoUrl = prompt("Enter the Instagram Reel video URL:");
    if (videoUrl) {
        var a = document.createElement('a');
        a.href = videoUrl;
        a.download = 'instagram_reel.mp4';
        a.click();
    }
}
