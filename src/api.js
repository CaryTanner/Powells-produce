//key is visible- none critical key/secret

let apiKey = "3148ca352fb14c20b9d3e9ac0d57b7b7"



export const fetchRecipes = (searchTerm) => {
  
  const url =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
    apiKey +
    "&number=8&sort=random&query=" +
    searchTerm;
  return fetch(url)
  .then((resp) => resp.json())
  .catch(err => console.log(err));
};

//https://api.spoonacular.com/recipes/{id}/information

export const fetchById = (id) => {
  const url =
    "https://api.spoonacular.com/recipes/" +
    id +
    "/information?&apiKey=" +
    apiKey;
  return fetch(url).then((resp) => resp.json())
  .catch(err => console.log(err));
};

export const fetchAutoComplete = (searchTerm) => {
  const url =
    "https://api.spoonacular.com/recipes/autocomplete?apiKey=" +
    apiKey +
    "&number=5&query=" +
    searchTerm;
  return fetch(url)
  .then((resp) => resp.json())
  .catch(err => console.log(err));
};

export const fetchRandomRecipe = () => {
  const url = "https://api.spoonacular.com/recipes/random?number=4&apiKey=" + apiKey;
  return fetch(url)
  .then((resp) => resp.json())
  .catch(err => console.log(err));
}
