const nuberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

const seriesDB = {
   count: nuberOfSeries,
   series: {},
   actors: {},
   genres: [],
   private: false,
};



   for (let i = 0; i < 2; i++) {
      const a = prompt("oxirgi ko'rgajn serialingizni kiriting", '');
      const  b = prompt("Necha baxo berasiz");

      if (a != null && b != null && a != "" && b != "" ) {
         seriesDB.series[a] = b;
      }else{
         i--;
      }
      

      if (seriesDB.count < 5) {
         console.log("Kam serial ko'rarkansiz");
      } else if(seriesDB.count > 5 && seriesDB <10){
         console.log("Siz klassik tomoshabin ekansiz");
      }else if(seriesDB.count > 10){
         console.log("siz serialchi zvezda ekansiz");
      }
   }


console.log(seriesDB);
