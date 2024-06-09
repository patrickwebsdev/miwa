const fs = require("fs");
const { getJson } = require("serpapi");

async function getReviews() {
  return new Promise((resolve, reject) => {
    getJson(
      {
        engine: "google_maps_reviews",
        data_id: "0x959c6f0ec652289d:0x5bdf3f7eeec53582",
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

    if (datosGoogleMaps.hasOwnProperty('reviews') && datosGoogleMaps.reviews !== null) {
      const jsonDatosGoogleMaps = JSON.stringify(datosGoogleMaps.reviews, null, 2);
      fs.writeFileSync('public/reviews.json', jsonDatosGoogleMaps);
      console.log('Archivo JSON de datos de Google Maps generado con éxito.');
    } else {
      fs.writeFileSync('public/reviews.json', "[]");
      console.log('El objeto datosGoogleMaps no contiene un atributo reviews o es null.');
    }
  } catch (error) {
    console.error('Error al generar los archivos JSON:', error);
  }
}

saveReviews();