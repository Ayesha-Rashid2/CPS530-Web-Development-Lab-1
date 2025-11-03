//Question 1
function elementValidator(elem, regex, helperMessage) {
    if (elem.value.match(regex)) {
        return true;
    }
    else {
        alert(helperMessage);
        elem.focus();
        return false;
    }
}

function nameValidator() {
    nameElement = document.getElementById('name_input');
    nameRegex = /^[a-zA-Z\s]+$/;
    nameMessage = "The name must only contain letters"
    return elementValidator(nameElement,nameRegex,nameMessage);
}

function phoneValidator() {
    phoneElement = document.getElementById('phone_input');
    phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    phoneMessage = "The phone number be exactly: 3 digits parentheses, followed by 3 digits, a dash and 4 digits";
    return elementValidator(phoneElement,phoneRegex,phoneMessage);
}

function transformPhone(phoneString) {
    transformRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    return phoneString.replace(transformRegex, "$1-$2-$3");
}

function displayResults(name, address, phone) {
    displayDiv = document.getElementById('final_display');
   
    displayDiv.style.display = 'block'; 
    displayDiv.innerHTML = `
        <center><h2>Validated Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p></center>
    `;

}

function processForm() {
    name = document.getElementById('name_input').value;
    address = document.getElementById('address_input').value;
    phone = document.getElementById('phone_input').value;
    resultDiv = document.getElementById('final_display');
    newPhone = transformPhone(phone);

    if (!nameValidator()) {
        return false;
    }
    
    if (!phoneValidator()) {
        return false;
    }
    
    displayResults(name, address, newPhone);
}

//Question 2


function updateClock() {
    currentTime = new Date();

    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();
        
    hh = String(hours).padStart(2, '0');
    mm = String(minutes).padStart(2, '0');
    ss = String(seconds).padStart(2, '0');

    timeString = `${hh}:${mm}:${ss}`;
    clockElement = document.getElementById('clock_time_text');
    
    if (clockElement) {
        clockElement.innerHTML = timeString;
    }

}
updateClock(); 
setInterval(updateClock); 

$(document).ready(function() {
    $("#curved_text_container").hide();
    $("#close_icon").hide();

    $("#target_image").click(function() {
        $("#image_container").animate({
            width: "600px",
            height: "600px"
        }, 1500); 

        $("#curved_text_container").fadeIn(1000);
        $("#close_icon").fadeIn(1000);
    });

    $("#close_icon").click(function() {
        $("#image_container").animate({
            width: "300px",
            height: "300px"
        }, 1000);

        $("#curved_text_container").fadeOut(800);
        $("#close_icon").fadeOut(1000);
    });
});