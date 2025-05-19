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

  // Helper: Staggered observer function
  function staggerObserver(selector, className) {
    const targets = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(className);
          }, index * 100);
        } else {
          entry.target.classList.remove(className); // Reset on scroll out
        }
      });
    }, { threshold: 0.1 });

    targets.forEach(el => observer.observe(el));
  }

  staggerObserver(".cta-button", "visible");
  staggerObserver(".testimonial-card", "visible");
  staggerObserver(".pain-item", "visible");
});
  
  // CTA Button scroll animation
  const ctaButtons = document.querySelectorAll(".cta-button");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  ctaButtons.forEach(btn => observer.observe(btn));

  // Testimonial scroll-in animation
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const testimonialObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  testimonialCards.forEach(card => testimonialObserver.observe(card));

  // Pain Points scroll-in animation
  const painItems = document.querySelectorAll(".pain-item");
  const painObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  painItems.forEach(item => painObserver.observe(item));
});
