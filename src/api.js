

// let newerAPI = '6d5d968c97a94abdb1aded627bc8c45a'


export const fetchRecipes = (searchTerm) => {
    const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=6d5d968c97a94abdb1aded627bc8c45a&number=1&sort=random&query="+ searchTerm 
    return fetch(url)
        .then(resp => resp.json())
        
}

//https://api.spoonacular.com/recipes/{id}/information

export const fetchById = (id) => {
    const url = "https://api.spoonacular.com/recipes/" + id + "/information?&apiKey=6d5d968c97a94abdb1aded627bc8c45a"
    return fetch(url)
        .then(resp => resp.json())
}