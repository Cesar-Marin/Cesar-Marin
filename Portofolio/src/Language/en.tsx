const enLang = {
  spaceWork: {
    portofolio: 'Portofolio',
  },
  navigation: [
    { key: 'home', label: 'Home', icon: ['fas', 'home'], 
    subItems: [
      { key: 'readme', label: 'ReadMe.md', icon: ['fas', 'circle-info'] },
    ],},
    {
      key: 'skills',
      label: 'Skills',
      icon: ['fas', 'code'],
      subItems: [
        { key: 'js', label: 'JavaScript.js', icon: ['fab', 'js'] },
        { key: 'ts', label: 'TypeScript.tsx', icon: ['fab', 'js'], className: 'ts-style' },
        { key: 'react', label: 'React.jsx', icon: ['fab', 'react'] },
        { key: 'node', label: 'Node.mjs', icon: ['fab', 'node-js'] },
        { key: 'html', label: 'HTML5.html', icon: ['fab', 'html5'] },
        { key: 'css', label: 'CSS3.css', icon: ['fab', 'css3-alt'] },
        { key: 'scss', label: 'Scss.scss', icon: ['fab', 'sass'] },
        { key: 'git', label: 'Git', icon: ['fab', 'git-alt'] },
        { key: 'express', label: 'Express.js', icon: ['fab', 'node-js'] },
        { key: 'sequelize', label: 'Sequelize.js', icon: ['fas', 'database'] },
        { key: 'postgres', label: 'PostgreSQL', icon: ['fas', 'database'] },        
      
      ],
    },
    {
      key: 'projects',
      label: 'Projects',
      icon: ['fas', 'tasks'],
      subItems: [
        { key: 'project1', label: 'eCommerce CRUD App', icon: ['fas', 'shop'] },
        { key: 'project2', label: 'Landing Page', icon: ['fas', 'dumbbell'] },
        { key: 'project3', label: 'Calculator', icon: ['fas', 'calculator'] },
        { key: 'project4', label: 'Random Quote Generator', icon: ['fas', 'quote-right'] },
        { key: 'project5', label: 'Markdown Previewer', icon: ['fas', 'file-alt'] },
        { key: 'project6', label: 'Drum Machine', icon: ['fas', 'drum'] },
        { key: 'project7', label: 'Pomodoro Clock', icon: ['fas', 'clock'] },
        { key: 'project8', label: 'Bar Chart', icon: ['fas', 'chart-bar'] },
     
         
      ],
    },
    {
      key: 'contact',
      label: 'Contact',
      icon: ['fas', 'envelope'],
      subItems: [
        { key: 'email', label: 'Email', icon: ['fas', 'envelope'] },
        { key: 'phone', label: 'Phone', icon: ['fab', 'whatsapp'] },
        { key: 'github', label: 'Github', icon: ['fab', 'github'] },
        { key: 'linkedin', label: 'Linkedin', icon: ['fab', 'linkedin'] },
        { key: 'instagram', label: 'Instagram', icon: ['fab', 'instagram'] },
        { key: 'facebook', label: 'Facebook', icon: ['fab', 'facebook'] },
        { key: 'twitter', label: 'Twitter', icon: ['fab', 'twitter'] },
         
      ],
    },
    { key: 'about', label: 'About me', icon: ['fas', 'user'],
    subItems: [
      { key: 'env', label: '.env', icon: ['fas', 'gear'] },]
       },
  ],
  tabsHeader: [
    { key: 'skills', label: 'Skills' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact' },
    { key: 'about', label: 'About me' },
  ],
  home: {
    first: {
      title: 'Hi 👋, I am Cesar Marin',
      subtitle: 'Full Stack Web Developer',
    },
    sub: [{
     
        title: 'Description',
        subtitle: 'Dev focus on the front end, but with a strong back end knowledge, web developer crafting captivating digital experiences through code and creativity.',
      
      },{
        title: 'Build the web',
        subtitle: 'Developing a web app is hard, be greater. Together',
      }]
    },
  
  proyects: [
    
    {
      title: 'eCommerce Maceronu',
      description: 'Online store with React, Redux, Node.js, secure Stripe payments, authentication, real-time notifications, and more. Modern and secure shopping experience.',
      img: './img/p1.jpg',
      page : 'https://www.maceronu.com/',
     
    },
    {
      title: 'Fit Page',
      description: 'Home Page for Fitness Coach and Nutritionist: Crafted with React and CSS, this site offers a dynamic platform for a gym trainer and nutritionist, showcasing their expertise and services.',
      img: './img/p2.jpg',
      page : 'https://cesar-marin.github.io/CarloFit/',
      repo : 'https://github.com/Cesar-Marin/CarloFit'
    },
    {
      title: 'Calculator',
      description: 'Built with React, HTML5, CSS3, and JavaScript: Experience a modern and functional calculator application developed using the power of React, enriched with HTML5 and CSS3 for a seamless user interface.',
      img: './img/p3.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/yLQRPrM',
      repo : 'https://codepen.io/Cesar-Marin/pen/yLQRPrM'
    },
    {
      title: 'Random Quote Generator',
      description: 'Built with JS, React, HTML5, and CSS3: Discover a captivating web app that generates thought-provoking quotes randomly. Developed using a blend of JavaScript, React, HTML5, and CSS3 for an engaging user experience.',
      img: './img/p4.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/WNYgVKd',
      repo : 'https://codepen.io/Cesar-Marin/pen/WNYgVKd'
    },
    {
      title: 'Markdown Previewer',
      description: 'Markdown Previewer Built with JS, React, HTML5, and CSS3: Experience the power of a dynamic Markdown previewer that showcases live-rendered Markdown content. Crafted using JavaScript, React, HTML5, and CSS3 to provide an interactive platform for Markdown enthusiasts.',
      img: './img/p5.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/yLQxmyz',
      repo : 'https://codepen.io/Cesar-Marin/pen/yLQxmyz'
    },
    {
      title: 'Drum Machine',
      description: 'Create mesmerizing beats with this interactive drum machine. Crafted using JavaScript, React, HTML5, and CSS3, it allows you to trigger a variety of drum sounds and patterns, providing an immersive musical experience.',
      img: './img/p6.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/bGQmYpy',
      repo : 'https://codepen.io/Cesar-Marin/pen/bGQmYpy'
    },

    {
      title: 'Pomodoro Clock',
      description: 'Enhance your productivity using this Pomodoro Clock application built with JavaScript, React, HTML5, and CSS3. This tool helps you manage your time effectively by using the Pomodoro technique, alternating between focused work intervals and short breaks, all in an intuitive and user-friendly interface',
      img: './img/p7.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/bGQmLBM',
      repo : 'https://codepen.io/Cesar-Marin/pen/bGQmLBM'
    },
    {
      title: 'Bar Chart',
      description: 'Bar Chart with D3.js: Create visually engaging and interactive bar charts using D3.js library. This project combines JavaScript, HTML5, and CSS3 to generate dynamic bar charts that effectively display data trends. Enhance your data visualization skills and create compelling charts for data analysis and presentation.',
      img: './img/p8.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/wvQOjvE',
      repo : 'https://codepen.io/Cesar-Marin/pen/wvQOjvE',
    },
    
    ],

    skills: [
      {
        title: 'JavaScript',
        description: `I've crafted JS applications, tackled diverse algorithms, and harnessed JavaScript to creatively solve tech challenges.`,
        ico: ['fab', 'js'],
      },
      {
        title: 'TypeScript',
        description: 'Experience my portfolio crafted with TypeScript: Seamlessly managing states and orchestrating data types for a polished touch.',
        ico: ['fab', 'js'],
        className: 'ts-style'
      },
      {
        title: 'React',
        description: 'I have built React applications, from simple to complex, using React Hooks, Redux, and more.',
        ico: ['fab', 'react'],
      },
      {
        title: 'Node',
        description: 'I have built Node.js applications, from simple to complex, using Express, Sequelize, and more.',
        ico: ['fab', 'node-js'],
      },
      {
        title: 'HTML',
        description: 'I have built HTML5 applications, from simple to complex, using semantic tags, accessibility, and more.',
        ico: ['fab', 'html5'],
      },
      {
        title: 'CSS',
        description: 'I have built CSS3 applications, from simple to complex, using Flexbox, Grid, and more.',
        ico: ['fab', 'css3-alt'],
      },
      {
        title: 'Scss',
        description: 'I have built Scss applications, from simple to complex, using variables, mixins, and more.',
        ico: ['fab', 'sass'],
      },
      {
        title: 'Git',
        description: 'I have built Git applications, from simple to complex, using branches, commits, and more.',
        ico: ['fab', 'git-alt'],
      },
      {
        title: 'Express',
        description: 'I have built Express applications, from simple to complex, using routes, middlewares, and more.',
        ico: ['fab', 'node-js'],
      },
      {
        title: 'Sequelize',
        description: 'I have built Sequelize applications, from simple to complex, using models, migrations, and more.',
        ico: ['fas', 'database'],
      },
      {
        title: 'PostgreSQL',
        description: 'I have built PostgreSQL applications, from simple to complex, using tables, queries, and more.',
        ico: ['fas', 'database'],
      },
   

    ],
    contact: {
      title: 'Contact Me',
      text: 'Have a question or want to work together? Let\'s chat! I\'d like to start by asking: How do you take your coffee?',
      location: 'Leon Gto, Mexico',
      phone: '+52 477 484 03 11',
      email: 'drack.zero.nova@gmail.com',
     
      socialtxt: 'Connect with me on social media',
      social: [
        {
          key: 'github',
          label: 'Github',
          icon: ['fab', 'github'],
          link: 'https://github.com/Cesar-Marin',
        },
        {
          key: 'linkedin',
          label: 'Linkedin',
          icon: ['fab', 'linkedin'],
          link: 'https://www.linkedin.com/in/cesar-marin-2a1447238/',
        },
        {
          key: 'instagram',
          label: 'Instagram',
          icon: ['fab', 'instagram'],
          link: 'https://www.instagram.com/rock_oneiric/',
        },
        {
          key: 'facebook',
          label: 'Facebook',
          icon: ['fab', 'facebook'],
          link: 'https://www.facebook.com/profile.php?id=100067584624265',
        },
        {
          key: 'twitter',
          label: 'Twitter',
          icon: ['fab', 'twitter'],
          link: 'https://twitter.com/RockMan_Zero_',
        },
      ],
    
  
    form: {
      name: 'Name',
      namePlaceholder: 'Enter your name',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      message: 'Message',
      messagePlaceholder: 'Write a message',
      submit: 'Send',
      submited: 'Thank you for your message!',
    },
    },
    about: {
      title: 'About Me',
      img : './img/cesar.jpg',
  
       text: [ 
        { text:'Thank you for taking the time to read my portfolio. '},
       { text:'I enjoy engaging in strength exercises to enhance my cognitive abilities and create better neural connections.'},
       { text:'I manage my macro-nutrient intake to maintain a healthy weight, allowing me to carry out daily activities with ease.'},
        {text:'I prioritize 8 hours of sleep each night to ensure my well-being and energy levels.'},
       { text:'I have a passion for personal development, staying up-to-date with new technologies, and continuously learning.'},
       { text:'I consider myself a self-learner and have a keen interest in various hobbies such as music, movies, books, video games, and, of course, coffee (without sugar!).'},
        {text:'I hope we can share many meaningful experiences together. Thank you for reading.'}, 
       ],
   
       
      hobbies: 
        {
         key: 'hobbies',
          label: 'Hobbies',
          icon: ['fas', 'hat-wizard'],
          subItems: [
            { key: 'gym', label: 'Gym', icon: ['fas', 'dumbbell'] },
            { key: 'read', label: 'Reading', icon: ['fas', 'book'] },
            { key: 'music', label: 'Music', icon: ['fas', 'music'] },
            { key: 'movies', label: 'Movies', icon: ['fas', 'film'] },
            { key: 'series', label: 'TV Series', icon: ['fas', 'tv'] },
            { key: 'games', label: 'Video Games', icon: ['fas', 'gamepad'] },
            { key: 'code', label: 'Programming', icon: ['fas', 'code'] },
            { key: 'sleep', label: 'Sleep', icon: ['fas', 'bed'] },
            { key: 'eat', label: 'Eating', icon: ['fas', 'utensils'] },
            { key: 'coffee', label: 'Coffee', icon: ['fas', 'coffee'] },]
        },
  
      
    }
     
  };
  
        


export default enLang;
