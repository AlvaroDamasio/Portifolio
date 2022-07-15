let card = document.querySelector('.card')
        let data = document.querySelector(".data")
        
        card.onmouseenter= function(){
            data.style.display="block"
            
        }
        card.onmouseleave = function(){
            data.style.display = "none"
            console.log('foraa');
        }
        card.onscrow = function(){
            data.style.display = "none"
            console.log('foraa');
        }