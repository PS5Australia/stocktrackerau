function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function OnLaunch() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    var objDate = new Date();
    var hours = objDate.getUTCHours();
    console.log(hours)
    if(hours <= 10 || hours >= 20){
      const url = 'https://api.jsonbin.io/v3/b/620606e7ca70c44b6e935fa6/latest'
      var response = await fetch(url, {
          method: 'GET',
          headers: {
              "X-Bin-Meta": false
          }
          }
      )
      .then(response => response.text())
      .then(data => {
          console.log(data)
          var obj = JSON.parse(data);
          /*Amazon*/
          if (obj["AmazonDisc"] == "Out of Stock") {
              document.getElementById("amazondisc").innerHTML="Amazon | Out of Stock";
          }
          else if (obj["AmazonDisc"] == "In Stock") {
              document.getElementById("amazondisc").innerHTML="Amazon | In Stock";
              document.getElementById("amazondisc").style.fontWeight = "bold";
              document.getElementById("amazondiscborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Disc in stock at Amazon");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Disc in stock at Amazon");
                    }
                  });
                }
          }
          if (obj["AmazonDigital"] == "Out of Stock") {
              document.getElementById("amazondigital").innerHTML="Amazon | Out of Stock";
          }
          else if (obj["AmazonDigital"] == "In Stock") {
              document.getElementById("amazondigital").innerHTML="Amazon | In Stock";
              document.getElementById("amazondigitalborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Digital in stock at Amazon");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Digital in stock at Amazon");
                    }
                  });
                }
          }
          /*BigW*/
          if (obj["BigWDisc"] == "In Stock") {
              document.getElementById("bigwdisc").innerHTML="Big W | In Stock";
              document.getElementById("bigwdiscborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Disc in stock at Big W");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Disc in stock at Big W");
                    }
                  });
                }
          }
          else if (obj["BigWDisc"] == "Out of Stock") {
              document.getElementById("bigwdisc").innerHTML="Big W | Out of Stock";
          }
          if (obj["BigWDigital"] == "In Stock") {
              document.getElementById("bigwdigital").innerHTML="Big W | In Stock";
              document.getElementById("bigwdigitalborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Digital in stock at Big W");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Digital in stock at Big W");
                    }
                  });
                }
          }
          else if (obj["BigWDigital"] == "Out of Stock") {
              document.getElementById("bigwdigital").innerHTML="Big W | Out of Stock";
          }
          /*Target*/
          if (obj["TargetDigital"] == "In Stock") {
              document.getElementById("targetdigital").innerHTML="Target | In Stock";
              document.getElementById("targetdigitalborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Digital in stock at Target");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Digital in stock at Target");
                    }
                  });
                }
          }
          else if (obj["TargetDigital"] == "Out of Stock") {
              document.getElementById("targetdigital").innerHTML="Target | Out of Stock";
          }
          if (obj["TargetDisc"] == "In Stock") {
              document.getElementById("targetdisc").innerHTML="Target | In Stock";
              document.getElementById("targetdiscborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Disc in stock at Target");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Disc in stock at Target");
                    }
                  });
                }
          }
          else if (obj["TargetDisc"] == "Out of Stock") {
              document.getElementById("targetdisc").innerHTML="Target | Out of Stock";
          }
          if (obj["TargetBundle"] == "In Stock") {
              document.getElementById("targetdiscbundle").innerHTML="Target | In Stock";
              document.getElementById("targetbundleborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Disc Bundle in stock at Target");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Disc Bundle in stock at Target");
                    }
                  });
                }
          }
          else if (obj["TargetBundle"] == "Out of Stock") {
              document.getElementById("targetdiscbundle").innerHTML="Target | Out of Stock";
          }
          /*Sony*/
          if (obj["SonyDiscBundle"] == "In Stock") {
              document.getElementById("sonydiscbundle").innerHTML="Sony | In Stock";
              document.getElementById("sonydiscbundleborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Disc Bundle in stock at Sony");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Disc Bundle in stock at Sony");
                    }
                  });
                }
          }
          else if (obj["SonyDiscBundle"] == "Out of Stock") {
              document.getElementById("sonydiscbundle").innerHTML="Sony | Out of Stock";
          }
          if (obj["SonyDigitalBundle"] == "In Stock") {
              document.getElementById("sonydigitalbundle").innerHTML="Sony | In Stock";
              document.getElementById("sonydigitalbundleborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Digital Bundle in stock at Sony");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Digital Bundle in stock at Sony");
                    }
                  });
                }
          }
          else if (obj["SonyDigitalBundle"] == "Out of Stock") {
              document.getElementById("sonydigitalbundle").innerHTML="Sony | Out of Stock";
          }
          if (obj["SonyDigital"] == "In Stock") {
              document.getElementById("sonydigital").innerHTML="Sony | In Stock";
              document.getElementById("sonydigitalborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Digital in stock at Sony");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Digital in stock at Sony");
                    }
                  });
                }
          }
          else if (obj["SonyDigital"] == "Out of Stock") {
              document.getElementById("sonydigital").innerHTML="Sony | Out of Stock";
          }
          if (obj["SonyDisc"] == "In Stock") {
              document.getElementById("sonydisc").innerHTML="Sony | In Stock";
              document.getElementById("sonydiscborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! PS5 Disc in stock at Sony");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! PS5 Disc in stock at Sony");
                    }
                  });
                }
          }
          else if (obj["SonyDisc"] == "Out of Stock") {
              document.getElementById("sonydisc").innerHTML="Sony | Out of Stock";
          }

      });
    } else {
      console.log("NOT RUNNING UNTIL 7AM!")
      document.getElementById("ps5title").innerHTML="Playstation 5 | Sleeping...";
    }
}
