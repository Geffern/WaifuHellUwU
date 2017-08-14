var Cena = ~~Cookies.get("JCena");
var Dwaifu = ~~Cookies.get("Animoo");
var Zucc = ~~Cookies.get("Zuccd");

document.getElementById("one").innerHTML = Cena;
document.getElementById("two").innerHTML= Dwaifu;
document.getElementById("three").innerHTML= Zucc;




    function getCena(){
        Cena +=1;
        Cookies.set("JCena", Cena);
        document.getElementById("one").innerHTML = Cena;
    }

    function getDinner(){
        Dwaifu +=1;
        Cookies.set("Animoo", Dwaifu);
        document.getElementById("two").innerHTML= Dwaifu;
    }
    function getZucc(){
        Zucc +=1;
        Cookies.set("Zuccd", Zucc);
        document.getElementById("three").innerHTML= Zucc;
    }
    
    document.getElementById('submit').onclick = function(){
        Cookies.set( 'JCena', 0 );
        Cookies.set( 'Animoo', 0 );
        Cookies.set( 'Zuccd', 0 );
        window.location.reload();
    };
