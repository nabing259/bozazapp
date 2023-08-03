document.querySelector("form").addEventListener("submit", addToList);

function addToList(){
    event.preventDefault();

    var category = document.querySelector("#category").value;
    var title = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;
    
    var td1 = document.createElement("td");
    td1.innerText = category;
    var td2 = document.createElement("td");
    td2.innerText = title;
    var td3 = document.createElement("td");
    td3.innerText = price;

    var tr = document.createElement("tr");

    tr.append(td1, td2, td3);

    document.querySelector("tbody").append(tr);
}