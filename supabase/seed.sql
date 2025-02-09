INSERT INTO storage.buckets(id, name, public, file_size_limit)
SELECT 'avatarImage', 'avatarImage', true, 52428800
WHERE NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'avatarImage');


create policy "認証済みユーザーのアップロードを許可"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'avatarImage');