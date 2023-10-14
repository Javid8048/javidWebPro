let currentDate = new Date();

document.querySelector("#currentDate").innerHTML = `${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()} `;

$("body").ripples({
    resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});

$("body").ripples("play");