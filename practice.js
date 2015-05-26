//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      to allow more dynamic functions with more varying arguments

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      Implicit Binding: the thing to the left of the . at call time
      Explicit Binding: using .call or .apply also .bind (in setTimeout call will run like and iffy, bind will save the copy to be ran after timeout "expires")
      new Binding: not covered yet
      Default Binding: if nothing left of dot, no call apply or bind, will default to window global object

  // 3) What is the difference between call and apply?

      .call you have to define each parameter/argument 1x1, .apply you can use an array of them

  // 4) What does .bind do?

      it allows you to permanently bind an object/argument to the 'this' keyword of the function


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: 'nopnop',
      email: "justin.regan@gmail.com",
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

var Car = function(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    move: 0,
    moveCar: function() {
      return this.move += 10;
    }
  }
};

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

getYear.call(prius);
getYear.call(mustang);



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  console.log(this.username); || window global object

//In the example above, what is the 'this keyword' bound to when getUsername runs?

window global object

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

setTimeout(getUsername.bind(user), 5000);