class RecipesModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.data = {};
        this.collection = [];
        this.name = 'Recipes';
        this.fields = [
            'name',
            'imgUrl',
            'recipeUrl',
            'servingSize'
        ];
    }
    New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            //parseObject.name = new this.Parse.Object(this.RecipesModel.name)
            //this.Parse.defineAttributes(parseObject.name, this.RecipesModel.fields);
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            //this.Parse.defineAttributes(obj.name, this.RecipesModel.fields);
            return obj;
        }
    }
    getById(id) {
        return new this.Parse.Query(this.New())
            .get(id)
            .then(result => {
                //console.log('result', result)
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }

    getAllRecipes() {
        return new this.Parse.Query(this.New())
            .include('name')
            .include('imgUrl')
            .include('recipeUrl')
            .include('servingSize')
            .find()
            .then(result => {
                //console.log('result', result)
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }

    getByRecipeName(name) {
        return new this.Parse.Query(this.New())
            .include('name')
            .include('imgUrl')
            .include('recipeUrl')
            .include('servingSize')
            .equalTo('name', name)
            .find()
            .then(recipes => {
                recipes.forEach(recipe => {
                    this.Parse.defineAttributes(recipe, this.fields);
                    //this.Parse.defineAttributes(recipe.name, this.RecipesModel.fields);
                })
                this.collection = recipes;
                console.log("getByRecipeName", this.collection)
                return Promise.resolve(recipes);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('RecipesModel', RecipesModel);
