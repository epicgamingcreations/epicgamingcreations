import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Monitor, Wrench, ShoppingCart, Cpu, MemoryStick, HardDrive, Gpu } from "lucide-react";

export default function Home() {
  const [config, setConfig] = useState({
    cpu: "Intel i7",
    gpu: "NVIDIA RTX 4070",
    ram: "16GB",
    storage: "1TB SSD"
  });

  const prices = {
    cpu: {
      "Intel i7": 300,
      "Intel i9": 500,
      "AMD Ryzen 7": 280,
      "AMD Ryzen 9": 450
    },
    gpu: {
      "NVIDIA RTX 4060": 400,
      "NVIDIA RTX 4070": 600,
      "NVIDIA RTX 4080": 1000,
      "AMD RX 7900 XTX": 950
    },
    ram: {
      "16GB": 80,
      "32GB": 140,
      "64GB": 250
    },
    storage: {
      "512GB SSD": 70,
      "1TB SSD": 120,
      "2TB SSD": 200
    }
  };

  const calculateTotal = () => {
    return (
      prices.cpu[config.cpu] +
      prices.gpu[config.gpu] +
      prices.ram[config.ram] +
      prices.storage[config.storage]
    );
  };

  const handleChange = (component, value) => {
    setConfig({ ...config, [component]: value });
  };

  return (
    <main className="min-h-screen bg-black text-gold px-4 sm:px-6 md:px-8 lg:px-10 py-6 font-sans">
      <header className="flex flex-col items-center mb-10 text-center">
        <img src="/logo.png" alt="Epic Gaming Creations Logo" className="w-32 sm:w-40 h-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">Epic Gaming Creations</h1>
        <p className="text-md sm:text-lg mt-2 text-gray-300 max-w-xl">
          Custom-built gaming PCs crafted for elite performance and sleek aesthetics.
        </p>
        <Button className="mt-4 bg-gold text-black hover:bg-yellow-500">Build Yours Now</Button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <Card className="bg-zinc-900 text-white">
          <CardContent className="p-6">
            <Monitor className="w-10 h-10 text-gold mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Custom Gaming PCs</h2>
            <p>High-performance rigs tailored to your specs, aesthetic, and budget.</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 text-white">
          <CardContent className="p-6">
            <Wrench className="w-10 h-10 text-gold mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Upgrades & Repairs</h2>
            <p>From GPU upgrades to thermal tuning—we’ve got your back.</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 text-white">
          <CardContent className="p-6">
            <ShoppingCart className="w-10 h-10 text-gold mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Shop Prebuilts</h2>
            <p>Explore ready-to-ship systems optimized for popular games.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">🛠 Build Your Rig</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Cpu className="w-6 h-6 text-gold mb-2" />, label: "CPU", name: "cpu", options: ["Intel i7", "Intel i9", "AMD Ryzen 7", "AMD Ryzen 9"]
            },
            {
              icon: <Gpu className="w-6 h-6 text-gold mb-2" />, label: "GPU", name: "gpu", options: ["NVIDIA RTX 4060", "NVIDIA RTX 4070", "NVIDIA RTX 4080", "AMD RX 7900 XTX"]
            },
            {
              icon: <MemoryStick className="w-6 h-6 text-gold mb-2" />, label: "RAM", name: "ram", options: ["16GB", "32GB", "64GB"]
            },
            {
              icon: <HardDrive className="w-6 h-6 text-gold mb-2" />, label: "Storage", name: "storage", options: ["512GB SSD", "1TB SSD", "2TB SSD"]
            },
          ].map(({ icon, label, name, options }) => (
            <Card key={name} className="bg-zinc-900 text-white">
              <CardContent className="p-4">
                {icon}
                <label className="block mb-2">{label}</label>
                <select
                  className="w-full p-2 bg-black border border-gold rounded"
                  value={config[name]}
                  onChange={e => handleChange(name, e.target.value)}
                >
                  {options.map(option => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <h4 className="text-lg sm:text-xl mb-2">Your Build</h4>
          <p className="text-gray-300">CPU: {config.cpu}, GPU: {config.gpu}, RAM: {config.ram}, Storage: {config.storage}</p>
          <p className="text-xl font-semibold mt-2">Total: ${calculateTotal()}</p>
          <Button className="mt-4 bg-gold text-black hover:bg-yellow-500">Request a Quote</Button>
        </div>
      </section>

      <section className="text-center px-4">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Epic Gaming?</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          We don’t just build computers—we build experiences. Every PC is crafted with attention to detail, performance benchmarks, and a touch of gold. Join our community of elite gamers today.
        </p>
      </section>
    </main>
  );
}
