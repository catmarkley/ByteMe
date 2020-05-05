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


    /**
    * @name getById
    * @methodOf Pantry.Model
    * @description Takes in a Food ID and returns pantry entry
    * @param {string=} [id] This parameter is used to identify a food in the pantry
    * @returns {object} Returns a Parse Query object that match the query
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
    * @name getByUser
    * @methodOf Pantry.Model
    * @description Takes in a User ID and returns the user's pantry
    * @param {string=} [user] This parameter is used to identify a user
    * @returns {object} Returns a Parse Query object that match the query
    */
    getByUser(user) {

        var personQuery = new Parse.Query('User');
        personQuery.equalTo('objectId', user);

        return new this.Parse.Query(this.New())
            .include('user')
            .include('food')
            .matchesQuery('user', personQuery)
            .find()
            .then(result => {
              this.Parse.defineAttributes(result, this.fields);
              this.data = result;
              return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));

    }
    /**
    * @name getByUserEmail
    * @methodOf Pantry.Model
    * @description Takes in a User's email and returns the user query
    * @param {string=} [email] This parameter is used to identify a user by email
    * @returns {object} Returns a Parse Query object that matches the query
    */
    getByUserEmail(email){
      var personQuery = new Parse.Query('User');
      personQuery.equalTo('email', email);

      return new this.Parse.Query(this.New())
          .include('user')
          .include('food')
          .matchesQuery('user', personQuery)
          .find()
          .then(result => {
            this.Parse.defineAttributes(result, this.fields);
            this.data = result;
            return Promise.resolve(result);
          })
          .catch(error => Promise.reject(error));

    }
    /**
    * @name addToPantry
    * @methodOf Pantry.Model
    * @description Takes in a food name, amount and unit and adds it to a user's pantry
    * @param {string=} [name] This parameter is used to identify a food
    * @param {string=} [amount] This parameter is used to identify an amount
    * @param {string=} [unit] This parameter is used to identify a unit
    * @returns {object} Returns a Parse Query object that matches the query and adds to database
    */

    addToPantry(name, amount, unit) {
      const newFood = Parse.Object.extend(this.name);
      const newFoods = new newFood();
      //HARD CODED USER ID
      this.FoodModel.getByFoodName(name).then(function(food){
        newFoods.set("user", { "__type": "Pointer", "className": "_User", "objectId": 'ODSERISQ1h' });
        newFoods.set("food", { "__type": "Pointer", "className": "Food", "objectId": food[0]["id"] });
        newFoods.set("amount", amount);
        newFoods.set("unit", unit);
        newFoods.save()
        .then((Food)=> {
          console.log('New food added to pantry' + Food);
          return Promise.resolve(Food);
        }, (error)=> {
          console.log('Error to add to pantry', error)
        })
      })

    }
}

angular
    .module('common')
    .service('PantryModel', PantryModel);
