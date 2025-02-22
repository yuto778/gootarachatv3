alter table "public"."friend_relations" add column "id" bigint generated by default as identity not null;

CREATE UNIQUE INDEX friend_relations_pkey ON public.friend_relations USING btree (id);

alter table "public"."friend_relations" add constraint "friend_relations_pkey" PRIMARY KEY using index "friend_relations_pkey";

create policy "Enable insert for authenticated users only"
on "public"."friend_relations"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."friend_relations"
as permissive
for select
to public
using (true);



