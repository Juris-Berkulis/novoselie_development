const openImg = (build, imgNumber) => {
    const img = document.querySelector(`#img_${build}`);
    img.src = `img/${build}_${imgNumber}.jpg`;
    img.alt = `${build}_${imgNumber}`;
};
