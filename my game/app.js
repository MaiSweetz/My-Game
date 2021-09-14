document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const width = 28 //28 x 28 = 784 squares
    let score = 0

    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,2,2,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,0,0,1,
        1,0,0,2,2,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,0,0,1,
        1,0,2,2,2,2,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,2,2,2,2,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,6,4,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,5,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,5,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,5,5,5,4,4,4,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,4,4,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,4,4,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,4,4,4,5,5,5,5,5,5,5,4,4,0,0,0,0,0,0,0,1,
        1,0,0,0,0,4,4,4,5,5,5,0,0,5,5,5,5,4,4,4,4,0,0,0,0,0,0,1,
        1,0,0,4,4,5,5,5,0,0,0,0,0,5,5,5,4,4,4,4,4,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,5,4,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,4,4,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,4,4,4,4,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,4,5,5,5,5,4,4,4,4,4,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,4,5,5,5,5,5,5,4,4,4,4,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,4,5,5,0,0,0,0,0,5,4,4,4,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,4,5,5,0,0,0,0,0,0,0,5,4,4,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,4,4,5,0,0,0,0,0,0,0,0,0,5,4,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,4,5,0,0,0,0,0,0,0,0,0,0,5,4,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,5,4,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1
    ]

    //0 = background
    //1 = wall
    //2 = gun
    //3 = floor
    //4 = body
    //5 = shadow

const squares = []

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
       const square = document.createElement('div')
       grid.appendChild(square)
       squares.push(square)

       if(layout[i] === 0){
         squares[i].classList.add('background')
       } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
       } else if (layout[i] === 2){
        squares [i].classList.add('gun')
       } else if (layout[i] === 3){
         squares [i].classList.add('floor')
       } else if (layout [i] === 4){
         squares [i].classList.add('body')
       } else if (layout [i] === 5){
         squares [i].classList.add('shadow')
       }
 }
}
createBoard()


  
//draw eatman
    let eatmanCurrentIndex = 741
    squares[eatmanCurrentIndex].classList.add('eatman')


    function moveEatman(e) {
      squares[eatmanCurrentIndex].classList.remove('eatman')
      switch(e.keyCode) {
            case 37:
            if(
              eatmanCurrentIndex % width !== 0 &&
              !squares[eatmanCurrentIndex -1].classList.contains('wall') 
            )
            eatmanCurrentIndex -= 1
            if (squares[eatmanCurrentIndex -1] === squares[363]) {
            eatmanCurrentIndex = 391
        }
        break

        case 39:
            if(
              eatmanCurrentIndex % width < width - 1 &&
              !squares[eatmanCurrentIndex +1].classList.contains('wall') 
            )
            eatmanCurrentIndex += 1
            if (squares[eatmanCurrentIndex +1] === squares[392]) {
              eatmanCurrentIndex = 364
        }
        break
    }
    squares[eatmanCurrentIndex].classList.add('eatman')
    GameOver()
  }
    document.addEventListener('keyup', moveEatman)

    //move eat-man with buttons

    var element = document.getElementById('buttonLeft');
    element.onclick = function () {
      squares[eatmanCurrentIndex].classList.remove('eatman')
      if(
        eatmanCurrentIndex % width !== 0 &&
        !squares[eatmanCurrentIndex -1].classList.contains('wall') 
      )
      eatmanCurrentIndex -= 1
      if (squares[eatmanCurrentIndex -1] === squares[363]) {
      eatmanCurrentIndex = 391
  }
  squares[eatmanCurrentIndex].classList.add('eatman')
};
    
    var element = document.getElementById('buttonRight');
    element.onclick = function () {
      squares[eatmanCurrentIndex].classList.remove('eatman')
      if(
        eatmanCurrentIndex % width < width - 1 &&
        !squares[eatmanCurrentIndex +1].classList.contains('wall') 
      )
      eatmanCurrentIndex += 1
      if (squares[eatmanCurrentIndex +1] === squares[392]) {
        eatmanCurrentIndex = 364
  }
  squares[eatmanCurrentIndex].classList.add('eatman')
};

 


    class Food {
        constructor(className, startIndex, speed) {
          this.className = className
          this.startIndex = startIndex
          this.speed = speed
          this.currentIndex = startIndex
          this.timerId = NaN
        }
      }
        //food speed
        let speedfoodmelon = [700]
        let speedfoodorange = [300]
        let speedfoodstraw = [2000]


  
      //the foods
        foods = [
        new Food('melon', 115, speedfoodmelon),
        new Food('orange',  125, speedfoodorange),
        new Food('strawberry', 135, speedfoodstraw),
        ]
     //draw foods onto the grid
  
        foods.forEach(food => {
            squares[food.currentIndex].classList.add(food.className)
            squares[food.currentIndex].classList.add('food')
       })



    foods.forEach(food => drop(food))


    function drop(food){      
        const directions = [0, width]
        let direction = directions[Math.floor(Math.random() * directions.length)]
  
        food.timerId = setInterval(function() {
            if  (!squares[food.currentIndex + direction].classList.contains('food') &&
              !squares[food.currentIndex + direction].classList.contains('wall') ) {
                //remove the food classes
                squares[food.currentIndex].classList.remove(food.className)
                squares[food.currentIndex].classList.remove('food')
                //move into that space
                food.currentIndex += direction
                squares[food.currentIndex].classList.add(food.className, 'food')
            //else find a new random direction ot go in
            } else direction = directions[Math.floor(Math.random() * directions.length)]
            
            if(squares[food.currentIndex].classList.contains('eatman')) {
                squares[food.currentIndex].classList.remove(food.className, 'food')
                food.currentIndex = food.startIndex
                score +=1
                scoreDisplay.innerHTML = score
                squares[food.currentIndex].classList.add(food.className, 'food')
              }
              // GameOver
              function GameOver() {
                if (squares[food.currentIndex].classList.contains('floor')) {
                  squares[food.currentIndex].classList.remove(food.className, 'food')
                  food.currentIndex = food.startIndex
                  foods.forEach(food => clearInterval(food.timerId))
                  document.removeEventListener('keyup', moveEatman)
                  setTimeout(function(){ var gameover = confirm("Game Over Deseja jogar novamente?"); if (gameover == true){window.location.reload();} else { alert("Você desistiu de jogar, que pena :(");}}, 500)
              }
            }
      GameOver()
    }, food.speed)

}



});