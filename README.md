Unit 3 Project MERN Ecommerce website design concepts / instructions for cloning, running and testing.

Readme instructions:
A Readme that fully explains to a user how to do the following:<br>
How to install this app on their local machine<br>
What global installations they need and what files do they need to create that didn't come in the github repo<br>
How to start the app in dev mode<br>
How to run tests<br>
How to start the app without dev mode.<br>

<h1>Dev Dependency</h1>
<h2>a Freelance SaaS shoppe</h2>
<h3>Christopher Lazariuk, General Assembly Unit 2</h3>
<h4>Customer User Story: As a user, I want to make an account on the Dev Dependency website, browse their available products and services, find out more about the company and it's values, and ultimately purchase the goods that interest me via the cart-based order and check-out system.</h4>
<br>
<h3>Initial Setup Instructions</h3>
<p>After successfully cloning into your desired local folder location from github, navigate to project folder via terminal command line.
<br>
type 'touch .env' to create a new env file. The two sets of data you must then enter are below, along with directions on what to insert within brackets: <br>

```
MONGO_URI=<enterLinkInformationToYourMongDBdatabase>
SECRET=<enterSHA-256-SECRET-encryptionToPreferredSecretPassword>
```

SECRET <strong>must</strong> be a sha256 hash. Link to hashing site: https://emn178.github.io/online-tools/sha256.html
<br>Once your .env is correctly created, SAVE FILE<br><br>
<h4>NODE VERSION REQUIREMENTS:</h4>
In order to run this program you must have Node version 20 installed and running on your device.
<br>
<h5>Necessary packages to install<h5>
<br> Type the following verbatim into terminal's command line while in working project folder to install relevant packages:<br>

```
npm i
```
<br>

<h6>Time to rock 'n roll!</h6>
<br>
Open up the project by typing 'code .' in the terminal while in the project folder if you haven't done so already. Then open terminal on project folder location within VS code.
<br><br>
Before initial rounds of testing, or to reset database per needs, type 'npm run seed' in command line while in project folder. This will plant pre-set inventory and categories into your database for easier testing and demo purposes.
<br>
Once you've grown tired of exploring the code, type 'npm run test' in terminal after verifying you're in the project's folder to run back-end testing. The test files in the tests folder will execute and return the corresponding results.
</p>
<br>
*awaiting insertion of front-end testing materials. Must expand.


## Steps

**Install Gulp Globally**
```bash
npm i -g gulp-cli
```

**Start the dev server**
```bash
npm run dev
```
### or
```bash
yarn dev
```

**Start the dev server with proxy**
```bash
npm run proxy
```

**Build files for production**
```bash
yarn build
```
### or

```bash
npm run build
```

**Deploy for production script**
```bash
npm start
```
### or
```bash
yarn start
```
