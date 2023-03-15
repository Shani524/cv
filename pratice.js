// Asycchronous Programming

// console.log("I")
// console.log("Eat")
// console.log("The")
// setTimeout(() => {
//     console.log("Icecream")

// }, 100);
// console.log("After")
// console.log("Spoon")
// console.log("How")
// console.log("Amazing")

// function one(callback) {
//     callback()
//     console.log("the first step is complete call 2 step")
// }
// function two() {
//     console.log("the step 2")
// }

// one(two);

/*const stock = {
  fruite: ["applle", "banana", "mango", "pineapple", "orange"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["choclate", "stobary"],
};

let is_shopOpen = true;

let order = (time, work) => {
  if (is_shopOpen) {
    setTimeout(() => {
      console.log("the order is placed...");
      work();
    }, time);
  } else {
    console.log("the shop is closed....");
  }
};

let pruduction = () => {
  setTimeout(() => {
    console.log("production is started...");
    setTimeout(() => {
      console.log("I will make it in just a minute..");
      setTimeout(() => {
        console.log(`${stock.fruite[2]} is added...`);
        setTimeout(() => {
          console.log(`${stock.liquid[1]} is add in ice-cream....`);
          setTimeout(() => {
            console.log(
              `your ice-cream in the ${stock.holder[0]} as your wise....`
            );
            setTimeout(() => {
              console.log(
                ` your ice-cream ${stock.topping[0]} flavor is ready....`
              );
            }, 2000);
          }, 4000);
        }, 3000);
      }, 1000);
    }, 0000);
  }, 2000);
};

order(2000, pruduction);*/

// That is a callback hell
const stock = {
  fruite: ["applle", "banana", "mango", "pineapple", "orange"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["choclate", "stobary"],
};

let is_shopOpen = true;

/*let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("the shop is close..."));
    }
  });
};

order(2000, () => {
  console
    .log(`${stock.fruite[2]} is  added....`)

  })
  .then(() => {
    return order(0000, () => {
      console.log("the prudection is started....");
    });
})
  .then(() => {
    return order(2000, () => {
      console.log(`${stock.liquid[1]} is added in your ice-cream.....`);
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`${stock.holder[1]} is added in your ice-cream.....`);
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log(`${stock.topping[1]} is added in your ice-cream.....`);
    });
  })

  .then(() => {
    return order(4000, () => {
      console.log(`your ice-cream is ready for eat......`);
    });
  })

  .catch((error) => {
    console.log("the item in shop is out of stock", error);
  })

  .finally(() => {
    console.log("today work is complete and store is close...");
  });*/
let order=()=>{
  return Promise((resolve,reject)=>{
    
  })
}