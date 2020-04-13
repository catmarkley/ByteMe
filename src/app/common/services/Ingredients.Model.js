class IngredientsModel {
    constructor(Parse, FoodModel, RecipesModel) {
        this.Parse = Parse;
        this.RecipesModel = RecipesModel;
        this.FoodModel = FoodModel;
        this.data = {};
        this.collection = [];
        this.name = 'Ingredients';
        this.fields = [
            'food',
            'recipe',
            'amount',
            'unit'
        ];
    }
    New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            parseObject.recipe = new this.Parse.Object(this.RecipesModel.name)
            this.Parse.defineAttributes(parseObject.recipe, this.RecipesModel.fields);
            parseObject.food = new this.Parse.Object(this.FoodModel.name)
            this.Parse.defineAttributes(parseObject.food, this.FoodModel.fields);
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            this.Parse.defineAttributes(obj.recipe, this.RecipesModel.fields);
            this.Parse.defineAttributes(obj.food, this.FoodModel.fields);
            return obj;
        }
    }
    getById(id) {
        return new this.Parse.Query(this.New())
            .get(id)
            .then(result => {
                console.log('result', result)
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }
    
    getByRecipe(recipe) {
        return new this.Parse.Query(this.New())
            .include('recipe')
            .include('food')
            .include('id')
            .include('amount')
            .include('unit')
            .equalTo('recipe', recipe)
            .find()
            .then(result => {
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }

    getByRecipeAndFood(recipe, food) {
        return new this.Parse.Query(this.New())
            .include('recipe')
            .include('food')
            .equalTo('recipe', recipe)
            .equalTo('food', food)
            .find()
            .then(result => {
              this.Parse.defineAttributes(result, this.fields);
              this.data = result;
              console.log("getByRecipeAndFood", result);
              return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('IngredientsModel', IngredientsModel);
