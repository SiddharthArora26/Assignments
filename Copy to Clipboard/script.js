let popup = document.getElementById("popup");

function showPopup(){
    popup.classList.add("open_popup");
};
function closePopup(){
    popup.classList.remove("open_popup");
};


let copy = (text_id) => {
  document.getElementById(text_id).select();
  document.execCommand("copy");
  showPopup();
};

const btn = document.querySelector(".btn");
const text = document.querySelector(".copy-text");
btn.addEventListener("click", () =>{
    text.select();
    text.setSelectionRange(0, 10000);
    document.execCommand("copy");
    btn.classList.toggle("copied");
    btn.innerHTML = "Copied!";
  
    setTimeout(function(){
      btn.classList.toggle("copied");
      btn.innerHTML = "Copy";
    }, 3000);
  });