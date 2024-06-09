# NIKE Clone project details

Here is the link to check **the details** of the **NIKE Clone** Website Project : https://nasal-clavicle-f22.notion.site/Nike-Cloning-Project-d4e724a75f7f40ef9cc67419f2eca1dc

Checkout the **Website after deploy** : https://rothasamon.github.io/Nike-Clone-Project/index.html

## Project Setup & Installation
  1. Prerequisites:
      + Git installed: Ensure you have Git installed on your system. You can check by running git --version in your terminal. If not installed, download it from 
          https://git-scm.com/downloads.
      + Node.js and npm installed: Node.js is required for npm, the package manager used in this project. Download and install the latest LTS (Long-Term Support) version from        https://nodejs.org/en.

  2. Steps:
      + Clone the Repository:
        - Open a terminal or command prompt and navigate to the directory where you want to clone the project.
        - Use the git clone command followed by the URL of the remote repository you cloned from (e.g., GitHub, GitLab):
      + Install Dependencies:
        - Navigate to the cloned project directory
        - Since node_modules is likely excluded in the .gitignore file, you'll need to reinstall the project's dependencies using npm:
          npm install
        - This command downloads and installs all the necessary packages listed in the package.json file, including Tailwind CSS and any other project dependencies.

      + Run/Build the project
        - If your project uses a build process to optimize and compile assets (usually for production environments), check the package.json file for a script named build or similar. If present, run: 
          npm run build
      + View the Website:
        - Open the index.html file in your text editor or code editor.
        - Right-click on the index.html file and select "Open with" or "Open in Browser" (depending on your operating system).

## Project Folder Structure
```bash
├── assets
│ ├── component
│ │ ├── cardsCarousel-compo.js
│ │ ├── cardsStore-compo.js
│ │ ├── component.js
│ │ ├── membershipCarousel-compo.js
│ │ └── momCards-compo.js
│ ├── data
│ │ ├── cardsCarousel-data.js
│ │ ├── cardsStore-data.js
│ │ ├── membershipCarousel-data.js
│ ├── fifth-page.js
│ ├── forthPage.js
│ ├── homePage.js
│ └── sixth-page.js
├── Images
├── node_modules
├── public
│ ├── fifth-page.html
│ ├── forth-page.html
│ ├── index.html
│ ├── second-page.html
│ ├── sixth-page.html
│ └── third-page.html
├── src
│ ├── style.css
│ └── tw-style.css
├── .gitignore
├── .reviewboardrc
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```