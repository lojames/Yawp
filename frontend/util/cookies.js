export const getCookie = (name) => {
  const regexp = new RegExp("(?<="+name+"=).*?(?=;)|(?<="+name+"=).*?$");
  const result = regexp.exec(document.cookie);
  document.cookie.split(name+"=")[0].split(";")[0]
  return (result === null) ? null : result[0];
}

export const setCookie = (name, value) => {
  document.cookie = `${name} = ${value}`;
}
