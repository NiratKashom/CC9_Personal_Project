const separateDate = (date, requirePart) => {
  // console.log(`${date ? 'dateStr has valid' : 'dateStr has invalid!!'}`);

  // input: str date iso format / requirePart('day','month','year')
  // output: string of date part
  if (date) {
    const dateStr = new Date(date).toDateString();
    let pickPart = '';
    if (requirePart === 'day') {
      pickPart = dateStr.split(' ')[2];
      if (pickPart.startsWith('0')) return pickPart.slice(1);
      return pickPart;
    }
    if (requirePart === 'month') return dateStr.split(' ')[1];
    if (requirePart === 'year') return dateStr.split(' ')[3];
  }
  return '';
};

const getFormattedDate = (date) => {
  // input: date object
  // output: str '2 Jan 2020'
  if (date) {
    let splitDate = new Date(date).toDateString().split(' ');
    let dayStr = '';
    if (splitDate[2].startsWith('0')) dayStr = splitDate[2].slice(1);
    return (dayStr || splitDate[2]) + ' ' + splitDate[1] + ' ' + splitDate[3];
  }
  return '';
};

export { separateDate, getFormattedDate };