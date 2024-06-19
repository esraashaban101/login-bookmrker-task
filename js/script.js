var inputName = document.getElementById("site-name");
var inputURL = document.getElementById("site-url");
var allsites = [];
if (JSON.parse(localStorage.getItem("all sites")) !== null) {
  allsites = JSON.parse(localStorage.getItem("all sites"));
  display_data();
}

function visited_site() {
  if (validNameData() == true && validUrlData() == true) {
    var site = {
      siteName: inputName.value,
      siteURL: inputURL.value,
    };

    allsites.push(site);
    localStorage.setItem("all sites", JSON.stringify(allsites));
    console.log(allsites);
    clearsite();
    display_data();
  } else {
    document.getElementById("message-box").classList.remove("d-none");
  }
}
function display_data() {
  var html = "";
  for (var i = 0; i < allsites.length; i++) {
    html += `<tr>
      <td>${i + 1}</td>
      <td>${allsites[i].siteName}</td>
      <td><i class="fa-regular fa-circle-check green_icon"></i></td>
      <td> <button onclick=deleteData(${i}) class="d-block m-auto border-0 pt-2 pb-2 pe-3 ps-3 rounded-1 ">Delete</button></td>
      </tr>`;
  }
  document.getElementById("table_body").innerHTML = html;
}
function clearsite() {
  inputName.value = null;
  inputURL.value = null;
}
function deleteData(index) {
  allsites.splice(index, 1);
  localStorage.setItem("all sites", JSON.stringify(allsites));
  display_data();
}

function validNameData() {
  var regex = /^[a-z]{1,}[a-z]{1,}[a-z]{1,}$/;

  var text = inputName.value;

  if (regex.test(text) == true) {
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    return true;
  } else {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
    return false;
  }
}
function validUrlData() {
  var text2 = inputURL.value;
  var regex2 = /^(http|https)[a-z]{1,}$/;
  if (regex2.test(text2) == true) {
    inputURL.classList.add("is-valid");
    inputURL.classList.remove("is-invalid");
    return true;
  } else {
    inputURL.classList.add("is-invalid");
    inputURL.classList.remove("is-valid");

    return false;
  }
}
function hide_message() {
  document.getElementById("message-box").classList.add("d-none");
}
