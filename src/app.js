document.addEventListener('DOMContentLoaded',() => {
    const boardArray = [
        {
            name:'card1',
            img:'src/img/blank.png'
        },
        {
            name:'card2',
            img:'src/img/blank.png'
        },
        {
            name:'card3',
            img:'src/img/blank.png'
        },
        {
            name:'card4',
            img:'src/img/blank.png'
        },
        {
            name:'card5',
            img:'src/img/blank.png'
        },
        {
            name:'card6',
            img:'src/img/blank.png'
        },
        {
            name:'card7',
            img:'src/img/blank.png'
        },
        {
            name:'card8',
            img:'src/img/blank.png'
        },
        {
            name:'card9',
            img:'src/img/blank.png'
        }
    ]

    
    const grid = document.querySelector('.grid')
    let tictocChosen = []
    let tictocWon = []
    function createBoard(){
        for (let i = 0; i < boardArray.length ; i++) {
            const field  = document.createElement('img')
            field.setAttribute('class','board')
            field.setAttribute('src','src/img/blank.png')
            field.setAttribute('data-id',i)
            console.log(field.getAttribute('data-id'))
            field.setAttribute('which','')
            field.addEventListener('click',tictactoe)
            grid.appendChild(field)
            
        }
    }
    let j=0
    function tictactoe() {
        let tictocId = this.getAttribute('data-id')
        // console.log(boardArray[tictocId])
        tictocChosen.push(tictocId,boardArray[tictocId].name)
        // console.log('ids ' + tictocId + ' name ' + boardArray[tictocId].name)

        if(j==0 ){
            this.setAttribute('src','src/img/X.jpg')
            this.setAttribute('which','x')
            
            j=1
            // alert('your turn(o) ')
        }else if(j==1){
            
            this.setAttribute('src','src/img/O.gif')
            this.setAttribute('which','o')

            j=0
            // alert('your turn(x) ')
        }

        if(true){

            setTimeout(checkForToe,10)
            
        }

    }
   
    function dontClick(card){
        let cards =card
        for (let i = 0; i < 8; i++) {
            cards[i].removeEventListener('click',tictactoe)
           }
    }

    function checkForToe(){
        const card = document.querySelectorAll('img')
        // console.log(card.length)
        // console.log(card[0].getAttribute('src'))
        // console.log(card[1].getAttribute('src'))
        // console.log(card[2].getAttribute('src'))
        if(card[0].getAttribute('src')!='src/img/blank.png' && card[0].getAttribute('src') == card[1].getAttribute('src') 
        && card[0].getAttribute('src')==card[2].getAttribute('src')){
            console.log('you win row1 ' + card[0].getAttribute('which'))
           dontClick(card)

        }else if(card[3].getAttribute('src')!='src/img/blank.png' && card[3].getAttribute('src') ==card[4].getAttribute('src')
         && card[3].getAttribute('src') ==card[5].getAttribute('src')) {
            console.log('you win row2 ' + card[3].getAttribute('which'))
           dontClick(card)

        }else if(card[6].getAttribute('src')!='src/img/blank.png'  
        && card[6].getAttribute('src') == card[7].getAttribute('src') && card[6].getAttribute('src') == card[8].getAttribute('src')){ 
            console.log('you win row3 ' + card[6].getAttribute('which'))
           dontClick(card)

        }
        else if( card[0].getAttribute('src')!='src/img/blank.png' && card[0].getAttribute('src') == card[3].getAttribute('src') 
        && card[0].getAttribute('src') == card[6].getAttribute('src')){ 
            console.log('you win col1 ' + card[0].getAttribute('which'))
           dontClick(card)

        }
        else if( card[1].getAttribute('src')!='src/img/blank.png' && card[1].getAttribute('src') == card[4].getAttribute('src')
         && card[1].getAttribute('src') == card[7].getAttribute('src')){ 
            console.log('you win col2 ' + card[1].getAttribute('which'))
           dontClick(card)

        }
        else if( card[2].getAttribute('src')!='src/img/blank.png' && card[2].getAttribute('src') == card[5].getAttribute('src') 
        && card[2].getAttribute('src') == card[8].getAttribute('src')){ 
            console.log('you win col3 ' + card[2].getAttribute('which'))
           dontClick(card)

        }
        else if( card[0].getAttribute('src')!='src/img/blank.png' && card[0].getAttribute('src') == card[4].getAttribute('src')
         && card[0].getAttribute('src') == card[8].getAttribute('src')){ 
            console.log('you win left ' + card[0].getAttribute('which'))
           dontClick(card)

        }
        else if( card[2].getAttribute('src')!='src/img/blank.png' && card[2].getAttribute('src') == card[4].getAttribute('src') 
        && card[4].getAttribute('src') == card[6].getAttribute('src')){ 
            console.log('you win right ' + card[2].getAttribute('which'))
           dontClick(card)

        }
        
    }
    console.log('Berabere')


    createBoard()
})
