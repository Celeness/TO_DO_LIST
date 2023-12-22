// $(document).ready(function () {
//   $('#task').focus()
// })
let noteList = [] // At first we have to emtpy array which we can store inputs
$('#task').keydown(function (event) {
  let key = event.key

  if (key === 'Enter') {
    let userInput = $('#task').val()
    userInput = userInput.toUpperCase()
    if (userInput !== '' && userInput.length < 45 && findDifferentValue(userInput) && aLotOfWorkToDo(noteList)) {
      // If the input is not empty, then work
      noteList.push(userInput)
      $('#task').val('')
      makeContent(userInput)
    }
  }
})
$('.newContent .fa-plus').click(function () {
  let userInput = $('#task').val()
  userInput = userInput.toUpperCase()
  if (userInput !== '' && userInput.length < 45 && findDifferentValue(userInput) && aLotOfWorkToDo(noteList)) {
    // If the input is not empty, then work
    noteList.push(userInput)
    $('#task').val('')
    makeContent(userInput)
  }
})
function aLotOfWorkToDo(noteList) {
  if (noteList.length > 7) {
    alert('PLEASE COMPLEATE AT LEAST ONE OF YOUR TASK ! :) ! :)')
    return 0
  }
  return 1
}

// Creating a div which contains the 'content' and call the addListener function if user click a icon
function makeContent(val) {
  $('.theList').append(
    `<div class="content">
        <div class="task">${val}</div>
        <div class="check" id="#check"><img src="./assets/tick_box.svg" alt="check icon" width="22px" height="22px"></div>
        <div class="delete-check" id="#delete"><img src="./assets/delete.svg" alt="delete icon" width="24px" height="24px"></div>
    </div>`
  )
  addListener(val)
}
//Create a function that listen content number
function addListener(val) {
  $('.content:last-child').click(function (event) {
    let control = event.target.className
    if (control === 'check') {
      let contentNumber = findContent(val)
      document.querySelectorAll('.content')[contentNumber].classList.toggle('line')
    } else if (control === 'delete-check') {
      let contentNumber = findContent(val)
      document.querySelectorAll('.content')[contentNumber].remove()
      noteList.splice(contentNumber, 1) //ContentNumber--> silmeyi başlattığın index değerini verir.
    }
  })
}
//Create a function that finds content number
function findContent(val) {
  for (let i = 0; i < noteList.length; i++) {
    if (val === noteList[i]) {
      return i
    }
  }
}
function findDifferentValue(userInput) {
  for (let i = 0; i < noteList.length; i++) {
    if (userInput === noteList[i]) {
      return 0
    }
  }
  return 1
}
