$( function() {
    clients = [
        "Shake Shack",
        "Toast",
        "Computer Science Department",
        "Teacher's College",
        "Starbucks",
        "Subsconsious",
        "Flat Top",
        "Joe's Coffee",
        "Max Caffe",
        "Nussbaum & Wu",
        "Taco Bell",
    ];

    var sales = [
        {
            "salesperson": "James D. Halpert",
            "client": "Shake Shack",
            "reams": 100
        },
        {
            "salesperson": "Stanley Hudson",
            "client": "Toast",
            "reams": 400
        },
        {
            "salesperson": "Michael G. Scott",
            "client": "Computer Science Department",
            "reams": 1000
        },
    ]
    
    $( "#client" ).autocomplete({
      source: clients,
      select: function( event, ui ) {
          if (ui.item.val == -1){
              clients.append(ui.item.text())
          }
      }
    });

    function makeSales(sales) {
        $("#sales").empty()
        $.each(sales,function(index,value){
            var creatediv = $("<div class='row spacing'>")
            creatediv.text(value.client)
            console.log(value)
            console.log(value.client)
            $("container").append(creatediv)
        });
    }

    $(document).ready(function() {
        makeSales(sales)
    })
  } );