"use client"

import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { Loader2 } from "lucide-react"
import { 
  FaGoogle,
  FaFacebook,
  FaApple,
  FaTwitter,
  FaGithub,
  FaMicrosoft,
  FaYahoo
} from "react-icons/fa"

type SocialProvider = 
  | "google"
  | "facebook" 
  | "apple"
  | "twitter"
  | "github"
  | "microsoft"
  | "yahoo"

interface SocialLoginProps {
  providers?: SocialProvider[]
  onLoading?: (loading: boolean) => void
  disabled?: boolean
  onProviderClick?: (provider: SocialProvider) => void
}

const providerIcons: Record<SocialProvider, React.ReactNode> = {
  google: <FaGoogle className="!h-[18px] !w-[18px]" />,
  facebook: <FaFacebook className="!h-[18px] !w-[18px]" />,
  apple: <FaApple className="!h-[18px] !w-[18px]" />,
  twitter: <FaTwitter className="!h-[18px] !w-[18px]" />,
  github: <FaGithub className="!h-[18px] !w-[18px]" />,
  microsoft: <FaMicrosoft className="!h-[18px] !w-[18px]" />,
  yahoo: <FaYahoo className="!h-[18px] !w-[18px]" />,
}

const providerLabels: Record<SocialProvider, string> = {
  google: "Google",
  facebook: "Facebook",
  apple: "Apple",
  twitter: "Twitter",
  github: "GitHub",
  microsoft: "Microsoft",
  yahoo: "Yahoo",
}

export function SocialLogin({ 
  providers = ["google", "apple", "facebook"], 
  onLoading, 
  disabled,
  onProviderClick 
}: SocialLoginProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProvider, setLoadingProvider] = useState<SocialProvider | null>(null)

  const handleSocialLogin = async (provider: SocialProvider) => {
    try {
      setIsLoading(true)
      setLoadingProvider(provider)
      onLoading?.(true)
      
      if (onProviderClick) {
        await onProviderClick(provider)
      } else {
        // TODO: Implement Firebase Auth social login
        console.log(`${provider} login clicked`)
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    } catch (error) {
      console.error(`${provider} login error:`, error)
    } finally {
      setIsLoading(false)
      setLoadingProvider(null)
      onLoading?.(false)
    }
  }

  const isButtonDisabled = disabled || isLoading

  return (
    <div className="flex justify-center gap-3">
      {providers.map((provider) => (
        <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10"
          key={provider}
          type="button"
          disabled={isButtonDisabled}
          onClick={() => handleSocialLogin(provider)}
          title={`Continue with ${providerLabels[provider]}`}
        >
          {loadingProvider === provider ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            providerIcons[provider]
          )}
        </Button>
      ))}
    </div>
  )
}
