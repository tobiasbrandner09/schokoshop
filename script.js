// ChocoLaden – Warenkorb mit Liste und Summe

const korbText = document.getElementById("korbText");
const kaufButtons = document.querySelectorAll(".kaufen");

let korb = [];
let summe = 0;

kaufButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const name = button.dataset.name;
        const preisText = button.closest(".karte")
            .querySelector(".preis").textContent;

        const preis = parseFloat(preisText.replace(",", "."));

        korb.push(name);
        summe = summe + preis;

        korbText.textContent =
            korb.length + " Artikel im Korb · Summe: " +
            summe.toFixed(2).replace(".", ",") + " € · zuletzt: " + name;
    });
});

// Kleines Extra: Kategorie-Chips umschalten (nur Optik)
const chips = document.querySelectorAll(".chip");

chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("aktiv"); });
        chip.classList.add("aktiv");
    });
});
