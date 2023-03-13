
let html="";
function navbar(){
    let links =[
        ["Inicio","../index.html"],
        ["Dónde encontrarnos", "../html/ubi.html"],
        ["Envíos","../html/envios.html"],
        ["Nosotros","../html/contacto.html"]
    ];
    
    for (let i=0;i<links.length;i++){
        let str=""+links[i];
        str=str.split(',');
        html+="<ul class='nav justify-content-end'><li class='nav-item'><a class='nav-link active' aria-current='page' href='"+str[1]+"'>"+str[0]+"</a></li></ul>";
        document.getElementById('nav').innerHTML=html;
    }   
    
}
navbar();