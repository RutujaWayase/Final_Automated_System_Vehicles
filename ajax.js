console.log("Material and Vendor Details");



let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);


function buttonClickHandler() {
    console.log('You have clicked the fectBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();


    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // xhr.open('GET', 'https://reqres.in/api/products/3', true);


    // Use this for post request
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('Content-type', 'application/json');



    //What to do on progress
    xhr.onprogress = function () {
        console.log('On Progress');

    }


    xhr.onreadystatechange = function () {
        console.log('ready state is', xhr.readyState);
    }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText)

            /* let obj = JSON.parse(this.responseText);
             console.log(obj);
             let list = document.getElementById('list');
             str ="";
             for (key in obj)
             {
                 str += '<li>${obj[key]} </li>';
 
             }
             list.innerHTML = str;
             */


        }
        else {
            console.log("Some error occured")
        }

    }









    //send the request
    xhr.send();

    //send request
    //  params = 	' "name":"test2345","salary":"123","age":"23" ' ;
    //  xhr.send(params);



    console.log("We are done fetching material data!");

}