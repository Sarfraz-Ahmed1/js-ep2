const accountId = 144553
let accountEmail = "sarfraz@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" // not recommended but possible
let accountState

// accountId = 2  Not Allowed because its type is Constant

accountEmail = "sa@gmail.com"
accountPassword = "7654"
accountCity = "islmbd"

console.log(accountId);

/*
* Prefer not to use var because of issue in block scope and functional scope
* */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])