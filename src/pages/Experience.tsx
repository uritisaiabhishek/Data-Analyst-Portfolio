
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead data analysis initiatives for product optimization and business intelligence. Collaborate with cross-functional teams to drive data-driven decision making.",
      achievements: [
        "Increased revenue by 28% through customer segmentation analysis",
        "Reduced customer acquisition cost by 22% using predictive modeling",
        "Built automated reporting systems saving 15 hours per week",
        "Mentored 3 junior analysts and established best practices"
      ],
      skills: ["Python", "SQL", "Tableau", "Machine Learning", "A/B Testing"]
    },
    {
      title: "Data Analyst",
      company: "Digital Marketing Agency",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Analyzed marketing campaign performance and customer behavior to optimize digital strategies and improve ROI for various clients.",
      achievements: [
        "Improved campaign ROI by 35% through statistical analysis",
        "Created interactive dashboards for 20+ clients",
        "Developed attribution models for multi-channel campaigns",
        "Presented insights to C-level executives regularly"
      ],
      skills: ["Google Analytics", "R", "Excel", "Power BI", "Statistical Analysis"]
    },
    {
      title: "Junior Data Analyst",
      company: "Financial Services Corp",
      location: "Chicago, IL",
      period: "2019 - 2020",
      description: "Supported risk management and compliance teams with data analysis and reporting. Developed expertise in financial data analysis and regulatory reporting.",
      achievements: [
        "Automated monthly compliance reports reducing processing time by 60%",
        "Identified data quality issues preventing $2M in potential losses",
        "Created risk assessment models with 88% accuracy",
        "Collaborated with IT to improve data warehouse performance"
      ],
      skills: ["SQL", "SAS", "Excel", "Risk Analysis", "Regulatory Reporting"]
    }
  ];

  const skills = {
    "Programming": ["Python", "R", "SQL", "SAS"],
    "Visualization": ["Tableau", "Power BI", "D3.js", "Matplotlib"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Snowflake"],
    "Cloud Platforms": ["AWS", "Google Cloud", "Azure", "Databricks"],
    "Machine Learning": ["Scikit-learn", "TensorFlow", "XGBoost", "Pandas"],
    "Statistics": ["A/B Testing", "Regression Analysis", "Time Series", "Hypothesis Testing"]
  };

  const certifications = [
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      year: "2023"
    },
    {
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      year: "2022"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2022"
    },
    {
      name: "Microsoft Power BI Certification",
      issuer: "Microsoft",
      year: "2021"
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
              Experience & Skills
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey in data analysis, from junior analyst to leading 
              data-driven initiatives that generate millions in business value.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience Timeline */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
              
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills & Certifications */}
            <div className="space-y-6">
              {/* Skills */}
              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-gray-700 mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      {category !== "Statistics" && <Separator className="mt-3" />}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Certifications */}
              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
