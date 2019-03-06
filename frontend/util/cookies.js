export const getCookie = name => {
    const value = document.cookie ? document.cookie.split(name+"=")[1].split("mznxbcv;")[0]: ""
    return value.replace("mznxbcv", "");
}

export const setCookie = (name, value) => {
  document.cookie = `${name} = ${value}mznxbcv`;
}
