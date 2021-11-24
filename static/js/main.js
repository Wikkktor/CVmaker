document.addEventListener("DOMContentLoaded", function () {
    const form_elements = document.querySelectorAll("#form_step")
    const button_next = document.querySelectorAll("#form_step_next")
    const button_previous = document.querySelectorAll("#form_step_back")

    let counter = 0;
    button_next.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log("adasdad")
            form_elements[counter].classList.add('d-none')
            counter++;
            form_elements[counter].classList.remove('d-none')

        })
    })
    button_previous.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log("adasdad")
            form_elements[counter].classList.add('d-none')
            counter--;
            form_elements[counter].classList.remove('d-none')

        })
    })
    const first_name = document.querySelector("#first_name")
    const first_name_input = document.getElementsByName('name')[0]
    first_name_input.onkeyup = function () {
        first_name.innerText = first_name_input.value
    }

    const last_name = document.querySelector("#last_name")
    const last_name_input = document.getElementsByName("last_name")[0]
    last_name_input.onkeyup = function () {
        last_name.innerText = last_name_input.value
    }


    const city = document.querySelector("#city")
    const city_input = document.getElementsByName("city")[0]
    city_input.onkeyup = function () {
        city.innerText = city_input.value
    }


    const street = document.querySelector("#street")
    const street_input = document.getElementsByName("street")[0]
    street_input.onkeyup = function () {
        street.innerText = street_input.value
    }


    const position = document.querySelector("#position")
    const position_input = document.getElementsByName("position")[0]
    position_input.onkeyup = function () {
        position.innerText = position_input.value
    }


    const email = document.querySelector("#email")
    const email_input = document.getElementsByName("email")[0]
    email_input.onkeyup = function () {
        email.innerText = email_input.value
    }


    const phone_number = document.querySelector("#phone_number")
    const phone_number_input = document.getElementsByName("phone_number")[0]
    phone_number_input.onkeyup = function () {
        phone_number.innerText = phone_number_input.value
    }

    const school = document.querySelector("#school")
    const school_input = document.getElementsByName("school")[0]
    school_input.onkeyup = function () {
        school.innerText = school_input.value
    }
})