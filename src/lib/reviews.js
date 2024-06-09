const fs = require("fs");
const { getJson } = require("serpapi");

async function getReviews() {
  return new Promise((resolve, reject) => {
    getJson(
      {
        engine: "google_maps_reviews",
        data_id: "0x89c259af336b3341:0xa4969e07ce3108de",
        hl: "es",
        api_key: process.env.GOOGLE_REVIEWS_API,
      },
      (json) => {
        resolve(json);
      }
    );
  });
}

async function saveReviews() {
  try {
    const datosGoogleMaps = await getReviews();
    const jsonDatosGoogleMaps = JSON.stringify(datosGoogleMaps.reviews, null, 2);
    fs.writeFileSync('public/reviews.json', jsonDatosGoogleMaps);
    console.log('Archivo JSON de datos de Google Maps generado con éxito.');
  } catch (error) {
    console.error('Error al generar los archivos JSON:', error);
  }
}

saveReviews();