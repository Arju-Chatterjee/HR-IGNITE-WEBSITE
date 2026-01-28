import { type FormEvent, useEffect, useState } from "react";
import { toast, type ToastContent } from 'react-toastify';
import { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";
import SubmitButton from './SubmitButton';
import {
  Zap,
  Home,
  TrendingUp,
  DollarSign,
  Calendar,
  Award,
  Sun,
  Battery,
  Shield,
  CheckCircle,
  X
} from 'lucide-react';

const SystemCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [selectedYears, setSelectedYears] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const showSuccessToast = useCallback(() => {
    const message: ToastContent = (
      <div className="flex items-center gap-3 p-4">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
          ✅
        </div>
        <div>
          <h4 className="font-semibold text-lg text-gray-900 mb-1">
            Booking Confirmed!
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Your <strong>{selectedSystem}</strong> solar system request has been received.
            Our expert will contact you within <strong>30 minutes</strong>.
          </p>
        </div>
      </div>
    );

    toast.success(message, {
      position: "top-right",
      autoClose: 6000,
      style: { maxWidth: "420px" },
      toastId: "booking-success",
    });
  }, [selectedSystem]);

  const systems = [
    { size: "1 kW", savings: "Up to ₹1,000", generation: "Approx. 4–6 units/day", roof: "~64 sq.ft", subsidy: "₹33,000", popular: false },
    { size: "2 kW", savings: "Up to ₹2,000", generation: "Approx. 8–10 units/day", roof: "~128 sq.ft", subsidy: "₹66,000", popular: false },
    { size: "3 kW", savings: "Up to ₹3,000", generation: "Approx. 12–14 units/day", roof: "~192 sq.ft", subsidy: "₹85,800", popular: true },
    { size: "4 kW", savings: "Up to ₹4,000", generation: "Approx. 16–18 units/day", roof: "~256 sq.ft", subsidy: "₹85,800", popular: false },
    { size: "5 kW", savings: "Up to ₹5,000", generation: "Approx. 20–22 units/day", roof: "~320 sq.ft", subsidy: "₹85,800", popular: false },
    { size: "6 kW", savings: "Up to ₹6,000", generation: "Approx. 24–26 units/day", roof: "~352 sq.ft", subsidy: "₹85,800", popular: false },
    { size: "7 kW", savings: "Up to ₹7,000", generation: "Approx. 28–30 units/day", roof: "~416 sq.ft", subsidy: "₹85,800", popular: false },
    { size: "8 kW", savings: "Up to ₹8,000+", generation: "Approx. 32–34 units/day", roof: "~480 sq.ft", subsidy: "₹85,800", popular: false },
    { size: "9 kW", savings: "Up to ₹9,000+", generation: "Approx. 36–38 units/day", roof: "~544 sq.ft", subsidy: "₹85,800", popular: false },
    { size: "10 kW", savings: "Up to ₹10,000+", generation: "Approx. 40–42 units/day", roof: "~608 sq.ft", subsidy: "₹85,800", popular: false },
  ];

  const openModal = (size: string) => {
    setSelectedSystem(size);
    setIsOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
    setErrors({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedSystem(null);
    resetForm();
  };

  const getSystemStats = () => {
    if (!selectedSystem) return null;
    const kw = parseInt(selectedSystem);

    const dailyUnits = kw * 4.5;
    const annualUnits = dailyUnits * 365;
    const monthlySavings = kw * 1000;
    const yearlySavings = monthlySavings * 12;
    const totalSavings = yearlySavings * selectedYears;

    let subsidy = 0;
    if (kw <= 2) subsidy = kw * 30000;
    else if (kw <= 3) subsidy = 60000 + (kw - 2) * 18000;
    else subsidy = 78000;

    const costBeforeSubsidy = kw * 62000;
    const netCost = costBeforeSubsidy - subsidy;
    const paybackYears = Math.round((netCost / yearlySavings) * 10) / 10;

    return {
      dailyUnits: Math.round(dailyUnits),
      annualUnits: Math.round(annualUnits),
      monthlySavings,
      yearlySavings,
      totalSavings,
      subsidy,
      costBeforeSubsidy,
      netCost,
      paybackYears,
      roi: Math.round((yearlySavings / netCost) * 100 * 100) / 100,
    };
  };

  const stats = getSystemStats();

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      address: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
      valid = false;
    }

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !selectedSystem) return;

    setIsSubmitting(true);

    try {
      const currentTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      });

      const templateParams = {
        user_name: formData.name,
        user_phone: formData.phone,
        user_email: formData.email,
        user_address: formData.address,
        selected_system: selectedSystem,
        request_time: currentTime,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      const bookingData = {
        requested: true,
        timestamp: new Date().getTime(),
        email: formData.email,
        phone: formData.phone,
        system: selectedSystem,
      };
      localStorage.setItem("solar_booking_requested", JSON.stringify(bookingData));
      showSuccessToast();
      closeModal();
    } catch (error: any) {
      console.error("EmailJS Error Details:", error);
      toast.error("❌ Failed to send request. Please try again or call us directly.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sun className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">
              Choose Your Solar System
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Compare Solar Power Systems
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compare system capacity, estimated savings, power generation, roof space requirements, and government subsidy benefits.
            All systems include <span className="font-semibold text-green-600">long-term warranties, free servicing & subsidy assistance</span>.
          </p>
        </motion.div>

        {/* Table - Enhanced with better design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <tr>
                  <th className="p-5 text-left font-bold text-base">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      System Size
                    </div>
                  </th>
                  <th className="p-5 text-left font-bold text-base">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Monthly Savings
                    </div>
                  </th>
                  <th className="p-5 text-left font-bold text-base">
                    <div className="flex items-center gap-2">
                      <Battery className="w-5 h-5" />
                      Daily Generation
                    </div>
                  </th>
                  <th className="p-5 text-left font-bold text-base">
                    <div className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Roof Area
                    </div>
                  </th>
                  <th className="p-5 text-left font-bold text-base">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Govt. Subsidy
                    </div>
                  </th>
                  <th className="p-5 text-left font-bold text-base">Action</th>
                </tr>
              </thead>

              <tbody>
                {systems.map((s, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`border-b last:border-none transition-all duration-200 ${s.popular
                      ? "bg-gradient-to-r from-green-50 via-emerald-50 to-green-50"
                      : "hover:bg-gray-50"
                      }`}
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">{s.size}</span>
                        {s.popular && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                            className="flex items-center gap-1 text-xs bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full font-bold shadow-lg"
                          >
                            <TrendingUp className="w-3 h-3" />
                            MOST POPULAR
                          </motion.span>
                        )}
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="font-semibold text-gray-800">{s.savings}</span>
                    </td>
                    <td className="p-5">
                      <span className="text-gray-700">{s.generation}</span>
                    </td>
                    <td className="p-5">
                      <span className="text-gray-700">{s.roof}</span>
                    </td>
                    <td className="p-5">
                      <span className="font-semibold text-green-700">{s.subsidy}</span>
                    </td>
                    <td className="p-5">
                      <motion.button
                        type="button"
                        onClick={() => openModal(s.size)}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg transition-all duration-200"
                      >
                        Book Now
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Benefits Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-50 to-green-50/50 rounded-2xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-600" />
            All Systems Include Premium Benefits
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Bi-Facial Solar Panels",
              "Net Metering Support",
              "27 Years Panel Warranty",
              "10 Years Inverter Warranty",
              "Lifetime Structure Warranty",
              "5 Years Free Servicing",
            ].map((benefit, idx) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-100 hover:border-green-300 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-medium text-gray-800 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal - Enhanced */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={closeModal}
            onWheel={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative z-50 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-t-3xl z-20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        Request {selectedSystem} Solar System
                      </h3>
                      <p className="text-green-100 text-sm">Fill details to get a callback within 30 minutes</p>
                    </div>
                  </div>
                  <motion.button
                    type="button"
                    onClick={closeModal}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                {/* System Stats Card - Enhanced */}
                {stats && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-2xl p-6 mb-6 border-2 border-green-200 relative overflow-hidden"
                  >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="text-3xl font-black text-gray-900 mb-1">{selectedSystem}</h4>
                          <p className="text-gray-600 font-medium">Solar Power System</p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold shadow-lg"
                        >
                          {stats.roi}% ROI/year
                        </motion.div>
                      </div>

                      {/* Year Selector - Enhanced */}
                      <div className="flex gap-2 mb-6">
                        <span className="text-sm font-semibold text-gray-700 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Calculate for:
                        </span>
                        {[1, 2, 3].map((y) => (
                          <motion.button
                            key={y}
                            type="button"
                            onClick={() => setSelectedYears(y)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${selectedYears === y
                              ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                              : "bg-white border-2 border-gray-200 text-gray-700 hover:border-green-300"
                              }`}
                          >
                            {y} {y === 1 ? "Year" : "Years"}
                          </motion.button>
                        ))}
                      </div>

                      {/* Stats Grid - Enhanced */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-xl p-4 border border-green-200 shadow-sm"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <DollarSign className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-xs text-gray-600 font-medium">Total Savings</span>
                          </div>
                          <div className="text-3xl font-black text-green-700">
                            ₹{stats.totalSavings.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Over {selectedYears} {selectedYears === 1 ? "year" : "years"}</div>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-xs text-gray-600 font-medium">Net Investment</span>
                          </div>
                          <div className="text-3xl font-black text-blue-700">
                            ₹{stats.netCost.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">After ₹{stats.subsidy.toLocaleString()} subsidy</div>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Battery className="w-4 h-4 text-orange-600" />
                            </div>
                            <span className="text-xs text-gray-600 font-medium">Daily Power</span>
                          </div>
                          <div className="text-3xl font-black text-orange-700">
                            {stats.dailyUnits}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Units per day</div>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-purple-600" />
                            </div>
                            <span className="text-xs text-gray-600 font-medium">Payback Period</span>
                          </div>
                          <div className="text-3xl font-black text-purple-700">
                            {stats.paybackYears}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Years to break-even</div>
                        </motion.div>
                      </div>

                      {/* Key Benefits */}
                      <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-green-200">
                        <div className="grid gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">
                              <strong className="text-gray-900">PM Surya Ghar Subsidy:</strong> ₹{stats.subsidy.toLocaleString()} government benefit
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">
                              <strong className="text-gray-900">Annual Generation:</strong> {stats.annualUnits.toLocaleString()} units of free electricity
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">
                              <strong className="text-gray-900">Better ROI:</strong> 18-22% returns, higher than FD/SIP
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Form - Enhanced */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-xl border-2 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-green-500"
                        }`}
                      placeholder="Enter your full name"
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-2 text-xs text-red-600 font-medium flex items-center gap-1"
                        >
                          <X className="w-3 h-3" />
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full rounded-xl border-2 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-green-500"
                        }`}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                    />
                    <AnimatePresence>
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-2 text-xs text-red-600 font-medium flex items-center gap-1"
                        >
                          <X className="w-3 h-3" />
                          {errors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-xl border-2 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-green-500"
                        }`}
                      placeholder="your@email.com"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-2 text-xs text-red-600 font-medium flex items-center gap-1"
                        >
                          <X className="w-3 h-3" />
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Installation Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full rounded-xl border-2 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none ${errors.address ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-green-500"
                        }`}
                      rows={3}
                      placeholder="House No, Street, Area, City, PIN Code"
                    />
                    <AnimatePresence>
                      {errors.address && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-2 text-xs text-red-600 font-medium flex items-center gap-1"
                        >
                          <X className="w-3 h-3" />
                          {errors.address}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.button
                      type="button"
                      onClick={closeModal}
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3.5 rounded-xl border-2 border-gray-300 text-gray-700 text-base font-bold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </motion.button>
                    <SubmitButton isSubmitting={isSubmitting} />
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SystemCards;
