$(document).ready(()=>{
    const input = $("#to-do");
const btn = $("#btn");
const list = $("#todo_list");

btn.click( (event) => {

    event.preventDefault();

    let task = input.val().trim();
    if (task !== ""){
        // list.createText = task; 
        addtodo_item(task);
        input.val('') ;
    }
});

input.keypress(function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addBtn.click();
    }
});

function  addtodo_item(text_element) {
    const li = $("<li></li>").text(text_element);

    list.append(li);

    const button = $('<i class="uil uil-trash"></i>')
    // button.text( '🗑' );
    
    li.append(button);
    button.click((event)=>{
        event.stopPropagation();
        $(li).remove();
    });
}

});




// -------------delete section -------------
