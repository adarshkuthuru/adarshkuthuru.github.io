window.onload = function() {
    // Get all images with class 'zoomable'
    var imgs = document.getElementsByClassName('zoomable');

    // Attach the zoomFunction to the onclick event of each image
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function() {
            zoomFunction(this);
        }
    }
}

function zoomFunction(img) {
    var modal = document.createElement("div");
    modal.id = "myModal";
    modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.zIndex = "1";
    modal.style.paddingTop = "100px";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgb(0,0,0)";
    modal.style.backgroundColor = "rgba(0,0,0,0.9)";
    
    var modalImg = document.createElement("img");
    modalImg.id = "img01";
    modalImg.style.margin = "auto";
    modalImg.style.display = "block";
    modalImg.style.width = "60%";
    modalImg.style.maxWidth = "700px";
    
    var captionText = document.createElement("div");
    captionText.id = "caption";
    captionText.style.margin = "auto";
    captionText.style.display = "block";
    captionText.style.width = "60%";
    captionText.style.maxWidth = "700px";
    captionText.style.textAlign = "center";
    captionText.style.color = "#ccc";
    captionText.style.padding = "10px 0";
    captionText.style.height = "150px";
    
    modal.appendChild(modalImg);
    modal.appendChild(captionText);
    document.body.appendChild(modal);

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    modal.onclick = function() {
        document.body.removeChild(modal);
    }
}