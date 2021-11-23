const mySliderOption1 = ({
    type: 'carousel',
    startAt: 1,
    focusAt: 'center',
    perView: 2,
    gap: 80,
    // autoplay: 2000,
});

const mySlider1 = new Glide('.glide', mySliderOption1);
mySlider1.mount();

const mySliderOption2 = ({
    type: 'carousel',
    startAt: 1,
    focusAt: 'center',
    perView: 2,
    gap: 80,
    // autoplay: 2000,
});

const mySlider2 = new Glide('.glide2', mySliderOption2);
mySlider2.mount();
