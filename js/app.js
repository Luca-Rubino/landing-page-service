console.log('connected');


function activeSublistNav() {
const classSublistNav = document.getElementsByClassName('sublist-nav')[0];

    if (classSublistNav.style.display === 'none') {
        classSublistNav.style.display = 'flex';
    } else {
        classSublistNav.style.display = 'none';
    }
}