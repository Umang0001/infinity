"use strict";

var _accordion = require("./accordion.js");

var product_description = Array.from(document.getElementsByClassName("content"));
var dots = Array.from(document.getElementsByClassName("dot"));
document.getElementsByClassName("dots")[0].addEventListener("click", function (event) {
  var clickedDot = event.target;

  if (clickedDot.name == "dot") {
    var id = clickedDot.id;
    product_description.forEach(function (e) {
      e.classList.add("hide");
      e.classList.remove("show");
      document.getElementsByClassName("".concat(id, "-content"))[0].classList.remove("hide");
      document.getElementsByClassName("".concat(id, "-content"))[0].classList.add("show");
      dots.forEach(function (dot) {
        dot.classList.remove("active");
        clickedDot.classList.add("active");
      });
    });
  }
});
var accordion_wrapper = document.getElementsByClassName("accordion-wrapper")[0];
var accordionItems = Array.from(document.getElementsByClassName("accordion-item"));
accordion_wrapper.addEventListener("click", function (e) {
  var active_acc = e.target.closest("label");
  accordionItems.forEach(function (item) {
    if (item !== active_acc) {
      item.classList.remove("active-acc");
      (0, _accordion.slideUp)(item.querySelector(".accordion-content-text"), 1000);
    } else if (item === active_acc && item.classList.contains('active-acc')) {
      item.classList.remove("active-acc");
      (0, _accordion.slideUp)(item.querySelector(".accordion-content-text"), 1000);
    } else {
      item.classList.add("active-acc");
      (0, _accordion.slideDown)(item.querySelector(".accordion-content-text"), 1000);
    }
  });
});