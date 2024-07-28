'use client'

import {Link} from '@/components/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import {Description, Field, FieldGroup, Fieldset, Label} from "@/components/fieldset"
import {Input, InputError} from "@/components/input"
import {Button} from "@/components/button"
import {Checkbox, CheckboxField, CheckboxGroup} from "@/components/checkbox"
import {Text} from "@/components/text"

const Login = () => {
  const router = useRouter()

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (router.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.reset))
    } else {
      setStatus(null)
    }
  })

  const submitForm = async event => {
    event.preventDefault()

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    })
  }

  return (
    <>
      <AuthSessionStatus className="mb-4" status={status} />
      <form onSubmit={submitForm}>
        <Fieldset>
          <FieldGroup>

            {/* Email Address */}
            <Field>
              <Label>Email</Label>
              <Input name="email" type={"email"} onChange={event => setEmail(event.target.value)} required autoFocus/>
              <InputError messages={errors.email} className="mt-2" />
            </Field>

            {/* Password */}
            <Field>
              <Label>Password</Label>
              <Input name="password" type={"password"}
                     onChange={event => setPassword(event.target.value)} required autoComplete="current-password"/>
              <InputError messages={errors.password} className="mt-2" />
            </Field>
          </FieldGroup>

          {/*/!* Remember Me *!/*/}
          {/*<CheckboxGroup>*/}
          {/*  <CheckboxField>*/}
          {/*    <Checkbox name="remember" value="show_on_events_page" defaultChecked*/}
          {/*              onChange={event =>*/}
          {/*                console.log('event data', event.target )*/}
          {/*                // setShouldRemember(event.target.checked)*/}
          {/*              }/>*/}
          {/*    <Label>Remember Me</Label>*/}
          {/*  </CheckboxField>*/}
          {/*</CheckboxGroup>*/}

          <div className="flex items-center justify-end mt-4">
            <Link href="/forgot-password"><Text>Forgot Password?</Text></Link>
            {/*<Link*/}
            {/*  href="/forgot-password">*/}
            {/*  Forgot your password?*/}
            {/*</Link>*/}

            <Button type="submit" className="ml-3">Login</Button>
          </div>

        </Fieldset>
      </form>
    </>
  )
}

export default Login
