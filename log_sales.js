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
    
    $("#client").autocomplete({
      source: clients,
      select: function(event, ui ) {
        if (!clients.includes(ui.item.val)){
            clients.append(ui.item.text())
        }
      }
    });

    function makeSales(sales) {
        $("#sales").empty()
        $.each(sales,function(index,value){
            // Create Row
            var createSales = $("<div id='sales'>")

            var createRow = $("<div class='row'>")
            
            // Create Columns Within Row
            var createColO = $("<div class='col-md-2'>")
            createColO.text(value.salesperson)
            createRow.append(createColO)

            var createColT = $("<div class='col-md-3'>")
            createColT.text(value.client)
            createRow.append(createColT)

            var createColTH = $("<div class='col-md-3'>")
            createColTH.text(value.reams)
            createRow.append(createColTH)

            var deleteButton = $("<button class='col-md-1 buttonStyle'>")
            $(deleteButton).text("X")
            createRow.append(deleteButton)

            createSales.append(createRow)

            $(".container").append(createSales)

        });
    }

    function warnings(){
        let clientValue = document.getElementById("client").value;
        let reamsValue = document.getElementById("reams").value;
        const button = document.querySelector('#Submit');

        if (clientValue.length == 0 & reamsValue.length == 0){
            $("#client").focus();
            document.getElementById("warningc").innerHTML = "Must Fill"
            document.getElementById("warningr").innerHTML = "Must Fill"
            
            button.disabled = true
        }
        else if (clientValue.length == 0){
            document.getElementById("warningc").innerHTML = "Must Fill"
            button.disabled = true
            $("#client").focus();
        }
        else if (reamsValue.length == 0){
            document.getElementById("warningr").innerHTML = "Must Fill"
            $("#reams").focus();
            button.disabled = true
        }
        if (clientValue.length > 0 & reamsValue.length > 0){
            document.getElementById("warningc").innerHTML = ""
            document.getElementById("warningr").innerHTML = ""
            button.disabled = false
        }

        if (!Number.isInteger(reamsValue)){
            document.getElementById("warningr").innerHTML = "Must be an Integer"
            $("#reams").focus();
            button.disabled = true
        }
        else{
            document.getElementById("warningr").innerHTML = ""
            $("#client").val('');
            $("#reams").val('');
            button.disabled = false 
        }
    }
    $(document).ready(function() {
        makeSales(sales)
        $("#client").focus();

        $('input').keyup(function(event) {
            if (event.which === 13)
            {
                event.preventDefault();
                $("#Submit").click();
            }
        });
        $("#Submit").click(function(){
            $("#client").focus();
            warnings()
            const button = document.querySelector('#Submit');
            button.disabled = false

            const salesname = "Pamela Beesly"
            var client = $("#client").val();
            var reams = $("#reams").val();
            var input = {
                "salesperson": salesname,
                "client": client,
                "reams": reams,
            }
            console.log(input)
            if (!clients.includes(client)){
                clients.unshift(client)
            }
            sales.unshift(input)
            $("#sales").empty() // Doesnt work to remove the list
            makeSales(sales)

            // $("#client").val('');
            // $("#reams").val('');
        })
    })
  } );