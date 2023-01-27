/**
 *
 *
 *
 *
 *
 *
 */

function toggleOnHover(list, effectedElement, classSelector) {
  let element = document.querySelector(list);
  let effected = document.querySelector(effectedElement);
  element.addEventListener("mouseover", () => {
    effected.classList.toggle(classSelector);
  });
  element.addEventListener("mouseout", () => {
    effected.classList.toggle(classSelector);
  });
}
toggleOnHover(".item2", ".category-drop", "visible-cate-drop");

function toggleOnClick(list, effectedElement, classSelector) {
  let element = document.querySelector(list);
  let effected = document.querySelector(effectedElement);
  element.addEventListener("click", () => {
    effected.classList.toggle(classSelector);
  });
}
// Testing...hover name to bring out menu
toggleOnClick(".title", ".nav2", "nav2-sidebar");
toggleOnClick(".ham-nav1", ".nav2", "nav2-sidebar");
toggleOnClick(".ham-nav2", ".nav2", "nav2-sidebar");
