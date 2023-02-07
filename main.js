// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#modal").classList.add("hidden");
  const likeButton = document.querySelectorAll(".like-glyph");
  likeButton.forEach(el => el.addEventListener('click', () => {
    mimicServerCall()
      .then(resp => {
        if(el.textContent === EMPTY_HEART) {
          el.textContent = FULL_HEART;
          el.classList.add("activated-heart");
        }
        else if(el.textContent === FULL_HEART) {
          el.textContent = EMPTY_HEART;
          el.classList.remove("activated-heart");
        }
      })
      .catch(err => {
        const error = document.querySelector("#modal");
        error.classList.remove("hidden");
        error.innerText = err;
        setTimeout(() => error.classList.add("hidden"), 3000);
      })

  }))
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
