const topPlayer = document.getElementById('topPlayer');
topPlayer.style.color = 'gray';
const playerBg = document.getElementsByClassName('player')
for (const bgColor of playerBg) {
    bgColor.style.backgroundColor = 'rgba(100,50,25,0.3)';
}

document.getElementById('add-btn').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'Bangladesh';
    const parent = document.getElementById('ul-container');
    parent.appendChild(li);

});
function updateValue() {
    const previousOldValue = document.getElementById('input-field');
    let newValue = previousOldValue.value;
    newValue = parseInt(newValue) + 1;
    previousOldValue.value = newValue;
    if (previousOldValue.value == 5) {
        document.getElementById('click-btn').setAttribute('disabled', true);
    }

}
document.getElementById('click-btn').addEventListener('click', function () {
    updateValue();
});