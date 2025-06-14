
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, TrendingUp, Database, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Tableau dashboard analyzing sales trends, customer segmentation, and revenue optimization for a retail company. Identified 23% increase opportunity in underperforming regions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Tableau", "SQL", "Excel", "Statistics"],
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      demoLink: "#",
      githubLink: "#",
      metrics: ["23% Revenue Increase", "5 Key Insights", "Real-time Updates"]
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model using Python to predict customer churn with 89% accuracy. Implemented feature engineering and model optimization techniques to identify at-risk customers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      demoLink: "#",
      githubLink: "#",
      metrics: ["89% Accuracy", "15% Churn Reduction", "Automated Pipeline"]
    },
    {
      title: "Market Research Analysis",
      description: "Comprehensive market analysis using R and statistical modeling to identify market opportunities and consumer behavior patterns for product launch strategy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["R", "Statistical Analysis", "Market Research", "Visualization"],
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      demoLink: "#",
      githubLink: "#",
      metrics: ["3 Market Segments", "12 Key Factors", "Strategic Recommendations"]
    },
    {
      title: "Database Optimization Project",
      description: "Optimized complex SQL queries and redesigned database schema, improving query performance by 65% and reducing data processing time for business intelligence reports.",
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["SQL", "Database Design", "Performance Tuning", "PostgreSQL"],
      icon: <Database className="h-6 w-6 text-orange-600" />,
      demoLink: "#",
      githubLink: "#",
      metrics: ["65% Performance Gain", "50% Faster Reports", "Scalable Architecture"]
    },
    {
      title: "A/B Testing Framework",
      description: "Designed and implemented statistical A/B testing framework to optimize website conversion rates. Conducted 15+ experiments resulting in 18% overall conversion improvement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["A/B Testing", "Statistics", "Python", "Experimentation"],
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      demoLink: "#",
      githubLink: "#",
      metrics: ["18% Conversion Lift", "15+ Experiments", "Statistical Significance"]
    },
    {
      title: "Financial Risk Assessment",
      description: "Built predictive models to assess credit risk using machine learning algorithms. Analyzed historical data to improve loan approval processes and reduce default rates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Risk Analysis", "Financial Modeling", "Logistic Regression"],
      icon: <TrendingUp className="h-6 w-6 text-red-600" />,
      demoLink: "#",
      githubLink: "#",
      metrics: ["25% Risk Reduction", "92% Model Accuracy", "Automated Scoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of data analysis projects showcasing my expertise in extracting 
              insights from complex datasets and building data-driven solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                    {project.icon}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Key Results:</h4>
                    <div className="space-y-1">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
