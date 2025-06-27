import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Chrome } from "lucide-react"

export default function SignupPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-bold">Create an account</CardTitle>
                    <CardDescription>Enter your details below to create your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                        <Chrome className="mr-2 h-5 w-5" />
                        Sign up with Google
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
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-4">
                    <Button className="w-full">Create Account</Button>
                    <div className="text-center text-sm">
                        Already have an account?
                        <Link href="/login" className="ml-1 font-semibold hover:underline" prefetch={false}>
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}