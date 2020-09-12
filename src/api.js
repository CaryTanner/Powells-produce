// let newerAPI = '6d5d968c97a94abdb1aded627bc8c45a'
// a74e3a4f3a0a408fa7554575d0abcd05
let apiKey = "a74e3a4f3a0a408fa7554575d0abcd05";

export const fetchRecipes = (searchTerm) => {
  const url =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
    apiKey +
    "&number=1&sort=random&query=" +
    searchTerm;
  return fetch(url).then((resp) => resp.json());
};

//https://api.spoonacular.com/recipes/{id}/information

export const fetchById = (id) => {
  const url =
    "https://api.spoonacular.com/recipes/" +
    id +
    "/information?&apiKey=" +
    apiKey;
  return fetch(url).then((resp) => resp.json());
};

export const fetchAutoComplete = (searchTerm) => {
  const url =
    "https://api.spoonacular.com/recipes/autocomplete?apiKey=" +
    apiKey +
    "&number=3&query=" +
    searchTerm;
  return fetch(url).then((resp) => resp.json());
};
