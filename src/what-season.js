const season = [

   
   'winter',
   'winter',
   'spring',
   'spring',
   'spring',
   'summer',
   'summer',
   'summer',
   'autumn',
   'autumn',
   'autumn',
   'winter'

];


module.exports = function getSeason(date) {
	
   if (date && date.getTime() != new Date(date).getTime()) throw Error();
     return (
          (date && season[date.getMonth()]) ||
          "Unable to determine the time of year!"
        );
};
