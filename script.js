"use strict";

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const modalArray = Array.from(btnShowModal).entries();

for (let [index, modals] of modalArray) {
  const toggleModal = () => {
    modal[index].classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  };
  modals.addEventListener("click", toggleModal);
  btnCloseModal[index].addEventListener("click", toggleModal);

  const closeModal = () => {
    modal[index].classList.add("hidden");
    overlay.classList.add("hidden");
  };

  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal[index].classList.contains("hidden")) {
      closeModal();
    }
  });
}
