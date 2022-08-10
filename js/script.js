const nuberOfSeries = prompt("Nechta serial ko'rdingiz?", "");

const seriesDB = {
   count: nuberOfSeries,
   series: {},
   actors: {},
   genres: [],
   private: false,
}



   for (let i = 0; i < 2; i++) {
      const a = prompt("oxirgi ko'rgajn serialingizni kiriting", '');
      const  b = prompt("Necha baxo berasiz");

      seriesDB.series[a] = b;
   }


console.log(seriesDB);
