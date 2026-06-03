"use client";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { useEffect, useRef, useState } from "react";

const techStack: { name: string; url: string; icon: string; invert?: boolean; glow?: boolean; scale?: number }[] = [
  // LANGUAGE PROGRAM
  { name: "C", url: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170", icon: "https://thesvg.org/icons/c/default.svg" },
  { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/", icon: "https://thesvg.org/icons/csharp/default.svg" },
  { name: "C++", url: "https://learn.microsoft.com/en-us/cpp/?view=msvc-170", icon: "https://thesvg.org/icons/cplusplus/default.svg" },
  { name: "Java", url: "https://www.oracle.com/java/", icon: "https://thesvg.org/icons/java/default.svg" },
  { name: "Python", url: "https://www.python.org/", icon: "https://thesvg.org/icons/python/default.svg" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "https://thesvg.org/icons/javascript/default.svg" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: "https://thesvg.org/icons/typescript/default.svg" },
  { name: "PHP",url:"https://www.php.net/",icon:"https://thesvg.org/icons/php/default.svg"},
  { name: "Ruby",url:"https://www.ruby-lang.org/en/",icon:"https://thesvg.org/icons/ruby/default.svg"},
  { name: "Golang", url: "https://go.dev/", icon: "https://thesvg.org/icons/go/default.svg" },
  { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", icon: "https://thesvg.org/icons/html5/default.svg" },
  { name: "CSS3", url: "https://www.w3.org/TR/CSS/#css", icon: "https://thesvg.org/icons/css3/default.svg" },
  { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Dart", url: "https://dart.dev/", icon: "https://thesvg.org/icons/dart/default.svg" },
  { name: "R", url: "https://www.r-project.org/", icon: "https://thesvg.org/icons/r/default.svg" },
  { name:"RasberryPi",url:"https://www.raspberrypi.com/",icon:"https://thesvg.org/icons/raspberry-pi/default.svg"},

  // BACKEND FRAMEWORK
  { name: "NodeJS", url: "https://nodejs.org/en/", icon: "https://thesvg.org/icons/nodedotjs/default.svg" },
  { name: "Express", url: "https://expressjs.com/", icon: "https://thesvg.org/icons/express/default.svg", invert: true },
  { name: "Gin", url: "https://gin-gonic.com/", icon: "https://thesvg.org/icons/gin/default.svg" },
  {name:"Dotnetcore",url:"https://dotnet.microsoft.com/",icon:"https://thesvg.org/icons/dotnet/default.svg"},
  {name:"Fastapi",url:"https://fastapi.tiangolo.com/",icon:"https://thesvg.org/icons/fastapi/default.svg"},
  {name:"Nestjs",url:"https://nestjs.com/",icon:"https://thesvg.org/icons/nestjs/default.svg"},
  {name:"Laravel",url:"https://laravel.com/",icon:"https://thesvg.org/icons/laravel/default.svg"},
  { name: "Spring Boot", url: "https://spring.io/projects/spring-boot", icon: "https://thesvg.org/icons/spring/default.svg" },
  { name: "Django", url: "https://www.djangoproject.com/", icon: "https://thesvg.org/icons/django/default.svg" },
  { name: "Flask", url: "https://flask.palletsprojects.com/", icon: "https://thesvg.org/icons/flask/default.svg", },
  
  // FRONTEND FRAMEWORK
  { name: "Next.js", url: "https://nextjs.org/", icon: "https://thesvg.org/icons/nextdotjs/default.svg", invert: true },
  { name: "Vue.js", url: "https://vuejs.org/", icon: "https://thesvg.org/icons/vue/default.svg" },
  { name: "Angular", url: "https://angular.dev/", icon: "https://thesvg.org/icons/angular/default.svg" },
  { name: "Svelte", url: "https://svelte.dev/", icon: "https://thesvg.org/icons/svelte/default.svg" },

  // FRONTEND LIBRARY
  { name: "React", url: "https://reactjs.org/", icon: "https://thesvg.org/icons/react/default.svg" },

  // STATE MANAGEMENT
  { name: "Redux", url: "https://redux.js.org/", icon: "https://thesvg.org/icons/redux/default.svg" },
  { name: "Zustand", url: "https://zustand.docs.pmnd.rs/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" },
  { name: "Pinia", url: "https://pinia.vuejs.org/", icon: "https://thesvg.org/icons/pinia/default.svg" },

  // API & DATA FETCHING
  { name: "GraphQL", url: "https://graphql.org/", icon: "https://thesvg.org/icons/graphql/default.svg" },
  { name: "Apollo", url: "https://www.apollographql.com/", icon: "https://thesvg.org/icons/apollo-graphql/mono.svg",invert:true },

  // MOBILE FRAMEWORK
  { name: "Flutter", url: "https://flutter.dev/", icon: "https://thesvg.org/icons/flutter/default.svg", scale: 0.75 },
  { name: "React Native", url: "https://reactnative.dev/", icon: "https://thesvg.org/icons/react/default.svg" },
  { name: "Kotlin", url: "https://kotlinlang.org/", icon: "https://thesvg.org/icons/kotlin/default.svg" },
  { name: "Swift", url: "https://developer.apple.com/swift/", icon: "https://thesvg.org/icons/swift/default.svg" },
  { name: "Android", url: "https://www.android.com/", icon: "https://thesvg.org/icons/android/default.svg" },
  { name: "Android-Studio", url: "https://developer.android.com/studio?hl=th", icon: "https://thesvg.org/icons/android-studio/default.svg" },
  { name: "iOS", url: "https://developer.apple.com/ios/", icon: "https://thesvg.org/icons/ios/mono.svg" ,invert: true },

  // CSS LIBRARY
  { name: "TailwindCSS", url: "https://tailwindcss.com/", icon: "https://thesvg.org/icons/tailwind-css/default.svg" },
  { name: "shadcn/ui", url: "https://ui.shadcn.com/", icon: "https://thesvg.org/icons/shadcn-ui/default.svg" },

  // DATABASE
  { name: "MySQL", url: "https://www.mysql.com/", icon: "https://thesvg.org/icons/mysql/default.svg" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/", icon: "https://thesvg.org/icons/postgresql/default.svg" },
  { name: "MariaDB", url: "https://mariadb.org/", icon: "https://thesvg.org/icons/mariadb/default.svg"},
  { name: "MongoDB", url: "https://www.mongodb.com/", icon: "https://thesvg.org/icons/mongodb/default.svg", scale: 0.5 },
  { name: "MSSQL", url: "https://www.microsoft.com/en-us/sql-server/", icon: "https://thesvg.org/icons/microsoft-sql-server/default.svg" },
  { name:"Supabase",url:"https://supabase.com/",icon:"https://thesvg.org/icons/supabase/default.svg"},
  { name: "Firebase", url: "https://firebase.google.com/", icon: "https://thesvg.org/icons/firebase/default.svg"},
  { name: "redis", url: "https://redis.io/", icon: "https://thesvg.org/icons/redis/default.svg"},
  { name: "cisco", url: "https://www.cisco.com/", icon: "https://thesvg.org/icons/cisco/default.svg"},
  

  // ORM
  { name: "Prisma", url: "https://www.prisma.io/", icon: "https://thesvg.org/icons/prisma/default.svg"},
  { name: "Sequelize", url: "https://sequelize.org/", icon: "https://thesvg.org/icons/sequelize/default.svg" },
  { name: "TypeORM", url: "https://typeorm.io/", icon: "https://thesvg.org/icons/typeorm/default.svg"},

  // CLOUD & CONTAINER
  { name: "Docker", url: "https://www.docker.com/", icon: "https://thesvg.org/icons/docker/default.svg" },
  { name: "AWS", url: "https://aws.amazon.com/", icon: "https://thesvg.org/icons/aws/mono.svg",invert:true },
  { name: "Azure", url: "https://azure.microsoft.com/", icon: "https://thesvg.org/icons/microsoft-azure/default.svg" },
  { name: "GCP", url: "https://cloud.google.com/", icon: "https://thesvg.org/icons/googlecloud/default.svg" },
  { name: "Cloudflare", url: "https://www.cloudflare.com/", icon: "https://thesvg.org/icons/cloudflare/default.svg" },
  { name: "Kubernetes",url:"https://kubernetes.io/",icon:"https://thesvg.org/icons/kubernetes/default.svg"},


  // DEPLOYMENT
  { name: "Vercel", url: "https://vercel.com/", icon: "https://thesvg.org/icons/vercel/default.svg" },
  {name:"Render",url:"https://render.com/",icon:"https://thesvg.org/icons/render/default.svg",invert:true},
  {name:"Railway",url:"https://railway.app/",icon:"https://thesvg.org/icons/railway/dark.svg"},

  // CI/CD & INFRASTRUCTURE
  { name: "GitHub Actions", url: "https://github.com/features/actions", icon: "https://thesvg.org/icons/github-actions/default.svg" },
  { name: "Jenkins", url: "https://www.jenkins.io/", icon: "https://thesvg.org/icons/jenkins/mono.svg",invert:true },
  { name: "Terraform", url: "https://www.terraform.io/", icon: "https://thesvg.org/icons/terraform/default.svg" },

  // MESSAGE BROKERS & EVENT STREAMING
  { name: "RabbitMQ", url: "https://www.rabbitmq.com/", icon: "https://thesvg.org/icons/rabbitmq/default.svg" },
  { name: "Apache Kafka", url: "https://kafka.apache.org/", icon: "https://thesvg.org/icons/apache-kafka/default.svg",invert:true },

  // IDE
  { name: "Arduino", url: "https://store.arduino.cc/", icon: "https://thesvg.org/icons/arduino/default.svg" },
  { name: "VS Code", url: "https://code.visualstudio.com/", icon: "https://thesvg.org/icons/visual-studio-code/default.svg" },
  { name: "Visual Studio", url: "https://visualstudio.microsoft.com/", icon: "https://thesvg.org/icons/visual-studio/default.svg" },
  { name: "Antigravity", url: "https://antigravity.google/", icon: "https://thesvg.org/icons/google-antigravity/default.svg"},
  { name: "Jupyter", url: "https://jupyter.org/", icon: "https://thesvg.org/icons/jupyter/default.svg" },

  // DESIGN
  { name: "Figma", url: "https://www.figma.com/", icon: "https://thesvg.org/icons/figma/default.svg",scale:0.75 },
  { name: "Canva", url: "https://www.canva.com/", icon: "https://thesvg.org/icons/canva/default.svg" },

  // DATA ANALYSIS TOOLS
  { name: "Power BI", url: "https://powerbi.microsoft.com/", icon: "https://thesvg.org/icons/azure-power-bi-embedded/default.svg" },
  { name: "Tableau", url: "https://www.tableau.com/", icon: "https://www.svgrepo.com/show/354428/tableau-icon.svg" },
  { name: "Google Analytics", url: "https://analytics.google.com/", icon: "https://thesvg.org/icons/google-analytics/default.svg" },
  { name: "Looker", url: "https://www.looker.com/", icon: "https://thesvg.org/icons/looker/default.svg" },
  { name: "Apache Spark", url: "https://spark.apache.org/", icon: "https://thesvg.org/icons/apache-spark/default.svg" },
  
  // OTHER
  { name: "MS Word", url: "https://www.microsoft.com/en-us/microsoft-365/word", icon: "https://thesvg.org/icons/microsoft-word/default.svg" },
  { name: "MS PowerPoint", url: "https://www.microsoft.com/en-us/microsoft-365/powerpoint", icon: "https://thesvg.org/icons/microsoft-powerpoint/default.svg" },
  { name: "MS Excel", url: "https://www.microsoft.com/en-us/microsoft-365/excel", icon: "https://thesvg.org/icons/microsoft-excel/default.svg" },
  { name: "Photoshop", url: "https://www.adobe.com/uk/products/photoshop.html", icon: "https://thesvg.org/icons/photoshop/default.svg" },
  { name: "Premiere Pro", url: "https://www.adobe.com/uk/products/premiere.html", icon: "https://thesvg.org/icons/premierepro/default.svg" },

  // GENERATIVE AI
  { name: "ChatGPT", url: "https://openai.com/chatgpt", icon: "https://thesvg.org/icons/openai/default.svg",},
  { name: "Gemini", url: "https://gemini.google.com/", icon: "https://thesvg.org/icons/gemini/default.svg" },
  { name: "Claude", url: "https://claude.ai/", icon: "https://thesvg.org/icons/claude/default.svg" },

  // OS
  { name: "Windows", url: "https://www.microsoft.com/windows", icon: "https://thesvg.org/icons/windows/default.svg" },
  { name: "macOS", url: "https://www.apple.com/macos/", icon: "https://thesvg.org/icons/apple/default.svg" },
  { name: "Linux", url: "https://www.linux.org/", icon: "https://thesvg.org/icons/linux/default.svg" },

  // DATASCI
  { name: "Keras", url: "https://keras.io/", icon: "https://thesvg.org/icons/keras/default.svg" },
  { name: "PyTorch", url: "https://pytorch.org/", icon: "https://thesvg.org/icons/pytorch/default.svg" },
  { name: "scikit-learn", url: "https://scikit-learn.org/", icon: "https://thesvg.org/icons/scikit-learn/default.svg" },
  { name: "Pandas", url: "https://pandas.pydata.org/", icon: "https://thesvg.org/icons/pandas/mono.svg",invert:true},
  { name: "NumPy", url: "https://numpy.org/", icon: "https://thesvg.org/icons/numpy/mono.svg",invert:true },
  { name: "SciPy", url: "https://scipy.org/", icon: "https://thesvg.org/icons/scipy/mono.svg", invert: true },
  { name: "Matplotlib", url: "https://matplotlib.org/", icon: "https://thesvg.org/icons/matplotlib/default.svg",  },
  { name: "MATLAB", url: "https://www.mathworks.com/products/matlab.html", icon: "https://thesvg.org/icons/matlab/default.svg"},
  { name: "Anaconda", url: "https://www.anaconda.com/", icon: "https://thesvg.org/icons/anaconda/default.svg" },

  // VERSION CONTROL
  { name: "Git", url: "https://git-scm.com/", icon: "https://thesvg.org/icons/git/default.svg" },
  { name: "GitLab", url: "https://about.gitlab.com/", icon: "https://thesvg.org/icons/gitlab/default.svg" },
  { name: "GitHub", url: "https://github.com/", icon: "https://thesvg.org/icons/github/default.svg", invert: true },

  // TESTER TOOLS
  { name: "Selenium", url: "https://www.selenium.dev/", icon: "https://thesvg.org/icons/selenium/default.svg" },
  { name: "Postman", url: "https://www.postman.com/", icon: "https://thesvg.org/icons/postman/default.svg" },
  { name: "JMeter", url: "https://jmeter.apache.org/", icon: "https://thesvg.org/icons/apache-jmeter/default.svg",scale:1.2 },
  { name: "Playwright", url: "https://playwright.dev/", icon: "https://thesvg.org/icons/playwright/default.svg" },
  { name: "Cypress", url: "https://www.cypress.io/", icon: "https://thesvg.org/icons/cypress/mono.svg", invert:true },
  { name: "Appium", url: "https://appium.io/", icon: "https://thesvg.org/icons/appium/default.svg" },
  { name:"K6",url:"https://k6.io/",icon:"https://thesvg.org/icons/k6/default.svg"},

  // PROJECT MANAGEMENT TOOLS
  { name: "Jira", url: "https://www.atlassian.com/software/jira", icon: "https://thesvg.org/icons/jira/default.svg" },
  { name: "Trello", url: "https://trello.com/", icon: "https://thesvg.org/icons/trello/default.svg" },
  { name: "ClickUp", url: "https://clickup.com/", icon: "https://thesvg.org/icons/clickup/default.svg" },

  // ML
  { name: "Databricks", url: "https://www.databricks.com/", icon: "https://thesvg.org/icons/databricks/default.svg" },
  { name: "Hugging Face", url: "https://huggingface.co/", icon: "https://thesvg.org/icons/huggingface/default.svg" },
  { name: "NLTK", url: "https://www.nltk.org/", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" },
  { name: "OpenCV", url: "https://opencv.org/", icon: "https://thesvg.org/icons/opencv/mono.svg",invert:true },
  { name: "YOLO", url: "https://github.com/ultralytics/ultralytics", icon: "https://thesvg.org/icons/yolo/mono.svg",invert:true },
  { name: "Kaggle", url: "https://www.kaggle.com/", icon: "https://thesvg.org/icons/kaggle/default.svg" },
];

export function TechMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      // Calculate delta time to ensure frame-rate independent smooth scrolling
      const delta = Math.min((time - lastTime) / 16.666, 3); // cap delta to avoid massive jumps on tab focus change
      lastTime = time;

      if (!isHovered) {
        scrollContainer.scrollLeft += 0.8 * delta;

        // Loop seamlessly when half of the scrollWidth is reached
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <RevealOnScroll className="w-full animate-[fadeIn_1s_ease-out]" delay="medium">
      <div 
        className="group relative w-full overflow-hidden py-8 px-[6%] lg:px-[9%]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Scroll Button */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full bg-black/60 border border-white/10 hover:border-(--portfolio-accent)/50 text-white hover:text-(--portfolio-panel) hover:bg-(--portfolio-accent) flex items-center justify-center transition shadow-lg opacity-0 group-hover:opacity-100 cursor-pointer"
          title="Scroll Left"
        >
          <i className="fi fi-rr-angle-left text-lg flex items-center justify-center" />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full bg-black/60 border border-white/10 hover:border-(--portfolio-accent)/50 text-white hover:text-(--portfolio-panel) hover:bg-(--portfolio-accent) flex items-center justify-center transition shadow-lg opacity-0 group-hover:opacity-100 cursor-pointer"
          title="Scroll Right"
        >
          <i className="fi fi-rr-angle-right text-lg flex items-center justify-center" />
        </button>

        {/* Scrolling Viewport */}
        <div 
          ref={scrollRef}
          className="w-full overflow-x-auto whitespace-nowrap scroll-smooth flex gap-5 select-none scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* First render of tech stack */}
          {techStack.map((tech, idx) => (
            <a
              key={`${tech.name}-1-${idx}`}
              href={tech.url}
              target="_blank"
              rel="noreferrer"
              title={tech.name}
              className="group relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-(--portfolio-accent)/50 hover:bg-white/10 transition duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(89,178,244,0.15)]"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                width={tech.scale ? 32 * tech.scale : 32}
                height={tech.scale ? 32 * tech.scale : 32}
                style={tech.glow ? { filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.6)) brightness(1.1)" } : undefined}
                className={`transition duration-300 group-hover:scale-110 filter group-hover:brightness-110${
                  tech.invert ? " invert brightness-200" : ""
                }`}
              />
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-slate-950 px-2 py-1 text-xs text-white opacity-0 transition duration-200 group-hover:opacity-100 whitespace-nowrap shadow-md z-10 border border-white/10">
                {tech.name}
              </span>
            </a>
          ))}
          {/* Second render for infinite seamless loop */}
          {techStack.map((tech, idx) => (
            <a
              key={`${tech.name}-2-${idx}`}
              href={tech.url}
              target="_blank"
              rel="noreferrer"
              title={tech.name}
              className="group relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-(--portfolio-accent)/50 hover:bg-white/10 transition duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(89,178,244,0.15)]"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                width={tech.scale ? 32 * tech.scale : 32}
                height={tech.scale ? 32 * tech.scale : 32}
                style={tech.glow ? { filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.6)) brightness(1.1)" } : undefined}
                className={`transition duration-300 group-hover:scale-110 filter group-hover:brightness-110${
                  tech.invert ? " invert brightness-200" : ""
                }`}
              />
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-slate-950 px-2 py-1 text-xs text-white opacity-0 transition duration-200 group-hover:opacity-100 whitespace-nowrap shadow-md z-10 border border-white/10">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
