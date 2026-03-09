const mobile = document.querySelector(".header__mobile");
const mobileTitle = mobile.querySelector(".title");
const desctop = document.querySelector(".header__desctop");
const desctopTitle = desctop.querySelector(".title");

let addTitle = () => {
  const descr = mobileTitle.querySelector(".title__descr");
  const desctopDescr = desctopTitle.querySelector(".title__descr");
  let width = window.innerWidth;

  if (width < 1119) {
    if (!descr) {
      mobileTitle.insertAdjacentHTML(
          "afterbegin",
          '<h1 class="title__descr">Услуги и сервисы</h1>'
      );
      mobile.after(mobileTitle);

      desctopTitle.insertAdjacentHTML("afterbegin", "");
    }
    console.log('< 1119', desctopDescr)
    if (desctopDescr) {
      desctopDescr.remove();
    }
  } /* (width >= 1119) */ else {
    if (!desctopDescr) {
      desctopTitle.insertAdjacentHTML(
          "afterbegin",
          '<h1 class="title__descr">Услуги и сервисы</h1>'
      );
      mobileTitle.insertAdjacentHTML("afterbegin", "");
      console.log('>= 1119', descr)
      if (descr) {
        descr.remove();
      }
    }
  }
};
document.addEventListener("DOMContentLoaded", addTitle);
window.addEventListener("resize", addTitle);
