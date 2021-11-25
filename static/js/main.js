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

    const degree = document.querySelector("#degree")
    const degree_input = document.getElementsByName("degree")[0]
    degree_input.onkeyup = function () {
        degree.innerText = degree_input.value
    }

    const subject = document.querySelector("#subject")
    const subject_input = document.getElementsByName("subject")[0]
    subject_input.onkeyup = function () {
        subject.innerText = subject_input.value
    }

    const started = document.querySelector("#started")
    const started_input = document.getElementsByName("started")[0]
    started_input.onkeyup = function () {
        started.innerText = started_input.value
    }

    const ended = document.querySelector("#ended")
    const ended_input = document.getElementsByName("ended")[0]
    ended_input.onkeyup = function () {
        ended.innerText = ended_input.value
    }

    const link = document.querySelector("#link")
    const link_input = document.getElementsByName("link")[0]
    link_input.onkeyup = function () {
        link.innerText = link_input.value
    }

    const professional_summary = document.querySelector("#professional_summary")
    const professional_summary_input = document.getElementsByName("about_me")[0]
    professional_summary_input.onkeyup = function () {
        professional_summary.innerText = professional_summary_input.value
    }

    const company = document.querySelector("#company")
    const company_input = document.getElementsByName("company")[0]
    company_input.onkeyup = function () {
        company.innerText = company_input.value
    }

    const company_function = document.querySelector("#company_function")
    const company_function_input = document.getElementsByName("company_function")[0]
    company_function_input.onkeyup = function () {
        company_function.innerText = company_function_input.value
    }

    const company_started = document.querySelector("#company_started")
    const company_started_input = document.getElementsByName("company_started")[0]
    company_started_input.onkeyup = function () {
        company_started.innerText = company_started_input.value
    }

    const company_ended = document.querySelector("#company_ended")
    const company_ended_input = document.getElementsByName("company_ended")[0]
    company_ended_input.onkeyup = function () {
        company_ended.innerText = company_ended_input.value
    }

    const description = document.querySelector("#description")
    const description_input = document.getElementsByName("description")[0]
    description_input.onkeyup = function () {
        description.innerText = description_input.value
    }

    const skill = document.querySelector("#skill")
    const skill_input = document.getElementsByName("skill")[0]
    skill_input.onkeyup = function () {
        skill.innerText = skill_input.value
    }
})