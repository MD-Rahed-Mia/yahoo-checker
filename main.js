let faqTitle = document.querySelectorAll(".faq_box ul li");
console.log(faqTitle);

faqTitle.forEach((element) => {
  element.addEventListener("click", function () {
    let content = element.querySelector(".content");
    let plusIcon = element.querySelector("span i");
    content.classList.toggle("active");
    plusIcon.classList.toggle("fa-plus");
    plusIcon.classList.toggle("fa-minus")
  })
})