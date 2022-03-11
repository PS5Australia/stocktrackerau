function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function PS5() {
    var objDate = new Date();
    var hours = objDate.getUTCHours();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var date = days[ objDate.getDay() ];
    if(hours <= 10 || hours >= 21){
      if(date != "Sunday" && date != "Saturday") {
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
            if (obj["Amazon"] == "Out of Stock") {
                document.getElementById("amazon").innerHTML="Amazon | Out of Stock";
            }
            else if (obj["Amazon"] == "In Stock") {
                document.getElementById("amazon").innerHTML="Amazon | In Stock";
                document.getElementById("amazon").style.fontWeight = "bold";
                document.getElementById("amazonborder").style.borderColor = "green";
                if (Notification.permission === "granted") {
                    var notification = new Notification("Stock! PS5  in stock at Amazon");
                  }

                  else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                      if (permission === "granted") {
                        var notification = new Notification("Stock! PS5  in stock at Amazon");
                      }
                    });
                  }
            }
            /*BigW*/
            if (obj["BigWDisc"] == "In Stock") {
                document.getElementById("bigwdisc").innerHTML="Big W | In Stock";
                document.getElementById("bigwdisc").style.fontWeight = "bold";
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
            if (obj["BigW"] == "In Stock") {
                document.getElementById("bigw").innerHTML="Big W | In Stock";
                document.getElementById("bigw").style.fontWeight = "bold";
                document.getElementById("bigwborder").style.borderColor = "green";
                if (Notification.permission === "granted") {
                    var notification = new Notification("Stock! PS5  in stock at Big W");
                  }

                  else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                      if (permission === "granted") {
                        var notification = new Notification("Stock! PS5  in stock at Big W");
                      }
                    });
                  }
            }
            else if (obj["BigW"] == "Out of Stock") {
                document.getElementById("bigw").innerHTML="Big W | Out of Stock";
            }
            /*Target*/
            if (obj["Target"] == "In Stock") {
                document.getElementById("target").innerHTML="Target | In Stock";
                document.getElementById("target").style.fontWeight = "bold";
                document.getElementById("targetborder").style.borderColor = "green";
                if (Notification.permission === "granted") {
                    var notification = new Notification("Stock! PS5  in stock at Target");
                  }

                  else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                      if (permission === "granted") {
                        var notification = new Notification("Stock! PS5  in stock at Target");
                      }
                    });
                  }
            }
            else if (obj["Target"] == "Out of Stock") {
                document.getElementById("target").innerHTML="Target | Out of Stock";
            }
            if (obj["TargetDisc"] == "In Stock") {
                document.getElementById("targetdisc").innerHTML="Target | In Stock"
                document.getElementById("targetdisc").style.fontWeight = "bold";;
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
                document.getElementById("targetdiscbundle").style.fontWeight = "bold";
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
                document.getElementById("sonydiscbundle").style.fontWeight = "bold";
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
            if (obj["SonyBundle"] == "In Stock") {
                document.getElementById("sonybundle").innerHTML="Sony | In Stock";
                document.getElementById("sonybundle").style.fontWeight = "bold";
                document.getElementById("sonybundleborder").style.borderColor = "green";
                if (Notification.permission === "granted") {
                    var notification = new Notification("Stock! PS5  Bundle in stock at Sony");
                  }

                  else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                      if (permission === "granted") {
                        var notification = new Notification("Stock! PS5  Bundle in stock at Sony");
                      }
                    });
                  }
            }
            else if (obj["SonyBundle"] == "Out of Stock") {
                document.getElementById("sonybundle").innerHTML="Sony | Out of Stock";
            }
            if (obj["Sony"] == "In Stock") {
                document.getElementById("sony").innerHTML="Sony | In Stock";
                document.getElementById("sony").style.fontWeight = "bold";
                document.getElementById("sonyborder").style.borderColor = "green";
                if (Notification.permission === "granted") {
                    var notification = new Notification("Stock! PS5  in stock at Sony");
                  }

                  else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                      if (permission === "granted") {
                        var notification = new Notification("Stock! PS5  in stock at Sony");
                      }
                    });
                  }
            }
            else if (obj["Sony"] == "Out of Stock") {
                document.getElementById("sony").innerHTML="Sony | Out of Stock";
            }
            if (obj["SonyDisc"] == "In Stock") {
                document.getElementById("sonydisc").innerHTML="Sony | In Stock";
                document.getElementById("sonydisc").style.fontWeight = "bold";
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
            if (obj["EBDisc"] == "In Stock") {
                document.getElementById("ebdisc").innerHTML="EB Games | In Stock";
                document.getElementById("ebdisc").style.fontWeight = "bold";
                document.getElementById("ebdiscborder").style.borderColor = "green";
                if (Notification.permission === "granted") {
                    var notification = new Notification("Stock! PS5 Disc in stock at EB Games");
                  }

                  else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                      if (permission === "granted") {
                        var notification = new Notification("Stock! PS5 Disc in stock at EB Games");
                      }
                    });
                  }
            } else if (obj["EBDisc"] == "Out of Stock") {
                document.getElementById("ebdisc").innerHTML="EB Games | Out of Stock";
            } if (obj["EB"] == "In Stock") {
                document.getElementById("eb").innerHTML="EB Games | In Stock";
                document.getElementById("eb").style.fontWeight = "bold";
                document.getElementById("ebborder").style.borderColor = "green";
                if (Notification.permission === "granted") {
                    var notification = new Notification("Stock! PS5  in stock at EB Games");
                  }

                  else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                      if (permission === "granted") {
                        var notification = new Notification("Stock! PS5  in stock at EB Games");
                      }
                    });
                  }
            } else if (obj["EB"] == "Out of Stock") {
                document.getElementById("eb").innerHTML="EB Games | Out of Stock";
            }

        });
      } else {
        console.log("NOT RUNNING UNTIL MONDAY!");
      }
    } else {
      console.log("NOT RUNNING UNTIL 7AM!");
    }
}

