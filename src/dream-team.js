module.exports = function createDreamTeam(members) {
  let new_arr = [];
  let arr = members;
       if(Array.isArray(arr)){
           
          for(let i = 0; i < arr.length; i ++){
      
          		if(typeof arr[i] == 'string') {

          			   let el = arr[i].trim().substr(0, 1).toUpperCase();
                       new_arr.push(el);
                 
          		}
        }
   }
                return new_arr.sort().join('');
};