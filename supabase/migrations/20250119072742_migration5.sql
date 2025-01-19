create policy "update_user"
on "public"."Users"
as permissive
for update
to public
using ((auth.uid() = "UserId"))
with check ((auth.uid() = "UserId"));



