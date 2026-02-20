const input = document.getElementById("input")
const btnAdd = document.getElementById("btnAdd")
const btnedit = document.getElementById("btnedit")
const btndelete = document.getElementById("btndelete")
const list = document.getElementById("list")

btnAdd.addEventListener("click", (a)=>{
  a.preventDefault();

  let opt = new Option(input.value, input.value)
  list.add(opt, undefined);
  input.value = "";
})

btndelete.addEventListener("click", (d)=>{
  d.preventDefault();

  let select = [];

    for(let i=0; i<list.options.length; i++){
        select[i] = list.options[i].selected;
    }

    let index = list.options.length;

    while(index--){
        if(select[index]){
            list.remove(index);
        }
    }
})

btnedit.addEventListener("click", () => {
  let selectedIndex = list.selectedIndex;

  list.options[selectedIndex].text = input.value;
  list.options[selectedIndex].value = input.value;

  input.value = "";
});