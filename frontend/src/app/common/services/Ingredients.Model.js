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

    /**
    * @name getById
    * @methodOf Ingredients.Model
    * @description Takes in an Ingredient ID and returns the Parse Ingredient object from that ID
    * @param {string=} [id] This parameter is used to query the database
    * @returns {object} returns a Parse Query object
    */
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

    /**
    * @name getByRecipe
    * @methodOf Ingredients.Model
    * @description Takes in a recipe Parse object and returns Ingredient objects containing that recipe
    * @param {object=} [recipe] This parameter is used to query the database
    * @returns {object} returns a Parse Query object
    */
    getByRecipe(recipe) {
        return new this.Parse.Query(this.New())
            .include('recipe')
            .include('food')
            .include('id')
            .include('amount')
            .include('unit')
            .include('recipeUrl')
            .equalTo('recipe', recipe)
            .find()
            .then(result => {
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }

    /**
    * @name getByRecipeAndFood
    * @methodOf Ingredients.Model
    * @description Takes in a recipe Parse object and food object and returns the Parse Ingredient object containing those
    * @param {object=} [recipe] This parameter is used to query the database
    * @param {object=} [food] This parameter is used to query the database
    * @returns {object} returns a Parse Query object
    */
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

    /**
    * @name getRecipesByFood
    * @methodOf Ingredients.Model
    * @description Takes in a food object and returns the Parse Ingredient object containing those
    * @param {object=} [food] This parameter is used to query the database
    * @returns {object} returns a Parse Query object
    */
    getRecipesByFood(food) {
        var foodQuery = new Parse.Query('Food');
        foodQuery.equalTo('name', food);

        return new this.Parse.Query(this.New())
            .include('recipe')
            .include('food')
            //.equalTo('food', food)
            .matchesQuery('food', foodQuery)
            .find()
            .then(result => {
              this.Parse.defineAttributes(result, this.fields);
              this.data = result;
              console.log("getRecipesByFood", result);
              return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('IngredientsModel', IngredientsModel);
