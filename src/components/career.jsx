import React from 'react';

const jobs = [
  {
    title: 'AI Engineer (Gen AI)',
    
    location: 'Bengaluru, India',
    description: 'Build and deploy next-gen GenAI models for real-world use.',
  },
  {
    title: 'Python Developer',
    
    location: 'Bengaluru, India',
    description: 'Develop scalable Python applications for diverse industries.',
  },
  {
    title: 'Flutter Developer',
    
    location: 'Bengaluru, India',
    description: 'Create high-performance mobile apps using Flutter.',
  },
  {
    title: 'AI/ML Engineer',
    
    location: 'Bengaluru, India',
    description: 'Deploy ML models for analytics and automation.',
  },
];

const Career = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a1446] via-[#2d1b69] to-[#0c3483] flex flex-col items-center px-4 pt-28 pb-16">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">Careers</h1>
        <p className="text-lg md:text-xl text-white/80 mb-2">Join our team and help shape the future of technology</p>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-full mt-4" />
      </div>
      {/* Job Grid */}
      <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-white mb-2 drop-shadow">{job.title}</h2>
            
            <div className="mb-4">
              <span className="font-semibold text-white/90">Location:</span> <span className="text-white/80">{job.location}</span>
            </div>
            <p className="text-white/80 mb-6 flex-1">{job.description}</p>
            <button className="mt-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white text-base font-semibold shadow-lg hover:from-[#7c3aed] hover:to-[#4f46e5] transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none">Apply Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Career; 