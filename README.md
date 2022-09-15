This project relies heavily on:

Sakai (SaaS App): https://github.com/primefaces/sakai-react
and
Play (Marketing Website): https://uideck.com/templates/play-tailwind/

This is a mock SaaS website to showcase how Heap can be utilized to capture user behavior. The marketing portion of the website (/public/main.html) is served with static HTML files in the public directory.  The Heap App call is hardcoded into these following pages (this is due to merging the 2 project together...in the future, we can recreate these pages as javascript components, which will allow them to access env variables):

/public/main.html
/public/404.html
/public/about.html
/public/blogdetails.html
/public/blog-grids.html
/public/contact.html
/public/pricing.html
/public/signup.html
/public/singin.html 

The true React portion of this website (the sandbox with associated interactive components) is served as a React app.  The Heap App call uses an environment variable set in .env file in the /public folder.  The call itself resides within public/index.html.  The main React app itself is located under src/App.js..
