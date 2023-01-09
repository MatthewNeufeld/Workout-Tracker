var today = new Date();
//day
var dd = String(today.getDate()).padStart(2, "0");
//month
var mm = String(today.getMonth() + 1).padStart(2, "0");
//year
var yyyy = today.getFullYear();

//concatenate day, month, and year
today = mm + "/" + dd + "/" + yyyy;

export default {
  value: today
};
