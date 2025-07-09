'use client'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
export default function ApplyJobPage() {
  const { job_id } = useParams()
  const router = useRouter()
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    resume: null,
    // Optional fields
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    date_of_birth: '',
    gender: '',
    marital_status: '',
    linkedin: '',
    github: '',
    leetcode: '',
    portfolio_link: '',
    personal_website: '',
    highest_qualification: '',
    university: '',
    passing_year: '',
    field_of_study: '',
    experience: '',
    total_experience_years: '',
    current_employer: '',
    current_job_title: '',
    current_salary: '',
    notice_period: '',
    skills: '',
    projects: '',
    certifications: '',
    languages_known: '',
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [clientError, setClientError] = useState('')
  const requiredFields = ['full_name', 'email', 'phone']
  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setForm({ ...form, [name]: files[0] })
    } else {
      setForm({ ...form, [name]: value })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setClientError('')
    setErrors({})
    // Client-side validation
    for (const field of requiredFields) {
      if (!form[field]) {
        setClientError(`Please fill the required field: ${field.replace('_', ' ')}`)
        return
      }
    }
    setLoading(true)
    const formData = new FormData()
    formData.append('job_opening_id', job_id)
    Object.keys(form).forEach((key) => {
      if (form[key]) formData.append(key, form[key])
    })
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/apply-job`, {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      setLoading(false)
      if (!res.ok) {
        if (res.status === 422) {
          setErrors(data.errors)
        } else {
          setClientError(data.message || 'Something went wrong on the server.')
        }
      } else {
        toast.success('Application submitted successfully!')
        setTimeout(() => {
          router.push('/career')
        }, 2000)
      }
    } catch (err) {
      setLoading(false)
      toast.error('Network error: Unable to reach server.')
    }
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Apply for Job #{job_id}</h1>
      {clientError && <p className="text-red-600 mb-4">{clientError}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="full_name"
            label="Full Name *"
            value={form.full_name}
            onChange={handleChange}
            error={errors.full_name}
          />
          <Input
            name="email"
            label="Email *"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            name="phone"
            label="Phone *"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Input
            name="date_of_birth"
            label="Date of Birth"
            type="date"
            value={form.date_of_birth}
            onChange={handleChange}
          />
          <Input name="gender" label="Gender" value={form.gender} onChange={handleChange} />
          <Input
            name="marital_status"
            label="Marital Status"
            value={form.marital_status}
            onChange={handleChange}
          />
          <Input name="city" label="City" value={form.city} onChange={handleChange} />
          <Input name="state" label="State" value={form.state} onChange={handleChange} />
          <Input name="zip_code" label="Zip Code" value={form.zip_code} onChange={handleChange} />
          <Input name="country" label="Country" value={form.country} onChange={handleChange} />
        </div>
        <Input name="address" label="Address" value={form.address} onChange={handleChange} />
        <Input name="linkedin" label="LinkedIn URL" value={form.linkedin} onChange={handleChange} />
        <Input name="github" label="GitHub URL" value={form.github} onChange={handleChange} />
        <Input name="leetcode" label="LeetCode URL" value={form.leetcode} onChange={handleChange} />
        <Input
          name="portfolio_link"
          label="Portfolio Link"
          value={form.portfolio_link}
          onChange={handleChange}
        />
        <Input
          name="personal_website"
          label="Personal Website"
          value={form.personal_website}
          onChange={handleChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="highest_qualification"
            label="Qualification"
            value={form.highest_qualification}
            onChange={handleChange}
          />
          <Input
            name="university"
            label="University"
            value={form.university}
            onChange={handleChange}
          />
          <Input
            name="passing_year"
            label="Passing Year"
            value={form.passing_year}
            onChange={handleChange}
          />
          <Input
            name="field_of_study"
            label="Field of Study"
            value={form.field_of_study}
            onChange={handleChange}
          />
        </div>
        <Input
          name="experience"
          label="Experience"
          value={form.experience}
          onChange={handleChange}
        />
        <Input
          name="total_experience_years"
          label="Total Experience Years"
          value={form.total_experience_years}
          onChange={handleChange}
        />
        <Input
          name="current_employer"
          label="Current Employer"
          value={form.current_employer}
          onChange={handleChange}
        />
        <Input
          name="current_job_title"
          label="Current Job Title"
          value={form.current_job_title}
          onChange={handleChange}
        />
        <Input
          name="current_salary"
          label="Current Salary"
          value={form.current_salary}
          onChange={handleChange}
        />
        <Input
          name="notice_period"
          label="Notice Period"
          value={form.notice_period}
          onChange={handleChange}
        />
        <Input
          name="skills"
          label="Skills (comma-separated)"
          value={form.skills}
          onChange={handleChange}
        />
        <Input name="projects" label="Projects" value={form.projects} onChange={handleChange} />
        <Input
          name="certifications"
          label="Certifications"
          value={form.certifications}
          onChange={handleChange}
        />
        <Input
          name="languages_known"
          label="Languages Known"
          value={form.languages_known}
          onChange={handleChange}
        />
        <div>
          <label className="block mb-1 font-medium">Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.resume && <p className="text-red-600 text-sm">{errors.resume}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  )
}
// Reusable Input component
function Input({ label, name, type = 'text', value, onChange, error }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}
