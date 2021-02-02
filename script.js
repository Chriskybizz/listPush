var profile = [{
    1: [{Name:"Jericho"},{likes:["Pizza","Bikes","Sewing","Cooking","Weights"]}],
    2: [{Name:"Hamish"},{likes:["Games","Pool","Swimming","Cars","Cats"]}],
    3: [{Name:"Jack"},{likes:["Movies","Music","Pickling","Sewing","Art"]}],
    4: [{Name:"Sarah"},{likes:["Clubs","Pizza","Cats","Traveling","Bikes"]}],
    5: [{Name:"Ben"},{likes:["","Swimming","Reading","Weights","Pizza"]}],
    6: [{Name:"Dalton"},{likes:["Bikes","","Swimming","Cooking","Youtube"]}],
    7: [{Name:"Andrew"},{likes:["Cooking","Clothes","Cats","Bikes","Landscaping"]}],
    8: [{Name:"Helen"},{likes:["Drinking","Traveling","Pizza","Games","Reading"]}],
    9: [{Name:"Achilles"},{likes:["Art","Swimming","Clothes","Coffee","Sewing"]}],
    10: [{Name:"Roger"},{likes:["Movies","Cooking","Youtube","Music","Bikes"]}],
    11: [{Name:"Stan"},{likes:["Cats","Pizza","","Bikes","Art"]}],
    12: [{Name:"Steve"},{likes:["Pizza","Bikes","Games","Traveling","Movies"]}],
    13: [{Name:"Mandy"},{likes:["Clubs","","Weights","Cats","Art"]}],
    14: [{Name:"Juan"},{likes:["Sewing","Clothes","Art","Swimming","Wine"]}],
    15: [{Name:"Casper"},{likes:["Drinking","Bikes","Movies","Pizza","Games"]}],
    16: [{Name:"Arthur"},{likes:["","Games","Cars","Drinking","Cooking"]}],
    17: [{Name:"Samuel"},{likes:["Music","Nights In","Swimming","Clubs","Movies"]}],
    18: [{Name:"Augustus"},{likes:["Traveling","Cooking","Art","Pizza","Clothes"]}],
    19: [{Name:"Louise"},{likes:["Shoes","Swimming","Music","Sewing","Drinker"]}],
    20: [{Name:"Riley"},{likes:["Bikes","Cars","Pizza","Weights","Coffee"]}],
    21: [{Name:"Connie"},{likes:["Weights","Games","Reading","Cars","Pizza"]}],
    }]

    var eleName = document.getElementById("Name");
    var eleLikes = document.getElementById("Likes");


    function updateInfo(val1,val2){
        eleName.value = profile[val1][val2];
    }

    updateInfo(1,0);