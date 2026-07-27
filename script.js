async function getProfile() {
            const username = document.getElementById("username").value;

            const response = await fetch(`https://api.github.com/users/${username}`);

            const data = await response.json();

            console.log(data);

            if (data.message === "Not Found") {
                document.getElementById("result").innerHTML =
                    "<h2>User Not Found</h2>";
                return;
            }

            
            document.getElementById("result").innerHTML = `

                <h2>Name: ${data.name}</h2>

                <img src="${data.avatar_url}" width="150">

                <p>Followers: ${data.followers}</p>

                <p>Following: ${data.following}</p>

                <p>Public repos: ${data.public_repos}</p>

                `
        }