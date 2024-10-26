let container = document.createElement("div");
container.className = "video-container";

let video = document.createElement("video");
video.className = "styled-video";
video.controls = true;
video.style.width = "100%"; 

let source = document.createElement("source");
source.src = "salaar.mp4"; 
source.type = "video/mp4";
video.appendChild(source);

let title = document.createElement("h2");
title.className = "video-title";
title.innerHTML = "My Favorite Edit on Prabhas"; 

container.appendChild(video);
container.appendChild(title);

document.body.appendChild(container);
