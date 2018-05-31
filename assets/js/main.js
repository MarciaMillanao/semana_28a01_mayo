//alert("hola");
const btn_hide = document.getElementById("hide");
const btn_show = document.getElementById("show");

btn_hide.addEventListener("click", () => {
  document.getElementsByClassName("text_hide")[0].classList.add("hide");
})

btn_show.addEventListener("click", () => {
  document.getElementsByClassName("img_show")[0].classList.remove("img_show");
})

/*const iteracion = () => {
  const names = "Marcia Karina";
  let result = "";
  for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    result += names[i].toUpperCase();
    console.log(result);
    //let data = document.getElementById("datos");
    //data.innerHTML = (result);
  }
}
iteracion();*/

function iteracion() {
  var names = "Marcia Karina";
  var result = "";
  for(var i = 0; i < names.length; i++){
    console.log(names[i]);
    result += names[i].toUpperCase();
    console.log(result)
    //let data = document.getElementById("datos");
    //data.innerHTML = (result);
  }
}
iteracion()

