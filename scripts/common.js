
const menu = document.querySelector(".list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  document.querySelector(".blurred").classList.add("blur");
  document.querySelector("body").classList.add("active");
  document.querySelector(".navbar").style.zIndex = 99999;
};

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  document.querySelector(".blurred").classList.remove("blur");
  document.querySelector("body").classList.remove("active");
  document.querySelector(".navbar").style.zIndex = 999;
};
document.querySelector(".blurred").onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  document.querySelector(".blurred").classList.remove("blur");
  document.querySelector("body").classList.remove("active");
  document.querySelector(".navbar").style.zIndex = 999;
};

const primaryHeader = document.querySelector(".navbar");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle(
      "sticking",
      !entries[0].isIntersecting
    );
  },
  { rootMargin: "200px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);