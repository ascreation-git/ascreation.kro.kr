/*
    ============ [ START ] ============ 
        + Main JavaScript
    ===================================
*/

// Scroll Top Button
/*
    + Thanks to https://www.youtube.com/@CodingArtist / @CodingArtist
*/
let calcScrollValue = () =>{
    let buttonWrap = document.getElementById("top-button-wrap");
    let button = document.getElementById("top-button");
    let position = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((position * 100) / height);

    if(position > 100) {
        buttonWrap.style.visibility = "visible";
        buttonWrap.style.opacity = "1";
    } else {
        buttonWrap.style.visibility = "hidden";
        buttonWrap.style.opacity = "0";
    }

    buttonWrap.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Scroll Top Button End

/*
    ============ [ END ] ============ 
        - Main JavaScript
    ===================================
*/