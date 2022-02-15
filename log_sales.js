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
            // Create Row
            var createRow = $("<div class='row'>")
            
            // Create Columns Within Row
            var createColO = $("<div class='col-md-2'>")
            createColO.text(value.salesperson)
            createRow.append(createColO)

            var createColT = $("<div class='col-md-3'>")
            createColT.text(value.client)
            createRow.append(createColT)

            var createColTH = $("<div class='col-md-2'>")
            createColTH.text(value.reams)
            createRow.append(createColTH)

            $(".container").append(createRow)

        });
    }

    $(document).ready(function() {
        makeSales(sales)
        $("#Submit").click(function(){
            console.log("input")
            const salesname = "Pamela Beesly"
            var client = $("#client").val();
            var reams = $("#reams").val();
            var input = {
                "salesperson": salesname,
                "client": client,
                "reams": reams,
            }
            console.log(input)
            sales.prepend(input)
            makeSales(sales)

        })
    })
  } );