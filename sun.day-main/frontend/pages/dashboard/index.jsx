import React, { useState } from "react";
import Layout from "../../components/Layout";
import {
  UserAddIcon,
} from "@heroicons/react/outline";
import { StateContext, DispatchContext } from "../../context/context";
import { useRouter } from "next/router";

function dashboard() {
  let msg = "";

  const day = new Date();
  const hr = day.getHours();
  if (hr >= 0 && hr < 12) {
    msg = "בוקר טוב";
  } else if (hr >= 12 && hr <= 17) {
    msg = "צהריים טובים";
  } else {
    msg = "לילה טוב";
  }

  const renderWelcome = (name) => {
    return (
      <div className="">
        <h1 className="font-bold text-4xl">{`${msg}, ${name}`}</h1>
        <p className="font-semibold text-lg">
          {" "}
          {` ${day.toLocaleString("he-il", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
            |
            ${day.getHours()}:${day.getMinutes()}`}
        </p>
      </div>
    );
  };

  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6 font-sans">
        <div className="flex flex-col md:flex-row justify-between font-sans items-center gap-6">
          {renderWelcome(state.user?.firstname)}
          <div className="add-customer">
            <button
              onClick={() => toggleModal()}
              className="bg-white p-6 rounded-3xl font-bold text-lg flex items-center justify-between gap-16"
            >
              יצירת לקוח חדש
              <UserAddIcon className="h-16 w-16 bg-primary p-4 rounded-2xl" />
            </button>
          </div>
        </div>
  
      </div>
    </Layout>
  );
}

export default dashboard;
