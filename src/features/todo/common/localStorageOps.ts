export const addItemtoLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value.toString());
};

export const getItemFromLocalStorage = async (key: string) => {
  return await localStorage.getItem(key);
};
