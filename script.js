
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const question = item.querySelector("strong");
    const answer = item.querySelectorAll("p");

    const icon = document.createElement("span");
    icon.classList.add("faq-toggle");
    icon.textContent = "+";
    question.appendChild(icon);

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("faq-answer");
    answer.forEach(p => answerContainer.appendChild(p));
    item.appendChild(answerContainer);

    answerContainer.style.maxHeight = "0px";
    answerContainer.style.overflow = "hidden";
    answerContainer.style.transition = "max-height 0.4s ease";

    question.style.cursor = "pointer";
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach(el => {
        el.classList.remove("open");
        el.querySelector(".faq-answer").style.maxHeight = null;
        el.querySelector(".faq-toggle").textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("open");
        answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
        icon.textContent = "−";
      }
    });

    // Open the first FAQ by default
    if (index === 0) {
      item.classList.add("open");
      answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});
