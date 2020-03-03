//Data service
function IngredientsService($http){
    var ingr = {}
    this.getIngredients = function(){
        //return ingr = $http.get('/json/ingredients.json')
        //return data;
    }

    this.getResults = function(){
      return $http.get('/json/ingredients.json')
    }

    this.formatResults = function(unformattedResults, searchIngredient){
      var data = unformattedResults.data
      console.log('data', data)
      var recipes = [];
      var categoryIdx;
      var ingrIdx;
      var recipeIdx;
      for(categoryIdx in data){
            var ingrs = data[categoryIdx].items;
            for(ingrIdx in ingrs){
              if(searchIngredient == null || (searchIngredient != null && ingrs[ingrIdx].name.toLowerCase() == searchIngredient.toLowerCase())){
                for(recipeIdx in ingrs[ingrIdx].recipes){
                  var recipe = ingrs[ingrIdx].recipes[recipeIdx];
                  recipes.push(recipe)
                }
              }
          }
      }
      console.log('recipes', recipes)
      return recipes;
    }

    this.getPantry = function(){
      return pantry;
    }

    this.addToPantry = function(ingred){
      if(pantry.indexOf(ingred) == -1){
        pantry.push(ingred);
      }
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

    var pantry = [];

};

angular
  .module('components.search')
  .service('IngredientsService', IngredientsService);
