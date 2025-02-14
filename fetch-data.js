document.addEventListener("DOMContentLoaded", async function () {
    const dataContainer = document.getElementById("api-data");
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error("Failed to fetch user data.");
        }

        const users = await response.json();

        // Clear the loading text
        dataContainer.innerHTML = "";

        // Create a user list
        const userList = document.createElement("ul");

        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors
        dataContainer.textContent = "Failed to load user data.";
        console.error(error);
    }
});
