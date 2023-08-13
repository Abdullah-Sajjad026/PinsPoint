"use client";

import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/auth-context";
import { fireAuth } from "@/lib/firebase.config";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function SignInPage() {
  const { toast } = useToast();
  const router = useRouter();

  const [signIn, user, loading, error] = useSignInWithGoogle(fireAuth);
  const { user: isLoggedIn } = useAuthContext();

  const handleSignIn = () => {
    toast({
      title: "Signing In",
      description: "Please wait...",
    });
    signIn()
      .then((usercredential) => {
        if (usercredential) {
          toast({
            title: "Signed In",
            description: `Welcome ${usercredential.user?.displayName}`,
          });
        } else {
          toast({
            title: "Sign In Failed",
            description: "Please try again",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Sign In Failed",
          description: error.message,
          variant: "destructive",
        });
      });
  };

  useEffect(() => {
    if (isLoggedIn) router.push("/my-pins");
  }, [isLoggedIn, router]);

  return (
    <div className="container">
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-5xl font-bold text-brand">Sign In</h2>
        <p>Sign in with your Google account to manage your pins.</p>
        <Button disabled={loading} onClick={handleSignIn}>
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </div>
    </div>
  );
}
