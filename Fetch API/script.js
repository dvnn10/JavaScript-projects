fetch("https://js67onplaceholder.typicode.com/posts")
.then((response)=>{
  // if(!response.ok){
  //   throw new Error();
  // }
  return response.json()
})
.then((data)=>console.log(data))
.catch((err)=>console.error(err))
