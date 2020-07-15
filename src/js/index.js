import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let position = variables.socialMediaPosition;
  if (variables.socialMediaPosition == "right") position = "position-right";

  let developer = variables.role;
  switch (variables.role) {
    case "Web Developer":
      developer = "Web Developer";
      break;
    case "Floor Planner":
      developer = "Floor Planner";
      break;
    case "Technical Writter":
      developer = "Technical Writter";
      break;
    default:
      null;
  }
  let ciudad = variables.city;
  switch (variables.city) {
    case "Miami":
      ciudad = "Miami";
      break;
    case "Munich":
      ciudad = "Munich";
      break;
    case "Caracas":
      ciudad = "Caracas";
      break;
    case "Toronto":
      ciudad = "Toronto";
      break;
    default:
      null;
  }
  let pais = variables.country;
  switch (variables.country) {
    case "USA":
      pais = ", USA";
      break;
    case "Germany":
      pais = ", Germany";
      break;
    case "Venezuela":
      pais = ", Venezuela";
      break;
    case "Canada":
      pais = ", Canada";
      break;
    default:
      null;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${developer}</h2>
          <h3>${ciudad} ${pais}</h3>
          <ul class="${position}">
            <li><a href="https://twitter.com/${variables.twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: null,
    // social media usernames
    twitter: "",
    github: "",
    linkedin: "",
    instagram: "",
    name: "",
    lastname: "",
    role: "",
    country: "",
    city: ""
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
