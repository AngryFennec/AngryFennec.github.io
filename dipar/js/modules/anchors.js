var anchors = Array.from(document.querySelectorAll('.anchor'));
var tools = Array.from(document.querySelectorAll('.tool'));
anchors.forEach(function(item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = item.getAttribute('href').substr(1);
    const block = document.getElementById(blockID);
    if (block.parentNode.classList.contains("tool")) {
      tools.forEach(function(item) {
        item.classList.remove("tool--active");
      });
      block.parentNode.classList.add("tool--active");
    }
    block.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});