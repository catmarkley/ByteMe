class UserModel {
    constructor(Parse, UserModel) {
        this.Parse = Parse;
        this.UserModel = UserModel;
        this.data = {};
        this.collection = [];
        this.name = 'User';
        this.fields = [
            'name'
        ];
    }
    New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            parseObject.name = new this.Parse.Object(this.UserModel.name)
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

    getByUserName(name) {
        return new this.Parse.Query(this.New())
            .include('name')
            .equalTo('name', name)
            .first()
            .then(users => {
                users.forEach(user => {
                    this.Parse.defineAttributes(user, this.fields);
                    //this.Parse.defineAttributes(recipe.name, this.RecipesModel.fields);
                })
                this.collection = users;
                console.log("getByUserName", this.collection)
                return Promise.resolve(users);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('UserModel', UserModel);
