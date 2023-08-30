class Serie {
    title = '';
    year = '';
    imagenUrl = '';

    constructor(){

    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }

    setYear(year){
        this.year = year;
    }

    getYear(){
        return this.year;
    }

    setImage(imageUrl){
        this.imagenUrl = imageUrl;
    }

    getImageUrl(){
        return this.imagenUrl;
    }
}

console.log(Serie)