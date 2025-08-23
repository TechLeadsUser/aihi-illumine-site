import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { Brain, Users, Target, Shield, Compass, Telescope, Rocket, Heart, Clock, BarChart3, Handshake, Globe, BookOpen, GraduationCap, Cog, Laptop, TrendingUp, Lock, LinkedinIcon, ArrowRight, Sparkles } from "lucide-react";
import heroAiBrain from "@/assets/hero-ai-brain.jpg";
import neuralPattern from "@/assets/neural-pattern.jpg";
import itStaffingTeam from "@/assets/it-staffing-team.jpg";
import itConsultingLaptop from "@/assets/it-consulting-laptop.jpg";
const About = () => {
  return <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-neural opacity-30"></div>
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 fade-in-up text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold gradient-text leading-tight">
              Where Intelligence Meets Innovation
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforming businesses through cutting-edge AI solutions and strategic IT consulting. 
              We bridge the gap between technology potential and business reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gradient" size="lg" className="fade-in-up-delay-1 w-full sm:w-auto">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg" className="fade-in-up-delay-2 w-full sm:w-auto">
                Explore Solutions
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center fade-in-up-delay-3 order-first lg:order-last">
            <div className="relative">
              <img src={heroAiBrain} alt="AI Brain Innovation" className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-2xl parallax-float neon-glow" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="relative py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[{
            icon: Clock,
            stat: "12+",
            label: "Years Experience"
          }, {
            icon: BarChart3,
            stat: "300+",
            label: "Projects Delivered"
          }, {
            icon: Handshake,
            stat: "98%",
            label: "Client Retention"
          }, {
            icon: Globe,
            stat: "Global",
            label: "Delivery Model"
          }].map((item, index) => <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <Card className="glass-card p-4 sm:p-6 lg:p-8 text-center hover-lift">
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4 text-neon-blue" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold gradient-text-green mb-1 lg:mb-2">
                  {item.stat}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">{item.label}</div>
              </Card>
            </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation animation="slide-left" className="relative order-2 lg:order-1">
              <img src={neuralPattern} alt="Neural Network Pattern" className="w-full rounded-2xl neon-glow-green" />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={200} className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold gradient-text text-center lg:text-left">
                Who We Are
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
                A forward-thinking technology consultancy that specializes in AI implementation, 
                digital transformation, and strategic IT solutions. We combine deep technical 
                expertise with business acumen to deliver measurable outcomes.
              </p>
              <div className="space-y-4 lg:space-y-6">
                {[{
                icon: Shield,
                title: "Secure by Design",
                desc: "Security-first approach in every solution"
              }, {
                icon: Brain,
                title: "Deep Domain Expertise",
                desc: "Specialized knowledge across industries"
              }, {
                icon: Compass,
                title: "Outcome-First Delivery",
                desc: "Results-driven project execution"
              }].map((item, index) => <ScrollAnimation key={index} animation="fade-up" delay={400 + index * 100} className="flex items-start gap-3 lg:gap-4">
                  <div className="p-2 lg:p-3 glass-card rounded-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-neon-purple" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-foreground mb-1 text-sm lg:text-base">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm lg:text-base">{item.desc}</p>
                  </div>
                </ScrollAnimation>)}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[{
            icon: Telescope,
            title: "Vision",
            content: "To be the global leader in AI-driven business transformation, empowering organizations to achieve unprecedented growth through intelligent technology solutions.",
            color: "neon-purple"
          }, {
            icon: Rocket,
            title: "Mission",
            content: "We accelerate business success by delivering innovative AI and IT solutions that transform challenges into competitive advantages through strategic consulting and implementation.",
            color: "neon-teal"
          }, {
            icon: Heart,
            title: "Values",
            content: "Innovation, integrity, and excellence drive everything we do. We build lasting partnerships through transparent communication, continuous learning, and unwavering commitment to client success.",
            color: "neon-cyan"
          }].map((item, index) => <ScrollAnimation key={index} animation="scale-in" delay={index * 200}>
              <Card className="glass-card p-6 lg:p-8 hover-lift text-center h-full flex flex-col">
                <div className={`inline-flex p-3 lg:p-4 rounded-2xl glass-card mb-4 lg:mb-6 text-${item.color}`}>
                  <item.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-poppins font-bold gradient-text mb-3 lg:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-1">
                  {item.content}
                </p>
              </Card>
            </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="relative py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold gradient-text mb-4">
              Our Journey
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our evolution reflects our commitment to innovation and excellence in transforming businesses through technology.
            </p>
          </ScrollAnimation>
          
          <div className="relative">
            {/* Journey Timeline - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full max-w-4xl">
              <div className="relative flex items-center justify-between px-16">
                {/* First milestone dot */}
                <div className="relative z-10 w-4 h-4 bg-gradient-primary rounded-full border-2 border-background shadow-glow-primary"></div>
                
                {/* First connecting line */}
                <div className="flex-1 mx-8 h-0.5 bg-gradient-primary rounded-full"></div>
                
                {/* Second milestone dot */}
                <div className="relative z-10 w-4 h-4 bg-gradient-primary rounded-full border-2 border-background shadow-glow-primary"></div>
                
                {/* Second connecting line */}
                <div className="flex-1 mx-8 h-0.5 bg-gradient-primary rounded-full"></div>
                
                {/* Third milestone dot */}
                <div className="relative z-10 w-4 h-4 bg-gradient-primary rounded-full border-2 border-background shadow-glow-primary"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-20">
              {[{
              icon: BookOpen,
              title: "Edtech",
              subtitle: "Empowering Careers Through Learning",
              desc: "We began our journey as an EdTech company, providing comprehensive Oracle training programs for corporate clients. Our mission was to bridge the skills gap by offering high-quality, industry-relevant Oracle database training that helped organizations upskill their workforce and advance their teams' capabilities in the competitive technology landscape."
            }, {
              icon: Users,
              title: "IT Staffing",
              subtitle: "Connecting Talent with Opportunity",
              desc: "Building on our deep understanding of technology skills and market demands from our Oracle corporate training experience, we naturally expanded into IT staffing. We leveraged our network of trained corporate professionals and industry connections to provide specialized recruitment services, helping companies find the right talent while supporting professionals in finding their ideal career opportunities."
            }, {
              icon: Cog,
              title: "IT Consulting",
              subtitle: "Strategic Technology Partnership",
              desc: "Today, we have evolved into a full-service IT consulting firm, combining our corporate training expertise and staffing insights with strategic technology consulting. We help organizations implement robust IT solutions, optimize their technology infrastructure, and develop comprehensive digital strategies that drive business growth and operational excellence."
            }].map((milestone, index) => <ScrollAnimation key={index} animation={index % 2 === 0 ? 'slide-left' : 'slide-right'} delay={index * 300}>
                <Card className="glass-card p-6 lg:p-8 text-center hover-lift h-full flex flex-col">
                  <div className="inline-flex p-3 lg:p-4 rounded-2xl bg-gradient-primary mb-4 lg:mb-6">
                    <milestone.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="font-poppins font-bold text-foreground mb-2 text-base lg:text-lg">
                    {milestone.title}
                  </h4>
                  <div className="text-neon-blue font-medium mb-3 lg:mb-4 text-xs lg:text-sm">
                    {milestone.subtitle}
                  </div>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed flex-1">
                    {milestone.desc}
                  </p>
                </Card>
              </ScrollAnimation>)}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold gradient-text mb-4">
              What We Do
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <ScrollAnimation animation="slide-left">
              <Card className="glass-card p-6 lg:p-8 hover-lift h-full">
                <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                  <img src={itStaffingTeam} alt="IT Staffing Team" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover neon-glow flex-shrink-0 mx-auto sm:mx-0" />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-bold gradient-text mb-3 lg:mb-4">
                      IT Staffing
                    </h3>
                    <ul className="space-y-1 lg:space-y-2 text-muted-foreground text-sm lg:text-base">
                      <li>• Expert talent acquisition and placement</li>
                      <li>• Contract and permanent staffing solutions</li>
                      <li>• Specialized tech skill matching</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right" delay={300}>
              <Card className="glass-card p-6 lg:p-8 hover-lift h-full">
                <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                  <img src={itConsultingLaptop} alt="IT Consulting" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover neon-glow flex-shrink-0 mx-auto sm:mx-0" />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-bold gradient-text mb-3 lg:mb-4">
                      IT Consulting
                    </h3>
                    <ul className="space-y-1 lg:space-y-2 text-muted-foreground text-sm lg:text-base">
                      <li>• AI implementation and strategy</li>
                      <li>• Digital transformation roadmaps</li>
                      <li>• Technology architecture design</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold gradient-text mb-4">
              Leadership Team
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving innovation and excellence
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[{
            name: "Krishna",
            role: "Chief Executive Officer",
            bio: "Visionary leader with 15+ years in technology transformation and strategic business development.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
          }, {
            name: "Ravi",
            role: "Operations Manager",
            bio: "Operations expert specializing in process optimization and large-scale project delivery management.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
          }, {
            name: "Sumesh Goutham",
            role: "Principal Consultant",
            bio: "Technical architect and AI specialist with deep expertise in enterprise solution design and implementation.",
            image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face"
          }].map((leader, index) => <ScrollAnimation key={index} animation="scale-in" delay={index * 200}>
              <Card className="glass-card p-6 text-center hover-lift group h-full flex flex-col">
                <div className="relative inline-block mb-4 lg:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-primary p-1">
                    <img src={leader.image} alt={leader.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-gradient-primary rounded-full">
                      <LinkedinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="font-poppins font-bold text-foreground mb-1 text-base lg:text-lg">
                  {leader.name}
                </h4>
                <div className="text-neon-blue font-medium mb-3 text-sm lg:text-base">
                  {leader.role}
                </div>
                <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed flex-1">
                  {leader.bio}
                </p>
              </Card>
            </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Why Choose AIHI */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold gradient-text mb-4">
              Why Choose AIHI?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialists in Oracle, SAP, Microsoft, Salesforce, ServiceNow delivering measurable outcomes with accountable delivery.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Deep Platform Expertise */}
            <ScrollAnimation animation="slide-left" delay={0}>
              <Card className="glass-card p-6 lg:p-8 hover-lift h-full">
                <div className="p-3 lg:p-4 rounded-2xl bg-gradient-primary mb-4 lg:mb-6 inline-block">
                  <Cog className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-poppins font-bold gradient-text mb-3 lg:mb-4">
                  Deep Platform Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                  Certified consultants across leading ERP, CX, and ITSM suites for greenfield, upgrades, and optimizations.
                </p>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-blue mb-1">Platform Expertise:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Oracle Cloud/EBS</li>
                      <li>• SAP S/4HANA & BTP/CPI</li>
                      <li>• Microsoft Dynamics 365 & Azure</li>
                      <li>• Salesforce Clouds</li>
                      <li>• ServiceNow ITSM/HRSD/CSM</li>
                    </ul>
                  </div>
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-purple mb-1">Accelerators:</div>
                    <p className="text-muted-foreground">Best-practice templates and proven accelerators</p>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>

            {/* AI-Driven IT Solutions */}
            <ScrollAnimation animation="scale-in" delay={150}>
              <Card className="glass-card p-6 lg:p-8 hover-lift h-full">
                <div className="p-3 lg:p-4 rounded-2xl bg-gradient-accent mb-4 lg:mb-6 inline-block">
                  <Brain className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-poppins font-bold gradient-text mb-3 lg:mb-4">
                  AI-Driven IT Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                  We blend platform-native AI with data science to unlock real business value.
                </p>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-teal mb-1">AI Capabilities:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Predictive insights, anomaly alerts, and AI copilots embedded in workflows</li>
                    </ul>
                  </div>
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-cyan mb-1">Automation:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Intelligent automation: chatbots, approvals, ticket triage, RPA/AIOps</li>
                    </ul>
                  </div>
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-green mb-1">Responsible AI:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Governed data, explainability, and security controls</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>

            {/* End-to-End Delivery */}
            <ScrollAnimation animation="slide-right" delay={300}>
              <Card className="glass-card p-6 lg:p-8 hover-lift h-full">
                <div className="p-3 lg:p-4 rounded-2xl bg-gradient-primary mb-4 lg:mb-6 inline-block">
                  <Target className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-poppins font-bold gradient-text mb-3 lg:mb-4">
                  End-to-End Delivery
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                  One partner from strategy to run—advisory, build, data, and operations.
                </p>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-purple mb-1">Strategy:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Roadmaps, solution architecture, and value cases</li>
                    </ul>
                  </div>
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-blue mb-1">Implementation:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Implementation, integrations, testing, and migration (OIC, BTP/CPI, Azure/MuleSoft/IntegrationHub)</li>
                    </ul>
                  </div>
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-teal mb-1">Operations:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Managed services with SLAs, observability, and continuous improvement</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>

            {/* Industry Experience */}
            <ScrollAnimation animation="scale-in" delay={400} className="">
              <Card className="glass-card p-6 lg:p-8 hover-lift h-full">
                <div className="p-3 lg:p-4 rounded-2xl bg-gradient-primary mb-4 lg:mb-6 inline-block">
                  <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-poppins font-bold gradient-text mb-3 lg:mb-4">
                  Industry Experience
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                  Enterprise programs delivered across regulated and high-scale sectors.
                </p>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-blue mb-1">Sectors:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Retail, Manufacturing, Healthcare</li>
                      <li>• Financial Services</li>
                      <li>• Logistics & Supply Chain</li>
                      <li>• Hi-Tech/SaaS</li>
                    </ul>
                  </div>
                  <div className="text-xs lg:text-sm">
                    <div className="font-semibold text-neon-teal mb-1">Expertise:</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Domain-aware playbooks and compliance readiness</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>

            {/* Measurable Outcomes & Governance */}
            <ScrollAnimation animation="slide-left" delay={500} className="">
              
            </ScrollAnimation>
          </div>
          
          {/* Bottom CTA */}
          <ScrollAnimation animation="scale-in" delay={750} className="text-center mt-12 lg:mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 glass-card rounded-2xl max-w-md sm:max-w-none mx-auto">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-neon-purple flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h4 className="font-poppins font-bold text-foreground mb-1 text-sm sm:text-base">
                  Ready to Experience the AIHI Difference?
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Let our platform expertise drive your business transformation
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 lg:py-24 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <ScrollAnimation animation="scale-in" className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-white mb-4 text-xl sm:text-2xl lg:text-3xl">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Join hundreds of forward-thinking organizations that trust AIHI to drive their digital transformation journey. 
              Let's explore how we can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero-outline" size="lg" className="text-sm font-semibold w-full sm:w-auto">
                Schedule Consultation
              </Button>
              <Button variant="gradient" size="lg" className="text-sm font-medium w-full sm:w-auto">
                Contact Sales Team
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Footer */}
      
    </div>;
};
export default About;