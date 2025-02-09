import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FriendRequest } from "../../../actions/FriendRequest";
import { createClient } from "../../../supabase/client";
import { Database } from "../../../types/supabaseTypes";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface FriendRequestModalProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  userid: string | undefined | null;
}

const FriendRequestModal: React.FC<FriendRequestModalProps> = ({
  close,
  userid,
}) => {
  const [users, setUsers] = useState<
    Database["public"]["Tables"]["Users"]["Row"][]
  >([]);
  const [filteredUsers, setFilteredUsers] = useState<
    Database["public"]["Tables"]["Users"]["Row"][]
  >([]);
  const [searchinput, setSearchInput] = useState("");
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from("Users")
        .select("*")
        .neq("UserId", userid!);

      if (!error) setUsers(data);
    };

    fetchUser();
  });

  useEffect(() => {
    if (searchinput.trim() === "") {
      setFilteredUsers([]);
    } else {
      setFilteredUsers(
        users.filter((user) =>
          user.UserId?.toLowerCase().includes(searchinput.toLowerCase())
        )
      );
    }
  }, [searchinput, users]);

  const sendRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = toast.loading("送信中");
    const result = await FriendRequest(userid!, searchinput);

    if (result.success === false) {
      toast.error("失敗しました", { id: id });
    }

    toast.success("送信完了", { id: id });
    close(false);
    router.refresh();
  };
  return (
    <div
      className="fixed inset-0 min-h-screen    flex items-center justify-center z-50 animate-opacity"
      onClick={() => close(false)}
    >
      <div
        className="bg-white p-8 rounded-lg w-3/4 md:w-1/2  overflow-auto relative flex flex-col space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="self-center text-xl font-bold">友達リクエストを送る</h2>
        <div className="flex flex-col gap-3">
          <h2>IDで検索</h2>
          <form className="flex gap-5" onSubmit={sendRequest}>
            <Input
              value={searchinput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button type="submit">
              <PlusIcon />
            </Button>
          </form>
        </div>
        <div>
          {filteredUsers.length === 0 && (
            <h2 className="text-center">検索結果が表示されます</h2>
          )}
          {filteredUsers.map((user, i) => (
            <div
              key={i}
              className="flex items-center gap-10 cursor-pointer hover:bg-black-1/10 py-6 px-5"
              onDoubleClick={() => setSearchInput(user.UserId!)}
            >
              <Image
                src={user.AvatarImage!}
                width={40}
                height={40}
                alt="users"
                className="rounded-full aspect-square"
              />
              <h2>{user.Username}</h2>
              <h2>{user.UserId}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendRequestModal;
