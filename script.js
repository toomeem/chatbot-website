function hello_world_func(text){
  const request = new XMLHttpRequest();
  //suppose to get user input from input box and display it
  const input = document.getElementById("user-input");
  const inputValue = input.value
  console.log(inputValue);
  
  request.addEventListener("readystatechange", () => {
  	if(request.readyState === 4){
  		console.log(request.responseText)
  	}
  });
  console.log("Started")
  request.open("GET", "https://actual-immune-cub.ngrok-free.app/website");
  request.send();
  
}
