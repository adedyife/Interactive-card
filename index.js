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
const deet = document.querySelector(".details")
const thankyou = document.querySelector(".feedback")
const restart = document.querySelector(".continue-btn")
let filled = false

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
filled = false
}else {
    errorname.textContent ="" 
    filled = true
}

if (numberel.value === ""){errornumber.textContent = "Can't be empty"
numberel.classList.remove('twitch')
numberel.classList.add('twitch')
filled = false
}else {
    errornumber.textContent ="" 
    filled = true
}

if (monthel.value === "" || yearel.value === ""){errordate.textContent = "Can't be empty"
monthel.classList.remove('twitch')
monthel.classList.add('twitch')
yearel.classList.add('twitch')
filled = false
}else {
    errordate.textContent ="" 
    filled = true
}

if (cvcel.value === ""){errorcvc.textContent = "Can't be empty"
cvcel.classList.remove('twitch')
cvcel.classList.add('twitch')
filled = false

}else {
    errordate.textContent ="" 
    filled = true
}

if (filled === true){
deet.classList.add("hide")
thankyou.classList.add("show")
console.log(feedback)
} else{

}


} )


restart.addEventListener(
    'click', () => {
        fillname.textContent= "Jane Appleseed"
        fillnumber.textContent = "0000 0000 0000 0000"
        filldate.textContent= "00/00"
        fillcvc.textContent="200"
        nameel.value = ""
        numberel.value = ""
        monthel.value= ""
        yearel.value = ""
        cvcel.value = ""
        
deet.classList.remove("hide")
thankyou.classList.remove("show")
    }
)


console.log(confirmel)

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;}

    console.log(isNumber())
