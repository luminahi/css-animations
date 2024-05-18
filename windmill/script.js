window.onload = () => {
  const elements = document.querySelectorAll(".windmill");

  elements.forEach((element) => {
    element.addEventListener("click", () => {
      const rects = element.querySelectorAll(".rectangle");
      rects.forEach((rect) => {
        rect.style.animationDuration = "1s";
        setTimeout(() => {
          rect.style.animationDuration = "10s";
        }, 2000);
      });
    });
  });
};
