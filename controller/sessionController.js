let users = []

function signup(req,res)
{
    let firstName = req.body.firstName  //firstName 
    let email  = req.body.email
    let password = req.body.password

    let user = {
        "firstName":firstName,
        "email":email,
        "password":password
    }

    users.push(user)

    res.json({"msg":"SignupDone","data":user,"rcode":200})

}

function getAllUsers(req,res){

    res.json({msg:"AllUserRET",rcode:200,data:users})
}

function login(req, res) 
{
    let email = req.body.email;
    let password = req.body.password;
  
    // login
    let user = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      res.json({ msg: "Login successful", rcode: 200, data: user });
    } else {
      res.json({ msg: "Invalid login or password"});
    }
}




module.exports.signup = signup
module.exports.getAllUsers = getAllUsers
module.exports.login = login;


/*
// Example usage
  const login = "user2";
  const password = "pass2";
  
  if (compareLoginPassword(jsonData, login, password)) {
    console.log("Login successful!");
  } else {
    console.log("Invalid login or password.");
  }

*/