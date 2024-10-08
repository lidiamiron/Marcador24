const API_KEY = "cb3407371ea266d841616b1400dbdc81";
const BASE_URL = "https://v3.football.api-sports.io/";

async function fetchData(endPoint, language = "es") {
  try {
    const apiURL = `${BASE_URL}${endPoint}?lang=${language}`; // Añadir parámetro de idioma
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      redirect: "follow",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Ejemplo de uso
fetchData("some-endpoint").then((data) => {
  console.log(data);
});

document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("wg-api-football-fixtures");

  setTimeout(() => {
    const translations = {
      HalfTime: "Descanso",
      League: "Liga",
      Score: "Puntuación",
      ALL: "TODOS",
      LIVE: "EN DIRECTO",
      FINISHED: "TERMINADOS",
      SCHEDULED: "PROGRAMADOS",
      TODAY: "HOY",
      // Añade más traducciones según sea necesario
    };

    const elements = widget.getElementsByTagName("*");
    for (let el of elements) {
      for (let key in translations) {
        if (el.innerHTML.includes(key)) {
          el.innerHTML = el.innerHTML.replace(
            new RegExp(key, "g"),
            translations[key]
          );
        }
      }
    }
  }, 3000); // Ajusta el tiempo según la carga del widget
});

document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("wg-api-football-fixtures");
  const dateInput = document.getElementById("match-date");
  const today = new Date().toISOString().split("T")[0];
  widget.setAttribute("data-date", today);
});
