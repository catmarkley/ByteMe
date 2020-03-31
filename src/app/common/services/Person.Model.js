class PersonModel {
    constructor(Parse, PersonModel) {
        this.Parse = Parse;
        this.PersonModel = PersonModel;
        this.data = {};
        this.collection = [];
        this.name = 'Person';
        this.fields = [
            'name'
        ];
    }
    New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            parseObject.name = new this.Parse.Object(this.PersonModel.name)
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

    getByPersonName(name) {
        return new this.Parse.Query(this.New())
            .include('name')
            .equalTo('name', name)
            .first()
            .then(persons => {
                persons.forEach(person => {
                    this.Parse.defineAttributes(person, this.fields);
                    //this.Parse.defineAttributes(recipe.name, this.RecipesModel.fields);
                })
                this.collection = persons;
                console.log("getByPersonName", this.collection)
                return Promise.resolve(persons);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('PersonModel', PersonModel);
