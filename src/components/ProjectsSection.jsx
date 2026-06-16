import { ExternalLink  ,ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import volavolaImg from "../assets/volavola.png";
import dataAnalyticsImg from "../assets/dataanalytics.png";
import skincareImg from "../assets/skincare.png";

const projects =[
    {
       id:1,
       title:"VolaVola_Pizza_Restaurant",
       describtion:"VolaVola is a modern food delivery web application designed to make ordering pizza fast, responsive, and delightful.",
       image: volavolaImg,
       tags:["React","Tailwind Css"],
       demoUrl:"https://volavola.netlify.app/",
       githubUrl:"https://github.com/FatmaSalem-dev/VolaVola_Pizza_Restaurant"
    },
    {
       id:2,
       title:"DataAnalytics_Landing_Page",
       describtion:"high-performance landing page and dashboard application designed for modern SaaS platforms to monitor data analytics and manage flexible financing models. ",
       image: dataAnalyticsImg,
       tags:["React","Tailwind Css"],
       demoUrl:"https://prismatic-maamoul-68eeb8.netlify.app/",
       githubUrl:"https://github.com/FatmaSalem-dev/data-analytics-react-tailwind"  
    },
    {
       id:3,
       title:"SkinCare_Ecommerce",
       describtion:" a modern, high-converting e-commerce application designed for premium skincare products",
       image: skincareImg,
       tags:["Html","Css","javascript"],
       demoUrl:"https://sckincarejunkies.netlify.app/",
       githubUrl:"https://github.com/FatmaSalem-dev/skincare_store_website"
    }
]
export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary ">Projects</span></h2>
             <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here is a look at my recent work. Explore the code and live demos to see how I transform ideas into responsive, high-performing, and visually stunning web applications.          
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {projects.map((project,key)=>(
                    <div key={key}className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                         
                         <div className="p-6">
                             <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                             </div>
                        
                         <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-smm mb-4 ">{project.describtion}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl}
                                target="_blank"
                                  className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                 <a href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <FaGithub />
                                 </a>
                                  </div>
                            </div>
                        </div>
                    </div>
                 ))}
             </div>

             <div className="text-center mt-12">
                <a href="https://github.com/FatmaSalem-dev"
                     target="_blank" 
                   className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
             </div>
        </div>
    </section>
}
