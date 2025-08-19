import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Users, 
  Target, 
  Shield, 
  Compass, 
  Telescope,
  Rocket,
  Heart,
  Clock,
  BarChart3,
  Handshake,
  Globe,
  BookOpen,
  GraduationCap,
  Cog,
  Laptop,
  TrendingUp,
  Lock,
  LinkedinIcon,
  ArrowRight,
  Sparkles
} from "lucide-react";
import heroAiBrain from "@/assets/hero-ai-brain.jpg";
import neuralPattern from "@/assets/neural-pattern.jpg";
import itStaffingTeam from "@/assets/it-staffing-team.jpg";
import itConsultingLaptop from "@/assets/it-consulting-laptop.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-neural opacity-30"></div>
        <div className="container-custom relative z-10 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-7 space-y-8 fade-in-up">
            <h1 className="text-h1 font-poppins font-bold gradient-text leading-tight">
              Where Intelligence Meets Innovation
            </h1>
            <p className="text-body text-muted-foreground leading-relaxed max-w-2xl">
              Transforming businesses through cutting-edge AI solutions and strategic IT consulting. 
              We bridge the gap between technology potential and business reality.
            </p>
            <div className="flex gap-4">
              <Button variant="hero" size="lg" className="fade-in-up-delay-1">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg" className="fade-in-up-delay-2">
                Explore Solutions
              </Button>
            </div>
          </div>
          <div className="col-span-5 flex justify-center fade-in-up-delay-3">
            <div className="relative">
              <img 
                src={heroAiBrain} 
                alt="AI Brain Innovation" 
                className="w-full max-w-lg rounded-2xl parallax-float neon-glow"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-section relative">
        <div className="container-custom">
          <div className="grid grid-cols-4 gap-8">
            {[
              { icon: Clock, stat: "12+", label: "Years Experience", delay: "fade-in-up-delay-1" },
              { icon: BarChart3, stat: "300+", label: "Projects Delivered", delay: "fade-in-up-delay-2" },
              { icon: Handshake, stat: "98%", label: "Client Retention", delay: "fade-in-up-delay-3" },
              { icon: Globe, stat: "Global", label: "Delivery Model", delay: "fade-in-up-delay-4" },
            ].map((item, index) => (
              <Card key={index} className={`glass-card p-8 text-center hover-lift card-tilt ${item.delay}`}>
                <item.icon className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
                <div className="text-3xl font-poppins font-bold gradient-text mb-2">
                  {item.stat}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-section relative">
        <div className="container-custom">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-6 relative">
              <img 
                src={neuralPattern} 
                alt="Neural Network Pattern" 
                className="w-full rounded-2xl neon-glow-blue"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
            </div>
            <div className="col-span-6 space-y-8 fade-in-up">
              <h2 className="text-h2 font-poppins font-bold gradient-text">
                Who We Are
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed">
                A forward-thinking technology consultancy that specializes in AI implementation, 
                digital transformation, and strategic IT solutions. We combine deep technical 
                expertise with business acumen to deliver measurable outcomes.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Secure by Design", desc: "Security-first approach in every solution" },
                  { icon: Brain, title: "Deep Domain Expertise", desc: "Specialized knowledge across industries" },
                  { icon: Compass, title: "Outcome-First Delivery", desc: "Results-driven project execution" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 fade-in-up-delay-1">
                    <div className="p-3 glass-card rounded-lg">
                      <item.icon className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-section">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Telescope,
                title: "Vision",
                content: "To be the global leader in AI-driven business transformation, empowering organizations to achieve unprecedented growth through intelligent technology solutions.",
                color: "neon-blue"
              },
              {
                icon: Rocket,
                title: "Mission",
                content: "We accelerate business success by delivering innovative AI and IT solutions that transform challenges into competitive advantages through strategic consulting and implementation.",
                color: "neon-purple"
              },
              {
                icon: Heart,
                title: "Values",
                content: "Innovation, integrity, and excellence drive everything we do. We build lasting partnerships through transparent communication, continuous learning, and unwavering commitment to client success.",
                color: "neon-teal"
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card p-8 hover-lift card-tilt fade-in-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`inline-flex p-4 rounded-2xl glass-card mb-6 text-${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-h3 font-poppins font-bold gradient-text mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-section relative">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-h2 font-poppins font-bold gradient-text mb-4">
              Our Journey
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our evolution reflects our commitment to innovation and excellence in transforming businesses through technology.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary rounded-full pulse-slow"></div>
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {[
                {
                  icon: BookOpen,
                  title: "Oracle Education Excellence",
                  subtitle: "Empowering Careers Through Learning",
                  desc: "We began our journey as an EdTech company, providing comprehensive Oracle training classes for students and working professionals. Our mission was to bridge the skills gap by offering high-quality, industry-relevant Oracle database training that helped individuals upskill and advance their careers in the competitive technology landscape."
                },
                {
                  icon: Users,
                  title: "IT Staffing Solutions", 
                  subtitle: "Connecting Talent with Opportunity",
                  desc: "Building on our deep understanding of technology skills and market demands from our Oracle training experience, we naturally expanded into IT staffing. We leveraged our network of trained professionals and industry connections to provide specialized recruitment services, helping companies find the right talent while supporting professionals in finding their ideal career opportunities."
                },
                {
                  icon: Cog,
                  title: "Comprehensive IT Consulting",
                  subtitle: "Strategic Technology Partnership",
                  desc: "Today, we've evolved into a full-service IT consulting firm, combining our educational expertise and staffing insights with strategic technology consulting. We help organizations implement robust IT solutions, optimize their technology infrastructure, and develop comprehensive digital strategies that drive business growth and operational excellence."
                }
              ].map((milestone, index) => (
                <Card key={index} className="glass-card p-8 text-center hover-lift fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-6">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-poppins font-bold text-foreground mb-2 text-lg">
                    {milestone.title}
                  </h4>
                  <div className="text-neon-blue font-medium mb-4 text-sm">
                    {milestone.subtitle}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-section">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-h2 font-poppins font-bold gradient-text mb-4">
              What We Do
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <Card className="glass-card p-8 hover-lift fade-in-up">
              <div className="flex items-start gap-6">
                <img 
                  src={itStaffingTeam} 
                  alt="IT Staffing Team" 
                  className="w-24 h-24 rounded-xl object-cover neon-glow"
                />
                <div className="flex-1">
                  <h3 className="text-h3 font-poppins font-bold gradient-text mb-4">
                    IT Staffing
                  </h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• Expert talent acquisition and placement</li>
                    <li>• Contract and permanent staffing solutions</li>
                    <li>• Specialized tech skill matching</li>
                  </ul>
                  <Button variant="accent" size="sm">
                    Explore Staffing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-8 hover-lift fade-in-up-delay-1">
              <div className="flex items-start gap-6">
                <img 
                  src={itConsultingLaptop} 
                  alt="IT Consulting" 
                  className="w-24 h-24 rounded-xl object-cover neon-glow"
                />
                <div className="flex-1">
                  <h3 className="text-h3 font-poppins font-bold gradient-text mb-4">
                    IT Consulting
                  </h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• AI implementation and strategy</li>
                    <li>• Digital transformation roadmaps</li>
                    <li>• Technology architecture design</li>
                  </ul>
                  <Button variant="accent" size="sm">
                    Explore Consulting
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-section">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-h2 font-poppins font-bold gradient-text mb-4">
              Leadership Team
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                name: "Krishna",
                role: "Chief Executive Officer",
                bio: "Visionary leader with 15+ years in technology transformation and strategic business development.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              },
              {
                name: "Ravi",
                role: "Operations Manager", 
                bio: "Operations expert specializing in process optimization and large-scale project delivery management.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
              },
              {
                name: "Sumesh Goutham",
                role: "Principal Consultant",
                bio: "Technical architect and AI specialist with deep expertise in enterprise solution design and implementation.",
                image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face"
              }
            ].map((leader, index) => (
              <Card key={index} className="glass-card p-6 text-center hover-lift fade-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary p-1">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-gradient-primary rounded-full">
                      <LinkedinIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="font-poppins font-bold text-foreground mb-1">
                  {leader.name}
                </h4>
                <div className="text-neon-blue font-medium mb-3">
                  {leader.role}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AIHI */}
      <section className="py-section">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-h2 font-poppins font-bold gradient-text mb-4">
              Why Choose AIHI?
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Three pillars that set us apart in the competitive technology landscape
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Domain Expertise",
                desc: "Deep industry knowledge combined with cutting-edge technical skills across multiple sectors and technologies."
              },
              {
                icon: TrendingUp,
                title: "Outcome-Driven",
                desc: "Results-focused approach with measurable KPIs and clear success metrics for every engagement."
              },
              {
                icon: Lock,
                title: "Secure & Compliant",
                desc: "Enterprise-grade security standards and regulatory compliance built into every solution we deliver."
              }
            ].map((pillar, index) => (
              <Card key={index} className="glass-card p-8 text-center hover-lift card-tilt fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex p-4 rounded-2xl bg-gradient-accent mb-6">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-h3 font-poppins font-bold gradient-text mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-section relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="container-custom relative z-10 text-center fade-in-up">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-h2 font-poppins font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-body text-white/90 mb-8 leading-relaxed">
              Join hundreds of forward-thinking organizations that trust AIHI to drive their digital transformation journey. 
              Let's explore how we can accelerate your success.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero-outline" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="glass" size="lg">
                Contact Sales Team
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-card-border">
        <div className="container-custom">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-poppins font-bold text-foreground mb-4">Company</h4>
              <div className="space-y-3 text-muted-foreground">
                <div>About Us</div>
                <div>Services</div>
                <div>Industries</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-foreground mb-4">Resources</h4>
              <div className="space-y-3 text-muted-foreground">
                <div>Blog</div>
                <div>News</div>
                <div>Insights</div>
                <div>Events</div>
              </div>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-foreground mb-4">Legal</h4>
              <div className="space-y-3 text-muted-foreground">
                <div>Privacy Policy</div>
                <div>Responsible Disclosure</div>
              </div>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-foreground mb-4">Connect</h4>
              <div className="flex gap-4">
                <div className="p-2 glass-card rounded-lg hover:bg-gradient-primary transition-all duration-300 cursor-pointer">
                  <LinkedinIcon className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-card-border text-center text-muted-foreground">
            © 2025 AIHI. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;