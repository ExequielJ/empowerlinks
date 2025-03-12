
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import CustomButton from '@/components/ui/CustomButton';
import { LogIn, UserPlus, Mail, Lock, AtSign } from 'lucide-react';

const Auth = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      // Mock successful login
      setIsLoading(false);
      toast.success("Successfully logged in!");
      navigate('/profile');
    }, 1500);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (signupData.password !== signupData.confirmPassword) {
      setIsLoading(false);
      toast.error("Passwords don't match");
      return;
    }

    // Simulate signup API call
    setTimeout(() => {
      // Mock successful signup
      setIsLoading(false);
      toast.success("Account created successfully! Please log in.");
      navigate('/auth', { state: { defaultTab: 'login' } });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-purple-light to-brand-pink-light">
      <div className="container mx-auto flex flex-col items-center justify-center flex-1 px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
              SheTrades Network
            </h1>
            <p className="text-muted-foreground mt-2">Connect, Grow, and Thrive with Professional Women</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
                </CardHeader>
                <form onSubmit={handleLoginSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="email"
                          type="email" 
                          placeholder="you@example.com" 
                          className="pl-10"
                          value={loginData.email}
                          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="password"
                          type="password" 
                          placeholder="••••••••" 
                          className="pl-10"
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <CustomButton 
                      className="w-full" 
                      leftIcon={<LogIn className="h-4 w-4" />}
                      isLoading={isLoading}
                      type="submit"
                    >
                      Login
                    </CustomButton>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
                </CardHeader>
                <form onSubmit={handleSignupSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="name"
                          placeholder="Jane Doe" 
                          className="pl-10"
                          value={signupData.name}
                          onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="signup-email"
                          type="email" 
                          placeholder="you@example.com" 
                          className="pl-10"
                          value={signupData.email}
                          onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="signup-password"
                          type="password" 
                          placeholder="••••••••" 
                          className="pl-10"
                          value={signupData.password}
                          onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="confirm-password"
                          type="password" 
                          placeholder="••••••••" 
                          className="pl-10"
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <CustomButton 
                      className="w-full" 
                      leftIcon={<UserPlus className="h-4 w-4" />}
                      isLoading={isLoading}
                      type="submit"
                    >
                      Create Account
                    </CustomButton>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              By continuing, you agree to the SheTrades Network's{' '}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
