//chrome://extensions/
let mylead = []
const inputs = document.getElementById("inputl")
const inputl1 = document.querySelector("#inputbtn1")
const ull1 = document.querySelector("#ull")
const deletel1 = document.getElementById("deletebtn")
const inputl2 = document.getElementById("inputbtn2")
function print(lead) {
    let list = ""
    for (let i = 0; i < lead.length; i++) {
        // list += "<li><a href='"+mylead[i]+"' target=_blank>" + mylead[i] + "</a></li>"
        list += `<li>
                   <a target=_blank href=${lead[i]}'>
                    ${lead[i]}
                   </a>
                </li>`
    }
    ull1.innerHTML = list
}


inputl2.addEventListener("click", function () {
    //grab uls of current tab using chrome api
    // chrome.tabs.query({active:true,currentWindow:true},function(tabs){ })
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs)
        mylead.push(tabs[0].url)
        localStorage.setItem("mylead", JSON.stringify(mylead))//we convert array to string to set values in localstrorage
        print(mylead)
    })

})
deletel1.addEventListener("dblclick", function () {
    localStorage.clear()
    mylead = []
    print(mylead)

})
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("mylead"))//mylead was array and json only stores strings so while getting we convert strings back to array
if (leadsfromlocalstorage) {
    mylead = leadsfromlocalstorage
    print(mylead)
}
inputl1.addEventListener("click", function () {
    mylead.push(inputs.value)
    inputs.value = ""
    localStorage.setItem("mylead", JSON.stringify(mylead))//we convert array to string to set values in localstrorage
    print(mylead)


})
