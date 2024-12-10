let form = document.getElementById("form");
let profile = document.getElementById("profile");
let getUser = async (userName) => {
    let response = await fetch('https://api.github.com/users/' + userName);
    return await response.json();
};

function htmlRender(res) {
    profile.innerHTML = `
<img
src="${res.avatar_url}"
alt=""
/>
<div class="userInfo">
<div class="name">
  <p>Name</p>
  <p>${res.name}</p>
</div>
<div class="name">
  <p>Location</p>
  <p>${res.location}</p>
</div>
<div class="name">
  <p>Repos</p>
  <p>${res.public_repos}</p>
</div>
<div class="name">
  <p>Followers</p>
  <p>${res.followers}</p>
</div>
<div class="name">
  <p>Following</p>
  <p>${res.following}</p>
</div>
</div>
`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userValue = e.target.search.value;
    if (userValue == "") {
        return alert("Please Enter User Name");
    } else {
        getUser(userValue)
            .then((res) => {
                htmlRender(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    form.reset();
});

window.addEventListener("load", () => {
    getUser("Ahadullahkhan1")
        .then((res) => {
            htmlRender(res);
        })
        .catch((err) => {
            console.log(err);
        });
});