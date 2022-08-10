 const nuberOfSeries = prompt("Nechta serial ko'rdingiz?" , "");

 const seriesDB ={
    count: nuberOfSeries,
    series: {},
    actors:{},
    genres:[],
    private:false,
 }

 const a = prompt("oxirgi ko'rgajn serialingizni kiriting", '');
 const b = prompt("Necha baxo berasiz");
 const c = prompt("oxirgi ko'rgajn serialingizni kiriting", '');
 const d = prompt("Necha baxo berasiz");

 seriesDB.series[a] = b;
 seriesDB.series[c] = d;
 console.log(seriesDB);
