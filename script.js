
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector("strong");
    const answerParagraphs = item.querySelectorAll("p");

    const icon = document.createElement("span");
    icon.classList.add("faq-toggle");
    icon.textContent = "+";
    question.appendChild(icon);

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("faq-answer");

    answerParagraphs.forEach(p => answerContainer.appendChild(p));
    item.appendChild(answerContainer);

    answerContainer.style.maxHeight = "0px";
    answerContainer.style.overflow = "hidden";
    answerContainer.style.transition = "max-height 0.4s ease";

    question.style.cursor = "pointer";
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      item.classList.toggle("open");
      icon.textContent = isOpen ? "+" : "−";
      answerContainer.style.maxHeight = isOpen ? "0px" : answerContainer.scrollHeight + "px";
    });
  });
});
