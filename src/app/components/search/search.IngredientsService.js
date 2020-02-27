//Data service
function IngredientsService($http){
    var ingr = {}
    this.getIngredients = function(){
        return ingr = $http.get('./ingredients.json')
    }
    
    this.findRecipes = function(ingredient){
        recipes = []
        ingr = ingr.$$state.value.data
        for(foodidx in ingr){
            for(igx in ingr[foodidx].items){
                ingred = ingr[foodidx].items[igx]
                if(ingredient.includes(ingred.name)){
                    recipes.push(ingred)
                }
            }
        }
        return recipes
    }
    
    this.findRecipe = function(ingred, recipe, data){
        for(idx in data.data){
            foodType = data.data[idx]
            for(idx2 in foodType.items){
                ing = foodType.items[idx2]
                if(ing.name == ingred){
                    console.log("Found ingredient: " + ing.name)
                    for(idx3 in ing.recipes){
                        rec = ing.recipes[idx3]
                        if(rec.name == recipe){
                            console.log("Found Recipe!: " + rec.name)  
                            return rec
                        }
                    }
                }
            }
        }
    }
    
};

angular
  .module('components.search')
  .service('IngredientsService', IngredientsService);