provider "aws" {
  region = var.aws_region
  access_key = var.aws_access_key_id
  secret_key = var.aws_secret_access_key
}

provider "vercel" {
  api_token = var.versel_token
}
#vercel projects
resource "vercel_project" "spc_project" {
  name = "santafe-project-center"
  framework = "nextjs"
  git_repository = {
    type="github"
    production_branch = "main"
    repo="venice-project-center/SPC-website"
  }
}
resource "vercel_project_environment_variable" "db_env"  {
  project_id = vercel_project.spc_project.id
  target = ["production","preview","development"]
  key="DATABASE_URL"
  value=var.DATABASE_URL
}
resource "vercel_project_environment_variable" "dbd_env"  {
  project_id = vercel_project.spc_project.id
  target = ["production","preview","development"]
  key="DIRECT_URL"
  value=var.DIRECT_URL
}

resource "vercel_project_environment_variable" "file_url_env"  {
  project_id = vercel_project.spc_project.id
  target = ["production","preview","development"]
  key="FILE_API_URL"
  value= "https://${aws_api_gateway_rest_api.spc_file_api.id}.execute-api.${var.aws_region}.amazonaws.com"
}
resource "vercel_project_environment_variable" "jwt_secret"  {
  project_id = vercel_project.spc_project.id
  target = ["production","preview","development"]
  key="NEXTAUTH_SECRET"
  value= var.NEXTAUTH_SECRET
}

resource "vercel_project_environment_variable" "fileUploadUrl" {
  project_id = vercel_project.spc_project.id
  key        = "NEXT_PUBLIC_FILE_API_URL"
  value      = aws_api_gateway_deployment.fileApiDeployment.invoke_url
  target = ["production","preview","development"]
}
resource "vercel_project_environment_variable" "googleId" {
  project_id = vercel_project.spc_project.id
  key        = "GOOGLE_ID"
  value      = var.GOOGLE_ID
  target = ["production","preview","development"]
}
resource "vercel_project_environment_variable" "googleSecret" {
  project_id = vercel_project.spc_project.id
  key        = "GOOGLE_SECRET"
  value      = var.GOOGLE_SECRET
  target = ["production","preview","development"]
}
#resource "vercel_dns_record" "" {
#  domain     = "santafeprojectcenter.org"
#  project_id = vercel_project.spc_project.id
#  name       = "new"
#  type       = ""
#}