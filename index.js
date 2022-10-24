const nameel = document.querySelector(".name-el") 
const numberel = document.querySelector(".number-el")
const monthel = document.querySelector(".month")
const yearel = document.querySelector(".year")
const cvcel = document.querySelector(".cvc-el")
const fillname = document.querySelector(".fill-name")
const fillnumber = document.querySelector(".fill-number")
const filldate = document.querySelector(".fill-date")
const fillcvc = document.querySelector(".cvc-no")
const errorname = document.querySelector(".err-name")
const errornumber = document.querySelector(".err-number")
const errordate = document.querySelector(".err-date")
const errorcvc = document.querySelector(".err-cvc")
const confirmel = document.querySelector(".confirm")


nameel.addEventListener ('keyup', () => { fillname.textContent = nameel.value
}
)


numberel.addEventListener ('keyup', () => { fillnumber.textContent = numberel.value
}
)

monthel.addEventListener ('keyup', () => { filldate.textContent = monthel.value + "/"
}
)

yearel.addEventListener ('keyup', () => { filldate.textContent = monthel.value + "/" + yearel.value
}
)

cvcel.addEventListener ('keyup', () => { fillcvc.textContent = cvcel.value
}
)







confirmel.addEventListener('click', ()=> { 

if (nameel.value === ""){errorname.textContent = "Can't be empty"
nameel.classList.remove('twitch')
nameel.classList.add('twitch')
}else {
    errorname.textContent ="" 
}

if (numberel.value === ""){errornumber.textContent = "Can't be empty"
numberel.classList.remove('twitch')
numberel.classList.add('twitch')
}else {
    errornumber.textContent ="" 
}

if (monthel.value === "" || yearel.value === ""){errordate.textContent = "Can't be empty"
monthel.classList.remove('twitch')
monthel.classList.add('twitch')
yearel.classList.add('twitch')
}else {
    errordate.textContent ="" 
}

if (cvcel.value === ""){errorcvc.textContent = "Can't be empty"
cvcel.classList.remove('twitch')
cvcel.classList.add('twitch')

}else {
    errordate.textContent ="" 
}







} )
console.log(confirmel)

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;}

    console.log(isNumber())
