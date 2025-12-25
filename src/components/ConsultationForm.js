import React, { useState } from 'react'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    clinicName: '',
  })

  const [submittedData, setSubmittedData] = useState(null)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [expandTerms, setExpandTerms] = useState(false)
  const [expandDesktopTerms, setExpandDesktopTerms] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      clinicName: '',
    })
  }

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:block h-screen">
        {/* Left Side - Scrollable Content */}
        <div style={{ marginRight: '33.3333%' }} className="w-2/3 overflow-y-auto h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                BOOK 1 TO 1 CONSULTATION
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>

            {/* Image Banner */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 max-h-64">
              <img 
                src="https://picasso.cosmofeed.com/media.cosmofeed.com/Learn-how-big-hospitals-scale-and-apply-the-same-system-to-your-clinic--2--2025-17-12-10-59-15.png?w=1000&q=100" 
                alt="Learn how big hospitals scale and apply the same system to your clinic"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Benefits Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-3">
                  ATTENTION: DOCTORS
                </h2>
                <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                  Are you Struggling to Generate High-Quality Leads for Your Clinic | Hospital?
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  What to expect out of this 1 to 1 Consultation?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                    <span className="text-xl mr-3 flex-shrink-0">✅</span>
                    <span className="text-sm text-gray-700 font-medium">Ideas for High-Quality Lead Generation</span>
                  </div>
                  <div className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                    <span className="text-xl mr-3 flex-shrink-0">✅</span>
                    <span className="text-sm text-gray-700 font-medium">Proven Funnel for Consistent Leads</span>
                  </div>
                  <div className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                    <span className="text-xl mr-3 flex-shrink-0">✅</span>
                    <span className="text-sm text-gray-700 font-medium">Facebook & Google Ads Mastery</span>
                  </div>
                  <div className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                    <span className="text-xl mr-3 flex-shrink-0">✅</span>
                    <span className="text-sm text-gray-700 font-medium">Audience Demographic Selection Guidance</span>
                  </div>
                  <div className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition md:col-span-2">
                    <span className="text-xl mr-3 flex-shrink-0">✅</span>
                    <span className="text-sm text-gray-700 font-medium">Highly Converting Ads</span>
                  </div>
                </div>
              </div>

              {/* What You'll Get */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">📦 What you'll get</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <p className="text-xl mb-1">1</p>
                    <p className="text-xs text-gray-600 font-semibold">Resource</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <p className="text-lg mb-1">📄</p>
                    <p className="text-xs text-gray-600 font-semibold">File</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <p className="text-lg mb-1">💾</p>
                    <p className="text-xs text-gray-600 font-semibold">2.52 MB</p>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions Section - Collapsible */}
              <div className="bg-white rounded-xl border-2 border-gray-200 shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandDesktopTerms(!expandDesktopTerms)}
                  className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <h4 className="text-lg font-bold text-gray-900">📋 Terms and Conditions</h4>
                  <span className={`text-2xl font-bold text-blue-600 transform transition-transform ${expandDesktopTerms ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                {expandDesktopTerms && (
                  <div className="px-6 pb-6 space-y-3 text-xs text-gray-700 border-t border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">1. Service Description</p>
                      <p>This 1-to-1 consultation service provides professional guidance for healthcare professionals to generate high-quality leads.</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">2. Payment & Refund</p>
                      <p>Consultation fee: ₹299. All payments are non-refundable unless otherwise specified.</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">3. Access to Materials</p>
                      <p>Materials will be sent to registered email. Lifetime access to provided resources (1 file, 2.52 MB).</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">4. Intellectual Property</p>
                      <p>All materials are proprietary. Reproduction or commercial use without permission is prohibited.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="py-6 border-t-2 border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Contact:</strong> Precision Data Solutions
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    📧 Infoupgro@gmail.com
                  </p>
                  <p className="text-xs text-gray-500">
                    Powered by Cosmofeed Technologies Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submitted Data Display */}
        {submittedData && (
          <div className="fixed bottom-4 right-4 bg-green-50 border-4 border-green-500 rounded-lg p-6 max-w-sm shadow-2xl z-50 animate-pulse">
            <h4 className="text-lg font-bold text-green-900 mb-4">
              ✅ Booking Confirmed!
            </h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold text-green-700">Name:</span> {submittedData.fullName}</p>
              <p><span className="font-semibold text-green-700">Email:</span> {submittedData.email}</p>
              <p><span className="font-semibold text-green-700">Phone:</span> {submittedData.phone}</p>
              <p><span className="font-semibold text-green-700">Clinic:</span> {submittedData.clinicName}</p>
            </div>
          </div>
        )}

        {/* Right Sidebar - Fixed Form (Desktop) */}
        <div id="consultation" className="hidden lg:block w-1/3 bg-gradient-to-br from-blue-600 to-blue-700 fixed h-screen overflow-y-auto right-0 top-0 z-40 shadow-2xl">
          <div className="p-6 h-full flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                BOOK NOW
              </h1>
              <p className="text-blue-100 text-sm">
                Get your 1-to-1 consultation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 mb-1 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Dr. John Doe"
                    className="w-full px-3 py-2 bg-blue-500 text-white placeholder-blue-200 border-0 rounded-md focus:ring-2 focus:ring-white focus:ring-offset-0 outline-none transition text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 mb-1 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 bg-blue-500 text-white placeholder-blue-200 border-0 rounded-md focus:ring-2 focus:ring-white focus:ring-offset-0 outline-none transition text-sm"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 mb-1 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-blue-500 text-white placeholder-blue-200 border-0 rounded-md focus:ring-2 focus:ring-white focus:ring-offset-0 outline-none transition text-sm"
                    required
                  />
                </div>

                {/* Clinic Name */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 mb-1 uppercase tracking-wide">
                    Clinic/Hospital Name
                  </label>
                  <input
                    type="text"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    placeholder="Your Clinic Name"
                    className="w-full px-3 py-2 bg-blue-500 text-white placeholder-blue-200 border-0 rounded-md focus:ring-2 focus:ring-white focus:ring-offset-0 outline-none transition text-sm"
                    required
                  />
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mt-8 pt-6 border-t border-blue-500 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-100">Sub Total</span>
                  <span className="text-blue-100">₹299</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-100 line-through">₹1,999</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded font-bold text-xs">85% OFF</span>
                </div>
                <div className="flex justify-between items-center bg-white bg-opacity-10 p-3 rounded-lg">
                  <span className="font-bold text-white">Total</span>
                  <span className="text-3xl font-bold text-yellow-300">₹299</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 text-sm uppercase tracking-wide"
                >
                  Book Now
                </button>

                <p className="text-center text-xs text-blue-100 leading-tight">
                  Access to this purchase will be sent to this email
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              BOOK 1 TO 1 CONSULTATION
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>

          {/* Image Banner */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://picasso.cosmofeed.com/media.cosmofeed.com/Learn-how-big-hospitals-scale-and-apply-the-same-system-to-your-clinic--2--2025-17-12-10-59-15.png?w=600&q=100" 
              alt="Learn how big hospitals scale and apply the same system to your clinic"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-3">
                ATTENTION: DOCTORS
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Are you Struggling to Generate High-Quality Leads for Your Clinic | Hospital?
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What to expect?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md">
                  <span className="text-2xl mr-3 flex-shrink-0">✅</span>
                  <span className="text-gray-700">Ideas for High-Quality Lead Generation</span>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md">
                  <span className="text-2xl mr-3 flex-shrink-0">✅</span>
                  <span className="text-gray-700">Proven Funnel for Consistent Leads</span>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md">
                  <span className="text-2xl mr-3 flex-shrink-0">✅</span>
                  <span className="text-gray-700">Facebook & Google Ads Mastery</span>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md">
                  <span className="text-2xl mr-3 flex-shrink-0">✅</span>
                  <span className="text-gray-700">Audience Demographic Selection Guidance</span>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md">
                  <span className="text-2xl mr-3 flex-shrink-0">✅</span>
                  <span className="text-gray-700">Highly Converting Ads</span>
                </div>
              </div>
            </div>

            {/* Form - Mobile */}
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-6">Get Your Consultation</h3>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-blue-500 placeholder-blue-200 text-white border-0 rounded-lg focus:ring-2 focus:ring-white outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-blue-500 placeholder-blue-200 text-white border-0 rounded-lg focus:ring-2 focus:ring-white outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-blue-500 placeholder-blue-200 text-white border-0 rounded-lg focus:ring-2 focus:ring-white outline-none"
                  required
                />
                <input
                  type="text"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleChange}
                  placeholder="Clinic/Hospital Name"
                  className="w-full px-4 py-3 bg-blue-500 placeholder-blue-200 text-white border-0 rounded-lg focus:ring-2 focus:ring-white outline-none"
                  required
                />
              </div>

              <div className="space-y-3 border-t border-blue-500 pt-4">
                <div className="flex justify-between text-sm">
                  <span>Sub Total</span>
                  <span>₹299</span>
                </div>
                <div className="flex justify-between">
                  <span className="line-through text-blue-200">₹1,999</span>
                  <span className="bg-green-500 px-2 py-1 rounded font-bold text-xs">85% OFF</span>
                </div>
                <div className="flex justify-between items-center bg-white bg-opacity-10 p-3 rounded-lg">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-bold text-yellow-300">₹299</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-3 px-4 rounded-lg transition duration-200 uppercase tracking-wide"
                >
                  Book Now
                </button>

                <p className="text-center text-xs text-blue-100">
                  Access will be sent to your email
                </p>
              </div>
            </form>

            {/* What You'll Get */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">📦 What you'll get</h4>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>📦 1 Resource</strong></p>
                <p className="text-gray-700"><strong>📄 File</strong></p>
                <p className="text-gray-700"><strong>💾 2.52 MB</strong></p>
              </div>
            </div>

            {/* Footer */}
            <div className="py-6 border-t-2 border-gray-200 text-center">
              <p className="text-gray-700 mb-2">
                <strong>Contact:</strong> Precision Data Solutions
              </p>
              <p className="text-gray-600 mb-2">
                📧 Infoupgro@gmail.com
              </p>
              <p className="text-gray-500 text-sm">
                Powered by Cosmofeed Technologies
              </p>
            </div>
          </div>

          {/* Submitted Data Display */}
          {submittedData && (
            <div className="fixed bottom-4 left-4 right-4 bg-green-50 border-4 border-green-500 rounded-lg p-4 shadow-xl z-50">
              <h4 className="text-lg font-bold text-green-900 mb-3">
                ✅ Booking Confirmed!
              </h4>
              <div className="space-y-1 text-sm">
                <p><strong>Name:</strong> {submittedData.fullName}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>Phone:</strong> {submittedData.phone}</p>
                <p><strong>Clinic:</strong> {submittedData.clinicName}</p>
              </div>
            </div>
          )}
        </div>

        
      </div>
    </div>
  )
}
