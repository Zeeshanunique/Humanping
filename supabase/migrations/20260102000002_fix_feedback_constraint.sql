-- Drop the old check constraint
ALTER TABLE feedback DROP CONSTRAINT IF EXISTS feedback_type_check;

-- Add new check constraint with correct values
ALTER TABLE feedback ADD CONSTRAINT feedback_type_check 
  CHECK (type IN ('general', 'bug', 'feature'));
