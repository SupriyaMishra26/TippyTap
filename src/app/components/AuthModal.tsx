import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Mail, Lock, User as UserIcon } from 'lucide-react';
import { useApp } from '../contexts/AppContexts';

export default function AuthModal() {
  const { authOpen, setAuthOpen, authMode, setAuthMode, login, signup } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
      if (authMode === 'login') await login(email, password);
      else await signup(name, email, password);
      setName(''); setEmail(''); setPassword('');
    } catch (e: any) {
      setErr(e.message || 'Something went wrong');
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {authOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setAuthOpen(false)}
        >
          <motion.div
            initial={{ y: 30, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setAuthOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#4b3140] transition hover:bg-[#fff0f4]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8">
              <h2
                className="text-3xl italic font-normal text-[#cb1f52]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="mt-1 text-sm text-[#6d4b58]">
                {authMode === 'login' ? 'Sign in to continue shopping' : 'Join the Tippy Tap family'}
              </p>

              <form onSubmit={submit} className="mt-6 space-y-4">
                {authMode === 'signup' && (
                  <label className="block">
                    <span className="text-xs font-medium text-[#4b3140]">Full Name</span>
                    <div className="mt-1 flex items-center gap-2 rounded-full border border-[#f1d4dc] bg-white px-4 py-3 focus-within:border-[#cb1f52]">
                      <UserIcon className="h-4 w-4 text-[#cb1f52]" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent text-sm outline-none"
                        placeholder="Your name"
                      />
                    </div>
                  </label>
                )}

                <label className="block">
                  <span className="text-xs font-medium text-[#4b3140]">Email</span>
                  <div className="mt-1 flex items-center gap-2 rounded-full border border-[#f1d4dc] bg-white px-4 py-3 focus-within:border-[#cb1f52]">
                    <Mail className="h-4 w-4 text-[#cb1f52]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-sm outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-[#4b3140]">Password</span>
                  <div className="mt-1 flex items-center gap-2 rounded-full border border-[#f1d4dc] bg-white px-4 py-3 focus-within:border-[#cb1f52]">
                    <Lock className="h-4 w-4 text-[#cb1f52]" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent text-sm outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </label>

                {err && <p className="text-sm text-red-600">{err}</p>}

                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(203,31,82,0.24)] transition hover:-translate-y-0.5 hover:bg-[#b71848] disabled:opacity-60"
                >
                  {busy ? 'Please wait…' : authMode === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-[#6d4b58]">
                {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  className="font-semibold text-[#cb1f52] underline-offset-4 hover:underline"
                >
                  {authMode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
