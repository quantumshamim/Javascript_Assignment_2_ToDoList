const input = document.getElementById("input")
const btnAdd = document.getElementById("btnAdd")
const list = document.getElementById("list")

btnAdd.addEventListener("click", (e)=>{
  e.preventDefault();

  let opt = new Option(input.value, input.value)
  list.add(opt, undefined);
  input.value = "";
})