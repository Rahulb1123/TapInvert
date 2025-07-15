import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#60a5fa" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2l7 4v6c0 5.25-3.5 10-7 10S5 17.25 5 12V6l7-4z"/><path d="M9 22V12h6v10"/></svg>
    ),
    title: 'Stable Returns',
    desc: 'Tap Invest Partners offers consistent and attractive fixed income returns, helping you grow your wealth with confidence.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#38bdf8" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 2v8h8"/><path d="M2 12v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7"/><path d="M16 6l-4-4-4 4"/></svg>
    ),
    title: 'Security & Transparency',
    desc: 'Your investments are protected with robust security measures and full transparency at every step.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#818cf8" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>
    ),
    title: 'Personalized Service',
    desc: 'Enjoy tailored investment solutions and dedicated support from the Tap Invest Partners team.'
  },
];

const GeolocationDemo = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
        setError(null);
      },
      (err) => setError(err.message)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-xl p-6 my-6 w-full max-w-sm mx-auto">
      <div className="mb-2 text-blue-400">
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Geolocation API</h3>
      <button onClick={getLocation} className="mb-3 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold">Get My Location</button>
      {location && (
        <div className="text-white text-sm">Latitude: <span className="font-mono">{location.lat}</span><br/>Longitude: <span className="font-mono">{location.lon}</span></div>
      )}
      {error && <div className="mt-2 text-red-300 text-xs">{error}</div>}
    </div>
  );
};

const NetworkInfoDemo = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (navigator.connection) {
      const update = () => {
        setInfo({
          type: navigator.connection.type,
          effectiveType: navigator.connection.effectiveType,
          downlink: navigator.connection.downlink,
          rtt: navigator.connection.rtt,
          saveData: navigator.connection.saveData,
        });
      };
      update();
      navigator.connection.addEventListener('change', update);
      return () => navigator.connection.removeEventListener('change', update);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-xl p-6 my-6 w-full max-w-sm mx-auto">
      <div className="mb-2 text-green-400">
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 16h8M8 12h8M8 8h8"/></svg>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Network Information API</h3>
      {navigator.connection ? (
        <div className="text-white text-sm text-left w-full">
          <div>Type: <span className="font-mono">{info.type || 'N/A'}</span></div>
          <div>Effective Type: <span className="font-mono">{info.effectiveType || 'N/A'}</span></div>
          <div>Downlink: <span className="font-mono">{info.downlink || 'N/A'}</span> Mbps</div>
          <div>RTT: <span className="font-mono">{info.rtt || 'N/A'}</span> ms</div>
          <div>Save Data: <span className="font-mono">{info.saveData ? 'Yes' : 'No'}</span></div>
        </div>
      ) : (
        <div className="text-red-300 text-xs">Your browser does not support the Network Information API.</div>
      )}
    </div>
  );
};

const VectorX = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#0c3483] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full mx-auto text-center mt-12 mb-16 px-4 mt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
          Welcome to Tap Invest Partners
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
        Tap Invest Partners offers secure, transparent fixed income investments with high returns. Join us and grow your money with confidence.        </p>
        <button className="mt-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white text-lg font-semibold shadow-lg hover:from-[#7c3aed] hover:to-[#4f46e5] transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Get Early Access
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch px-4">
        {features.map((f, i) => (
          <div key={i} className="flex-1 bg-white/10 border border-white/20 rounded-2xl p-8 flex flex-col items-start text-left shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
            <p className="text-white/80 text-base">{f.desc}</p>
          </div>
        ))}
      </div>
      {/* API Feature Demos */}
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch px-4 mt-8">
        <div className="flex-1 flex flex-col">
          <GeolocationDemo />
        </div>
        <div className="flex-1 flex flex-col">
          <NetworkInfoDemo />
        </div>
      </div>
    </div>
  );
};

export default VectorX; 