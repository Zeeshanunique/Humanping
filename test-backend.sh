#!/bin/bash
# Test HumanPing Backend APIs

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🧪 Testing HumanPing Backend APIs${NC}\n"

# Get user token (replace with actual token)
TOKEN="your-jwt-token-here"

# Test 1: Get Profile
echo -e "${GREEN}1. Testing Profile API...${NC}"
curl -X GET \
  https://wyhtmgqgslcznbeeqtpu.supabase.co/functions/v1/humanping-auth/profile \
  -H "Authorization: Bearer $TOKEN" \
  | jq

echo -e "\n"

# Test 2: Generate Daily Mission
echo -e "${GREEN}2. Testing Mission Generation...${NC}"
curl -X POST \
  https://wyhtmgqgslcznbeeqtpu.supabase.co/functions/v1/generate-daily-mission \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"testMode": false}' \
  | jq

echo -e "\n"

# Test 3: Database Query (using Supabase REST API)
echo -e "${GREEN}3. Testing Database - Get Missions...${NC}"
curl -X GET \
  "https://wyhtmgqgslcznbeeqtpu.supabase.co/rest/v1/missions?select=*" \
  -H "apikey: your-anon-key" \
  -H "Authorization: Bearer $TOKEN" \
  | jq

echo -e "\n${BLUE}✅ Backend tests complete!${NC}"

