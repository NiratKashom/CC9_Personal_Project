const separateDate = (dateObject, requirePart) => {
  // input: date object / requirePart('day','month','year')
  // output: string of date part
  const dateStr = dateObject.toDateString();
  let pickPart = '';
  if (requirePart === 'day') {
    pickPart = dateStr.split(' ')[2];
    if (pickPart.startsWith('0')) return pickPart.slice(1);
    return pickPart;
  }
  if (requirePart === 'month') return dateStr.split(' ')[1];
  if (requirePart === 'year') return dateStr.split(' ')[3];
};

const getFormattedDate = (dateObject) => {
  // input: date object
  // output: str '2 Jan 2020'
  let splitDate = dateObject.toDateString().split(' ');
  let dayStr = '';
  if (splitDate[2].startsWith('0')) dayStr = splitDate[2].slice(1);
  return (dayStr || splitDate[2]) + ' ' + splitDate[1] + ' ' + splitDate[3];
};

export { separateDate, getFormattedDate };