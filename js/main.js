


/*  
===============================================
===============================================
*/

/* start right 1 */


let r1options = document.querySelector(".options");
let right1 = document.querySelector(".right-1");

right1.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if(e.y + 250 <= window.innerHeight) {
        r1options.style.top = `${e.y}px`;
    } else {
        r1options.style.top = `${e.y - 250}px`;
    }

    if(e.x + 200 <= window.innerWidth) {
        r1options.style.left = `${e.x}px`;
    } else {
        r1options.style.left = `${e.x - 200}px`;
    }

    r1options.style.display = "block";
});

right1.addEventListener("click", () => {
    if(r1options.style.display === "block") {
        r1options.style.display = null;
    }
});


/* end right 1 */

/*  
===============================================
===============================================
*/

/* start right 2 */

let right2 = document.querySelector(".right-2");
let r2contextMenu = document.querySelector(".right-2 .wrapper");
let r2shareMenu = r2contextMenu.querySelector(".share-menu");

right2.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    let x = e.offsetX;
    let y = e.offsetY;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let cmWidth = r2contextMenu.offsetWidth;
    let cmHeight = r2contextMenu.offsetHeight;

    if(x > (winWidth - cmWidth - r2shareMenu.offsetWidth)) {
        r2shareMenu.style.left = "-200px";
    } else {
        r2shareMenu.style.left = "";
        r2shareMenu.style.right = "-200px";
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    r2contextMenu.style.left = `${x}px`;
    r2contextMenu.style.top = `${y}px`;
    r2contextMenu.style.visibility = "visible";
});

right2.addEventListener("click", () => {
    r2contextMenu.style.visibility = "hidden";
});


/* end right 2 */

/*  
===============================================
===============================================
*/

/* start right 3 */




/* end right 3 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start right 1 */



/* end right 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start right 1 */



/* end right 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start right 1 */



/* end right 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start right 1 */



/* end right 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start right 1 */



/* end right 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start right 1 */



/* end right 1 */

/*  
===============================================
===============================================
*/

