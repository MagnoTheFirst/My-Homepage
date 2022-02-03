function postContactEntry(obj) {
    var url = 'http://alejandro-laneri.internet-box.ch:8085/api/v1/contact/entry';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url);
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(obj);

}

function getFieldContent() {
    var contactEntry = {};
    contactEntry.name = document.getElementById('name').value;
    contactEntry.email = document.getElementById('email').value;
    contactEntry.comment = document.getElementById('comments').value;
    postContactEntry(JSON.stringify(contactEntry));
    alert(JSON.stringify(contactEntry));

}