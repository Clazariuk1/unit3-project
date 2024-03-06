require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Back End', sortOrder: 10, description: "You can't get up and running without a quality skeleton in place!"},
    {name: 'Front End', sortOrder: 20, description: "It doesn't matter what your app can do, if it doesn't look stylish and if people have trouble navigating it, you'll be sinking faster than internet explorer's popularity did."},
    {name: 'Website Design', sortOrder: 30, description: "You can't change the world without making yourself a presence in it! Hiring us on to create and upgrade your website gets you that global exposure you need to take your business to the next level!"},
    {name: 'Game Development', sortOrder: 40, description: "Everyone's starry-eyed vision of amicable distraction from the dystopian apocalypse of modern times has to start somewhere! Let's spread some joy together."},
    {name: 'Team Leadership', sortOrder: 50, description: "It's not all ones and zeroes in the world of app development. The answer to the human equation often eludes the best of us. Hire our team to put together the dream team you've been thirsting for"},
    {name: 'Consulting Services', sortOrder: 60, description: "Not ready to commit to hours of intensive labor? Let's start off with planning and development to get you started off on the right foot."},
    {name: 'Non-Technical Services', sortOrder: 70, description: "We're a small team of fledgling developers, what did you expect? We'll do anything for money, we're just trying to keep the lights on."},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'ERG Mock-Ups and Route Planning', image: '/images/chainlink.jpeg', category: categories[0], price: 1999.99, description: 'Consultation and design services geared toward effective and elegant model structures and comprehensive back-end routes planning. For the economists among us in search of professional feedback before rolling up their sleeves and getting their hands dirty themselves.' },
    {name: 'Full API Build', image: '/images/bricklaying.jpeg', category: categories[0], price: 4999.99, description: "Got the best idea ever that's gonna take the world by storm?  A full API build package from our team gets your app that much closer to alive, ensuring your brain child's skeleton is in place before you go taking it for a run in the park. Includes consultation, design, and creation of necessary backend infrastructure."},
    {name: 'CSS Revamp', image: '/images/csspalette.jpeg', category: categories[1], price: 2999.99, description: "For those who just want to make things a little more beautiful, a little more accessible, and a little cleaner on the interface. One-and-done improvements or your money back."},
    {name: 'Feature Add-On', image: '/images/sewing.png', category: categories[1], price: 6999.99, description: "Got lofty dreams of expanding your app's capabilities? Starting with a free initial consultation, we'll seamlessly stitch the latest and greatest feature you've been dreaming of incorporating into your code base."},
    {name: 'Personal Website Development', image: '/images/personal_website.png', category: categories[2], price: 3999.99, description: "Aspiring young professional looking to put their best foot forward? You won't get far without a website of your own. This package offers a personal website built from scratch with up to five interactive pages!"},
    {name: 'Ecommerce Website Development', image: '/images/marketing_image.jpeg', category: categories[2], price: 7999.99, description: "Are you an up-and-coming shop looking to expand your sales and services into the online world? Building an ecommerce site is crucial to your business' longevity. We'll get you up and running in no time!"},
    {name: 'Browser Game Clones', image: '/images/tic_tac_toe.jpeg', category: categories[3], price: 2999.99, description: "Want to make your own version of your favorite retro game but haven't got the chops to seize your dreams? That's where we come in. From tic-tac-toe to tetris to space invaders and more, we've got you covered."},
    {name: 'RPG Design and Build', image: '/images/rpg2.png', category: categories[3], price: 9999.99, description: "It's like final fantasy; but…' We'd love to hear all about your convoluted storyline, obtuse gameplay mechanics, and over-busy inventory system. We'll even build it for you if the price is right!" },
    {name: 'Hiring, Recruiting, Team Building', image: '/images/recruiting_icon.jpg', category: categories[4], price: 7999.99, description: "It's not all ones and zeroes in the world of app development. The answer to the human equation often eludes the best of us. Hire our team to put together the dream team you've been thirsting for."},
    {name: 'Roadmap to Scale Up', image: '/images/skyscraper_construction.jpeg', category: categories[4], price: 8999.99, description: "Are you a super-small startup looking to not be so super-small? A growing company about to go IPO? You'll want to enlist our services in ensuring you've got the hardware, the frameworks, and the algorithms in place to survive the rabidly frenetic expansion of technological progress."},
    {name: 'All-Inclusive Concept Evaluation', image: '/images/consulting_image.png', category: categories[5], price: 9999.99, description: "From initial concept to deployment, marketing, and more, we'll provide consultation, feedback, and guidance on your project throughout all stages of its development life cycle. For the Steve Jobs types who are ready to admit they'll never be a Steve Wozniack."},
    {name: 'Best Practices and Frameworks Evaluation', image: '/images/marketing-site.png', category: categories[5], price: 9999.99, description: "Got an app up and running already that's causing you grief and suffering? We'll perform a deep-dive with you, examining the programming languages used, frameworks and databases in play, and the logistics of refactoring your work to make it harder, better, faster, stronger."},
    {name: 'Marketing and Promotion', image: '/images/marketing_tree.jpeg', category: categories[5], price: 8999.99, description: "It's all in the presentation. You can have the best idea in the world but without a crystal clear target audience, mission statement, marketing plan, and more (not to mention a catchy title) your app just doesn't stand a chance of getting off the ground. Let's make it fly. Together."},
    {name: 'Car Wash', image: '/images/car_wash.jpeg', category: categories[6], price: 49.99, description: "Wax on, wax off. Mr. Miyagi ain't got nothin' on us."},
    {name: 'Home-Cooked Meal', image: '/images/cooking2.jpeg', category: categories[6], price: 99.99, description: "Candlit romance? Beachside surf and turf? You name it we'll make it. Additional materials fees apply."},
    {name: 'Kickboxing Lessons', image: '/images/boxing_gloves.jpeg', category: categories[6], price: 399.99, description: "Want to defend yourself? Get that guard up. We're not just devs, we're competitive muay thai fighters, and we'll get you feeling safer and more confident in no time."},
    {name: 'House Painting', image: '/images/house_painting.jpeg', category: categories[6], price: 499.99, description: "We all have hidden talents! You know what's not hidden? Those scuff marks from your most recent furniture move. Let's make your space as pretty as we made your software."},
    {name: 'Dog Walking', image: '/images/dog.jpeg', category: categories[6], price: 49.99, description: "Do we really have to explain?"}
  ]);

  console.log(items)

  process.exit();

})();
