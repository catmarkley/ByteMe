class FoodModel {
    constructor(Parse) {
        this.Parse = Parse;
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
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            return obj;
        }
    }


    /**
    * @name getById
    * @methodOf Food.Model
    * @description Takes in a Food ID and returns a Food object with that ID, if there is one
    * @param {string=} [id] This parameter is used to query the database to return a Food object with this given ID
    * @returns {object} Returns a Parse Query object that match the query
    */

    getById(id){
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
    * @name getAllFood
    * @methodOf Food.Model
    * @description Returns all objects of type Food
    * @returns {object} Returns a Parse Query object with all Food objects
    */
    getAllFood(){
      return new this.Parse.Query(this.New())
          .include('id')
          .include('name')
          .include('imgUrl')
          .find()
          .then(foods => {
              foods.forEach(food => {
                  this.Parse.defineAttributes(food, this.fields);
              })
              this.collection = foods;
              return Promise.resolve(foods);
          })
          .catch(error => Promise.reject(error));
    }

    /**
    * @name getByFoodName
    * @methodOf Food.Model
    * @description Takes in a Food name and returns a Food Object with that name, if it exists
    * @param {string=} [name] This parameter is used to query the database to return a Food object with this given name
    * @returns {object} Returns a Parse Query object that match the query
    */
    getByFoodName(name) {
        return new this.Parse.Query(this.New())
            .include('name')
            .include('imgUrl')
            .include('id')
            .equalTo('name', name)
            .find()
            .then(foods => {
                foods.forEach(food => {
                    this.Parse.defineAttributes(food, this.fields);
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
