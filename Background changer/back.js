const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const subContainer = document.querySelector(".sub-container")
const para = document.querySelector("#para")

btn1.onclick = () => {
    document.body.style = "background:linear-gradient(90deg, rgba(2,0,36,1) 0%, #3C3B3F 0%, #605C3C  76%);";
    subContainer.style = "border: 2px solid white; background-color: transparent"
    para.style = "color: white;"
}

btn2.onclick = () => {
    document.body.style = "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, #FF512F 0%, #DD2476  76%);";
    subContainer.style = "border: 2px solid black; background-color: transparent"
    para.style = "color: black;"
}

btn3.onclick = () => {
    document.body.style = "background:linear-gradient(90deg, rgba(2,0,36,1) 0%, #ffe259 0%, #ffa751 76%);";
    subContainer.style = "border: 2px solid black;  background-color: transparent"
    para.style = "color: black;"
}

btn4.onclick = () => {
    document.body.style = "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, #314755 0%, #26a0da  76%);";
    subContainer.style = "border: 2px solid black; background-color: transparent"
    para.style = "color: black;"
}