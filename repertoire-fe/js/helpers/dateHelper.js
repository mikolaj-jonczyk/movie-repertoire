var convertFromStringToDate = function convertFromStringToDate(responseDate) {
  let dateComponents = responseDate.split(' ');
  let datePieces = dateComponents[0].split("-");
  let timePieces = dateComponents[1].split("-");
  return(new Date(datePieces[2], (datePieces[1] - 1), datePieces[0], timePieces[0], timePieces[1], timePieces[2]));
}

var setDateFormat = function setDateFormat(responseDate) {
  var dt = convertFromStringToDate(responseDate);
  var formatedData = (`${
    (dt.getMonth()+1).toString().padStart(2, '0')}/${
    dt.getDate().toString().padStart(2, '0')}/${
    dt.getFullYear().toString().padStart(4, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`
  );
  return formatedData;
}