async function XSX() {
  var objDate = new Date();
  var hours = objDate.getUTCHours();
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var date = days[ objDate.getDay() ];
  if(hours <= 10 || hours >= 21){
    if(date != "Sunday" && date != "Saturday") {
      const url = 'https://api.jsonbin.io/v3/b/622ad645061827674373e3b1/latest'
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
          if (obj["Microsoft"] == "Out of Stock") {
              document.getElementById("microsoftxsxborder").innerHTML="Microsoft | Out of Stock";
          }
          else if (obj["Microsoft"] == "In Stock") {
              document.getElementById("microsoftxsxborder").innerHTML="Microsoft | In Stock";
              document.getElementById("microsoftxsxborder").style.fontWeight = "bold";
              document.getElementById("microsoftxsxborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! XSX Disc in stock at Microsoft");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! XSX in stock at Microsoft");
                    }
                  });
                }
          }
          if (obj["Microsoft"] == "Out of Stock") {
              document.getElementById("microsoftxsxborder").innerHTML="Microsoft | Out of Stock";
          }
          else if (obj["Amazon"] == "In Stock") {
              document.getElementById("amazonxsxborder").innerHTML="Amazon | In Stock";
              document.getElementById("amazonxsxborder").style.fontWeight = "bold";
              document.getElementById("amazonxsxborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! XSX in stock at Amazon");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! XSX in stock at Amazon");
                    }
                  });
                }
          }
          /*BigW*/
          if (obj["EB Games"] == "In Stock") {
              document.getElementById("ebxsxborder").innerHTML="EB Games | In Stock";
              document.getElementById("ebxsxborder").style.fontWeight = "bold";
              document.getElementById("ebxsxborder").style.borderColor = "green";
              if (Notification.permission === "granted") {
                  var notification = new Notification("Stock! XSX Disc in stock at EB Games");
                }

                else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                      var notification = new Notification("Stock! XSX Disc in stock at EB Games");
                    }
                  });
                }
          }
          else if (obj["EB Games"] == "Out of Stock") {
              document.getElementById("ebxsxborder").innerHTML="EB Games | Out of Stock";
          }

      });
    } else {
      console.log("NOT RUNNING UNTIL MONDAY!");
    }
  } else {
    console.log("NOT RUNNING UNTIL 7AM!");
  }
}
