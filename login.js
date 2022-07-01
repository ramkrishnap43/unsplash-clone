
function faceBook(){
    window.location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=779900868722692&kid_directed_site=0&app_id=779900868722692&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv5.0%2Fdialog%2Foauth%3Fclient_id%3D779900868722692%26redirect_uri%3Dhttps%253A%252F%252Funsplash.com%252Fusers%252Fauth%252Ffacebook%252Fcallback%26response_type%3Dcode%26scope%3Demail%26state%3D4aa5ffbf92255ac2dbd98a1b804bf757b858f2e229fa6cfa%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9dc3faae-373c-4ad2-a2c0-e203a333d8e7%26tp%3Dunspecified&cancel_url=https%3A%2F%2Funsplash.com%2Fusers%2Fauth%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D4aa5ffbf92255ac2dbd98a1b804bf757b858f2e229fa6cfa%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
}

function loginFunction(){
    let Arr = JSON.parse(localStorage.getItem("signup"))

    

    Arr.map((el) => {

        if(el.email === email.value && el.password === in1.value){
            alert("Login Successful")
            window.location.href = "/index.html"
        }
        else{
            alert("Invalid Email and Password")
        }
    })
}

function join(){
    window.location.href = "/signup/signup.html"
}




