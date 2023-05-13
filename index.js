document.querySelector("form").addEventListener("submit",docdata);

function docdata() {
  event.preventDefault();
  var name=document.getElementById("UserName").value;
  console.log(name);

}