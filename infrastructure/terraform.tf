terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.0"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.4"
    }
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
    supabase = {
      source  = "supabase/supabase"
      version = "1.1.3"
    }
    random = {
      source = "hashicorp/random"
      version = "3.6.0"
    }
  }
}

