'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function ApplyJobPage() {
  const { job_id } = useParams()
  const router = useRouter()

  const [job, setJob] = useState(null)
  const [loadingJob, setLoadingJob] = useState(true)

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    resume: null,
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: 'India',
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

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/job-opening/${job_id}`)
        if (!res.ok) throw new Error()
        const data = await res.json()
        setJob(data)
      } catch {
        toast.error('Job not found!')
        router.push('/career')
      } finally {
        setLoadingJob(false)
      }
    }

    if (job_id) fetchJob()
  }, [job_id, router])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setClientError('')
    setErrors({})

    for (const field of requiredFields) {
      if (!form[field]) {
        setClientError(`Please fill the required field: ${field.replace('_', ' ')}`)
        return
      }
    }

    const formData = new FormData()
    formData.append('job_opening_id', job_id)
    Object.keys(form).forEach((key) => {
      if (form[key]) formData.append(key, form[key])
    })

    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/apply-job`, {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      setLoading(false)

      if (!res.ok) {
        if (res.status === 422) {
          setErrors(data.errors || {})
        } else {
          toast.error(data.message || 'Submission failed.')
        }
      } else {
        toast.success('Application submitted successfully!')
        setTimeout(() => {
          router.push('/career')
        }, 2000) // waits for 2 seconds before redirecting
      }
    } catch {
      toast.error('Network error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="w-full mx-auto px-4 py-10 max-w-6xl">
      {loadingJob ? (
        <div className="animate-pulse mb-6 text-gray-400">Loading job details...</div>
      ) : job ? (
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">{job.job_title}</h1>
          <p className="text-gray-600 mb-1">
            Type: <span className="font-medium">{job.job_type}</span> | Deadline:{' '}
            <span className="font-medium">{job.application_deadline}</span>
          </p>
          <p className="text-sm text-gray-500">{job.description || 'No description available.'}</p>
        </div>
      ) : (
        <div className="text-red-600">Job not found</div>
      )}

      {clientError && <div className="text-red-600 mb-4">{clientError}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-6">
          <FloatingInput
            label="Full Name *"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            error={errors.full_name}
            required
          />
          <FloatingInput
            label="Email *"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <FloatingInput
            label="Phone *"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
          <FloatingInput
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            value={form.date_of_birth}
            onChange={handleChange}
          />
          <FloatingInput label="Gender" name="gender" value={form.gender} onChange={handleChange} />
          <FloatingInput
            label="Marital Status"
            name="marital_status"
            value={form.marital_status}
            onChange={handleChange}
          />
          <FloatingInput label="City" name="city" value={form.city} onChange={handleChange} />
          <FloatingInput label="State" name="state" value={form.state} onChange={handleChange} />
          <FloatingInput
            label="Zip Code"
            name="zip_code"
            value={form.zip_code}
            onChange={handleChange}
          />
          <FloatingInput
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
          />
          <FloatingInput
            label="LinkedIn"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
          />
          <FloatingInput label="GitHub" name="github" value={form.github} onChange={handleChange} />
          <FloatingInput
            label="LeetCode"
            name="leetcode"
            value={form.leetcode}
            onChange={handleChange}
          />
          <FloatingInput
            label="Portfolio"
            name="portfolio_link"
            value={form.portfolio_link}
            onChange={handleChange}
          />
          <FloatingInput
            label="Website"
            name="personal_website"
            value={form.personal_website}
            onChange={handleChange}
          />
          <FloatingInput
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          <FloatingInput
            label="Qualification"
            name="highest_qualification"
            value={form.highest_qualification}
            onChange={handleChange}
          />
          <FloatingInput
            label="University"
            name="university"
            value={form.university}
            onChange={handleChange}
          />
          <FloatingInput
            label="Passing Year"
            name="passing_year"
            value={form.passing_year}
            onChange={handleChange}
          />
          <FloatingInput
            label="Field of Study"
            name="field_of_study"
            value={form.field_of_study}
            onChange={handleChange}
          />
          <FloatingInput
            label="Experience"
            name="experience"
            value={form.experience}
            onChange={handleChange}
          />
          <FloatingInput
            label="Total Experience"
            name="total_experience_years"
            value={form.total_experience_years}
            onChange={handleChange}
          />
          <FloatingInput
            label="Current Employer"
            name="current_employer"
            value={form.current_employer}
            onChange={handleChange}
          />
          <FloatingInput
            label="Current Job Title"
            name="current_job_title"
            value={form.current_job_title}
            onChange={handleChange}
          />
          <FloatingInput
            label="Current Salary"
            name="current_salary"
            value={form.current_salary}
            onChange={handleChange}
          />
          <FloatingInput
            label="Notice Period"
            name="notice_period"
            value={form.notice_period}
            onChange={handleChange}
          />
          <FloatingInput label="Skills" name="skills" value={form.skills} onChange={handleChange} />
          <FloatingInput
            label="Projects"
            name="projects"
            value={form.projects}
            onChange={handleChange}
          />
          <FloatingInput
            label="Certifications"
            name="certifications"
            value={form.certifications}
            onChange={handleChange}
          />
          <FloatingInput
            label="Languages Known"
            name="languages_known"
            value={form.languages_known}
            onChange={handleChange}
          />

          <div className="relative z-0 w-full group md:col-span-2">
            <input
              type="file"
              name="resume"
              id="resume"
              accept=".pdf"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="resume"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Resume (PDF)
            </label>
            {errors.resume && <p className="text-red-600 text-sm mt-1">{errors.resume}</p>}
          </div>
        </div>
        <div className="flex justify-center mt-10 ">
          <button
            type="submit"
            disabled={loading}
            className="mx-auto bg-white text-black border border-white hover:bg-white/95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  )
}

function FloatingInput({ label, name, type = 'text', value, onChange, error, required = false }) {
  return (
    <div className="relative z-0 w-full group">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
        border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer
        ${error ? 'border-red-500 focus:border-red-500' : ''}`}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform
        -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  )
}
