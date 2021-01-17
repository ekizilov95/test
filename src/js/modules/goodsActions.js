function counter() {
  const btns = document.querySelectorAll(".counter__btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target;
      const direction = target.dataset.direction;
      const inp = target.parentElement.querySelector(".counter__count");
      const currentValue = +inp.value;

      let newValue;

      if (inp.value <= 1 && direction === "minus") {
        newValue = 1;
      }

      if (direction === "plus") {
        newValue = currentValue + 1;
      } else if (direction === "minus" && inp.value >= 2) {
        newValue = currentValue - 1;
      }

      inp.value = newValue;
    });
  });
}
function clickToBuy() {
  const btns = document.querySelectorAll(".goods__btn-buy");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.style.cssText = `
        position: relative;
        opacity: 1;
        z-index: 5;
      `;
      const item = e.target.closest(".goods__item");
      const column = e.target.closest(".goods__column");
      item.style.display = "none";

      const elem = `
     
        <button class="goods__check">
          <svg>
            <use xlink:href='img/sprite.svg#check'></use>
          </svg>
        </button>
        <button class="goods__btn-check goods__btn_orange">Купить</button>
      
  `;
      column.insertAdjacentHTML("afterbegin", elem);
      column.style.cssText = `
        display: flex;
        flex-direction:column;
        justify-content: space-between;
      `;
    });
  });
}
counter();
clickToBuy();
