employees = [
    "Phyllis",
    "Angela",
    "Dwight",
    "Oscar",
    "Creed",
    "Pam",
    "Jim",
    "Stanley",
    "Michael",
    "Kevin",
    "Kelly"
    ]

ppclist = []  


function makeNames(names) {
    $("#names").empty()
    $.each(names,function(index,value){
        var creatediv = $("<div class='gridlayout e'>")
        creatediv.text(value)
        creatediv.draggable({revert:true, stack:".products", zIndex: 100})
        $(".container").append(creatediv)
        $(".HeaderStyle").addClass("d")
    });
}
function makePcc(names) {
    // $("#names").empty()
    $.each(names,function(index,value){
        var creatediv = $("<div class='gridlayout e'>")
        creatediv.text(value)
        creatediv.draggable({revert:true, stack:".products", zIndex: 100})
        $(".ppcontainer").append(creatediv)
    });
}

$(document).ready(function() {
    makeNames(employees)
    $(".HeaderStylePcc").droppable({
        hoverClass: "ui-state-active",
        drop: function(event,ui) {
            let item = ui.draggable
            console.log(item.text())
            item.remove() 
            $('.ppcontainer').append(item)
            ppclist.push(item.text())
        }
    })
    makePcc(ppclist)
    $(".HeaderStyle").droppable({
        drop: function(event,ui) {
            let item = ui.draggable
            console.log(item.text())
            item.remove() 
            $('.container').append(item)
            employees.push(item.text())
        }
    })
})