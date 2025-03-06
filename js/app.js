console.log('connected');


function activeSublistNav() {
    if (document.getElementsByClassName('sublist-nav')[0].style.display === 'none') {
        document.getElementsByClassName('sublist-nav')[0].style.display = 'flex';
    } else {
        document.getElementsByClassName('sublist-nav')[0].style.display = 'none';
    }
}