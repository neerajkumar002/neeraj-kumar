//project data

const projectData = [
  {
    id: 1,
    name: "Project Name",
    discription: "this project based on new technology",
    techKeywords: [
      "<span>HTML</span>",
      "<span>HTML</span>",
      "<span>HTML</span>",
    ],
    image: "card.web",
    githubUrl: "https://www.github.com",
    projectUrl: "https://www.google.com",
  },
  {
    id: 2,
    name: "Project Name",
    discription: "this project based on new technology",
    techKeywords: [
      "<span>HTML</span>",
      "<span>HTML</span>",
      "<span>HTML</span>",
    ],
    image: "card.web",
    githubUrl: "https://www.github.com",
    projectUrl: "https://www.google.com",
  },
  {
    id: 3,
    name: "Project Name",
    discription: "this project based on new technology",
    techKeywords: [
      "<span>HTML</span>",
      "<span>HTML</span>",
      "<span>HTML</span>",
    ],
    image: "card.web",
    githubUrl: "https://www.github.com",
    projectUrl: "https://www.google.com",
  },
  {
    id: 4,
    name: "Project Name",
    discription: "this project based on new technology",
    techKeywords: [
      "<span>HTML</span>",
      "<span>HTML</span>",
      "<span>HTML</span>",
    ],
    image: "card.web",
    githubUrl: "https://www.github.com",
    projectUrl: "https://www.google.com",
  },
];

const projectShowcaseContainer = document.querySelector(
  ".project-showcase-container"
);

function showProjects() {
  projectShowcaseContainer.innerHTML = projectData
    .map(
      (item) => ` <div class="card">
            <div class="card-image">
              <img src="../images/card.webp" alt="" />
            </div>  
            <h2 class="card-title">Project Name</h2>
            <p class="card0-para">Project description</p>
            <div class="tech-stack">
       
             ${item.techKeywords.join("")}
     
             </div>
           <div class="links"><a href="">Website</a><a href="">Github</a></div>
          </div>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  showProjects();
});
