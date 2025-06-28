'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Chrome } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
    const router = useRouter();
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast({ title: "Success", description: "Signed in successfully." });
            router.push('/');
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: error.message,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md">
                <form onSubmit={handleSignIn}>
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-3xl font-bold">Welcome back</CardTitle>
                        <CardDescription>Enter your credentials to access your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full" type="button" disabled={true}>
                            <Chrome className="mr-2 h-5 w-5" />
                            Sign In with Google
                        </Button>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="name@example.com" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input 
                                id="password" 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center space-y-4">
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? "Signing In..." : "Sign In"}
                        </Button>
                        <Link href="#" className="text-sm hover:underline" prefetch={false}>
                            Forgot your password?
                        </Link>
                        <div className="text-center text-sm">
                            Don&apos;t have an account?
                            <Link href="/signup" className="ml-1 font-semibold hover:underline" prefetch={false}>
                                Sign up
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
