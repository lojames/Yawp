export const getCookie = (name) => (
  document.cookie.split(name+"=")[1].split(";")[0]
)

export const setCookie = (name, value) => {
  document.cookie = `${name} = ${value}`;
}
