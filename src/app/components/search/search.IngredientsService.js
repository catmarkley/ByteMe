//Data service
function IngredientsService($http){
    var ingr = {}
    this.getIngredients = function(){
        //return ingr = $http.get('./ingredients.json')
        return data;
    }

    this.getPantry = function(){
      return pantry;
    }

    this.addToPantry = function(ingred){
      if(pantry.indexOf(ingred) == -1){
        pantry.push(ingred);
      }
    }
    
    this.findRecipes = function(ingredient){
        recipes = []
        ingr = ingr.$$state.value.data
        for(foodidx in ingr){
            for(igx in ingr[foodidx].items){
                ingred = ingr[foodidx].items[igx]
                if(ingredient.includes(ingred.name)){
                    recipes.push(ingred)
                }
            }
        }
        return recipes
    }

    this.findRecipe = function(ingred, recipe, data){
        for(idx in data.data){
            foodType = data.data[idx]
            for(idx2 in foodType.items){
                ing = foodType.items[idx2]
                if(ing.name == ingred){
                    console.log("Found ingredient: " + ing.name)
                    for(idx3 in ing.recipes){
                        rec = ing.recipes[idx3]
                        if(rec.name == recipe){
                            console.log("Found Recipe!: " + rec.name)
                            return rec
                        }
                    }
                }
            }
        }
    }

    var pantry = [];

    var data = [ {"type": "Protein", "items": [
    {"name":"Chicken", "img_url":"https://ewscripps.brightspotcdn.com/dims4/default/f3961eb/2147483647/strip/true/crop/1000x563+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F77%2Fa4%2Fe0c7a0f44224bd77a617b3db83a7%2Fwptv-raw-chicken.jpg",
     "recipes":[
        {"id": 1, "name":"Chicken Enchiladas", "img_url":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/4/30/0/Cinco_Enchiladas.jpg.rend.hgtvcom.826.620.suffix/1382538528797.jpeg", "recipe_url": "https://www.foodnetwork.com/recipes/tyler-florence/chicken-enchiladas-recipe-1907241", "amount":1, "serves":8},
        {"id":2, "name":"Chicken Parmesean", "img_url":"https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Chicken-Parmesan-24.jpg","recipe_url":"https://www.allrecipes.com/recipe/223042/chicken-parmesan/","amount":1, "serves":4}
     ]
    },
    {"name":"Beef", "img_url":"https://media.istockphoto.com/photos/profile-of-holstein-cow-5-years-old-standing-picture-id104783196?k=6&m=104783196&s=612x612&w=0&h=D6e72CqOGda0g_YYO3R3eIXq-yfgmfJxHKvpLQaePAs=",
     "recipes":[
        {"id":3, "name":"Hamburgers","img_url":"https://media.istockphoto.com/photos/hamburger-with-fries-picture-id617364554?k=6&m=617364554&s=612x612&w=0&h=BifDNyNdMMMPvE3q9MX3PmBPmmIfG_9v5jbarS7vHLo=","recipe_url":"https://www.allrecipes.com/recipe/49404/juiciest-hamburgers-ever/","amount":1, "serves":8},
        {"id":4, "name":"Garlic Butter Steak", "img_url":"https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Garlic-Butter-Steak_EXPS_SDFM18_45362_C10_11_4b.jpg","recipe_url":"https://www.tasteofhome.com/recipes/garlic-butter-steak/","amount":1, "serves":2},
        {"id":15, "name": "Mongolian Beef","img_url":"https://dinnerthendessert.com/wp-content/uploads/2017/02/Mongolian-Beef-4.jpg", "recipe_url":"https://dinnerthendessert.com/mongolian-beef/", "amount":1, "serves":4}
     ]
    },
    {"name":"Shrimp", "img_url":"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/shrimp-on-wooden-platter-1296x728.jpg?w=1155&h=1528",
     "recipes":[
        {"id":5, "name":"Garlic Butter Shrimp Scampi","img_url":"https://cafedelites.com/wp-content/uploads/2018/03/Garlic-Butter-Shrimp-IMAGE-15.jpg", "recipe_url":"https://cafedelites.com/garlic-butter-shrimp-scampi/","amount":1, "serves":4},
        {"id":16, "name":"Rum-Glazed Shrimp", "img_url":"https://hips.hearstapps.com/vidthumb/images/delish-rum-glazed-shrimp-still005-1551394968.jpg?crop=0.614xw:0.613xh;0.243xw,0.151xh&resize=768:*", "recipe_url":"https://www.delish.com/cooking/a26551522/spiced-rum-glazed-shrimp-recipe/", "amount":1, "serves":6},
        {"id":17, "name": "Shrimp Kung Pao Noodles", "img_url":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-shrimp-kung-pao-noodles-pin-1550758340.jpg?crop=1xw:0.9453781512605042xh;center,top&resize=980:*", "recipe_url":"https://www.delish.com/cooking/recipe-ideas/a26355862/shrimp-kung-pao-noodles-recipe/", "amount":1, "serves":4}
     ]
    },
    {"name":"Fish", "img_url":"https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323661/mackerel-fish-on-ice.jpg",
      "recipes":[
          {"id": 6, "name":"Lemon-Garlic Baked Salmon Fillet", "img_url":"https://www.thespruceeats.com/thmb/sKDM4ZXfewN2Q0rq2bG2uDQxOv4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-baked-salmon-fillet-2121574-6399_preview-5b198deceb97de0036bebfaf.jpeg","recipe_url":"https://www.thespruceeats.com/simple-baked-salmon-fillet-2121574","amount":1,"serves":8},
          {"id": 7, "name":"Baked Flounder With Lemon and Butter", "img_url":"https://www.thespruceeats.com/thmb/ifvNdIfgzEIy3MUZKrQBHQTXOlo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/baked-flounder-with-lemon-3056528_hero-01-615eadfb99d14f0c9ac91cd89e7463d8.jpg", "recipe_url":"https://www.thespruceeats.com/baked-flounder-with-lemon-3056528", "amount":1, "serves":4},
          {"id": 8, "name":"Herbed Sea Bass Baked in Paper", "img_url":"https://www.thespruceeats.com/thmb/jTKtIaX6RlqphYAHn3uEPlAYZDo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-155431291-582d49cb3df78c6f6a2788dc.jpg","recipe_url":"https://www.thespruceeats.com/greek-lavraki-recipe-1705522", "amount":1, "serves":4},
          {"id":14, "name":"Baked Sole With Mint and Ginger", "img_url":"https://www.thespruceeats.com/thmb/W4zSTHpfApu9wKvAC6HZRgvcPd8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mintgingersole-56a5b28d5f9b58b7d0de053b.jpg", "recipe_url":"https://www.thespruceeats.com/baked-sole-with-mint-and-ginger-2216652","amount":1, "serves":4}
      ]}
    ]},
    {"type" : "Vegetable", "items": [
    {"name":"Green Beans", "img_url":"https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/9/23/0/CCPLBSP1H_Heavenly-Sauteed-String-Beans-with-Garlic_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516897726695.jpeg",
     "recipes":[
        {"id": 9, "name":"Classic Green Bean Casserole","img_url":"https://www.cscassets.com/recipes/wide_cknew/wide_24099.jpg", "recipe_url":"https://www.campbells.com/kitchen/recipes/classic-green-bean-casserole/","amount":1, "serves":6},
        {"id":18, "name":"Buttery Garlic Green Beans", "img_url":"https://images.media-allrecipes.com/userphotos/720x405/6487180.jpg","recipe_url":"https://www.allrecipes.com/recipe/230103/buttery-garlic-green-beans/","amount":1, "serves":4}
     ]
    },
    {"name":"Bell Peppers", "img_url":"https://prods3.imgix.net/images/articles/2017_07/nonfeatured-difference-bell-peppers.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370",
     "recipes":[
        {"id":10, "name":"Stuffed Bell Peppers","img_url":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/2/WU1307H_stuffed-peppers_s4x3.jpg.rend.hgtvcom.616.462.suffix/1463506005081.jpeg","recipe_url":"https://www.foodnetwork.com/recipes/ree-drummond/stuffed-bell-peppers-3325315","amount":1, "serves":6},
        {"id":19, "name":"Sausage and Pepper Sheet-Pan Sandwiches", "img_url":"https://www.tasteofhome.com/wp-content/uploads/2018/04/Sausage-and-Pepper-Sheet-Pan-Sandwiches_EXPS_THFM18_207720_D09_14_4b-696x696.jpg", "recipe_url":"https://www.tasteofhome.com/recipes/sausage-and-pepper-sheet-pan-sandwiches/", "amount":1, "serves":6}
     ]
    },
    {"name":"Broccoli", "img_url":"https://www.health.harvard.edu/media/content/images/p7_Broccoli_HH1812_gi905351392.jpg",
     "recipes":[
        {"id":11, "name":"Roasted Broccoli with Garlic","img_url":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/6/9/1/FN_Roasted-Broccoli-with-Garlic_s4x3.jpg.rend.hgtvcom.826.620.suffix/1402542284727.jpeg","recipe_url":"https://www.foodnetwork.com/recipes/food-network-kitchen/roasted-broccoli-with-garlic-recipe-1928248","amount":1, "serves":4},
        {"id":20, "name":"Grilled Beef with Broccoli","img_url":"https://assets.bonappetit.com/photos/597f6557a2d4466309949378/16:9/w_2056,c_limit/0817-murray-mancini-grilled-chinese-beef-broccoli.jpg","recipe_url":"https://www.bonappetit.com/recipe/grilled-beef-with-broccoli","amount":1,"serves":4}
     ]
    }]},
    {"type":"Starch", "items":[
    {"name":"Potato", "img_url":"https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
     "recipes":[
        {"id": 12, "name":"Basic Mashed Potatoes","img_url":"https://images.media-allrecipes.com/userphotos/720x405/5294868.jpg","recipe_url":"https://www.allrecipes.com/recipe/24771/basic-mashed-potatoes/","amount":1, "serves":4},
        {"id":21, "name":"Garlic Roasted Potatoes","img_url":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a07_roasted_potatoes.jpg.rend.hgtvcom.826.620.suffix/1446840363593.jpeg","recipe_url":"https://www.foodnetwork.com/recipes/ina-garten/garlic-roasted-potatoes-recipe-1913067", "amount":1, "serves":8}
     ]
    },
    {"name":"Pasta", "img_url":"https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg",
     "recipes":[
        {"id": 13, "name":"Spaghetti Sauce with Ground Beef","img_url":"https://images.media-allrecipes.com/userphotos/720x405/667748.jpg","recipe_url":"https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/","amount":1, "serves":2},
        {"id":22, "name":"Shrimp Fettuccine Alfredo","img_url":"https://hips.hearstapps.com/del.h-cdn.co/assets/17/26/1600x2399/gallery-1498853511-number2.jpg?resize=768:*","recipe_url":"https://www.delish.com/cooking/recipe-ideas/recipes/a54004/easy-shrimp-pasta-alfredo-recipe/","amount":1,"serves":4}
     ]
    }]}

]

};

angular
  .module('components.search')
  .service('IngredientsService', IngredientsService);
