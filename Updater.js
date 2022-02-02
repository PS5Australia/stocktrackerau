function stockNotfication() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    else if (Notification.permission === "granted") {
      var notification = new Notification("Hi there! Send Toyu a message saying 'This Works!'");
    }
  
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Hi there! Send Toyu a message saying 'This Works!'");
        }
      });
    }
  }

async function OnLaunch() {
    const url = 'https://api.jsonbin.io/b/61f929711960493ad186160e/latest'
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
        /*Amazon*/
        if (obj["AmazonDisc"] == "Out of Stock") {
            document.getElementById("amazondisc").innerHTML="Amazon | Out of Stock";
        }
        else if (obj["AmazonDisc"] == "In Stock") {
            document.getElementById("amazondisc").innerHTML="Amazon | In Stock";
            document.getElementById("amazondiscborder").style.borderColor = "green";
        }
        if (obj["AmazonDigital"] == "Out of Stock") {
            document.getElementById("amazondigital").innerHTML="Amazon | Out of Stock";
        }
        else if (obj["AmazonDigital"] == "In Stock") {
            document.getElementById("amazondigital").innerHTML="Amazon | In Stock";
            document.getElementById("amazondigitalborder").style.borderColor = "green";
        }
        /*BigW*/
        if (obj["BigWDisc"] == "In Stock") {
            document.getElementById("bigwdisc").innerHTML="Big W | In Stock";
            document.getElementById("bigwdiscborder").style.borderColor = "green";
        }
        else if (obj["BigWDisc"] == "Out of Stock") {
            document.getElementById("bigwdisc").innerHTML="Big W | Out of Stock";
        }
        if (obj["BigWDigital"] == "In Stock") {
            document.getElementById("bigwdigital").innerHTML="Big W | In Stock";
            document.getElementById("bigwdigitalborder").style.borderColor = "green";
        }
        else if (obj["BigWDigital"] == "Out of Stock") {
            document.getElementById("bigwdigital").innerHTML="Big W | Out of Stock";
        }
        /*Target*/
        if (obj["TargetDigital"] == "In Stock") {
            document.getElementById("targetdigital").innerHTML="Target | In Stock";
            document.getElementById("targetdigitalborder").style.borderColor = "green";
        }
        else if (obj["TargetDigital"] == "Out of Stock") {
            document.getElementById("targetdigital").innerHTML="Target | Out of Stock";
        }
        if (obj["TargetDisc"] == "In Stock") {
            document.getElementById("targetdisc").innerHTML="Target | In Stock";
            document.getElementById("targetdiscborder").style.borderColor = "green";
        }
        else if (obj["TargetDisc"] == "Out of Stock") {
            document.getElementById("targetdisc").innerHTML="Target | Out of Stock";
        }
        if (obj["TargetBundle"] == "In Stock") {
            document.getElementById("targetdiscbundle").innerHTML="Target | In Stock";
            document.getElementById("targetbundleborder").style.borderColor = "green";
        }
        else if (obj["TargetBundle"] == "Out of Stock") {
            document.getElementById("targetdiscbundle").innerHTML="Target | Out of Stock";
        }
        /*Sony*/
        if (obj["SonyDiscBundle"] == "In Stock") {
            document.getElementById("sonydiscbundle").innerHTML="Sony | In Stock";
            document.getElementById("sonydiscbundleborder").style.borderColor = "green";
        }
        else if (obj["SonyDiscBundle"] == "Out of Stock") {
            document.getElementById("sonydiscbundle").innerHTML="Sony | Out of Stock";
        }
        if (obj["SonyDigitalBundle"] == "In Stock") {
            document.getElementById("sonydigitalbundle").innerHTML="Sony | In Stock";
            document.getElementById("sonydigitalbundleborder").style.borderColor = "green";
        }
        else if (obj["SonyDigitalBundle"] == "Out of Stock") {
            document.getElementById("sonydigitalbundle").innerHTML="Sony | Out of Stock";
        }
        if (obj["SonyDigital"] == "In Stock") {
            document.getElementById("sonydigital").innerHTML="Sony | In Stock";
            document.getElementById("sonydigitalborder").style.borderColor = "green";
        }
        else if (obj["SonyDigital"] == "Out of Stock") {
            document.getElementById("sonydigital").innerHTML="Sony | Out of Stock";
        }
        if (obj["SonyDisc"] == "In Stock") {
            document.getElementById("sonydisc").innerHTML="Sony | In Stock";
            document.getElementById("sonydiscborder").style.borderColor = "green";
        }
        else if (obj["SonyDisc"] == "Out of Stock") {
            document.getElementById("sonydisc").innerHTML="Sony | Out of Stock";
        }

    });
}
