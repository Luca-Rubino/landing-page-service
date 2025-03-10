console.log('connected');


function activeSublistNav() {
    const classSublistNav = document.getElementsByClassName('sublist-nav');

    for (let i = 0; i <= classSublistNav.length; i++) {
        const allClassSublistNav = classSublistNav[i];

        if (allClassSublistNav.style.display === 'none') {
            allClassSublistNav.style.display = 'flex';
        } else {
            allClassSublistNav.style.display = 'none';
        }
    }
};