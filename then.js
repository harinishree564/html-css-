/*let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  );*/
  
  /*let p = new Promise((resolve,reject)=>{
      let a = 1 + 1
      if(a==2){
resolve('success')
      }
      else{
          reject('failed')
      }})

      p.then((message) => {
          console.log('this is in the then '+ message)
      }
      )
      .catch((message) => {
        console.log('this is in the then '+ message)

      })*/





      function checkPaper() {
        return new Promise((resolve, reject) => {
          if (10 > 0.5) {
            resolve('paper has arrived');
          } else {
            reject(new Error('Failed to arrive'));
          }
        });
      }
      
      checkPaper()
        .then((Paper) => {
          console.log(Paper);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          console.log('Experiment completed');
        });
      