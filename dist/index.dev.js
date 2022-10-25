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
}); // this section is for carousel

$(document).ready(function () {
  $('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: 1920
  });
});
var desktop_tab_section = document.querySelector("#desktop-tab-section");
var tabs = Array.from(document.getElementsByClassName("desktop-tab"));
console.log(tabs);
var car_info_sections = Array.from(document.getElementsByClassName("desktop-info-section"));
desktop_tab_section.addEventListener("click", function (e) {
  if (e.target.tagName == "A") {
    var id = e.target.id;
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");
    car_info_sections.forEach(function (section) {
      section.classList.remove("active");
    });
    document.getElementById("".concat(id, "-container")).classList.add("active");
  }
});
var section = document.querySelector(".tab-section");
section.addEventListener("drag", function (e) {
  console.log(e.target);
  console.log(1);
});