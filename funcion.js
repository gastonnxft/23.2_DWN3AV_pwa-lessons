
const serieManager = new SeriesApp();

serieManager.addSerie(new Serie())

const primerSerie = serieManager.getSeries()[0];

console.log(primerSerie.setYear(2023))