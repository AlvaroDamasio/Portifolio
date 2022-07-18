class NavBar{
    constructor(toggleMenu, navBarList){
        
        this.toggleMenu = document.querySelector(toggleMenu);
        this.navbarList = document.querySelector(navBarList)
        this.activeClass = "nav-bar__list--active"

        

        

    }
    handleClick(){
        this.navbarList.classList.toggle(this.activeClass)
    }

    addEventListener(){
        
        this.toggleMenu.addEventListener('click',()=>{
            this.navbarList.classList.toggle(this.activeClass)
        })
    }

    init(){
        if(this.toggleMenu){
            this.addEventListener()
        }
    }
}

const navBar = new NavBar('.toggleMenu', ".nav-bar__list")
navBar.init()