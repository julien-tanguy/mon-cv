// Modifier la taile de la navabar au scroll
window.onscroll = function(){
    if(screen.width < 900){
        sizeScroll = 1;
    }else{
       sizeScroll = 200; 
    }
    
    if(document.documentElement.scrollTop > sizeScroll){
        // document.getElementById('navbar').style.backgroundColor = '#1D1D1F';
        document.getElementById('navbar').style.padding = '10px 10px';
        // document.getElementById('navbar').classList.remove('navbar-light')
        // document.getElementById('navbar').classList.add('navbar-dark')
    }else{
        // document.getElementById('navbar').style.backgroundColor = '#11ffee00';
        document.getElementById('navbar').style.padding = '40px 10px';
        // document.getElementById('navbar').classList.add('navbar-light')
        // document.getElementById('navbar').classList.remove('navbar-dark')
    }

}