import headerBgImage from "../assets/imgs/header-bg.png";

const about = () => {
  const content = document.querySelector("#content");
  content.style = "overflow: scroll";

  const backgroundAbout = document.createElement("div");
  backgroundAbout.id = "background-about";
  content.appendChild(backgroundAbout);

  const headerBg = document.createElement("img");
  headerBg.src = headerBgImage;
  headerBg.id = "header-bg";
  content.appendChild(headerBg);

  const pageLoad = document.createElement("div");
  pageLoad.className = "pageLoad";
  content.append(pageLoad);
};

export default about;
