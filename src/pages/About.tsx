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
              <Button variant="gradient" size="lg" className="fade-in-up-delay-1">
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
              <img src={heroAiBrain} alt="AI Brain Innovation" className="w-full max-w-lg rounded-2xl parallax-float neon-glow" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="relative py-[24px]">
        <div className="container-custom">
          <div className="grid grid-cols-4 gap-8">
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
              <Card className="glass-card p-8 text-center hover-lift">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
                <div className="text-3xl font-poppins font-bold gradient-text-green mb-2">
                  {item.stat}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </Card>
            </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-[24px]">
        <div className="container-custom">
          <div className="grid grid-cols-12 gap-12 items-center">
            <ScrollAnimation animation="slide-left" className="col-span-6 relative">
              <img src={neuralPattern} alt="Neural Network Pattern" className="w-full rounded-2xl neon-glow-green" />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={200} className="col-span-6 space-y-8">
              <h2 className="text-h2 font-poppins font-bold gradient-text">
                Who We Are
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed">
                A forward-thinking technology consultancy that specializes in AI implementation, 
                digital transformation, and strategic IT solutions. We combine deep technical 
                expertise with business acumen to deliver measurable outcomes.
              </p>
              <div className="space-y-6">
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
              }].map((item, index) => <ScrollAnimation key={index} animation="fade-up" delay={400 + index * 100} className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-lg">
                    <item.icon className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollAnimation>)}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-[24px]">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8">
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
              <Card className="glass-card p-8 hover-lift text-center">
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
            </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="relative py-[24px]">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-h2 font-poppins font-bold gradient-text mb-4">
              Our Journey
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our evolution reflects our commitment to innovation and excellence in transforming businesses through technology.
            </p>
          </ScrollAnimation>
          
          <div className="relative">
            {/* Journey Timeline with connecting segments */}
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full max-w-4xl">
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
            <div className="grid grid-cols-3 gap-8 relative z-20">
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
                <Card className="glass-card p-8 text-center hover-lift">
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
              </ScrollAnimation>)}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-[24px]">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-h2 font-poppins font-bold gradient-text mb-4">
              What We Do
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 gap-8">
            <ScrollAnimation animation="slide-left">
              <Card className="glass-card p-8 hover-lift py-[24px]">
                <div className="flex items-start gap-6">
                  <img src={itStaffingTeam} alt="IT Staffing Team" className="w-24 h-24 rounded-xl object-cover neon-glow" />
                  <div className="flex-1">
                    <h3 className="text-h3 font-poppins font-bold gradient-text mb-4">
                      IT Staffing
                    </h3>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      <li>• Expert talent acquisition and placement</li>
                      <li>• Contract and permanent staffing solutions</li>
                      <li>• Specialized tech skill matching</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right" delay={300}>
              <Card className="glass-card p-8 hover-lift py-[24px]">
                <div className="flex items-start gap-6">
                  <img src={itConsultingLaptop} alt="IT Consulting" className="w-24 h-24 rounded-xl object-cover neon-glow" />
                  <div className="flex-1">
                    <h3 className="text-h3 font-poppins font-bold gradient-text mb-4">
                      IT Consulting
                    </h3>
                    <ul className="space-y-2 text-muted-foreground mb-6">
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
      <section className="py-[24px]">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-h2 font-poppins font-bold gradient-text mb-4">
              Leadership Team
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving innovation and excellence
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-3 gap-8">
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
              <Card className="glass-card p-6 text-center hover-lift group">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary p-1">
                    <img src={leader.image} alt={leader.name} className="w-full h-full rounded-full object-cover" />
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
            </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Why AIHI */}
      <section className="py-[24px]">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-h2 font-poppins font-bold gradient-text mb-4">
              Why Choose AIHI?
            </h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Our unique journey from corporate education to staffing to consulting has given us unparalleled insights into what businesses truly need
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 gap-12 mb-16">
            {/* Left Column - Educational Foundation */}
            <ScrollAnimation animation="slide-left" className="space-y-8">
              <Card className="glass-card p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-primary">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-poppins font-bold gradient-text mb-3">
                      Corporate Training Excellence
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our roots in Oracle corporate training mean we understand technology from the ground up. We don't just implement solutions - we educate and empower your organization's teams.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                        <span>Corporate knowledge transfer</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                        <span>Enterprise training programs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                        <span>Organizational skill development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-accent">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-poppins font-bold gradient-text mb-3">
                      Talent Intelligence
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Years in IT staffing taught us what makes great tech teams. We help you not just build solutions, but build the right team culture.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-teal"></div>
                        <span>Team dynamics optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-teal"></div>
                        <span>Skill gap analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-teal"></div>
                        <span>Leadership development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
            
            {/* Right Column - Strategic Advantage */}
            <ScrollAnimation animation="slide-right" delay={300} className="space-y-8">
              <Card className="glass-card p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-primary">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-poppins font-bold gradient-text mb-3">
                      Strategic Thinking
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our consulting evolution means we see the bigger picture. Every technical decision aligns with your business objectives.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                        <span>Business-technology alignment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                        <span>ROI-focused implementations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                        <span>Scalable architecture design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-accent">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-poppins font-bold gradient-text mb-3">
                      Proven Results
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our multi-domain experience delivers solutions that work in the real world, not just in theory.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-teal"></div>
                        <span>Industry-tested methodologies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-teal"></div>
                        <span>Measurable success metrics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-teal"></div>
                        <span>Continuous improvement focus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
          
          {/* Bottom CTA */}
          <ScrollAnimation animation="scale-in" delay={600} className="text-center">
            <div className="inline-flex items-center gap-4 p-6 glass-card rounded-2xl">
              <Sparkles className="w-8 h-8 text-neon-purple" />
              <div>
                <h4 className="font-poppins font-bold text-foreground mb-1">
                  Ready to Experience the AIHI Difference?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Let our unique journey become your competitive advantage
                </p>
              </div>
              
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative h-[220px] flex items-center">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <ScrollAnimation animation="scale-in" className="container-custom relative z-10 text-center">
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
              <Button variant="gradient" size="lg">
                Contact Sales Team
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Footer */}
      
    </div>;
};
export default About;