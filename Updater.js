function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function OnLaunch() {
    var i = 1
    while (i < 10) {
        const url = 'https://github.com/PS5Australia/stocktrackerau/blob/main/stock.json'
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
        await sleep(15000);
    }
}
