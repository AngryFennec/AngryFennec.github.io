(function() {

  const mainCursor = document.querySelector('.main__cursor');

document.addEventListener('mousemove', e => {
    mainCursor.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
});

document.addEventListener('click', e => {
    mainCursor.classList.add("expand");
    setTimeout(() => {
        mainCursor.classList.remove("expand");
    }, 500);
});
})()