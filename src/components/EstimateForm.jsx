import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Button from './Button'

export default function EstimateForm({ compact = false, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Water Well Drilling',
    location: '',
    details: '',
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Water Well Drilling',
    'Well Deepening & Cleaning',
    'Water Treatment & Filtration',
    'Pump Sales & Installation',
    'Holding & Pressure Tanks',
    'Emergency Well Service',
    'Other Service',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required'
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required'
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number'
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address'
    }
    if (!formData.location.trim()) {
      errs.location = 'Property city or township is required'
    }
    if (!formData.details.trim()) {
      errs.details = 'Please briefly describe your well or pump needs'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)

    // Simulate reliable frontend network request
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      if (onSuccess) onSuccess(formData)
    }, 700)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Water Well Drilling',
      location: '',
      details: '',
    })
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-[#0284C7]/30 p-6 sm:p-8 shadow-sm text-left animate-fade-in">
        <div className="flex items-center gap-3 text-[#133A2E] mb-4">
          <div className="w-10 h-10 rounded-full bg-[#133A2E]/10 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-[#0284C7]" />
          </div>
          <div>
            <h3 className="heading-serif text-xl sm:text-2xl font-normal">Estimate Request Prepared</h3>
            <p className="text-xs text-[#475569]">Your details have been saved for this session</p>
          </div>
        </div>

        <p className="text-[#475569] text-sm leading-relaxed mb-4">
          Thank you, <strong className="text-[#133A2E]">{formData.fullName}</strong>. Your estimate request for{' '}
          <strong className="text-[#133A2E]">{formData.service}</strong> in <strong className="text-[#133A2E]">{formData.location}</strong> has been received.
        </p>

        <div className="bg-[#F8FAFC] rounded-xl p-4 text-xs sm:text-sm text-[#475569] space-y-1.5 border border-[#E2E8F0] mb-5">
          <p><strong className="text-[#133A2E]">Contact Phone:</strong> {formData.phone}</p>
          <p><strong className="text-[#133A2E]">Contact Email:</strong> {formData.email}</p>
          <p><strong className="text-[#133A2E]">Project Notes:</strong> {formData.details}</p>
        </div>

        {/* Transparent Notice regarding frontend demonstration mode */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-xs text-amber-900 leading-relaxed mb-6">
          <p className="font-semibold mb-1 flex items-center gap-1.5 text-amber-950">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Frontend Notice (No Live Email Server Connected)</span>
          </p>
          To speak directly with Werner &amp; Sons for immediate quotes or 24-hour emergency well service, please call{' '}
          <a href="tel:6102585615" className="font-bold underline text-[#133A2E] cursor-pointer">
            (610) 258-5615
          </a>{' '}
          or email{' '}
          <a href="mailto:wernerandsons@yahoo.com" className="font-bold underline text-[#133A2E] cursor-pointer">
            wernerandsons@yahoo.com
          </a>.
        </div>

        <Button variant="secondary" size="md" onClick={handleReset}>
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-8 shadow-xs text-left"
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="heading-serif text-2xl sm:text-3xl font-normal text-[#133A2E]">
            Request a Free <span className="italic">Estimate</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] mt-1">
            Tell us about your well or water requirements. We respond promptly with upfront advice.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-[#133A2E] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            aria-invalid={errors.fullName ? 'true' : 'false'}
            className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#133A2E]/20 focus:border-[#133A2E] cursor-text ${
              errors.fullName ? 'border-red-400 bg-red-50/40' : 'border-[#E2E8F0] bg-white hover:border-[#133A2E]/40'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>}
        </div>

        {/* Phone & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#133A2E] mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(610) 000-0000"
              aria-invalid={errors.phone ? 'true' : 'false'}
              className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#133A2E]/20 focus:border-[#133A2E] cursor-text ${
                errors.phone ? 'border-red-400 bg-red-50/40' : 'border-[#E2E8F0] bg-white hover:border-[#133A2E]/40'
              }`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#133A2E] mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#133A2E]/20 focus:border-[#133A2E] cursor-text ${
                errors.email ? 'border-red-400 bg-red-50/40' : 'border-[#E2E8F0] bg-white hover:border-[#133A2E]/40'
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
          </div>
        </div>

        {/* Service Dropdown & Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service" className="block text-xs font-semibold text-[#133A2E] mb-1.5">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#133A2E]/20 focus:border-[#133A2E] text-[#133A2E] cursor-pointer hover:border-[#133A2E]/40"
            >
              {services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-xs font-semibold text-[#133A2E] mb-1.5">
              Property City / Township <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Easton, Bethlehem, Nazareth"
              aria-invalid={errors.location ? 'true' : 'false'}
              className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#133A2E]/20 focus:border-[#133A2E] cursor-text ${
                errors.location ? 'border-red-400 bg-red-50/40' : 'border-[#E2E8F0] bg-white hover:border-[#133A2E]/40'
              }`}
            />
            {errors.location && <p className="mt-1 text-xs text-red-600 font-medium">{errors.location}</p>}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="details" className="block text-xs font-semibold text-[#133A2E] mb-1.5">
            Project Details &amp; Notes <span className="text-red-500">*</span>
          </label>
          <textarea
            id="details"
            name="details"
            rows={compact ? 3 : 4}
            value={formData.details}
            onChange={handleChange}
            placeholder="Please describe your well depth, water symptoms, pump issues, or timeline..."
            aria-invalid={errors.details ? 'true' : 'false'}
            className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#133A2E]/20 focus:border-[#133A2E] cursor-text ${
              errors.details ? 'border-red-400 bg-red-50/40' : 'border-[#E2E8F0] bg-white hover:border-[#133A2E]/40'
            }`}
          ></textarea>
          {errors.details && <p className="mt-1 text-xs text-red-600 font-medium">{errors.details}</p>}
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isLoading}
          className="w-full sm:w-auto"
          icon={isLoading ? Loader2 : Send}
        >
          {isLoading ? 'Processing Request...' : 'Send Estimate Request'}
        </Button>

        <p className="text-xs text-[#475569] text-center sm:text-right">
          Phones answered 24/7:{' '}
          <a href="tel:6102585615" className="font-bold text-[#133A2E] underline hover:text-[#0284C7] cursor-pointer">
            (610) 258-5615
          </a>
        </p>
      </div>
    </form>
  )
}
