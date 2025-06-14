
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageSquare, Calendar, Clock, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      description: "Best for project inquiries"
    },
    {
      icon: <Phone className="h-8 w-8 text-green-600" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      label: "Location",
      value: "San Francisco, CA",
      link: "#",
      description: "Open to remote work globally"
    }
  ];

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-12 w-12" />,
      url: "https://linkedin.com/in/yourprofile",
      color: "bg-blue-700 hover:bg-blue-800",
      description: "Professional network & career updates",
      followers: "2.5K+ connections"
    },
    {
      name: "GitHub",
      icon: <Github className="h-12 w-12" />,
      url: "https://github.com/yourusername",
      color: "bg-gray-800 hover:bg-gray-900",
      description: "Code repositories & data projects",
      followers: "1.2K+ followers"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-12 w-12" />,
      url: "https://twitter.com/yourusername",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Data insights & industry thoughts",
      followers: "850+ followers"
    }
  ];

  const quickActions = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule a Call",
      description: "Book a 30-minute consultation",
      action: "Schedule Now",
      link: "#"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Quick Message",
      description: "Send a direct message on LinkedIn",
      action: "Message Me",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      description: "Usually reply within 24 hours",
      action: "Learn More",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your data challenges? I'm always excited to explore new projects 
              and help transform your data into actionable business insights.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.label}</h3>
                <a 
                  href={info.link}
                  className="text-lg text-blue-600 hover:text-blue-700 transition-colors font-medium block mb-2"
                >
                  {info.value}
                </a>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Follow My Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay updated with my latest projects, insights, and data analysis tips
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {socialPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className={`${platform.color} text-white p-4 rounded-xl mb-6 inline-block transition-colors`}>
                      {platform.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                      {platform.name}
                      <ExternalLink className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    <div className="text-sm text-blue-600 font-semibold">{platform.followers}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <p className="text-xl text-gray-600">
                Choose the best way to get in touch
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {quickActions.map((action, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-xl mb-6 inline-block">
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{action.title}</h3>
                  <p className="text-gray-600 mb-6">{action.description}</p>
                  <a
                    href={action.link}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {action.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse mr-3"></div>
              <h3 className="text-2xl font-bold">Currently Available</h3>
            </div>
            <p className="text-lg text-green-100 mb-6">
              I'm actively taking on new projects and collaborations. 
              Let's discuss how I can help transform your data into insights!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
