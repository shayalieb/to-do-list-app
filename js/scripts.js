


let li = $('<li></li>');//adding a li to the list
let inputValue = $('#input').val();//targeting the input ID to allow input
li.append(text);//appending it to the DOM


if (inputValue === '') {//If there is an empty input box
    $('#list').
}else {//or else
    let li = $('#list');
    $('#list').append(li);
}

//creating the crossout function
function crossOut() {
    list.toggleClass('.strike');
}
li.on('dblclick', function crossOut() {
    li.toggleClass("strike");

});

//adding thedelete button as is "X"
let crossButton = $('<crossOutButton></crossOutButton>');
crossButton.append(document.createTextNode("X"));
li.append(crossButton);

crossButton.on('click', deleteListItem);
    function deleteListItem(){
        li.addClass("delete")
    }

$('#list').sortable();

