const sapaanElement = document.getElementById("sapaan");
const jamElement = document.getElementById("jam");
const tanggalElement = document.getElementById("tanggal");

function perbaruiWaktu() {
	const sekarang = new Date();
	const jamSekarang = sekarang.getHours();
	let sapaan;

	if (jamSekarang >= 4 && jamSekarang < 11) {
		sapaan = "Selamat pagi!";
	} else if (jamSekarang >= 11 && jamSekarang < 15) {
		sapaan = "Selamat siang!";
	} else if (jamSekarang >= 15 && jamSekarang < 18) {
		sapaan = "Selamat sore!";
	} else {
		sapaan = "Selamat malam!";
	}

	if (sapaanElement) {
		sapaanElement.textContent = sapaan;
	}
	if (jamElement) {
		jamElement.textContent = sekarang.toLocaleTimeString("id-ID", {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit"
		});
	}
	if (tanggalElement) {
		tanggalElement.textContent = sekarang.toLocaleDateString("id-ID", {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric"
		});
	}
}

perbaruiWaktu();
setInterval(perbaruiWaktu, 1000);
