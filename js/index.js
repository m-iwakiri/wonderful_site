window.addEventListener("load", () => {
  const header = document.getElementById("header").clientHeight;
  //   console.log(header);
  const main = document.getElementById("fv_upper");
  main.style.paddingTop = header + "px";
});

const menu_open = document.getElementById("menu_open");
const sp_navi = document.getElementById("sp_navi");
menu_open.addEventListener("click", () => {
  //   sp_navi.classList.add("open");
  sp_navi.classList.toggle("open");
  menu_open.classList.toggle("open");
});

const move_top = document.getElementById("move_top");
move_top.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
