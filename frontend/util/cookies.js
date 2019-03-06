export const getCookie = (name) => {
  const regexp = new RegExp("(?<="+name+"=).*?(?=;)|(?<="+name+"=).*?$");
  const result = regexp.exec(document.cookie);
  return (result === null) ? null : result[0];
}

export const setCookie = (name, value) => {
  document.cookie = `${name} = ${value}`;
}
