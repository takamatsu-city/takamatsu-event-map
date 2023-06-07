const formatDate = (date: string) => {

  const dateArray = date.split('/');

  return `${dateArray[0]}.${dateArray[1]}.${dateArray[2]}`;
}

export default formatDate;