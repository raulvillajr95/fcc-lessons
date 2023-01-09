loadElemToContainer(`#list-${page}`, "div", `list-${page}-${name}-div`);
loadElemToContainer(
  `#list-${page}-${name}-div`,
  "span",
  `list-${page}-${name}-text`
);
addTextToElem(`#list-${page}-${name}-text`, `${name}`);
if (!(item.name === "Default" && page === "home")) {
  loadElemToContainer(
    `#list-${page}-${name}-div`,
    "button",
    `list-${page}-${name}-del-btn`
  );
  addTextToElem(`#list-${page}-${name}-del-btn`, "DEL");
}
