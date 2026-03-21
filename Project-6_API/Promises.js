const promiseOne= new Promise(function(resolve,reject){
    console.log("Start")
    resolve({"username":"YashAditya","Email":"yashadity@gmail.com"})
})
promiseOne.then(function(user){
    console.log(user)
})