let wrap = document.getElementById('wrap')
let form = document.getElementById('form')
let inputs = document.querySelectorAll('[name="form"]')
let btnRules = document.querySelector('.btnRules')
let rules = document.querySelector('.rules')
let winBlock = document.querySelector('.winBlock')

let toggleRules = () => {
    rules.classList.toggle('visible')
    btnRules.classList.toggle('active')
}

let player = 'X'
let error = ''

const textList = document.querySelectorAll('#errorText')
const textListColomn = document.querySelectorAll('#errorTextColomn')

const draw = arr => {
  let string
  
  for(i = 0; i < arr.length ; i++){
    for(j = 0; j < arr.length ; j++){
      let el = arr[i][j]
      if(el === 1){
        string = `<div class="square static" data-x='${j}' data-y='${i}'>
<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
<g>
	<g>
		<path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
	</g>
</g>
</svg>
</div>`
      }
      else if(el === 0){
        string = `<div class="square static" data-x='${j}' data-y='${i}'>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 341.333 341.333" style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve">
<g>
	<g>
		<path d="M170.667,0C76.41,0,0,76.41,0,170.667s76.41,170.667,170.667,170.667s170.667-76.41,170.667-170.667S264.923,0,170.667,0z     M170.667,298.667c-70.692,0-128-57.308-128-128s57.308-128,128-128s128,57.308,128,128S241.359,298.667,170.667,298.667z"/>
	</g>
</g>
</svg>
</div>`
      }
      else{
        string = `<div class="square" data-x='${j}' data-y='${i}'></div>`
      } 
      wrap.innerHTML += string
    }
  }
}

draw(desc)

let squares = document.querySelectorAll('.square')

form.addEventListener('change' , () => {
  inputs.forEach(el => {
    if(el.checked){
      player = el.value
    }
  })
})


squares.forEach(el => {
  el.onclick = function() {
    let x,
        y
    if(!el.classList.contains('static')){
    if(player == 'X'){
      x = el.dataset.x
      y = el.dataset.y
      desc[y][x] = 1
      el.innerHTML = `<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
<g>
	<g>
		<path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
	</g>
</g>
</svg>
</div>`
    }else{
      x = el.dataset.x
      y = el.dataset.y
      desc[y][x] = 0
      el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 341.333 341.333" style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve">
<g>
	<g>
		<path d="M170.667,0C76.41,0,0,76.41,0,170.667s76.41,170.667,170.667,170.667s170.667-76.41,170.667-170.667S264.923,0,170.667,0z     M170.667,298.667c-70.692,0-128-57.308-128-128s57.308-128,128-128s128,57.308,128,128S241.359,298.667,170.667,298.667z"/>
	</g>
</g>
</svg>`
    }
  }
  }
})

let gameMaster = () => {

  for (i = 0; i < desc.length; i++) {
    for (j = 0; j < desc.length; j++) {
      if (j >= 1) {
        if ((desc[i][j] === desc[i][j - 1] &&  desc[i][j - 1] === desc[i][j - 2]) && (desc[i][j] === 1 || desc[i][j] === 0)) {
          squares.forEach(el => {
            if (+el.dataset.y === i) {
              el.classList.add('error')
            }
          })
        }else if((desc[i][j] != desc[i][j - 1] &&  desc[i][j - 2] != desc[i][j - 1]) && (desc[i][j] === 1 || desc[i][j] === 0)){
          squares.forEach(el => {
            if (+el.dataset.y === i) {
              el.classList.remove('error')
            }
          })
        }
      }
    }
  }

  let xCount = 0
  let oCount = 0
  
  for( i = 0 ; i < desc.length ; i++){
      xCount = 0
      oCount = 0
    for( j = 0 ; j < desc.length ; j++){
      if(desc[i][j] === 1){
        xCount++
      }else if(desc[i][j] === 0){
        oCount++
      }
    }
     if(xCount > desc.length/2 || oCount > desc.length/2){
       squares.forEach(el => {      
          if(+el.dataset.y === i){
            el.classList.add('error')
          }
        })
      }
      else{
        squares.forEach(el => {      
          if(+el.dataset.y === i){
            el.classList.remove('error')
          }
        })
      }
      xCount = 0
      oCount = 0
    }
}
  
let gameMasterColomn = () => {

  for (i = 0; i < desc.length; i++) {
    for (j = 0; j < desc.length; j++) {
      if (i >= 2) {
        console.log(desc[i][j] + ';' + desc[i - 1][j]);
        if ((desc[i][j] === desc[i - 1][j] &&  desc[i - 1][j] === desc[i - 2][j]) && (desc[i][j] === 1 || desc[i][j] === 0)) {
          squares.forEach(el => {
            if (+el.dataset.x === j) {
              el.classList.add('errorColomn')
            }
          })
        }else if((desc[i][j] != desc[i - 1][j] &&  desc[i - 1][j] != desc[i - 2][j]) && (desc[i][j] === 1 || desc[i][j] === 0)){
          squares.forEach(el => {
            if (+el.dataset.x === j) {
              el.classList.remove('errorColomn')
            }
          })
        }
      }
    }
  }

  let xCount = 0
  let oCount = 0
  
  for( i = 0 ; i < desc.length ; i++){
      xCount = 0
      oCount = 0
    for( j = 0 ; j < desc.length ; j++){
      if(desc[j][i] === 1){
        xCount++
      }else if(desc[j][i] === 0){
        oCount++
      }
    }
     if(xCount > desc.length/2 || oCount > desc.length/2){
       squares.forEach(el => {      
          if(+el.dataset.x === i){
            el.classList.add('errorColomn')
          }
        })
      }
      else{
        squares.forEach(el => {      
          if(+el.dataset.x === i){
            el.classList.remove('errorColomn')
          }
        })
      }
      xCount = 0
      oCount = 0
    }
}

let errors = 0

const gmaeObserver = () => {
  errors = 0
  for (i = 0; i < desc.length; i++) {
    for (j = 0; j < desc.length; j++) {

      if (desc[i][j] === 1 || desc[i][j] === 0) {

        squares.forEach(el => {
          if (+el.dataset.x === j && +el.dataset.y === i) {
            if (el.classList.contains('error') || el.classList.contains('errorColomn')) {
              errors++
            }
          }
        })

      } else {

        errors++
        
      }
    }
  }

  if (errors === 0) {
    winBlock.classList.add('active')
  }

}

wrap.addEventListener('click' , gameMaster)
wrap.addEventListener('click' , gmaeObserver)
wrap.addEventListener('click' , gameMasterColomn)


