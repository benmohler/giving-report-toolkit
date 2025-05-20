// script.js

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector("strong");
    const answerParagraphs = item.querySelectorAll("p");

    const icon = document.createElement("span");
    icon.classList.add("faq-toggle");
    icon.setAttribute("aria-hidden", "true");
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
    question.setAttribute("tabindex", "0");
    question.setAttribute("role", "button");
    question.setAttribute("aria-expanded", "false");

    const toggleFAQ = () => {
      const isOpen = item.classList.contains("open");
      item.classList.toggle("open");
      icon.textContent = isOpen ? "+" : "−";
      answerContainer.style.maxHeight = isOpen ? "0px" : answerContainer.scrollHeight + "px";
      question.setAttribute("aria-expanded", String(!isOpen));
    };

    question.addEventListener("click", toggleFAQ);
    question.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFAQ();
      }
    });
  });

  // Helper: Scroll-trigger animation observer
  function observeFadeIn(selector) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));
}
      });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
  }

  // Apply scroll animations to all key UI sections
  observeFadeIn(".cta-button");
  observeFadeIn(".testimonial-card");
  observeFadeIn(".pain-item");
  observeFadeIn(".feature-block");
  observeFadeIn(".checklist-centered li");
  observeFadeIn(".faq-item");
});
