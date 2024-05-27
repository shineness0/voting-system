import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    dob: '',
    email: '',
    mobileNo: '',
    nin: '',
    password: '',
    password2: '',
  })

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.password2) {
      return toast.error('Password do not match')
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.status === 200) {
        toast.success(data.message)
        router.push('/login')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
}

export default Register
