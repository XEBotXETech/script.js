function downloadVideo() {
    var urlInput = document.getElementById("urlInput");
    var videoUrl = urlInput.value;

    if (videoUrl) {
        var videoId = videoUrl.split("/")[4];
        var videoApiUrl = "https://www.instagram.com/p/" + videoId + "/?__a=1";

        fetch(videoApiUrl)
            .then(response => response.json())
            .then(data => {
                var videoUrl = data.graphql.shortcode_media.video_url;
                var videoElement = document.createElement("video");
                videoElement.controls = true;
                videoElement.src = videoUrl;

                var videoContainer = document.getElementById("videoContainer");
                videoContainer.innerHTML = "";
                videoContainer.appendChild(videoElement);
            })
            .catch(error => {
                console.log("An error occurred: ", error);
            });
    }
}
