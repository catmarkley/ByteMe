class FoodModel {
    constructor(Parse, FoodModel) {
        this.Parse = Parse;
        this.FoodModel = FoodModel;
        this.data = {};
        this.collection = [];
        this.name = 'Food';
        this.fields = [
            'name',
            'imgUrl'
        ];
    }
    New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            parseObject.name = new this.Parse.Object(this.FoodModel.name)
            //this.Parse.defineAttributes(parseObject.name, this.FoodModel.fields);
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            //this.Parse.defineAttributes(obj.name, this.FoodModel.fields);
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

    getByFoodName(name) {
        return new this.Parse.Query(this.New())
            .include('name')
            .include('imgUrl')
            .equalTo('name', name)
            .find()
            .then(foods => {
                foods.forEach(food => {
                    this.Parse.defineAttributes(food, this.fields);
                    //this.Parse.defineAttributes(recipe.name, this.RecipesModel.fields);
                })
                this.collection = foods;
                console.log("getByFoodName", this.collection)
                return Promise.resolve(foods);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('FoodModel', FoodModel);
