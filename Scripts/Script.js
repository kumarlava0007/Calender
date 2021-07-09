
    let date = new Date();
    let reRender = () => {
        let month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

        let prevMonthEndDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        let prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDay();
        let currMonthEndDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        let currMonthEndDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        document.querySelector(".head div h1").innerHTML = month[date.getMonth()];
        document.querySelector(".head div h4").innerHTML = date.toDateString();
        let days = "";
        for (let i = prevMonthLastDay; i > 0; i--) {
            days += `<div class = "prevdays">${prevMonthEndDate - i + 1}</div>`
        }

        for (let i = 1; i <= currMonthEndDate; i++) {
            if (i === date.getDate() && new Date().getMonth() === date.getMonth()) {
                days += `<div class="today">${i}</div>`
            }
            else
                days += `<div>${i}</div>`
        }
        for (let i = currMonthEndDay + 1, j = 1; i <= 7; i++) {
            days += `<div class="nextdays">${j}</div>`
            j++;
        }
        document.querySelector(".days").innerHTML = days;
    };
        document.querySelector(".prev").addEventListener("click", () => {
            date.setMonth(date.getMonth() - 1);
            reRender();
        });
        document.querySelector(".next").addEventListener("click", () => {
            date.setMonth(date.getMonth() + 1);
            reRender();
        })
    reRender();