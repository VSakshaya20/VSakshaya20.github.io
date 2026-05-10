const buttons = document.querySelectorAll(".view-project");
const modal = document.getElementById("project-modal");
const frame = document.getElementById("project-frame");
const closeBtn = document.querySelector(".modal-close");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-project-src");
    frame.src = src;
    modal.hidden = false;
  });
});

function closeModal() {
  modal.hidden = true;
  frame.src = "";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});