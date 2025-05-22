import axios from "axios";
import { useEffect, useState } from "react";

function Appbar() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setName(res.data.firstname); // or res.data.username
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-black flex justify-center  mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl uppercase  text-white">
            {name[0]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
