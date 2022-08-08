import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToAddress } from "../routes/Coordinator";
import { BASE_URL } from "../constants/BASE_URL";

import axios from "axios";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  async function getEndress() {
    if (localStorage.getItem("token")) {
        let haveAddress = true;
      if (
        !localStorage.getItem("hasAddress") ||
        localStorage.getItem("hasAddress") === false
      ) {
        await axios
          .get(`${BASE_URL}/profile`, {
            headers: {
              auth: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            if (res.data.user.hasAddress) {
              localStorage.setItem("hasAddress", true);
              localStorage.setItem("user", JSON.stringify(res.data.user));
                haveAddress = true;
            } else {
              goToAddress(navigate);
              haveAddress = false;
            }
          });

        await axios
          .get(`${BASE_URL}/profile/address`, {
            headers: {
              auth: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            if (localStorage.getItem("hasAddress") || haveAddress) {
              localStorage.setItem("address", JSON.stringify(res.data.address));
            }
          });
      }
    } else {
      goToLogin(navigate);
    }
  }

  useEffect(() => {
    getEndress();
  }, []);
};
