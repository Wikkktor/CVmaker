document.addEventListener("DOMContentLoaded", function () {
    const form_elements = document.querySelectorAll("#form_step")
    const button_next = document.querySelectorAll("#form_step_next")
    const button_previous = document.querySelectorAll("#form_step_back")

    console.log(form_elements)
    console.log(button_next)
    console.log(button_previous)


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


})