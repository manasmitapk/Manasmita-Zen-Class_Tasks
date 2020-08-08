class Movie{

    constructor(title,studio,rating="PG"){
        this.title = title;
        this.stdio = studio;
        this.rating = rating;
    }
        getPG(){
            if(this.rating=="PG"){
            return "yes";
            }
            else
            return "no";
        }

    }
let nextmovie = new Movie("Casino Royale","Eon Productions","PG13")
    console.log(nextmovie);
    console.log(nextmovie.getPG());