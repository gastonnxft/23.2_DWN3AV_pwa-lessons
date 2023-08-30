class SeriesApp {
    seriesList = [];

    getSeries(){
        return this.seriesList;
    }

    addSerie(serie){
        this.seriesList.push(serie);
    }
}