provider "supabase" {
  access_token = var.supabase_access_token
}

resource "supabase_project" "spcproduction" {
  organization_id   = var.supabase_org
  name              = "santafe_project_center"
  database_password = var.database_password
  region            = "eu-central-1"

  lifecycle {
    ignore_changes = [database_password]
  }
}