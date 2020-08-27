

export const fetchRecipes = (searchTerm) => {
    let url = "https://api.spoonacular.com/recipes/complexSearch?&apiKey=4720f30d7c3446d78e6808289849887b&number=2&sort=random&query="+ searchTerm 
    return fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
}