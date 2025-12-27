-- Seed Mission Data for HumanPing
-- Run this after a user signs up to populate their account with sample missions

-- Note: Replace 'YOUR_USER_ID' with the actual user ID from auth.users table

-- Sample missions with variety of categories and difficulties
INSERT INTO missions (user_id, title, description, category, difficulty, completed, date, feeling, post_feeling, location)
VALUES
  -- Easy missions (beginner friendly)
  (auth.uid(), 'Say hi to your neighbor', 'Make eye contact and greet someone in your building or neighborhood', 'Greetings', 'easy', false, CURRENT_DATE, NULL, NULL, NULL),
  
  (auth.uid(), 'Smile at a stranger', 'Make brief eye contact and smile at someone you pass by', 'Connection', 'easy', false, CURRENT_DATE + INTERVAL '1 day', NULL, NULL, NULL),
  
  (auth.uid(), 'Hold the door open', 'Hold the door for someone and accept their thanks gracefully', 'Kindness', 'easy', false, CURRENT_DATE + INTERVAL '2 days', NULL, NULL, NULL),
  
  -- Medium missions (moderate challenge)
  (auth.uid(), 'Order coffee in person', 'Visit a cafe and place your order face-to-face with the barista', 'Public Speaking', 'medium', false, CURRENT_DATE + INTERVAL '3 days', NULL, NULL, NULL),
  
  (auth.uid(), 'Ask a stranger for directions', 'Approach someone and ask for help finding a location', 'Conversation', 'medium', false, CURRENT_DATE + INTERVAL '4 days', NULL, NULL, NULL),
  
  (auth.uid(), 'Call instead of text', 'Make a phone call instead of sending a text message', 'Communication', 'medium', false, CURRENT_DATE + INTERVAL '5 days', NULL, NULL, NULL),
  
  (auth.uid(), 'Compliment someone', 'Give a genuine compliment to someone you encounter today', 'Connection', 'medium', false, CURRENT_DATE + INTERVAL '6 days', NULL, NULL, NULL),
  
  -- Hard missions (bigger challenges)
  (auth.uid(), 'Start a conversation with a stranger', 'Initiate a brief conversation with someone new in a comfortable setting', 'Conversation', 'hard', false, CURRENT_DATE + INTERVAL '7 days', NULL, NULL, NULL),
  
  (auth.uid(), 'Join a group activity', 'Participate in a group event or class where you''ll meet new people', 'Social', 'hard', false, CURRENT_DATE + INTERVAL '8 days', NULL, NULL, NULL),
  
  (auth.uid(), 'Share your opinion in a group', 'Speak up and share your thoughts during a group discussion', 'Public Speaking', 'hard', false, CURRENT_DATE + INTERVAL '9 days', NULL, NULL, NULL);

-- You can run this query to check your missions:
-- SELECT * FROM missions WHERE user_id = auth.uid() ORDER BY date;

