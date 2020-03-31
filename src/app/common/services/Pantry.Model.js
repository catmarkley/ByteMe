class PantryModel {
    constructor(Parse, FoodModel, UserModel) {
        this.Parse = Parse;
        this.UserModel = UserModel;
        this.FoodModel = FoodModel;
        this.data = {};
        this.collection = [];
        this.name = 'Pantry';
        this.fields = [
            'user',
            'food',
            'amount',
            'unit'
        ];
    }
    New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            parseObject.user = new this.Parse.Object(this.UserModel.name)
            this.Parse.defineAttributes(parseObject.user, this.UserModel.fields);
            parseObject.food = new this.Parse.Object(this.FoodModel.name)
            this.Parse.defineAttributes(parseObject.food, this.FoodModel.fields);
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            this.Parse.defineAttributes(obj.user, this.UserModel.fields);
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
    getByUser(user) {
        return new this.Parse.Query(this.New())
            .include('user')
            .include('food')
            .equalTo('user', user)
            .find()
            .then(result => {
              this.Parse.defineAttributes(result, this.fields);
              this.data = result;
              console.log("getByUser", result);
              return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }

    getByUserAndFood(user, food) {
        return new this.Parse.Query(this.New())
            .include('user')
            .include('food')
            .equalTo('user', user)
            .equalTo('food', food)
            .first()
            .then(result => {
              this.Parse.defineAttributes(result, this.fields);
              this.data = result;
              console.log("getByUserAndFood", result);
              return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('PantryModel', PantryModel);
