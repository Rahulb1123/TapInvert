import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Vineet Dwivedi',
    role: 'Chief Executive Officer',
    image: '/vineet.jpg',
    linkedin: 'https://www.linkedin.com/in/vindwi/'
  },
  {
    name: 'Anuraag Dubey',
    role: 'Chief Operating Officer',
    image: '/anuraag.jpg',
    linkedin: 'https://www.linkedin.com/in/anuraagdubey/'
  },
  {
    name: 'Gaurav Nigam',
    role: 'Chief Business Officer',
    image: '/gaurav.jpg',
    linkedin: 'https://www.linkedin.com/in/gaurav-nigam-ab57a97/'
  },
  {
    name: 'Hemant Sharma',
    role: 'Lead ML Engineer',
    image: '/hemant.jpg',
    linkedin: 'https://www.linkedin.com/in/hemant-sharma-6ab4ba52/'
  }
];

const Team = () => {
  return (
    <div className="min-h-screen w-full max-w-[1920px] mx-auto bg-white flex flex-col items-center px-4 pt-28 pb-12">
      {/* Header Section with Full-Width Background Image */}
      <div className="relative w-full mb-10">
        <div className="absolute inset-0 h-56 md:h-64 w-full -top-10 left-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80"
            alt="Team background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#22336b]/80 via-[#22336b]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto text-center pt-16 pb-8">
          <h1 className="text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">Team</h1>
          <div className="flex justify-center items-center gap-2 text-base text-white/90 font-medium mb-6">
            <Link to="/" className="text-white hover:underline cursor-pointer">Home</Link>
            <span className="mx-1">•</span>
            <span className="text-white font-semibold">Team</span>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <section className="w-full max-w-[1920px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative overflow-hidden h-64">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5 bg-gradient-to-t from-[#22336b]/80 via-[#22336b]/40 to-transparent text-white relative">
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-white/80 text-sm mb-2">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-[#4f46e5] transition-colors duration-200 text-white text-xs font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-text-bottom">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Team;
