const esLang = {
  spaceWork: {
    portofolio: 'Portafolio',
  },
  navigation: [
    { key: 'home', label: 'Inicio', icon: ['fas', 'home'], 
    subItems: [
      { key: 'readme', label: 'LeerMe.md', icon: ['fas', 'circle-info'] },
    ],},
    {
      key: 'skills',
      label: 'Habilidades',
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
      label: 'Proyectos',
      icon: ['fas', 'tasks'],
      subItems: [
        { key: 'project1', label: 'Aplicación CRUD de tienda', icon: ['fas', 'shop'] },
        { key: 'project2', label: 'Página entrenador físico ', icon: ['fas', 'dumbbell'] },
        { key: 'project3', label: 'Calculadora', icon: ['fas', 'calculator'] },
        { key: 'project4', label: 'Generador de frases aleatorias', icon: ['fas', 'quote-right'] },
        { key: 'project5', label: 'Visor de lenguaje de marcado', icon: ['fas', 'file-alt'] },
        { key: 'project6', label: 'Máquina de tambor', icon: ['fas', 'drum'] },
        { key: 'project7', label: 'Reloj pómodoro', icon: ['fas', 'clock'] },
        { key: 'project8', label: 'Gráfica de barras', icon: ['fas', 'chart-bar'] },
     
      ],
    },
    {
      key: 'contact',
      label: 'Contacto',
      icon: ['fas', 'envelope'],
      subItems: [
        { key: 'email', label: 'Correo Electrónico', icon: ['fas', 'envelope'] },
        { key: 'phone', label: 'Teléfono', icon: ['fab', 'whatsapp'] },
        { key: 'github', label: 'Github', icon: ['fab', 'github'] },
        { key: 'linkedin', label: 'Linkedin', icon: ['fab', 'linkedin'] },
        { key: 'instagram', label: 'Instagram', icon: ['fab', 'instagram'] },
        { key: 'facebook', label: 'Facebook', icon: ['fab', 'facebook'] },
        { key: 'twitter', label: 'Twitter', icon: ['fab', 'twitter'] },
         
      ],
    },
    { key: 'about', label: 'Sobre mí', icon: ['fas', 'user'],
    subItems: [
      { key: 'env', label: '.env', icon: ['fas', 'gear'] },]
       },
  ],
  tabsHeader: [
    { key: 'skills', label: 'Habilidades' },
    { key: 'projects', label: 'Proyectos' },
    { key: 'contact', label: 'Contacto' },
    { key: 'about', label: 'Sobre mí' },
  ],
  home: {
    first: {
      title: 'Hola 👋, soy Cesar Marin',
      subtitle: 'Desarrollador Web Full Stack',
    },
    sub: [
      {
        title: 'Descripción',
        subtitle: 'Desarrollador enfocado en el front end, pero con un sólido conocimiento en el back end, creando experiencias digitales cautivadoras a través del código y la creatividad.',
      },
     {
        title: 'Construye la web',
        subtitle: 'Desarrollar una aplicación web es difícil, sé aún mejor. Juntos',
      },
    ],
  },
  proyects: [
    
    {
      title: 'eCommerce Maceronu',
      description: 'Tienda en línea con React, Redux, Node.js, pagos seguros con Stripe, autenticación, notificaciones en tiempo real y más. Experiencia de compra moderna y segura.',
      img: './img/p1.jpg',
      page : 'https://www.maceronu.com/',
     
    },
    {
      title: 'Fit Page',
      description: 'Página de inicio para Entrenador de Fitness y Nutriólogo: Creada con React y CSS, este sitio ofrece una plataforma dinámica para un entrenador de gimnasio y nutricionista, mostrando su experiencia y servicios.',
      img: './img/p2.jpg',
      page : 'https://cesar-marin.github.io/CarloFit/',
      repo : 'https://github.com/Cesar-Marin/CarloFit'
    },
    {
      title: 'Calculadora',
      description: 'Creada con React, HTML5, CSS3 y JavaScript: Experimenta una calculadora moderna y funcional desarrollada con el poder de React, enriquecida con HTML5 y CSS3 para una interfaz de usuario perfecta.',
      img: './img/p3.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/yLQRPrM',
      repo : 'https://codepen.io/Cesar-Marin/pen/yLQRPrM'
    },
    {
      title: 'Generador de frases Aleatorias',
      description: 'Construido con JS, React, HTML5 y CSS3: Descubre una cautivadora aplicación web que genera citas reflexivas al azar. Desarrollado utilizando una combinación de JavaScript, React, HTML5 y CSS3 para una experiencia de usuario atractiva.',
      img: './img/p4.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/WNYgVKd',
      repo : 'https://codepen.io/Cesar-Marin/pen/WNYgVKd'
    },
    {
      title: 'Visor de lenguaje de marcado',
      description: 'Visor de Markdown Construido con JS, React, HTML5 y CSS3: Experimenta el poder de un visor de lenguaje de marcado dinámico que muestra contenido de Markdown renderizado en tiempo real. Creado con JavaScript, React, HTML5 y CSS3 para proporcionar una plataforma interactiva para entusiastas de Markdown.',
      img: './img/p5.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/yLQxmyz',
      repo : 'https://codepen.io/Cesar-Marin/pen/yLQxmyz'
    },
    {
      title: 'Máquina de Tambor',
      description: 'Crea ritmos hipnóticos con esta máquina de tambor interactiva. Creada con JavaScript, React, HTML5 y CSS3, te permite activar una variedad de sonidos y patrones de tambor, brindando una experiencia musical inmersiva.',
      img: './img/p6.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/bGQmYpy',
      repo : 'https://codepen.io/Cesar-Marin/pen/bGQmYpy'
    },

    {
      title: 'Reloj Pomodoro',
      description: 'Aumenta tu productividad utilizando esta aplicación de Reloj Pomodoro Creada con JavaScript, React, HTML5 y CSS3. Esta herramienta te ayuda a gestionar tu tiempo de manera efectiva utilizando la técnica Pomodoro, alternando entre intervalos de trabajo concentrado y descansos cortos, todo en una interfaz intuitiva y fácil de usar.',
      img: './img/p7.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/bGQmLBM',
      repo : 'https://codepen.io/Cesar-Marin/pen/bGQmLBM'
    },
    {
      title: 'Gráfico de Barras',
      description: 'Utilizando la biblioteca D3.js. Este proyecto combina JavaScript, HTML5 y CSS3 para generar gráficos de barras dinámicos que muestran de manera efectiva las tendencias de datos. Mejora tus habilidades de visualización de datos y crea gráficos convincentes para análisis y presentación de datos.',
      img: './img/p8.jpg',
      page : 'https://codepen.io/Cesar-Marin/pen/wvQOjvE',
      repo : 'https://codepen.io/Cesar-Marin/pen/wvQOjvE',
    },
    
    ],

    skills: [
      {
        title: 'JavaScript',
        description: 'He creado aplicaciones en JS, abordando diversos algoritmos y aprovechado JavaScript para resolver creativamente desafíos tecnológicos.',
        ico: ['fab', 'js'],
      },
      {
        title: 'TypeScript',
        description: 'Nvega en mi portafolio elaborado con TypeScript: Administrando estados de manera fluida y ordenando los tipos de datos para un toque pulido.',
        ico: ['fab', 'js'],
        className: 'ts-style'
      },
      {
        title: 'React',
        description: 'He construido aplicaciones en React, desde simples hasta complejas, utilizando React Hooks, Redux y más.',
        ico: ['fab', 'react'],
      },
      {
        title: 'Node',
        description: 'He construido aplicaciones en Node.js, desde simples hasta complejas, utilizando Express, Sequelize y más.',
        ico: ['fab', 'node-js'],
      },
      {
        title: 'HTML',
        description: 'He construido aplicaciones en HTML5, desde simples hasta complejas, utilizando etiquetas semánticas, accesibilidad y más.',
        ico: ['fab', 'html5'],
      },
      {
        title: 'CSS',
        description: 'He construido aplicaciones en CSS3, desde simples hasta complejas, utilizando Flexbox, Grid y más.',
        ico: ['fab', 'css3-alt'],
      },
      {
        title: 'Scss',
        description: 'He construido aplicaciones en Scss, desde simples hasta complejas, utilizando variables, mixins y más.',
        ico: ['fab', 'sass'],
      },
      {
        title: 'Git',
        description: 'He trabajado con aplicaciones en Git, desde simples hasta complejas, utilizando ramas, commits y más.',
        ico: ['fab', 'git-alt'],
      },
      {
        title: 'Express',
        description: 'He construido aplicaciones en Express, desde simples hasta complejas, utilizando rutas, middlewares y más.',
        ico: ['fab', 'node-js'],
      },
      {
        title: 'Sequelize',
        description: 'He construido aplicaciones en Sequelize, desde simples hasta complejas, utilizando modelos, migraciones y más.',
        ico: ['fas', 'database'],
      },
      {
        title: 'PostgreSQL',
        description: 'He construido aplicaciones en PostgreSQL, desde simples hasta complejas, utilizando tablas, consultas y más.',
        ico: ['fas', 'database'],
      },
   

    ],

  contact: {
    title: 'Contáctame',
    text: '¿Tienes alguna pregunta o quieres trabajar conmigo? ¡Hablemos! me gustaría empezar preguntando: ¿Cómo tomas tu café?',
    location: 'Leon Gto,  México',
    phone: '+52 477 484 03 11',
    email: 'drack.zero.nova@gmail.com',
   
    socialtxt: 'Te comparto mis redes sociales',
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
    name: 'Nombre',
    namePlaceholder: 'Ingresa tu nombre',
    email: 'Correo Electrónico',
    emailPlaceholder: 'Ingresa tu correo electrónico',
    message: 'Mensaje',
    messagePlaceholder: 'Escribe un mensaje',
    submit: 'Enviar',
    submited: 'Gracias por tu mensaje',
  },
},
about: {
  title: 'Sobre mí',
  img: './img/cesar.jpg',

  text: [
    { text: 'Gracias por tomarte el tiempo en leer mi portafolio. ' },
    { text: 'Disfruto de hacer ejercicios de fuerza para mejorar mis habilidades cognitivas y crear conexiones neuronales más fuertes.' },
    { text: 'Gestiono mi ingesta de macro-nutrientes para mantener un peso saludable, lo que me permite llevar a cabo mis actividades diarias con facilidad.' },
    { text: 'Priorizo dormir 8 horas cada noche para garantizar mi bienestar y niveles de energía.' },
    { text: 'Tengo una pasión por el desarrollo personal, mantenerme al día con nuevas tecnologías y aprender de manera continua.' },
    { text: 'Me considero un autodidacta y tengo un gran interés en diversos pasatiempos como la música, películas, libros, videojuegos y, por supuesto, el café (¡sin azúcar!).' },
    { text: 'Espero que podamos compartir muchas experiencias significativas juntos. Gracias por leer.' },
  ],

  hobbies: 
    {
      key: 'hobbies',
      label: 'Pasatiempos',
      icon: ['fas', 'dumbbell'],
      subItems: [
        { key: 'gym', label: 'Gimnasio', icon: ['fas', 'dumbbell'] },
        { key: 'read', label: 'Leer', icon: ['fas', 'book'] },
        { key: 'music', label: 'Música', icon: ['fas', 'music'] },
        { key: 'movies', label: 'Películas', icon: ['fas', 'film'] },
        { key: 'series', label: 'Series', icon: ['fas', 'tv'] },
        { key: 'games', label: 'Videojuegos', icon: ['fas', 'gamepad'] },
        { key: 'code', label: 'Programar', icon: ['fas', 'code'] },
        { key: 'sleep', label: 'Dormir', icon: ['fas', 'bed'] },
        { key: 'eat', label: 'Comer', icon: ['fas', 'utensils'] },
        { key: 'coffee', label: 'Café', icon: ['fas', 'coffee'] },
      ],
    },
  
}
};

export default esLang;
