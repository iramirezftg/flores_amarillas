function activateScene() {
  document.body.classList.remove("container");
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", activateScene);
} else {
  activateScene();
}
