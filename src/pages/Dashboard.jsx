import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";
import { LoadingSpinner } from "../components/LoadingSpinner";

function Dashboard() {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "https://easy-payment-be-2.onrender.com/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      } finally {
        setLoading(false); // always set loading to false
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Balance value={balance} />
            <Users />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
