
let mini = true;

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
//place script you want to not run on mobile here
    hoverSidebar = () => {
        if(mini) {
            console.log('open sidebar');
            document.body.classList.remove('collapse__menu');
            document.body.classList.add('expanded__menu');
            mini = false;
        } else {
            console.log('close sidebar');
            document.body.classList.remove('expanded__menu');
            document.body.classList.add('collapse__menu');
            mini = true;
        }
    }

    let toggler = document.querySelector('.navbar__toggler');
    toggler.addEventListener('click', function () {
        document.body.classList.toggle('collapse__menu');
    })
}

