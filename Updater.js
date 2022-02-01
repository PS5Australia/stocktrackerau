function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function OnLaunch() {
    var i = 1
    while (i < 10) {
<<<<<<< HEAD
        const url = 'https://raw.githubusercontent.com/PS5Australia/stocktrackerau/main/stock.json'
=======
        const url = 'https://github.com/PS5Australia/stocktrackerau/blob/main/stock.json'
>>>>>>> c6d697f9b828b296b68234f335d0b0bad8db342b
        var response = await fetch(url, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            }
          }
        )
        .then(response => response.text())
        .then(data => {
            var obj = JSON.parse(data);
            if (obj["AmazonDisc"] == "Out of Stock") {
                document.getElementById("amazondisc").innerHTML="Amazon | Out of Stock";
            }
            else if (obj["AmazonDisc"] == "In Stock") {
                document.getElementById("amazondisc").innerHTML="Amazon | In Stock";
            }
        });
        await sleep(300000);
    }
}
