/* =====================================
   GET ALL PAGES
===================================== */

const pages = document.querySelectorAll(".page");


/* =====================================
   SHOW PAGE
===================================== */

function showPage(pageName) {

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const nextPage = document.querySelector("." + pageName);

    if (nextPage) {
        nextPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =====================================
   GET SONG
===================================== */

const song = document.getElementById("rakhiSong");


/* =====================================
   OPEN FOR SURPRISE
   🎵 SONG STARTS HERE
===================================== */

const surpriseButton =
    document.getElementById("surpriseButton");

if (surpriseButton) {

    surpriseButton.addEventListener("click", function() {

        /* Start music */
        if (song) {
            song.currentTime = 0;

            song.play().catch(function(error) {
                console.log("Music could not play:", error);
            });
        }

        /* Go to Funny Memories */
        showPage("funny");

    });

}


/* =====================================
   NEXT BUTTONS
===================================== */

const nextButtons =
    document.querySelectorAll(".next-button");

nextButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const nextPageName =
            button.getAttribute("data-next");

        showPage(nextPageName);

    });

});


/* =====================================
   REPLAY BUTTON
===================================== */

const replayButton =
    document.getElementById("replayButton");

if (replayButton) {

    replayButton.addEventListener("click", function() {

        /* Stop music */
        if (song) {
            song.pause();
            song.currentTime = 0;
        }

        /* Go back to first page */
        showPage("welcome");

    });

}