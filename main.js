const gitAPI = "https://api.github.com/users/leesaswift";
const reposAPI = "https://api.github.com/users/leesaswift/repos";
let profile = document.getElementById('profile');
let profileInfo = document.getElementById('profile-info');

fetch(gitAPI)
  .then((response) => {
    return response.json();
  })
  .then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

    let image = new Image();
    image.src = parsedJsonResponse.avatar_url;
    imageContainer.appendChild(image);

    let name = document.createElement("h1");
    name.innerText = parsedJsonResponse.name;
    header.appendChild(name);

    let location = document.createElement("div");
    location.innerText = "Location: " + parsedJsonResponse.location;
    bio.appendChild(location);

    let gitHub = document.createElement("div");
    gitHub.innerText = "GitHub URL: ";
    let gitUrl = document.createElement("a");
    gitUrl.innerHTML = parsedJsonResponse.login;
    gitUrl.href = parsedJsonResponse.html_url;
    bio.appendChild(gitHub);
    gitHub.appendChild(gitUrl);

    let usrName = document.createElement("div");
    usrName.innerText = "GitHub username: " + parsedJsonResponse.login;
    bio.appendChild(usrName);

    let descr = document.createElement("p");
    let about = document.createElement("h4");
    about.innerText = "About me: ";
    descr.innerText = parsedJsonResponse.bio;
    bio.appendChild(about);
    bio.appendChild(descr);

    results.appendChild(header);
    results.appendChild(bio);
  });

fetch(reposAPI)
  .then((response) => {
    return response.json();
  })
  .then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

    let reposAPI = document.createElement("ul");

    let repoOne = document.createElement("li");
    let repoOneLink = document.createElement("a");
    repoOneLink.innerText = parsedJsonResponse[0]["name"];
    repoOneLink.href = parsedJsonResponse[0]["html_url"];
    repoOne.appendChild(repoOneLink);
    reposAPI.appendChild(repoOne);

    let repoTwo = document.createElement("li");
    let repoTwoLink = document.createElement("a");
    repoTwoLink.innerText = parsedJsonResponse[1]["name"];
    repoTwoLink.href = parsedJsonResponse[1]["html_url"];
    repoTwo.appendChild(repoTwoLink);
    reposAPI.appendChild(repoTwo);

    let repoThree = document.createElement("li");
    let repoThreeLink = document.createElement("a");
    repoThreeLink.innerText = parsedJsonResponse[2]["name"];
    repoThreeLink.href = parsedJsonResponse[2]["html_url"];
    repoThree.appendChild(repoThreeLink);
    reposAPI.appendChild(repoThree);

    let repoFour = document.createElement("li");
    let repoFourLink = document.createElement("a");
    repoFourLink.innerText = parsedJsonResponse[3]["name"];
    repoFourLink.href = parsedJsonResponse[3]["html_url"];
    repoFour.appendChild(repoFourLink);
    reposAPI.appendChild(repoFour);

    repos.appendChild(reposAPI);
    results.appendChild(repos);
  });