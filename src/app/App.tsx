import { useState } from "react";
import {
  Search, MapPin, ChevronRight, Star, Users, Calendar, Trophy,
  Zap, Shield, MessageCircle, Bell, Settings, LogOut, Menu, X,
  Filter, Clock, ArrowRight, Play, CheckCircle, TrendingUp,
  Heart, Share2, Eye, Plus, ChevronDown, Target, Award,
  Volleyball, Dumbbell, Bike, Waves, Instagram, Twitter, Youtube,
  Facebook, Phone, Mail, Globe, UserCheck, Swords
} from "lucide-react";

type Page = "home" | "players" | "venues" | "communities" | "events" | "requests" | "dashboard" | "profile" | "login" | "signup";

const SPORTS = [
  { name: "Badminton", icon: "🏸", count: 2847 },
  { name: "Cricket", icon: "🏏", count: 4231 },
  { name: "Football", icon: "⚽", count: 5102 },
  { name: "Tennis", icon: "🎾", count: 1934 },
  { name: "Pickleball", icon: "🏓", count: 893 },
  { name: "Table Tennis", icon: "🏓", count: 1247 },
  { name: "Basketball", icon: "🏀", count: 2103 },
  { name: "Swimming", icon: "🏊", count: 743 },
];

const PLAYERS = [
  { id: 1, name: "Arjun Mehta", sport: "Badminton", level: "Advanced", distance: "1.2 km", rating: 4.8, matches: 142, avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&auto=format", available: true, city: "Mumbai" },
  { id: 2, name: "Priya Sharma", sport: "Tennis", level: "Intermediate", distance: "2.4 km", rating: 4.6, matches: 89, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format", available: true, city: "Mumbai" },
  { id: 3, name: "Rahul Patel", sport: "Cricket", level: "Beginner", distance: "0.8 km", rating: 4.3, matches: 34, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format", available: false, city: "Mumbai" },
  { id: 4, name: "Sneha Kapoor", sport: "Football", level: "Advanced", distance: "3.1 km", rating: 4.9, matches: 201, avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&auto=format", available: true, city: "Mumbai" },
  { id: 5, name: "Karan Joshi", sport: "Badminton", level: "Intermediate", distance: "1.7 km", rating: 4.5, matches: 67, avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&auto=format", available: true, city: "Mumbai" },
  { id: 6, name: "Ananya Singh", sport: "Table Tennis", level: "Advanced", distance: "2.9 km", rating: 4.7, matches: 156, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format", available: false, city: "Mumbai" },
];

const VENUES = [
  { id: 1, name: "Arena Sports Complex", sports: ["Badminton", "Tennis", "Squash"], rating: 4.8, reviews: 234, price: "₹200/hr", timing: "6AM – 10PM", image: "/images/venues/arena-sports.jpg", distance: "1.4 km", courts: 8 },
  { id: 2, name: "Green Field Football Ground", sports: ["Football", "Cricket"], rating: 4.6, reviews: 187, price: "₹500/hr", timing: "5AM – 9PM", image: "/images/venues/green-field.jpg", distance: "2.1 km", courts: 2 },
  { id: 3, name: "Champions Basketball Court", sports: ["Basketball"], rating: 4.5, reviews: 98, price: "₹300/hr", timing: "6AM – 11PM", image: "/images/venues/basketball-court.jpg", distance: "0.9 km", courts: 4 },
  { id: 4, name: "Aqua Splash Swimming Pool", sports: ["Swimming"], rating: 4.9, reviews: 312, price: "₹150/session", timing: "5AM – 8PM", image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&h=400&fit=crop&auto=format", distance: "3.4 km", courts: 6 },
  { id: 5, name: "Pro Racket Club", sports: ["Badminton", "Table Tennis", "Squash"], rating: 4.7, reviews: 156, price: "₹250/hr", timing: "6AM – 10PM", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format", distance: "1.8 km", courts: 12 },
  { id: 6, name: "City Cricket Academy", sports: ["Cricket"], rating: 4.4, reviews: 73, price: "₹400/hr", timing: "7AM – 7PM", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop&auto=format", distance: "4.2 km", courts: 3 },
];

const COMMUNITIES = [
  { id: 1, name: "Mumbai Badminton Club", sport: "Badminton", members: 1243, image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=300&fit=crop&auto=format", city: "Mumbai", level: "All Levels", joined: false },
  { id: 2, name: "Weekend Warriors FC", sport: "Football", members: 892, image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&h=300&fit=crop&auto=format", city: "Mumbai", level: "Intermediate", joined: true },
  { id: 3, name: "Cricket Fanatics India", sport: "Cricket", members: 3421, image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=300&fit=crop&auto=format", city: "Pan India", level: "All Levels", joined: false },
  { id: 4, name: "Tennis Smashers", sport: "Tennis", members: 567, image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=300&fit=crop&auto=format", city: "Mumbai", level: "Advanced", joined: false },
  { id: 5, name: "Hoop Dreams Basketball", sport: "Basketball", members: 734, image: "/images/venues/basketball-court.jpg", city: "Mumbai", level: "Intermediate", joined: true },
  { id: 6, name: "Pickleball Pioneers", sport: "Pickleball", members: 289, image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=300&fit=crop&auto=format", city: "Mumbai", level: "Beginner", joined: false },
];

const EVENTS = [
  { id: 1, name: "Mumbai Badminton Open 2026", sport: "Badminton", date: "Aug 15, 2026", venue: "Arena Sports Complex", prize: "₹50,000", registrations: 128, maxSlots: 256, image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=400&fit=crop&auto=format", type: "Tournament" },
  { id: 2, name: "5-a-Side Football League", sport: "Football", date: "Aug 22, 2026", venue: "Green Field Ground", prize: "₹25,000", registrations: 48, maxSlots: 64, image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&h=400&fit=crop&auto=format", type: "League" },
  { id: 3, name: "Corporate Cricket Cup", sport: "Cricket", date: "Sep 5, 2026", venue: "City Cricket Academy", prize: "₹1,00,000", registrations: 16, maxSlots: 24, image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop&auto=format", type: "Tournament" },
  { id: 4, name: "Tennis Singles Championship", sport: "Tennis", date: "Sep 12, 2026", venue: "Pro Racket Club", prize: "₹30,000", registrations: 32, maxSlots: 64, image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=400&fit=crop&auto=format", type: "Championship" },
];

const REQUESTS = [
  { id: 1, user: "Arjun M.", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=60&h=60&fit=crop&auto=format", sport: "Badminton", needed: 1, date: "Today", time: "6:00 PM", venue: "Arena Sports Complex", level: "Intermediate+", distance: "1.2 km" },
  { id: 2, user: "Priya S.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&auto=format", sport: "Tennis", needed: 1, date: "Tomorrow", time: "7:30 AM", venue: "Pro Racket Club", level: "Beginner", distance: "2.4 km" },
  { id: 3, user: "Vikram R.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&auto=format", sport: "Cricket", needed: 5, date: "Sunday Aug 10", time: "8:00 AM", venue: "City Cricket Academy", level: "All Levels", distance: "4.1 km" },
  { id: 4, user: "Meera K.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&auto=format", sport: "Football", needed: 3, date: "Saturday Aug 9", time: "5:30 PM", venue: "Green Field Ground", level: "Intermediate", distance: "2.9 km" },
  { id: 5, user: "Dev T.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&auto=format", sport: "Badminton", needed: 2, date: "Today", time: "8:00 PM", venue: "Arena Sports Complex", level: "Advanced", distance: "1.2 km" },
];

const TESTIMONIALS = [
  { name: "Rohit Verma", sport: "Cricket", text: "Found 3 regular cricket partners in under a week. The skill matching is spot on!", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format", rating: 5 },
  { name: "Anika Desai", sport: "Badminton", text: "Love how easy it is to find courts and partners near me. Best sports app in India!", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format", rating: 5 },
  { name: "Sameer Khan", sport: "Football", text: "Joined a weekend football community and now we play every Saturday. Amazing!", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format", rating: 5 },
];

// ─── Utility ─────────────────────────────────────────────────────────────────

function LevelBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    Beginner: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    Intermediate: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    Advanced: "bg-rose-500/15 text-rose-400 border-rose-500/20",
    "All Levels": "bg-sky-500/15 text-sky-400 border-sky-500/20",
    "Intermediate+": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${colors[level] ?? "bg-muted text-muted-foreground border-border"}`}>
      {level}
    </span>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-3.5 h-3.5 fill-[#c8ff00] text-[#c8ff00]" />
      <span className="text-sm font-medium text-[#c8ff00]">{rating}</span>
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const navItems: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "Find Players", page: "players" },
    { label: "Venues", page: "venues" },
    { label: "Communities", page: "communities" },
    { label: "Events", page: "events" },
    { label: "Requests", page: "requests" },
    { label: "Dashboard", page: "dashboard" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center h-16 gap-6">
        <button onClick={() => setPage("home")} className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#c8ff00] flex items-center justify-center">
            <Play className="w-4 h-4 text-[#0b0c10] fill-[#0b0c10]" />
          </div>
          <span className="font-black text-xl tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            sport<span className="text-[#c8ff00]">link</span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                page === item.page
                  ? "text-[#c8ff00] bg-[#c8ff00]/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <button
            onClick={() => setPage("login")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
          >
            Log in
          </button>
          <button
            onClick={() => setPage("signup")}
            className="text-sm font-bold px-4 py-2 bg-[#c8ff00] text-[#0b0c10] rounded-lg hover:bg-[#d4ff33] transition-colors"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Join Free
          </button>
          <button
            onClick={() => setPage("profile")}
            className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#c8ff00]/40 hover:border-[#c8ff00] transition-colors"
          >
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=40&h=40&fit=crop&auto=format" alt="Profile" className="w-full h-full object-cover" />
          </button>
        </div>

        <button className="lg:hidden ml-auto p-2 text-muted-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => { setPage(item.page); setOpen(false); }}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                page === item.page ? "text-[#c8ff00] bg-[#c8ff00]/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-3 mt-3 pt-3 border-t border-border">
            <button onClick={() => { setPage("login"); setOpen(false); }} className="flex-1 py-2 text-sm font-medium border border-border rounded-lg text-foreground">Log in</button>
            <button onClick={() => { setPage("signup"); setOpen(false); }} className="flex-1 py-2 text-sm font-bold bg-[#c8ff00] text-[#0b0c10] rounded-lg">Join Free</button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#c8ff00] flex items-center justify-center">
                <Play className="w-4 h-4 text-[#0b0c10] fill-[#0b0c10]" />
              </div>
              <span className="font-black text-xl" style={{ fontFamily: "Outfit, sans-serif" }}>
                sport<span className="text-[#c8ff00]">link</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              India's largest sports partner finding platform. Connect, play, and grow together.
            </p>
            <div className="flex gap-3 mt-5">
              {[Twitter, Instagram, Facebook, Youtube].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-[#c8ff00] hover:bg-[#c8ff00]/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[["Find Players", "players"], ["Venues", "venues"], ["Communities", "communities"], ["Events", "events"], ["Open Requests", "requests"]].map(([label, p]) => (
                <li key={p}>
                  <button onClick={() => setPage(p as Page)} className="text-sm text-muted-foreground hover:text-[#c8ff00] transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Sports</h4>
            <ul className="space-y-2.5">
              {["Badminton", "Cricket", "Football", "Tennis", "Pickleball", "Table Tennis"].map((s) => (
                <li key={s}>
                  <button className="text-sm text-muted-foreground hover:text-[#c8ff00] transition-colors">{s}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><Mail className="w-4 h-4" /> hello@sportlink.in</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="w-4 h-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><Globe className="w-4 h-4" /> sportlink.in</li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground mb-2 font-medium">Download App</p>
              <div className="flex gap-2">
                <div className="bg-muted rounded-lg px-3 py-2 text-xs text-foreground font-medium cursor-pointer hover:bg-[#c8ff00]/10 transition-colors">App Store</div>
                <div className="bg-muted rounded-lg px-3 py-2 text-xs text-foreground font-medium cursor-pointer hover:bg-[#c8ff00]/10 transition-colors">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Sportlink. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <button className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-foreground transition-colors">Terms of Service</button>
            <button className="hover:text-foreground transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Mumbai");

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=900&fit=crop&auto=format"
            alt="Sports action"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/60 via-[#0b0c10]/80 to-[#0b0c10]" />
        </div>

        {/* Accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c8ff00]/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#c8ff00]/10 border border-[#c8ff00]/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-[#c8ff00]" />
              <span className="text-xs font-semibold text-[#c8ff00] tracking-wide">50,000+ Athletes on Sportlink</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.0] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Find Your<br />
              <span className="text-[#c8ff00]">Perfect</span><br />
              Sports Partner
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Connect with players, book courts, join communities, and play the sport you love — anytime, anywhere in India.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 bg-card border border-border rounded-2xl p-2 max-w-2xl">
              <div className="flex items-center gap-2 flex-1 bg-muted rounded-xl px-4 py-3">
                <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Search sport, player, venue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-sm flex-1 outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-2 bg-muted rounded-xl px-4 py-3 sm:w-44">
                <MapPin className="w-4 h-4 text-[#c8ff00] shrink-0" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent text-sm flex-1 outline-none text-foreground appearance-none"
                >
                  {["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune"].map(c => (
                    <option key={c} value={c} className="bg-card">{c}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setPage("players")}
                className="px-6 py-3 bg-[#c8ff00] text-[#0b0c10] font-black text-sm rounded-xl hover:bg-[#d4ff33] transition-colors shrink-0"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Find Now
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {["🏸 Badminton", "⚽ Football", "🏏 Cricket", "🎾 Tennis"].map((s) => (
                <button key={s} className="text-xs px-3 py-1.5 bg-white/5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50K+", label: "Active Players", icon: Users },
              { value: "2,400+", label: "Venues Listed", icon: MapPin },
              { value: "1,800+", label: "Communities", icon: Shield },
              { value: "12K+", label: "Events Hosted", icon: Trophy },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-[#c8ff00]" />
                </div>
                <div className="text-3xl font-black text-foreground mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sports */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Browse Sports</p>
            <h2 className="text-3xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>What Do You Play?</h2>
          </div>
          <button onClick={() => setPage("players")} className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {SPORTS.map((sport) => (
            <button
              key={sport.name}
              onClick={() => setPage("players")}
              className="group flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-[#c8ff00]/40 hover:bg-[#c8ff00]/5 transition-all"
            >
              <span className="text-3xl">{sport.icon}</span>
              <span className="text-xs font-semibold text-foreground group-hover:text-[#c8ff00] transition-colors">{sport.name}</span>
              <span className="text-xs text-muted-foreground" style={{ fontFamily: "DM Mono, monospace" }}>{sport.count.toLocaleString()}</span>
            </button>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Simple Process</p>
            <h2 className="text-3xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { step: "01", icon: Search, title: "Search", desc: "Find players, venues, or communities near you using smart filters for sport, skill level, and availability." },
              { step: "02", icon: MessageCircle, title: "Connect", desc: "Send a match request or join an open game. Chat with your partner to finalize the details." },
              { step: "03", icon: Trophy, title: "Play", desc: "Show up, play your best game, and rate your experience to help the community grow." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative flex flex-col items-center text-center p-8 bg-card border border-border rounded-2xl">
                <div className="absolute -top-3 left-6 text-xs font-black text-[#c8ff00] bg-[#0b0c10] px-2 border border-[#c8ff00]/30 rounded" style={{ fontFamily: "DM Mono, monospace" }}>
                  {step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#c8ff00]/10 flex items-center justify-center mb-5 border border-[#c8ff00]/20">
                  <Icon className="w-6 h-6 text-[#c8ff00]" />
                </div>
                <h3 className="text-xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Players Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Near You</p>
            <h2 className="text-3xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Find Players</h2>
          </div>
          <button onClick={() => setPage("players")} className="flex items-center gap-1 text-sm text-[#c8ff00] hover:underline">
            See all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLAYERS.slice(0, 3).map((p) => (
            <div key={p.id} className="bg-card border border-border rounded-xl p-5 hover:border-white/15 transition-all group">
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <img src={p.avatar} alt={p.name} className="w-14 h-14 rounded-xl object-cover bg-muted" />
                  <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-card ${p.available ? "bg-emerald-400" : "bg-muted-foreground"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-sm truncate" style={{ fontFamily: "Outfit, sans-serif" }}>{p.name}</h3>
                    <StarRating rating={p.rating} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{p.sport}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <LevelBadge level={p.level} />
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {p.distance}
                    </span>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full py-2 text-xs font-bold bg-[#c8ff00]/10 text-[#c8ff00] rounded-lg hover:bg-[#c8ff00] hover:text-[#0b0c10] transition-all border border-[#c8ff00]/20">
                Connect
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Venues Preview */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Book Courts</p>
              <h2 className="text-3xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Popular Venues</h2>
            </div>
            <button onClick={() => setPage("venues")} className="flex items-center gap-1 text-sm text-[#c8ff00] hover:underline">
              See all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VENUES.slice(0, 3).map((v) => (
              <div key={v.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-white/15 transition-all group cursor-pointer">
                <div className="relative h-44 overflow-hidden bg-muted">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-[#0b0c10]/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-bold text-[#c8ff00]">{v.price}</div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-sm leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>{v.name}</h3>
                    <StarRating rating={v.rating} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {v.distance}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {v.sports.slice(0, 3).map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full">{s}</span>
                    ))}
                  </div>
                  <button className="w-full py-2 text-xs font-bold bg-[#c8ff00] text-[#0b0c10] rounded-lg hover:bg-[#d4ff33] transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Community Love</p>
          <h2 className="text-3xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Players Love Sportlink</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c8ff00] text-[#c8ff00]" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-muted" />
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.sport} Player</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App CTA */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-[#c8ff00] rounded-3xl p-10 md:p-16 text-[#0b0c10]">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
              <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=700&h=500&fit=crop&auto=format" alt="Play sports" className="w-full h-full object-cover opacity-30 mix-blend-multiply" />
            </div>
            <div className="relative max-w-lg">
              <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">Available Now</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>
                Get the App.<br />Start Playing.
              </h2>
              <p className="text-base opacity-70 mb-8 leading-relaxed">
                Download Sportlink and find your next game in minutes. Available on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-[#0b0c10] text-[#c8ff00] font-bold text-sm rounded-xl hover:bg-[#1c1f2a] transition-colors">
                  App Store
                </button>
                <button className="px-6 py-3 bg-[#0b0c10] text-[#c8ff00] font-bold text-sm rounded-xl hover:bg-[#1c1f2a] transition-colors">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Find Players Page ────────────────────────────────────────────────────────

function PlayersPage() {
  const [sportFilter, setSportFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PLAYERS.filter((p) => {
    const matchSport = sportFilter === "All" || p.sport === sportFilter;
    const matchLevel = levelFilter === "All" || p.level === levelFilter;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.sport.toLowerCase().includes(search.toLowerCase());
    return matchSport && matchLevel && matchSearch;
  });

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-6">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Mumbai</p>
        <h1 className="text-4xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Find Players</h1>
        <p className="text-muted-foreground mt-2">Connect with {PLAYERS.length}+ players near you</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 shrink-0">
          <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
            <h3 className="font-bold text-sm mb-5 flex items-center gap-2"><Filter className="w-4 h-4 text-[#c8ff00]" /> Filters</h3>

            <div className="mb-5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 block">Search</label>
              <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Name or sport..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent text-sm flex-1 outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 block">Sport</label>
              <div className="flex flex-col gap-1">
                {["All", ...SPORTS.slice(0, 6).map((s) => s.name)].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSportFilter(s)}
                    className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      sportFilter === s ? "bg-[#c8ff00]/10 text-[#c8ff00] font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 block">Skill Level</label>
              <div className="flex flex-col gap-1">
                {["All", "Beginner", "Intermediate", "Advanced"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevelFilter(l)}
                    className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      levelFilter === l ? "bg-[#c8ff00]/10 text-[#c8ff00] font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setSportFilter("All"); setLevelFilter("All"); setSearch(""); }}
              className="w-full py-2 text-xs font-semibold text-muted-foreground border border-border rounded-lg hover:text-foreground hover:border-white/20 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </aside>

        {/* Player Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-muted-foreground">{filtered.length} players found</p>
            <select className="bg-card border border-border text-sm text-foreground rounded-lg px-3 py-2 outline-none">
              <option>Nearest First</option>
              <option>Highest Rated</option>
              <option>Most Active</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No players found. Try different filters.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-xl p-5 hover:border-white/15 transition-all group">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative shrink-0">
                      <img src={p.avatar} alt={p.name} className="w-14 h-14 rounded-xl object-cover bg-muted" />
                      <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-card ${p.available ? "bg-emerald-400" : "bg-muted-foreground"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>{p.name}</h3>
                        <StarRating rating={p.rating} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.sport}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {p.distance}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <LevelBadge level={p.level} />
                    <span className="text-xs text-muted-foreground" style={{ fontFamily: "DM Mono, monospace" }}>{p.matches} matches</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2 text-xs font-bold bg-[#c8ff00]/10 text-[#c8ff00] rounded-lg hover:bg-[#c8ff00] hover:text-[#0b0c10] transition-all border border-[#c8ff00]/20">
                      Connect
                    </button>
                    <button className="py-2 px-3 bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Venues Page ──────────────────────────────────────────────────────────────

function VenuesPage() {
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("All");

  const filtered = VENUES.filter((v) => {
    const matchSearch = !search || v.name.toLowerCase().includes(search.toLowerCase());
    const matchSport = sportFilter === "All" || v.sports.includes(sportFilter);
    return matchSearch && matchSport;
  });

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-6">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Book Courts</p>
        <h1 className="text-4xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Find Venues</h1>
        <p className="text-muted-foreground mt-2">{VENUES.length} venues available near Mumbai</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 flex-1">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search venues..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm flex-1 outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["All", "Badminton", "Football", "Cricket", "Tennis"].map((s) => (
            <button
              key={s}
              onClick={() => setSportFilter(s)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl border transition-colors ${
                sportFilter === s
                  ? "bg-[#c8ff00] text-[#0b0c10] border-[#c8ff00]"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-white/20"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((v) => (
          <div key={v.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-white/15 transition-all group cursor-pointer">
            <div className="relative h-48 bg-muted overflow-hidden">
              <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/60 to-transparent" />
              <div className="absolute top-3 left-3 bg-[#0b0c10]/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-bold text-[#c8ff00]">{v.price}</div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-1 bg-[#0b0c10]/80 backdrop-blur-sm rounded-lg px-2 py-1">
                  <Star className="w-3 h-3 fill-[#c8ff00] text-[#c8ff00]" />
                  <span className="text-xs font-bold text-[#c8ff00]">{v.rating}</span>
                  <span className="text-xs text-muted-foreground">({v.reviews})</span>
                </div>
                <div className="bg-[#0b0c10]/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {v.distance}
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{v.name}</h3>
              <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {v.timing} · {v.courts} courts
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {v.sports.map((s) => (
                  <span key={s} className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full">{s}</span>
                ))}
              </div>
              <button className="w-full py-2.5 text-sm font-bold bg-[#c8ff00] text-[#0b0c10] rounded-xl hover:bg-[#d4ff33] transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Communities Page ─────────────────────────────────────────────────────────

function CommunitiesPage() {
  const [communities, setCommunities] = useState(COMMUNITIES);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? communities : communities.filter((c) => c.sport === filter);

  const toggleJoin = (id: number) => {
    setCommunities(communities.map((c) => c.id === id ? { ...c, joined: !c.joined, members: c.joined ? c.members - 1 : c.members + 1 } : c));
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-6">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Find Your Tribe</p>
        <h1 className="text-4xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Communities</h1>
        <p className="text-muted-foreground mt-2">Join sport-specific groups and play with like-minded people</p>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {["All", "Badminton", "Football", "Cricket", "Tennis", "Basketball", "Pickleball"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 text-sm font-semibold rounded-xl border transition-colors ${
              filter === s
                ? "bg-[#c8ff00] text-[#0b0c10] border-[#c8ff00]"
                : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-white/20"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c) => (
          <div key={c.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-white/15 transition-all">
            <div className="relative h-36 bg-muted overflow-hidden">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13151c] to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs px-2 py-1 bg-[#c8ff00]/20 border border-[#c8ff00]/30 text-[#c8ff00] rounded-full font-semibold">{c.sport}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{c.name}</h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Users className="w-3 h-3" /> {c.members.toLocaleString()} members
                </span>
                <LevelBadge level={c.level} />
              </div>
              <button
                onClick={() => toggleJoin(c.id)}
                className={`w-full py-2.5 text-sm font-bold rounded-xl transition-all ${
                  c.joined
                    ? "bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/20 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20"
                    : "bg-[#c8ff00] text-[#0b0c10] hover:bg-[#d4ff33]"
                }`}
              >
                {c.joined ? "Joined ✓" : "Join Community"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Events Page ──────────────────────────────────────────────────────────────

function EventsPage() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-6">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Compete & Win</p>
        <h1 className="text-4xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Upcoming Events</h1>
        <p className="text-muted-foreground mt-2">Tournaments, leagues, and championships near you</p>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {["All Events", "Tournaments", "Leagues", "Championships", "Casual"].map((t) => (
          <button key={t} className="px-4 py-2 text-sm font-semibold rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors first:bg-[#c8ff00] first:text-[#0b0c10] first:border-[#c8ff00]">
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EVENTS.map((e) => {
          const pct = Math.round((e.registrations / e.maxSlots) * 100);
          return (
            <div key={e.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-white/15 transition-all group">
              <div className="relative h-52 bg-muted overflow-hidden">
                <img src={e.image} alt={e.name} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13151c] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 bg-[#c8ff00] text-[#0b0c10] rounded-full font-bold">{e.type}</span>
                  <span className="text-xs px-2.5 py-1 bg-[#0b0c10]/80 backdrop-blur-sm text-foreground rounded-full">{e.sport}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#0b0c10]/80 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                  <p className="text-xs text-muted-foreground">Prize Pool</p>
                  <p className="text-lg font-black text-[#c8ff00]" style={{ fontFamily: "Outfit, sans-serif" }}>{e.prize}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{e.name}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#c8ff00]" /> {e.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#c8ff00]" /> {e.venue}</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">{e.registrations} / {e.maxSlots} spots filled</span>
                    <span className="text-[#c8ff00] font-semibold">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[#c8ff00] rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <button className="w-full py-2.5 text-sm font-bold bg-[#c8ff00] text-[#0b0c10] rounded-xl hover:bg-[#d4ff33] transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Open Requests Page ───────────────────────────────────────────────────────

function RequestsPage() {
  const [sport, setSport] = useState("All");

  const filtered = sport === "All" ? REQUESTS : REQUESTS.filter((r) => r.sport === sport);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00] mb-2">Join a Game</p>
          <h1 className="text-4xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Open Requests</h1>
          <p className="text-muted-foreground mt-2">Players looking for partners right now</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-5 py-3 bg-[#c8ff00] text-[#0b0c10] font-bold text-sm rounded-xl hover:bg-[#d4ff33] transition-colors">
          <Plus className="w-4 h-4" /> Post Request
        </button>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {["All", "Badminton", "Football", "Cricket", "Tennis"].map((s) => (
          <button
            key={s}
            onClick={() => setSport(s)}
            className={`px-4 py-2 text-sm font-semibold rounded-xl border transition-colors ${
              sport === s
                ? "bg-[#c8ff00] text-[#0b0c10] border-[#c8ff00]"
                : "bg-card border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((r) => (
          <div key={r.id} className="bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-white/15 transition-all">
            <div className="flex items-start gap-4">
              <img src={r.avatar} alt={r.user} className="w-12 h-12 rounded-xl object-cover bg-muted shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Need {r.needed} {r.sport} Partner{r.needed > 1 ? "s" : ""}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Posted by {r.user}</p>
                  </div>
                  <LevelBadge level={r.level} />
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#c8ff00]" /> {r.date}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#c8ff00]" /> {r.time}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#c8ff00]" /> {r.venue}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Target className="w-4 h-4" /> {r.distance} away
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2 text-sm font-bold bg-[#c8ff00] text-[#0b0c10] rounded-xl hover:bg-[#d4ff33] transition-colors">
                    Join Match
                  </button>
                  <button className="px-4 py-2 text-sm font-medium bg-muted text-muted-foreground rounded-xl hover:text-foreground transition-colors flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" /> Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function DashboardPage({ setPage }: { setPage: (p: Page) => void }) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "matches", label: "My Matches" },
    { id: "communities", label: "Communities" },
    { id: "requests", label: "Requests" },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-60 shrink-0">
          <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=60&h=60&fit=crop&auto=format" alt="User" className="w-12 h-12 rounded-xl object-cover" />
              <div>
                <p className="font-bold text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>Arjun Mehta</p>
                <p className="text-xs text-muted-foreground">Advanced · Mumbai</p>
              </div>
            </div>

            {[
              { id: "overview", label: "Overview", icon: TrendingUp },
              { id: "matches", label: "My Matches", icon: Swords },
              { id: "communities", label: "Communities", icon: Users },
              { id: "requests", label: "Requests", icon: Bell },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-colors ${
                  activeTab === id ? "bg-[#c8ff00]/10 text-[#c8ff00]" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" /> {label}
              </button>
            ))}

            <div className="mt-4 pt-4 border-t border-border">
              <button onClick={() => setPage("profile")} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors mb-1">
                <Settings className="w-4 h-4" /> Settings
              </button>
              <button onClick={() => setPage("login")} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive transition-colors">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Dashboard</h1>
              <p className="text-muted-foreground text-sm mt-1">Welcome back, Arjun!</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#c8ff00] text-[#0b0c10] font-bold text-sm rounded-xl hover:bg-[#d4ff33] transition-colors">
              <Plus className="w-4 h-4" /> Post Request
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Matches Played", value: "142", delta: "+12 this month", icon: Swords },
              { label: "Win Rate", value: "68%", delta: "+3% this month", icon: Trophy },
              { label: "Communities", value: "5", delta: "2 active", icon: Users },
              { label: "Rating", value: "4.8", delta: "Top 5%", icon: Star },
            ].map(({ label, value, delta, icon: Icon }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium">{label}</span>
                  <Icon className="w-4 h-4 text-[#c8ff00]" />
                </div>
                <p className="text-2xl font-black mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{value}</p>
                <p className="text-xs text-emerald-400">{delta}</p>
              </div>
            ))}
          </div>

          {/* Upcoming Matches */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h2 className="font-bold mb-5 flex items-center gap-2" style={{ fontFamily: "Outfit, sans-serif" }}>
              <Calendar className="w-4 h-4 text-[#c8ff00]" /> Upcoming Matches
            </h2>
            <div className="space-y-4">
              {[
                { opponent: "Priya Sharma", sport: "Badminton", date: "Today", time: "6:00 PM", venue: "Arena Sports Complex", confirmed: true },
                { opponent: "Dev Thakur", sport: "Badminton", date: "Tomorrow", time: "8:00 AM", venue: "Pro Racket Club", confirmed: false },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className={`w-2 h-10 rounded-full ${m.confirmed ? "bg-emerald-400" : "bg-amber-400"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>vs {m.opponent}</p>
                    <p className="text-xs text-muted-foreground">{m.sport} · {m.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{m.date}</p>
                    <p className="text-xs text-muted-foreground">{m.time}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${m.confirmed ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`}>
                    {m.confirmed ? "Confirmed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-bold mb-5 flex items-center gap-2" style={{ fontFamily: "Outfit, sans-serif" }}>
              <Bell className="w-4 h-4 text-[#c8ff00]" /> Recent Activity
            </h2>
            <div className="space-y-3">
              {[
                { text: "Karan Joshi sent you a match request for Badminton", time: "2 min ago", unread: true },
                { text: "Mumbai Badminton Club posted a new tournament", time: "1 hr ago", unread: true },
                { text: "Priya Sharma confirmed your match for Today 6 PM", time: "3 hrs ago", unread: false },
                { text: "You earned the 'Match Winner' badge!", time: "Yesterday", unread: false },
              ].map((n, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${n.unread ? "bg-[#c8ff00]/5 border border-[#c8ff00]/10" : "hover:bg-white/3"}`}>
                  {n.unread && <div className="w-2 h-2 rounded-full bg-[#c8ff00] shrink-0 mt-1.5" />}
                  {!n.unread && <div className="w-2 h-2 shrink-0" />}
                  <div>
                    <p className="text-sm">{n.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Profile Page ─────────────────────────────────────────────────────────────

function ProfilePage() {
  return (
    <div className="pt-16 pb-20">
      {/* Cover */}
      <div className="relative h-56 bg-muted overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1400&h=400&fit=crop&auto=format"
          alt="Cover"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-16 mb-8 relative z-10">
          <div className="flex items-end gap-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&h=120&fit=crop&auto=format"
                alt="Arjun Mehta"
                className="w-24 h-24 rounded-2xl object-cover border-4 border-[#0b0c10] bg-muted"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#0b0c10]" />
            </div>
            <div className="pb-1">
              <h1 className="text-2xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Arjun Mehta</h1>
              <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5" /> Mumbai, India
              </p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs px-2 py-1 bg-[#c8ff00]/10 text-[#c8ff00] rounded-full border border-[#c8ff00]/20 font-semibold">Badminton</span>
                <span className="text-xs px-2 py-1 bg-[#c8ff00]/10 text-[#c8ff00] rounded-full border border-[#c8ff00]/20 font-semibold">Advanced</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pb-1">
            <button className="px-4 py-2 bg-muted border border-border rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="px-5 py-2 bg-[#c8ff00] text-[#0b0c10] rounded-xl text-sm font-bold hover:bg-[#d4ff33] transition-colors flex items-center gap-2">
              <UserCheck className="w-4 h-4" /> Connect
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="lg:col-span-1 space-y-5">
            {/* Stats */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Player Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Matches", value: "142" },
                  { label: "Win Rate", value: "68%" },
                  { label: "Rating", value: "4.8" },
                  { label: "Communities", value: "5" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-3 bg-muted rounded-xl">
                    <p className="text-xl font-black text-[#c8ff00]" style={{ fontFamily: "Outfit, sans-serif" }}>{value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Achievements</h3>
              <div className="space-y-3">
                {[
                  { title: "Century Striker", desc: "100+ matches played", icon: "🏆" },
                  { title: "Community Builder", desc: "Joined 5 communities", icon: "🤝" },
                  { title: "Top Rated", desc: "4.8+ average rating", icon: "⭐" },
                ].map((a) => (
                  <div key={a.title} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                    <span className="text-xl">{a.icon}</span>
                    <div>
                      <p className="text-sm font-semibold">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate badminton player with 5+ years of competitive experience. Love playing doubles and always looking for strong partners to improve together. Available most evenings and weekend mornings.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Recent Matches</h3>
              <div className="space-y-3">
                {[
                  { opponent: "Priya Sharma", result: "Won", sport: "Badminton", date: "Jul 8, 2026" },
                  { opponent: "Karan Joshi", result: "Lost", sport: "Badminton", date: "Jul 5, 2026" },
                  { opponent: "Dev Thakur", result: "Won", sport: "Badminton", date: "Jul 2, 2026" },
                ].map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-xl">
                    <div>
                      <p className="text-sm font-semibold">vs {m.opponent}</p>
                      <p className="text-xs text-muted-foreground">{m.sport} · {m.date}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.result === "Won" ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"}`}>
                      {m.result}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Login Page ───────────────────────────────────────────────────────────────

function LoginPage({ setPage }: { setPage: (p: Page) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#c8ff00] flex items-center justify-center">
              <Play className="w-5 h-5 text-[#0b0c10] fill-[#0b0c10]" />
            </div>
            <span className="font-black text-2xl" style={{ fontFamily: "Outfit, sans-serif" }}>
              sport<span className="text-[#c8ff00]">link</span>
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Welcome back</h1>
          <p className="text-muted-foreground mt-2 text-sm">Log in to find your next game</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-7">
          <div className="space-y-4 mb-5">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="arjun@example.com"
                className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-[#c8ff00]/40 text-foreground placeholder:text-muted-foreground transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-[#c8ff00]/40 text-foreground placeholder:text-muted-foreground transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[#c8ff00]" />
              <span className="text-xs text-muted-foreground">Remember me</span>
            </label>
            <button className="text-xs text-[#c8ff00] hover:underline">Forgot password?</button>
          </div>

          <button
            onClick={() => setPage("dashboard")}
            className="w-full py-3 bg-[#c8ff00] text-[#0b0c10] font-black text-sm rounded-xl hover:bg-[#d4ff33] transition-colors mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Log In
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative text-center"><span className="bg-card px-3 text-xs text-muted-foreground">or continue with</span></div>
          </div>

          <button className="w-full py-3 bg-muted border border-border rounded-xl text-sm font-semibold hover:border-white/20 transition-colors flex items-center justify-center gap-2">
            <span className="text-lg">G</span> Continue with Google
          </button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-5">
          New to Sportlink?{" "}
          <button onClick={() => setPage("signup")} className="text-[#c8ff00] font-semibold hover:underline">
            Create account
          </button>
        </p>
      </div>
    </div>
  );
}

// ─── Signup Page ──────────────────────────────────────────────────────────────

function SignupPage({ setPage }: { setPage: (p: Page) => void }) {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const toggleSport = (s: string) => {
    setSelectedSports((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 pt-24">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#c8ff00] flex items-center justify-center">
              <Play className="w-5 h-5 text-[#0b0c10] fill-[#0b0c10]" />
            </div>
            <span className="font-black text-2xl" style={{ fontFamily: "Outfit, sans-serif" }}>
              sport<span className="text-[#c8ff00]">link</span>
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>Create account</h1>
          <p className="text-muted-foreground mt-2 text-sm">Join 50,000+ athletes on Sportlink</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-7">
          <div className="space-y-4 mb-5">
            {[
              { label: "Full Name", type: "text", placeholder: "Arjun Mehta" },
              { label: "Email", type: "email", placeholder: "arjun@example.com" },
              { label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
            ].map(({ label, type, placeholder }) => (
              <div key={label}>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-[#c8ff00]/40 text-foreground placeholder:text-muted-foreground transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">City</label>
              <select className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-[#c8ff00]/40 text-foreground transition-colors appearance-none">
                {["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune"].map((c) => (
                  <option key={c} value={c} className="bg-card">{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Favorite Sports</label>
              <div className="flex flex-wrap gap-2">
                {SPORTS.slice(0, 6).map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => toggleSport(s.name)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
                      selectedSports.includes(s.name)
                        ? "bg-[#c8ff00] text-[#0b0c10] border-[#c8ff00]"
                        : "border-border text-muted-foreground hover:border-white/20 hover:text-foreground"
                    }`}
                  >
                    {s.icon} {s.name}
                  </button>
                ))}
              </div>
            </div>

            {[
              { label: "Password", placeholder: "Min. 8 characters" },
              { label: "Confirm Password", placeholder: "Repeat password" },
            ].map(({ label, placeholder }) => (
              <div key={label}>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">{label}</label>
                <input
                  type="password"
                  placeholder={placeholder}
                  className="w-full bg-muted rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-[#c8ff00]/40 text-foreground placeholder:text-muted-foreground transition-colors"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => setPage("dashboard")}
            className="w-full py-3 bg-[#c8ff00] text-[#0b0c10] font-black text-sm rounded-xl hover:bg-[#d4ff33] transition-colors mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Create Account
          </button>

          <p className="text-center text-xs text-muted-foreground">
            By signing up, you agree to our{" "}
            <button className="text-[#c8ff00] hover:underline">Terms</button> and{" "}
            <button className="text-[#c8ff00] hover:underline">Privacy Policy</button>
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-5">
          Already have an account?{" "}
          <button onClick={() => setPage("login")} className="text-[#c8ff00] font-semibold hover:underline">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

// ─── App Shell ────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const showFooter = !["login", "signup"].includes(page);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar page={page} setPage={setPage} />

      <main>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "players" && <PlayersPage />}
        {page === "venues" && <VenuesPage />}
        {page === "communities" && <CommunitiesPage />}
        {page === "events" && <EventsPage />}
        {page === "requests" && <RequestsPage />}
        {page === "dashboard" && <DashboardPage setPage={setPage} />}
        {page === "profile" && <ProfilePage />}
        {page === "login" && <LoginPage setPage={setPage} />}
        {page === "signup" && <SignupPage setPage={setPage} />}
      </main>

      {showFooter && <Footer setPage={setPage} />}
    </div>
  );
}
