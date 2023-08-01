let currentDate = new Date();

document.querySelector("#currentDate").innerHTML = `${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()} `;
