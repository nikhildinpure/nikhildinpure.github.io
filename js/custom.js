function changeThemeColor() {
    var cols = document.getElementsByClassName('theme-nav');
    for (i = 0; i < cols.length; i++) {
       // cols[i].style.backgroundColor = '#2e4049 !important';
       cols[i].classList.add('new-theme-nav');
       
    }
    for (i = 0; i < cols.length; i++) {
        // cols[i].style.backgroundColor = '#2e4049 !important';
        cols[i].classList.remove('theme-nav');
        
     }
    console.log("nav theme changed");

    cols = null;
    cols = document.getElementsByClassName('theme-bg');
    for (i = 0; i < cols.length; i++) {
        cols[i].classList.add('new-theme-bg');
    }
    for (i = 0; i < cols.length; i++) {
        cols[i].classList.remove('theme-bg');
    }
    console.log("bg theme changed");
}