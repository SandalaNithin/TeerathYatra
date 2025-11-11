import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [storedOtp, setStoredOtp] = useState('');
  const [expiry, setExpiry] = useState(null);
  const [attempts, setAttempts] = useState(3);
  const [timer, setTimer] = useState(0);
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const otpRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [timer]);

  const sendOTP = () => {
    if (!contact) return alert('Enter email or phone');
    const otpGen = Math.floor(100000 + Math.random() * 900000).toString();
    setStoredOtp(otpGen);
    setExpiry(Date.now() + 300000);
    setTimer(60);
    setStep(2);
    console.log('Generated OTP:', otpGen);
    alert(`OTP sent to ${contact}`);
  };

  const verifyOTP = () => {
    const entered = otp.join('');
    if (Date.now() > expiry) return alert('OTP expired');
    if (entered !== storedOtp) {
      const left = attempts - 1;
      setAttempts(left);
      if (left <= 0) return setStep(1);
      return alert(`Wrong OTP! ${left} attempts left`);
    }
    alert('OTP verified');
    setStep(3);
  };

  const setPassword = () => {
    if (newPwd.length < 8) return alert('Password must be at least 8 chars');
    if (newPwd !== confirmPwd) return alert('Passwords do not match');
    alert('Password changed successfully');
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Forgot Password
        </h2>
        <p className="text-gray-600 mb-6">
          {step === 1
            ? 'Enter your contact to receive an OTP.'
            : step === 2
            ? 'Enter the OTP sent to you.'
            : 'Set your new password.'}
        </p>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1">
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Email or phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                onClick={sendOTP}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Send OTP
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2">
              <div className="flex gap-2 justify-between mb-4">
                {otp.map((d, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    maxLength={1}
                    inputMode="numeric"
                    value={d}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (/\\d/.test(v) || v === '') {
                        const n = [...otp];
                        n[i] = v;
                        setOtp(n);
                      }
                    }}
                    className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Attempts: {attempts}</span>
                {timer > 0 ? (
                  <span>Resend in {timer}s</span>
                ) : (
                  <button
                    onClick={sendOTP}
                    className="text-indigo-600 font-medium"
                  >
                    Resend
                  </button>
                )}
              </div>
              <button
                onClick={verifyOTP}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Verify OTP
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3">
              <input
                type="password"
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
                placeholder="New password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                placeholder="Confirm password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                onClick={setPassword}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Set Password
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;