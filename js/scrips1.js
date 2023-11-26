//模态窗口实现
document.addEventListener("DOMContentLoaded", function() {
    const thumbnailImages = document.querySelectorAll(".thumbnail");
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");

    thumbnailImages.forEach(function(thumbnailImage, index) {
        thumbnailImage.addEventListener("click", function() {
            const originalImageSrc = `/img/四张缩略/00${index + 1}.jpg`;
            modalContent.src = originalImageSrc;
            modal.style.display = "block";
        });
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const closeModal = modal.querySelector(".close");
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });
});