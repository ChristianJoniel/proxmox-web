'use client'

import {Text} from "@/components/text"
import {Button} from '@/components/Button'
import {Input, InputError} from '@/components/Input'
import {Fieldset, FieldGroup, Field, Label} from '@/components/fieldset'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const Page = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({email, setErrors, setStatus}).then(() => {})
     }

    return (
        <>
            <Text className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that
                will allow you to choose a new one.
            </Text>

            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <form onSubmit={submitForm}>
                <Fieldset>
                  <FieldGroup>
                    {/* Email Address */}
                    <Field>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                      />

                      <InputError messages={errors.email} className="mt-2" />
                    </Field>

                    <div className="flex items-center justify-end mt-4">
                      <Button type={"submit"}>Email Password Reset Link</Button>
                    </div>
                  </FieldGroup>
                </Fieldset>
            </form>
        </>
    )
}

export default Page
