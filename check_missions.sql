-- Check missions for today
SELECT id, title, date, completed, completed_at, user_id 
FROM missions 
WHERE user_id = 'b7928900-66a6-4b57-8788-4077f6c56339' 
  AND date = CURRENT_DATE
ORDER BY created_at DESC;
