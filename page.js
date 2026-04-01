"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-green-700 text-white p-8 text-center">
        <h1 className="text-3xl font-bold">AgriGov India 🌾</h1>
        <p>Government Schemes, Weather & AI Advisory — All in One Place</p>
      </section>

      <Schemes />
      <Weather />
      <Chatbot />
      <Market />

    </div>
  );
}

// SCHEMES
function Schemes() {
  const data = [
    { name: "PM-KISAN", benefit: "₹6000/year" },
    { name: "PMFBY", benefit: "Crop Insurance" }
  ];

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold">Schemes</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {data.map((s, i) => (
          <div key={i} className="border p-4 rounded">
            <h3>{s.name}</h3>
            <p>{s.benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// WEATHER
function Weather() {
  return (
    <section className="p-6 bg-blue-50">
      <h2 className="text-xl font-bold">Weather</h2>
      <p>Temperature: 32°C</p>
      <p>Humidity: 60%</p>
    </section>
  );
}

// CHATBOT
function Chatbot() {
  const [msg, setMsg] = useState([]);

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold">AI Chat</h2>
      <input className="border p-2 w-full" placeholder="Ask..." />
    </section>
  );
}

// MARKET
function Market() {
  return (
    <section className="p-6 bg-green-50">
      <h2 className="text-xl font-bold">Market Prices</h2>
      <p>Wheat: ₹2200/qtl</p>
    </section>
  );
}
