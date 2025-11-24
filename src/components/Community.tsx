import { Link } from 'react-router-dom';
import { RevealOnScroll } from './RevealOnScroll';

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Marketing Manager",
    content: "Valura Club mengubah cara saya bekerja. Laporan bulanan yang biasanya butuh 2 hari, sekarang selesai dalam 2 jam dengan bantuan AI.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Sarah Wijaya",
    role: "Freelance Designer",
    content: "Komunitasnya sangat suportif! Saya belajar banyak trik prompting baru yang meningkatkan kualitas desain saya secara signifikan.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Budi Santoso",
    role: "UMKM Owner",
    content: "Materi sangat praktis dan mudah dipahami. Sekarang saya bisa buat konten sosmed sendiri tanpa harus bayar agensi mahal.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
];

const Community = () => {
  return (
    <section id="community" className="py-32 bg-gradient-to-b from-dark-surface via-black to-dark-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">💬 Community</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tumbuh Bersama <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Komunitas</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Jangan belajar sendirian. Bergabunglah dengan ribuan profesional dan kreator lain yang saling mendukung.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-gradient-to-br from-dark-surface to-dark p-10 rounded-3xl border-2 border-dark-border hover:border-primary/40 relative transition-all duration-500 hover:shadow-[0_20px_60px_rgba(139,90,111,0.15)] hover:-translate-y-2 group">
                <div className="absolute -top-6 left-8 text-7xl text-primary/30 font-serif">"</div>
                <p className="text-gray-300 mb-8 relative z-10 italic text-base md:text-lg leading-relaxed">
                  {item.content}
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/60 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.name}</h4>
                    <p className="text-primary text-sm font-semibold">{item.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400}>
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-12 md:p-16 text-center border-2 border-primary/40 backdrop-blur-sm shadow-2xl shadow-primary/10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Siap Bergabung dengan <span className="text-primary">5,000+</span> Member Lainnya?
            </h3>
            <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Dapatkan akses ke webinar mingguan, grup diskusi eksklusif, dan kesempatan networking.
            </p>
            <Link to="/register" className="inline-block bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105 hover:shadow-3xl border-2 border-white/20">
              Gabung Komunitas Gratis
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Community;
