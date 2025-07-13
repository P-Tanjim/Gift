const lid = document.querySelector(".lid");
const box = document.getElementById("giftBox");
const envelopeWrapper = document.getElementById("envelopeWrapper");

let isOpened = false;

box.addEventListener("click", () => {
  if (isOpened) return;
  isOpened = true;

  // Open lid and drop box
  lid.classList.add("open");
  setTimeout(() => {
    box.classList.add("down-box");
  }, 1000);

  // Float envelope
  setTimeout(() => {
    envelopeWrapper.classList.add("envelope-float");

    // Then open envelope flap
    setTimeout(() => {
      
    }, 1500); // Wait for floating to start
  }, 1000);
});

envelopeWrapper.addEventListener("click", () => {
   envelopeWrapper.classList.add("flap");
});

