import { type FormEvent, useState } from "react";
import { toast, type ToastContent } from 'react-toastify';
import { useCallback } from 'react';
import emailjs from "@emailjs/browser";
import SubmitButton from './SubmitButton';

const SystemComparison = () => {
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
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // REMOVED: || isCallbackBlocked from validation
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Compare Solar Power Systems
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Compare system capacity, estimated savings, power generation, roof space requirements, and government subsidy benefits.
            All systems include long-term warranties, free servicing & subsidy assistance.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4 text-left">System Size</th>
                <th className="p-4 text-left">Estimated Savings</th>
                <th className="p-4 text-left">Power Generation</th>
                <th className="p-4 text-left">Approx. Roof Area</th>
                <th className="p-4 text-left">Subsidy</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {systems.map((s, i) => (
                <tr
                  key={i}
                  className={`border-b last:border-none ${s.popular ? "bg-green-50" : "hover:bg-gray-50"
                    }`}
                >
                  <td className="p-4 font-semibold">
                    {s.size}
                    {s.popular && (
                      <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                        MOST POPULAR
                      </span>
                    )}
                  </td>
                  <td className="p-4">{s.savings}</td>
                  <td className="p-4">{s.generation}</td>
                  <td className="p-4">{s.roof}</td>
                  <td className="p-4">{s.subsidy}</td>
                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => openModal(s.size)}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Common Benefits */}
        <div className="mt-10 text-center text-gray-700">
          <p className="font-semibold mb-2">All systems include:</p>
          <p className="text-sm">
            Bi-Facial Solar Panels • Net Metering • 27 Years Panel Warranty •
            10 Years Inverter Warranty • Lifetime Structure Warranty •
            5 Years Free Servicing
          </p>
        </div>
      </div>

      {/* Modal with System Details + Form */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Request for {selectedSystem} Solar System
              </h3>

              {/* System Details Card */}
              {stats && (
                <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-xl p-6 mb-6 border border-green-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-green-800">
                        {selectedSystem}
                      </h4>
                      <p className="text-sm text-gray-600">Power Capacity</p>
                    </div>
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                      {stats.roi}% ROI/year
                    </span>
                  </div>

                  {/* Year selector */}
                  <div className="flex gap-2 mb-6">
                    {[1, 2, 3].map((y) => (
                      <button
                        key={y}
                        type="button"
                        onClick={() => setSelectedYears(y)}
                        className={`px-3 py-1 text-sm font-semibold rounded-lg transition-all ${selectedYears === y
                          ? "bg-green-600 text-white shadow-md"
                          : "bg-white border border-gray-300 hover:bg-gray-50"
                          }`}
                      >
                        {y} Year
                      </button>
                    ))}
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-700">
                        ₹{stats.totalSavings.toLocaleString()}
                      </div>
                      <div className="text-gray-600">Total Savings ({selectedYears}yr)</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-700">
                        ₹{stats.netCost.toLocaleString()}
                      </div>
                      <div className="text-gray-600">Net Cost (After Subsidy)</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="text-xl font-bold text-orange-700">
                        {stats.dailyUnits} units/day
                      </div>
                      <div className="text-gray-600">Daily Generation</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="text-xl font-bold text-purple-700">
                        {stats.paybackYears} years
                      </div>
                      <div className="text-gray-600">Payback Period</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-green-200 text-xs text-gray-700">
                    <p>• <strong>Govt. Subsidy:</strong> ₹{stats.subsidy.toLocaleString()} (PM Surya Ghar)</p>
                    <p>• <strong>Free Electricity:</strong> {stats.annualUnits.toLocaleString()} units/year</p>
                    <p>• <strong>ROI:</strong> Better than FD/SIP (18–22% annually)</p>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="10-digit Indian mobile number"
                    maxLength={10}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.address ? "border-red-500" : "border-gray-300"
                      }`}
                    rows={3}
                    placeholder="House No, Street, Area, City, PIN"
                  />
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-500">{errors.address}</p>
                  )}
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  {/* SIMPLIFIED - Countdown handled entirely by SubmitButton */}
                  <SubmitButton isSubmitting={isSubmitting} />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SystemComparison;
