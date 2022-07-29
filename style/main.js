const rateItems = document.querySelectorAll('.rate__item'),
        submitBtn = document.querySelector('.rating__conpomonent-submit > button'),
        rateComponent = document.querySelector('.rating__component-container'),
        thanksComponent = document.querySelector('.thanks__component-container');

let rateValue = 0;
rateItems.forEach(rateItem => {
    rateItem.addEventListener('click', () => {
        rateItems.forEach(item => {
            item.classList.remove('selected');
        });
        rateItem.classList.add('selected');
        rateValue = rateItem.getAttribute('data-rate');
        console.log(rateValue);
    });
});

submitBtn.addEventListener('click', () => {
    if(rateValue > 0 && rateValue <= 5){
        rateComponent.style.display = 'none';
        thanksComponent.style.display = 'block';
        let thanksText = thanksComponent.querySelector('.selected-text__item');
        thanksText.innerHTML = `You selected ${rateValue} out of 5`;
    }
    else{
        alert("Choose rate");
    }
})