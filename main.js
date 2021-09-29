$(function () {
    //loading
    function loading() {
        let progress = $(".progress"),
            progressText = progress.find(".progress-text"),
            imgLoad = imagesLoaded("body"),
            imgTotal = imgLoad.images.length,
            imgLoaded = 0,
            imgCurrent = 0,
            progressTimer = setInterval(updateProgress, 1000 / 60);

        imgLoad.on("progress", function () {
            imgLoaded++;
        });

        function updateProgress() {
            let target = (imgLoaded / imgTotal) * 100;

            imgCurrent += (target - imgCurrent) * 0.1;
            progressText.text(Math.floor(imgCurrent) + "%");

            //이미지 로딩 완료
            if (imgCurrent >= 100) {
                clearInterval(progressTimer);
                // progress.delay(1000).animate({ top: "-130%" },400, "easeInExpo");
                progress.delay(1000).fadeOut();
            }

            if (imgCurrent > 99) {
                imgCurrent = 100;
            }
        };
    };
    loading();
});

const toggleBtn = document.querySelector('.nav_bar_toggle');
const links = document.querySelector('.nav_bar_links')
const ACTIVE = 'active'

toggleBtn.addEventListener('click', () => {
    links.classList.toggle(ACTIVE);  
});

function navScrollTo(pos) {
    const posTop = document.querySelector(pos).offsetTop;
    window.scrollTo({top: posTop, behavior: 'smooth'});
}