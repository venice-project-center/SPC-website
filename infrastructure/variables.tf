variable "aws_region" {
  description = "the region for aws resources"
  type = string
  default = "us-east-1"
}

variable "versel_token" {
  description = "versel api token"
  sensitive = true
}

variable "DATABASE_URL" {
  description = "database url"
}

variable "DIRECT_URL" {
  description = "database url"
}

variable "database_password" {
  sensitive = true
}

variable "NEXTAUTH_SECRET" {
  description = "json web token sighning key"
  sensitive = true
}
variable "supabase_access_token" {
  description = "a supabase developer token"
  sensitive = true
}

variable "supabase_org" {

}

variable "GOOGLE_ID" {
  description = "google oauth id"
  sensitive = true
}
variable "GOOGLE_SECRET" {
  description = "google oauth secret"
  sensitive = true
}

variable "aws_access_key_id" {
  sensitive = true
}

variable "aws_secret_access_key" {
  sensitive = true
}
