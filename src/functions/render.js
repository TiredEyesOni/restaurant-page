// removes all content style attributes and removes children until only header remains as the only children
const render = () => {
  const content = document.querySelector("#content");
  content.style = "";
  while (content.children.length > 1) content.children[1].remove();
};

export default render;
