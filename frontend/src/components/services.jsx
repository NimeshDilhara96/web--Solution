import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: '🌐', title: 'Web Development', desc: 'Custom, high-performance websites built with modern tech stacks. From landing pages to complex web applications.', tags: ['React', 'Next.js', 'Node.js'] },
    { icon: '📱', title: 'Mobile Apps', desc: 'Cross-platform mobile apps that feel native. Beautiful UX on both iOS and Android with a single codebase.', tags: ['React Native', 'Flutter'] },
    { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered design that converts. We craft interfaces that are as intuitive as they are visually striking.', tags: ['Figma', 'Prototyping'] },
    { icon: '⚙️', title: 'Backend & APIs', desc: 'Scalable server architecture, RESTful APIs, and cloud integrations that power your digital products.', tags: ['AWS', 'Firebase', 'PostgreSQL'] },
    { icon: '🚀', title: 'SEO & Performance', desc: 'Technical SEO audits and performance optimization. We make sure clients find you and stay when they do.', tags: ['Core Web Vitals', 'Analytics'] },
    { icon: '🤝', title: 'Digital Strategy', desc: 'From ideation to launch and beyond. Strategic consulting to align your digital presence with business goals.', tags: ['Roadmapping', 'Consulting'] },
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "Organization",
          "name": "MommentX"
        }
      }
    }))
  };

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} 
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-blue-600"></span>
            What We Do
            <span className="w-6 h-px bg-blue-600"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-['Syne'] leading-tight">
            Services Built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">Impact</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From concept to launch, we provide end-to-end custom software packages that help businesses compete in the global digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div className="text-4xl mb-6 relative z-10 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center border border-gray-100 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 font-['Syne'] group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-8 flex-grow relative z-10 leading-relaxed text-sm">
                {service.desc}
              </p>
              
              <div className="mt-auto relative z-10">
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 bg-gray-50 text-gray-500 rounded-md border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#contact" className="inline-flex items-center justify-center w-full gap-2 px-6 py-3.5 bg-white border-2 border-gray-900 text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)]">
                  Get a Quote
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;