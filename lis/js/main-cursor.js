(function() {
  const main-cursor = document.querySelector('.main__cursor');

document.addEventListener('mousemove', e => {
    main-cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    main-cursor.classList.add("expand");
    setTimeout(() => {
        main-cursor.classList.remove("expand");
    }, 500);
});
})