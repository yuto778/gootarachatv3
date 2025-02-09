alter table "public"."friend_requests" alter column "updated_at" set default now();

create policy "Enable insert for authenticated users only"
on "public"."friend_relations"
as permissive
for insert
to authenticated
with check (((auth.uid() = user_id_a) OR (auth.uid() = user_id_b)));


create policy "Enable read access for all users"
on "public"."friend_relations"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."friend_requests"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."friend_requests"
as permissive
for select
to authenticated
using (true);


create policy "Update as receiver"
on "public"."friend_requests"
as permissive
for update
to public
using ((receiver_id = auth.uid()))
with check (((receiver_id = auth.uid()) AND ((status)::text = ANY ((ARRAY['accepted'::character varying, 'declined'::character varying])::text[]))));



