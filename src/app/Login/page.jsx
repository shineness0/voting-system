import Link from 'next/link'
import { toast } from 'react-toastify'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

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

    await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: true,
      callbackUrl: '/dashboard',
    })

    return
    const data = new FormData()

    data.append('email', formData.email)
    data.append('password', formData.password)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: data,
      })

      if (res.status === 200) {
        console.log(res.status)
        const data = await res.json()
        toast.success(data.message)
      } else {
        console.log(data)
        toast.error(data.message)
      }
    } catch (error) {
      console.log('yes')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
}

export default Login
