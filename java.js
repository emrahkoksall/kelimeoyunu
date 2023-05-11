var isimler = ["emrah", "alper", "furkan", "ibrahim", "enes"]

var rastgele = isimler[Math.floor(Math.random() * isimler.length)];

var kut = document.getElementById("#kutu1");

kut.textContent = rastgele;

kut.style.display="none";

function tahmin() {
    var girdi = document.getElementById("#girdi");

    var hak=document.getElementById("#hak").innerHTML;

    let kalanhak=parseInt(hak);

    kalanhak=kalanhak-1;
    console.log(kalanhak);


    if (rastgele == girdi.value) {
        alert("Oyunu kazandınız")
        kut.style.display="";
    }
    
}