const count = document.getElementById('count');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

let counter = 0;


const updateCount = (value) => {
        counter += value;
        count.textContent = counter;

        if (counter >= 10) {
                plusBtn.setAttribute('disabled', true);
        }
        else {
                plusBtn.removeAttribute('disabled', false);
        }


        count.textContent = counter;
        if (counter <= 0) {
                minusBtn.setAttribute('disabled', true);

        }
        else {
                minusBtn.removeAttribute('disabled', false);
        }
}
plusBtn.addEventListener('click', () => {
        updateCount(1);

});



minusBtn.addEventListener('click', () => {
        updateCount(-1);

});