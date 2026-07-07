import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary via-blue-600 to-secondary text-white py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Welcome to Dhule Municipal Corporation
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl animate-fade-in-delay">
            Your comprehensive portal for all municipal services. Pay bills, file grievances, access tenders, and stay updated with the latest announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Link href="/services" className="btn btn-primary flex items-center justify-center gap-2 text-lg hover:shadow-lg transform hover:scale-105 transition-all">
              Explore Services
              <FaArrowRight />
            </Link>
            <Link href="#demo" className="btn bg-white text-primary flex items-center justify-center gap-2 text-lg hover:shadow-lg transform hover:scale-105 transition-all">
              Learn More
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
