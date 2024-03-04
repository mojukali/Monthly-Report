
    // This line declares a variable called "url" and assigns it a value of "Api_Endpoint_Url"
    let url = "Api_Endpoint_Url";
    // This line declares a variable called "file" and assigns it the value of the first input element on the page
    let file = document.querySelector("input");
    // This line declares a variable called "img" and assigns it the value of the first image element on the page
    let img = document.querySelector("img");
    // This line adds an event listener to the "change" event of the "file" input element
    file.addEventListener('change',()=>{
        // This line creates a new FileReader object called "fr"
        let fr = new FileReader();
        // This line adds an event listener to the "loadend" event of the FileReader object
        fr.addEventListener('loadend',()=>{
            // This line declares a variable called "res" and assigns it the result of the FileReader object
            let res = fr.result;
            // This line sets the "src" attribute of the "img" element to the value of "res"
            img.src=res;
            // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
            let spt = res.split("base64,")[1];
            // This line creates an object called "obj" with three properties: "base64", "type", and "name"
            let buktis = {
                base64:spt,
                type:file.files[0].type,
                name:file.files[0].name
            }
            // This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body
            fetch(url,{
                method:"POST",
                body:JSON.stringify(buktis)
            })
            // This line waits for the response from the server and converts it to text
            .then(r=>r.text())
            // This line logs the response data to the console
            .then(data=>console.log(data))
 
        })
        // This line reads the selected file as a data URL
        fr.readAsDataURL(file.files[0])
    })
