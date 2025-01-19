create policy "認証済みユーザーのアップロードを許可"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'avatarImage');