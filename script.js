function hello_world_func(text){
  const request = new XMLHttpRequest();
  
  request.addEventListener("readystatechange", () => {
  	if(request.readyState === 4){
  		console.log(request.responseText)
  	}
  });
  console.log("Started")
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1/");
  request.send();
  
}
