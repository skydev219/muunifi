export const allowScroll = (swiper) => {
  var activeIndex = swiper.activeIndex;
  var activeSlide = swiper.slides[activeIndex];
  var { scrollHeight, clientHeight } = activeSlide;
  const diff = scrollHeight - clientHeight;
  if (activeSlide.scrollTop === 0) activeSlide.scrollTop = 1;
  else if (activeSlide.scrollTop === diff) activeSlide.scrollTop = diff - 1;
  if (diff > 0) {
    const findScroll = (e) => {
      const scrollUp = e.deltaY < 0;
      if (
        (scrollUp || e.type === "touchmove") &&
        activeSlide.scrollTop <= 0
      ) {
        swiper.mousewheel.enable();
        swiper.allowTouchMove = true;
        activeSlide.removeEventListener("wheel", findScroll);
        activeSlide.removeEventListener("touchmove", findScroll);
      } else if (
        (!scrollUp || e.type === "touchmove") &&
        activeSlide.scrollTop >= diff - 5
      ) {
        swiper.mousewheel.enable();
        swiper.allowTouchMove = true;
        activeSlide.removeEventListener("wheel", findScroll);
        activeSlide.removeEventListener("touchmove", findScroll);
      }
    };
    activeSlide.addEventListener("wheel", findScroll);
    activeSlide.addEventListener("touchmove", findScroll);
    swiper.mousewheel.disable();
    swiper.allowTouchMove = false;
  }
};