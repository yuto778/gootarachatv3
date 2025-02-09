drop policy "Enable insert for authenticated users only" on "public"."friend_relations";

drop policy "Enable read access for all users" on "public"."friend_relations";

alter table "public"."friend_relations" drop constraint "public_friend_relations_user_id_a_fkey";

alter table "public"."friend_relations" drop constraint "public_friend_relations_user_id_b_fkey";

alter table "public"."friend_relations" drop constraint "friend_relations_pkey";

drop index if exists "public"."friend_relations_pkey";

alter table "public"."friend_relations" drop column "id";

alter table "public"."friend_relations" drop column "user_id_a";

alter table "public"."friend_relations" drop column "user_id_b";

alter table "public"."friend_relations" add column "userA" uuid not null default auth.uid();

alter table "public"."friend_relations" add column "userB" uuid not null default auth.uid();

alter table "public"."friend_relations" alter column "last_interacted" set default now();

alter table "public"."friend_relations" alter column "last_interacted" set not null;

alter table "public"."friend_relations" add constraint "public_friend_relations_userA_fkey" FOREIGN KEY ("userA") REFERENCES "Users"("UserId") ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."friend_relations" validate constraint "public_friend_relations_userA_fkey";

alter table "public"."friend_relations" add constraint "public_friend_relations_userB_fkey" FOREIGN KEY ("userB") REFERENCES "Users"("UserId") ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."friend_relations" validate constraint "public_friend_relations_userB_fkey";


