let toggleMenuStatus = false;


let MenuToggler = function () {

    if (toggleMenuStatus === false) {
        document.body.querySelector('#Toggle-Menu').style.marginLeft = '0';
        document.body.querySelector('#Toggle-Menu').style.display = 'Flex';

        toggleMenuStatus = true;

    }
    else if (toggleMenuStatus === true) {
        document.body.querySelector('#Toggle-Menu').style.marginLeft = '-150vw';
        document.body.querySelector('#Toggle-Menu').style.display = 'none';
        toggleMenuStatus = false;
    }

     

}

setInterval(() => {
    let w = window.innerWidth;

     if (w > 880) {
        document.body.querySelector('#Toggle-Menu').style.visibility = 'hidden';
    }
    else if (w <= 880) {
        document.body.querySelector('#Toggle-Menu').style.visibility = 'visible';
    }
 
}, 100);