
var list = []

let restore = localStorage.getItem("num")


if (restore == null) {
  list = []
}
else {
  list = JSON.parse(restore)
  console.log(list);

  list.forEach((item) => {


    let a = String(item.name)



    let fist = /[a-j]/
    let sist = /[A-J]/
    let str1 = a.charAt(0)


    let fist1 = /[k-z]/
    let sist1 = /[K-Z]/
    let str2 = a.charAt(0)


    if (fist.test(str1) == true || sist.test(str1) == true) {
      let show = `<div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <h4>${item.name}</h4>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
        <h4>${item.number}</h4>
      </div>
    </div>`
      document.getElementById("a").innerHTML += show

    }


    else if (fist1.test(str2) == true || sist1.test(str2) == true) {
      let show = `<div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <h4>${item.name}</h4>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
        <h4>${item.number}</h4>
      </div>
    </div>`
      document.getElementById("b").innerHTML += show

    }

  })

}









function run() {
  let name = document.getElementById("name").value
  let number = document.getElementById("number").value
  if (name.length === 0) {

    document.querySelector("#helpIdName").style.display = "block"

  }


  if (number.length === 0) {

    document.querySelector("#helpIdNum").style.display = "block"

  }
  else {

    document.querySelector("#helpIdName").style.display = "none"
    document.querySelector("#helpIdNum").style.display = "none"


  }

  let a = {
    name: name,
    number: number
  }
  let fist = /[a-j]/
  let sist = /[A-J]/
  let str1 = a.name.charAt(0)


  let fist1 = /[k-z]/
  let sist1 = /[K-Z]/
  let str2 = a.name.charAt(0)


  if (fist.test(str1) == true || sist.test(str1) == true) {
    let show = `<div class="row">
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <h4>${a.name}</h4>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
      <h4>${a.number}</h4>
    </div>
  </div>`

    document.getElementById("a").innerHTML += show

  }


  else if (fist1.test(str2) == true || sist1.test(str2) == true) {
    let show = `<div class="row">
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <h4>${a.name}</h4>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
      <h4>${a.number}</h4>
    </div>
  </div>`
    document.getElementById("b").innerHTML += show

  }
  list.push(a)
  localStorage.setItem("num", JSON.stringify(list))

   document.getElementById("name").value=""
   document.getElementById("number").value=""

}

function cross() {
  localStorage.clear()
  location.reload()
}



document.getElementById("search").addEventListener("focusin", () => {
  document.getElementById("search").value = ""
})

document.getElementById("search").addEventListener("focusout", () => {
  if (document.getElementById("search").value == 0) {
    document.getElementById("search").value = "Search"
  }
})



function find() {


  let find = document.getElementById("search").value
  list.forEach((item) => {
    if (item.name === find) {

      document.getElementById("item-name").innerText = `${item.name}`


      document.getElementById("item-number").innerText = `${item.number}`
    }
  })

}

