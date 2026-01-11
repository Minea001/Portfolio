1. Refference: 
    . Name: Liem Leakhena
    Position: Country Director 
    Work At: GIBTK Organization
    Phone: +855 17 822 133 / 86 377 749
    Email: leakhena@givingitbacktokids.org
    ===================
    . Name: Kong Ratha
    Position: Chief of mechanical division at EDC,C7 (Electricité Du Cambodge)
    Work At: Electricité  Du Cambodge
    Phone: +855 86 506 021
    Email: rathakong.kth27@gmail.com
2. Skills:
    PHP / Laravel Framework
    Mysql
    Ionic Angular Framework
    Typescript
    Html, CSS, Javascript
3. Experiences:
    *Octocber, 2023 – Present
    Web Application Developer
    - Company: Raksa Solution Co.ltd.
    - Role: 
        Working on developing POS system and relevant systems
    
        Develop Features according to the client’s requirements.
        Polishing Old Features and Update  New Features 
        Develop Frontend using Ionic Framework and Backend API with PHP
    ======================
    *November, 2022 - July, 2023
    Web Developer Internship
    Company: Rabbit Training Center
    Role: 
    Create Mini POS using Meteor JS with Vue3
4. Traning:
. 2019 - 2023: Build Bright University
                Bachelor of Information Technology
. SalaIT  (June - November 2025)
    Full Stack App Development  (Flutter & Laravel)
. ETEC Training Center (August - October 2022)
    - Web Frontend Development (HTML, CSS, JQuery, Javascript)
    - Web Backend Development (PHP, Mysql)
. Baktouk Training Center (July - September 2020)
    - Basic Programming Language (C)
5. Contact: 
    Phone: 096 244 96 30 / 092 54 02 96
    Email: chanminearoeun@gmail.com
    Address: 101, St. 05 Krang Thnong, Sen Sok
// Add to index.html before </head>
<script>
  (function () {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>

// create 404.html
<script>
  sessionStorage.redirect = location.href;
</script>
<meta http-equiv="refresh" content="0;URL='/'">

======> how to deploy to Git

1. ionic build --prod -- --base-href=/REPO_NAME/
2.Create /docs folder then copy all data in www => doc
3. git add .
git commit -m "Deploy"
git push
4. Enable GitHub Pages
GitHub → Settings → Pages
Source: Deploy from a branch
Branch: main
Folder: /docs
Save
5. https://USERNAME.github.io/REPO_NAME/ is your site to access


