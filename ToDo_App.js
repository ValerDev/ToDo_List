function newElement() {
      let text= document.getElementById("inp").value;
      if(text===''){
          return alert("You don't write what to do!!!");
      }
      let mydiv= document.getElementById("mydiv");
      let newItem = document.createElement("div");
      mydiv.appendChild(newItem);
      newItem.innerHTML =  "<div id='DV'>" +  text + "</div>";
      newItem.id = "D";
      let removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.id = "myBtn"
      newItem.appendChild(removeButton);
      removeButton.addEventListener("click",(e) => {
      let mydiv= document.getElementById("mydiv");
      mydiv.removeChild(e.currentTarget.parentNode)
      })
    document.getElementById("inp").value = '' ;
  };

document.addEventListener('DOMContentLoaded',init);
function init(){
    let txt = document.getElementById('inp');
    inp.addEventListener('keypress', anykey);
}
function anykey(ev){
    if(ev.keyCode === 13){
      newElement();
        };
    };

    var x = document.getElementById("myBtn")
    if (x){
    x.addEventListener("click", clearlist,false)
    }
    function clearlist(e) {
      console.log(e.target)
    var list = e.target.parentNode;
    list.parentNode.removeChild(list);
    }

    mydiv.addEventListener('click', f1)
    var y = document.getElementById("D");
    if(y){
      y.addEventListener("click", f1,false);
    }
    function f1(el){
      
    el.target.classList.toggle('line');
}