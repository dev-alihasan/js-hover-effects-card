const createHoverEffect = (
  parentSelector,
  image1,
  image2,
  displacementImage
) => {
  new hoverEffect({
    parent: document.querySelector(parentSelector),
    intensity: 0.3,
    image1,
    image2,
    displacementImage,
    imagesRatio: 450 / 300,
  });
};

createHoverEffect(
  ".wonder-woman-img",
  "assets/img/gal-godat.jpg",
  "assets/img/wonder-woman.jpg",
  "assets/img/transaction4.png"
);
createHoverEffect(
  ".black-widow",
  "assets/img/scarlett-johnsson.jpg",
  "assets/img/black-wideo.jpg",
  "assets/img/transaction3.png"
);
createHoverEffect(
  ".wanda",
  "assets/img/wanda.jpg",
  "assets/img/scarlet-witch.jpg",
  "assets/img/transaction5.png"
);
