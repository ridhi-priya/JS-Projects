'use strict'
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '🎉Correct Number🎊'
document.querySelector('.number').textContent = 10
document.querySelector('.score').textContent = 12
document.querySelector('.guess').value = 16

console.log((document.querySelector('.guess').textContent = 16))
