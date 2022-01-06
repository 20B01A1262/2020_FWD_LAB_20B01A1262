fetch("https://jsonplaceholder.typicode.com/users").then(res => 
        {
            res.json().then(
                data => 
                {
        
                if (data.length > "0") 
                {   
                    console.log(data);
                    var temp = "";
                }
                else 
                {
                    data.forEach((u) => 
                    {
                        temp += "<tr>";
                        temp += "<td>" + u.id + "</td>";
                        temp += "<td>" + u.name + "</td>";
                        temp += "<td>" + u.email + "</td></tr>";
                    })
                    document.getElementById("data").innerHTML = temp;
                }
            })
        })