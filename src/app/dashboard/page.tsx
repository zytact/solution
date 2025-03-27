'use client';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';

export default function Dashboard() {
    const [status, setStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const handleAddPasskey = async () => {
        try {
            const result = await authClient.passkey.addPasskey();
            // Check if the operation was successful
            if (result?.error.status !== 400) {
                setStatus({
                    success: true,
                    message: 'Passkey successfully added!',
                });
            } else {
                setStatus({
                    success: false,
                    message: 'Passkey operation was cancelled or failed.',
                });
            }
        } catch (error) {
            setStatus({
                success: false,
                message: `Failed to add passkey: ${error instanceof Error ? error.message : 'Unknown error'}`,
            });
        }
    };

    const handleVerifyPasskey = async () => {
        try {
            const result = await authClient.signIn.passkey();
            // Check if the result indicates success
            if (result?.error.status !== 400) {
                setStatus({
                    success: true,
                    message: 'Verification successful!',
                });
            } else {
                setStatus({
                    success: false,
                    message: 'Verification cancelled or no keys available.',
                });
            }
        } catch (error) {
            setStatus({
                success: false,
                message: `Verification failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="mt-4 text-lg">Welcome to your dashboard!</p>

            {status && (
                <div
                    className={`mt-4 p-3 rounded-md ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                >
                    {status.message}
                </div>
            )}

            <Button className="mt-6" onClick={handleAddPasskey}>
                Add Key
            </Button>
            <Button className="mt-6" onClick={handleVerifyPasskey}>
                Verify with Key
            </Button>
        </div>
    );
}
