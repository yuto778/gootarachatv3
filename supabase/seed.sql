insert into storage.buckets(id, name, public, file_size_limit) 
values ('avatarImage', 'avatarImage', true, 52428800);


create policy "認証済みユーザーのアップロードを許可"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'avatarImage');