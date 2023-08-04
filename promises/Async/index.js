//creating a promise constructor and passing a function

const ticket = new Promise((res, rej) => {

    const link=true;       //"https://api.github.com/users";
    if(link) {
        res('ticket is issued');
    } else {
        rej('no ticket is issued');
    }
})

ticket
      .then((data) => {
       console.log(data);
})
      .catch((data) => {
      console.log(data);
})
      .finally(() => {
      console.log('this will run always');
      });


//https://youtu.be/y_TTSQ1jf64  callback hell

//https://youtu.be/z-H8S83jJec  callback function

const a=[1,2,3,4,5,5,8,9];

function isneg(num) {
   return num<0;    //true or false
    }

const b=a.find(isneg);

if(b == undefined) {
    console.log('no negative number');
}

console.log(b);



