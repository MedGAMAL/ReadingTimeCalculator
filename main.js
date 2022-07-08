const pagesHrs = document.getElementById("input")
const bookLen = document.getElementById("input1")
const dailyReadinTime = document.getElementById("input2"),
timeContainer = document.getElementById("time"),
daysContainer = document.getElementById("days");

function calculate() {
  [pagesHrs, bookLen, dailyReadinTime].forEach(item => {
    item.addEventListener("keyup", function () {
    let inputValPgHrs = pagesHrs.value;
    let inputValBkLen = bookLen.value;
    let inputValDailyR = dailyReadinTime.value;

    const time = (inputValBkLen / inputValPgHrs).toFixed(2);
    if (time == 0 && time == "" && time == "0") {
      timeContainer.innerHTML = "Total reading time.";
    } else {  
      timeContainer.innerHTML = "<span class = 'colored-cap'>" + time + "</span> Hours to read this book ";
    }

    dailyReadin = inputValDailyR * inputValPgHrs;
    periodSpent =  time / inputValDailyR ;
    //  alert(time);
    if (dailyReadin == "" && dailyReadin == "0") {
      daysContainer.innerHTML = "Period spent reading this book.";
    } else {
      daysContainer.innerHTML =
        "You're going to read <span class = 'colored-cap'>" +
        dailyReadin.toLocaleString() +
        "</span> pages per day in <span class = 'colored-cap'>" +
        periodSpent.toLocaleString() +
        "</span> days.";
    }
  })
});
}

// Initialize The Main Function
calculate();
