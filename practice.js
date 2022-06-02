window.addEventListener("mousemove", event => {
  let mouse = document.createElement("div");
  mouse.className = "trail";
  mouse.style.left = (event.pageX - 6) + "px";
  mouse.style.top = (event.pageY - 6) + "px";
  document.body.appendChild(mouse);

  if (document.body.children.length > 100) {
    document.body.firstChild.remove()
  }
});