class UserModel {
    constructor(Parse) {
        this.Parse = Parse;
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
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            return obj;
        }
    }

    /**
    * @name getById
    * @methodOf User.Model
    * @description Get user by id
    * @param {string=} [id] This is a parameter that is the id of the user
    * @returns {object} Returns parse query object of user
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
    *
    * @name getByUserName
    * @methodOf User.Model
    * @description Get recipe by name
    * @param {string=} [name] This is a parameter that is the name of the user
    * @returns {object} Returns parse query object user
    */
    getByUserName(name) {
        return new this.Parse.Query(this.New())
            .include('name')
            .equalTo('name', name)
            .first()
            .then(users => {
                users.forEach(user => {
                    this.Parse.defineAttributes(user, this.fields);
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
