import React from 'react';
import { TextInput, FormButton } from './ui';

export default function InitForm() {
    return (
        <div className="max-w-md">
            <div className="mb-8">
                <h1 className="text-7xl mb-10">👋</h1>
                <h1 className="text-3xl font-sans font-black mb-4">Welcome to Bugdeck!</h1>
                <p className="text-base font-sans font-semibold mb-4 text-gray-400 ">A lightweight self-hosted bug tracker</p>
                <p className="text-base font-sans">Create your &quot;hoster&quot; account, after that you will be able to create accounts for your team and create your first project!</p>
            </div>
            <div className="space-y-6">
                <TextInput label="Username" name="username" placeholder='Your username' onChange={() => {}} />
                <TextInput label="Password" name="password" placeholder='Password' onChange={() => {}} password />
            </div>
            <div className="mt-8">
                    <FormButton title="Continue" onClick={() => {}} />
            </div>
        </div>
    )
}
