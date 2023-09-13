fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
        const userList = document.getElementById("userList");
        const userInfo = document.getElementById("userInfo");

        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;

            /*************Homework****************/
           li.addEventListener("click", () =>{
            const userDetails = `
            Name: ${user.name}<br>
            User name: ${user.username}<br>
            Email: ${user.email}<br>
            Phone: ${user.phone}<br>
            Website: ${user.website}<br>
            Address: ${user.address.street}<br>
                    ${user.address.city}<br>
                    ${user.address.zipcode}<br>
          `;
          userInfo.innerHTML = userDetails;
        });
           /*******************************/
        userList.appendChild(li);      
       });
    })
    .catch((err) => {
        const li = document.createElement("li");
        li.textContent = "USERs are not found: try repeat later";
        userList.appendChild(li);
        console.log(err);
    })
    .finally(console.log("Finish"));