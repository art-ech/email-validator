const emailInput = document.querySelector('.email_input')
const copyBtn = document.querySelector('.copy_btn')
const check = document.querySelector('.fa-solid.fa-check')
const prompt = document.createElement('div')
const myForm = document.querySelector('.my_form')


const emailVerified = ()=> {
    emailInput.addEventListener('input', (e)=> {
        if (e.target.value.includes('@yahoo.com') || e.target.value.includes('@gmail.com')){
            emailInput.classList.add('email_verified')
            check.style.display = 'flex'
        } else {
            emailInput.classList.remove('email_verified')
            check.style.display = 'none'
        }
    })
}
emailVerified()

const copyEmail = ()=> {
    if (emailInput.value == '' ) {
        myForm.appendChild(prompt)
        prompt.innerText = 'Email is required'
        prompt.classList.add('prompt_style')
        setTimeout(()=> prompt.innerText = '', 3000)
        setTimeout(()=> prompt.classList.remove('prompt_style'),3000)
        setTimeout(()=> emailInput.style.border = 'none',3000)
    } else {
        navigator.clipboard.writeText(emailInput.value)
    }
}

copyBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    copyEmail()
})


// const submitForm = ()=> {
//     submit.addEventListener('click', (e)=> {
//         e.preventDefault()
//         if (emailInput.value===''){
//             myForm.appendChild(prompt)
//             prompt.innerText = 'Email is required'
//             prompt.classList.add('prompt_style')
//             emailInput.style.border = '2px solid red'
//             setTimeout(()=> prompt.innerText = '', 3000)
//             setTimeout(()=> prompt.classList.remove('prompt_style'),3000)
//             setTimeout(()=> emailInput.style.border = 'none',3000)
//         } else if (emailInput.value.includes('@yahoo.com') || emailInput.value.includes('@gmail.com')){
//             emailVerified()
//             console.log(emailInput.value)
//             emailInput.value = ''
//             emailInput.style.border = 'none'
//             check.style.display = 'none'
//         } else {
//             myForm.appendChild(prompt)
//             prompt.innerText = 'Invalid e-mail address'
//             prompt.classList.add('prompt_style')
//             emailInput.style.border = '2px solid red'
//             setTimeout(()=> prompt.innerText = '', 3000)
//             setTimeout(()=> prompt.classList.remove('prompt_style'),3000)
//             setTimeout(()=> emailInput.style.border = 'none',3000)
//         }
//     })
// }

// submitForm()

