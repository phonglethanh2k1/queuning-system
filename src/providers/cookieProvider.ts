export const setCookie = (key: string, value: string, timeoutInMinutes = 60): void => {
  const time = Date.now() + timeoutInMinutes * 60 * 1000;
  const expirationTime = new Date(time);

  document.cookie = `${key}=${value};expires=${expirationTime.toUTCString()};path=/`;
};

export const getCookie = (key: string, defaultValue?: string): string => {
  const match = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  if (match) {
    return match[2];
  }

  return defaultValue || '';
};

export const deleteCookie = (key: string): void => {
  setCookie(key, '', -1000);
};
