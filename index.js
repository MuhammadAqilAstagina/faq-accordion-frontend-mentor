const questions = document.querySelectorAll(".question");
const faqs = document.querySelectorAll(".faq");
const actived = document.querySelectorAll(".faq-active");

questions.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((faq) => faq.classList.remove("faq-active"));
    const parentEl = box.parentElement;
    parentEl.classList.add("faq-active");
  });
});
