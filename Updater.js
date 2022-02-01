function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function OnLaunch() {
    const i = 1
    while (i < 10) {
        const url = 'https://raw.githubusercontent.com/PS5Australia/stocktrackerau/main/stock.json'
        const response = await fetch(url);
        const data = await response.text();
        console.log(data);
        var obj = JSON.parse(data);
        if (obj["AmazonDisc"] == "Out Of Stock") {
            document.getElementById("amazondisc").innerHTML="Amazon | Out Of Stock";
        }
        else if (obj["AmazonDisc"] == "In Stock!") {
            document.getElementById("amazonddisc").innerHTML="Amazon | In Stock!";
        }
        await sleep(15000);

    }
}
