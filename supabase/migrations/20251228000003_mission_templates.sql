-- Mission Templates Pool for Daily Generation
-- These missions will be randomly selected for users each day

CREATE TABLE IF NOT EXISTS mission_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')) NOT NULL,
  location TEXT CHECK (location IN ('safe', 'anywhere')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed mission templates
INSERT INTO mission_templates (title, description, category, difficulty, location) VALUES
  -- Easy Greetings
  ('Say hi to your neighbor', 'Make eye contact and greet someone in your building or neighborhood', 'Greetings', 'easy', 'safe'),
  ('Wave at someone you recognize', 'Give a friendly wave to someone you''ve seen before', 'Greetings', 'easy', 'anywhere'),
  ('Smile at a stranger', 'Make eye contact and smile at someone you don''t know', 'Greetings', 'easy', 'anywhere'),
  ('Hold the door for someone', 'Keep the door open for the person behind you', 'Kindness', 'easy', 'anywhere'),
  
  -- Easy Conversations
  ('Ask someone about their day', 'Start a brief conversation by asking how someone''s day is going', 'Conversations', 'easy', 'anywhere'),
  ('Compliment someone genuinely', 'Give a sincere compliment to someone you interact with', 'Kindness', 'easy', 'anywhere'),
  ('Thank a service worker', 'Express genuine gratitude to someone helping you (cashier, barista, etc.)', 'Kindness', 'easy', 'anywhere'),
  
  -- Medium Greetings
  ('Introduce yourself to a neighbor', 'Have a brief conversation with a neighbor you haven''t met', 'Greetings', 'medium', 'safe'),
  ('Strike up a conversation in line', 'Chat with someone while waiting in a queue', 'Conversations', 'medium', 'anywhere'),
  ('Ask for a recommendation', 'Ask someone for their opinion or a suggestion', 'Conversations', 'medium', 'anywhere'),
  
  -- Medium Conversations
  ('Share a fun fact about yourself', 'Tell someone something interesting about you during a conversation', 'Conversations', 'medium', 'anywhere'),
  ('Ask about someone''s interests', 'Show genuine curiosity about what someone enjoys', 'Conversations', 'medium', 'anywhere'),
  ('Offer to help someone', 'Volunteer assistance when you see someone who might need it', 'Kindness', 'medium', 'anywhere'),
  
  -- Hard Challenges
  ('Start a conversation with a stranger', 'Initiate a meaningful conversation with someone new', 'Conversations', 'hard', 'anywhere'),
  ('Join a group activity', 'Participate in a group setting where you don''t know everyone', 'Social', 'hard', 'anywhere'),
  ('Share a personal story', 'Open up about a personal experience with someone', 'Conversations', 'hard', 'safe'),
  ('Invite someone for coffee', 'Ask an acquaintance to join you for a casual meet-up', 'Social', 'hard', 'anywhere'),
  
  -- Medium Kindness
  ('Let someone go ahead of you', 'Allow someone to go first in line or through a door', 'Kindness', 'easy', 'anywhere'),
  ('Help carry something', 'Offer to help someone carrying heavy items', 'Kindness', 'medium', 'anywhere'),
  ('Give directions to someone', 'Help someone who looks lost or confused', 'Kindness', 'easy', 'anywhere'),
  
  -- Easy Community
  ('Say good morning to 3 people', 'Greet at least three different people today', 'Greetings', 'easy', 'anywhere'),
  ('Make small talk at checkout', 'Have a brief friendly chat with a cashier', 'Conversations', 'easy', 'anywhere'),
  ('Comment on the weather', 'Start a light conversation about the weather', 'Conversations', 'easy', 'anywhere'),
  
  -- Medium Community
  ('Ask for help with something', 'Request assistance from someone, showing vulnerability', 'Conversations', 'medium', 'anywhere'),
  ('Share something you learned', 'Tell someone about something interesting you recently discovered', 'Conversations', 'medium', 'anywhere'),
  ('Express appreciation publicly', 'Thank or acknowledge someone in front of others', 'Kindness', 'medium', 'anywhere'),
  
  -- Hard Social
  ('Reach out to an old friend', 'Message or call someone you haven''t talked to in a while', 'Social', 'hard', 'safe'),
  ('Attend a social event alone', 'Go to a gathering where you might not know many people', 'Social', 'hard', 'anywhere'),
  ('Ask someone to hang out', 'Invite someone to do an activity together', 'Social', 'hard', 'anywhere'),
  ('Share your contact info', 'Exchange phone numbers or social media with someone new', 'Social', 'hard', 'anywhere');

-- Create an index for faster random selection
CREATE INDEX IF NOT EXISTS idx_mission_templates_difficulty ON mission_templates(difficulty);
CREATE INDEX IF NOT EXISTS idx_mission_templates_category ON mission_templates(category);

-- Grant permissions
GRANT ALL ON mission_templates TO postgres, anon, authenticated, service_role;

