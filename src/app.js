import { isValid, createModal } from './utils'
import { getAuthForm, authWithEmailAndPassword } from './auth'
import { Question } from './question'
import './style.css'

const form = document.getElementById('form')
const modalBtn = document.getElementById('modal-btn')
const input = form['question-input']
const button = form.button

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
modalBtn.addEventListener('click', openModal)
input.addEventListener('input', () => {
  button.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
  event.preventDefault()

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }
    button.disabled = true

    // Async request to server to save question
    Question.create(question)
      .then(() => {
        input.value = ''
        input.className = 'mui--is-empty'
        button.disabled = false
      })
      .then(() => {
        Question.renderList()
      })
  }
}

function openModal() {
  createModal('Авторизация', getAuthForm())
  document.getElementById('form-auth').addEventListener('submit', authFormHandler, { once: true })
}

function authFormHandler(event) {
  event.preventDefault()

  const btn = event.target.querySelector('button')
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value

  btn.disabled = true
  authWithEmailAndPassword(email, password).then(Question.fetch).then(renderModalAfterAuth).then(() => (btn.disabled = false))
}

function renderModalAfterAuth(content) {
  if (typeof content === 'string') {
    createModal('Ошибка', content)
  } else {
    createModal('Список вопросов', Question.listToHTML(content))
  }
}
