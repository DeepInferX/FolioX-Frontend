const toStream = ({ array, key }) => {
  let key_string = array[0][key];
  for (let i = 1; i < array.length; i++) {
    key_string = key_string + "*" + array[i][key];
  }
  return key_string;
};

export default toStream;
