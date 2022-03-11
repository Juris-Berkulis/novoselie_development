const openImg = (build, imgNumber) => {
    const img = document.querySelector(`#img_${build}`);
    img.src = `img/${build}_${imgNumber}.jpg`;
    img.alt = `${build}_${imgNumber}`;
};

const getValuesFromRangeInput = () => {
    //* Get slider values:
    const priceRangeInputList = document.getElementsByClassName("page__filterPriceRangeInput");
    let priceRangeInputVal1 = parseFloat(priceRangeInputList[0].value);
    let priceRangeInputVal2 = parseFloat(priceRangeInputList[1].value);

    //* Neither slider will clip the other, so make sure we determine which is larger:
    if (priceRangeInputVal1 > priceRangeInputVal2) {
        const tmp = priceRangeInputVal2; 
        priceRangeInputVal2 = priceRangeInputVal1; 
        priceRangeInputVal1 = tmp;
    }
    
    const minValueSpan = document.getElementsByClassName('page__filterPriceNumber-min')[0];
    minValueSpan.innerHTML = `${priceRangeInputVal1}`;

    const maxValueSpan = document.getElementsByClassName('page__filterPriceNumber-max')[0];
    maxValueSpan.innerHTML = `${priceRangeInputVal2}`;
};

window.onload = () => {
    //* Initialize Sliders:
    const priceRangeInputList = document.getElementsByClassName("page__filterPriceRangeInput");
    for(let i = 0; i < priceRangeInputList.length; i++) {
        priceRangeInputList[i].oninput = getValuesFromRangeInput;
        //* Manually trigger event first time to display values:
        priceRangeInputList[i].oninput();
    }
};
