import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";
import Widget from "../../components/Widget/Widget";
import Avatar from "../../components/Header/Avatar";
import UserService from "../../services/user";
import CustomerCardLoading from "../../components/CustomerCardLoading";
import EmptyState from "../../components/EmptyState";
import { ClipboardListIcon } from "@heroicons/react/outline";
import { StateContext, DispatchContext } from "../../context/context";

function customer() {
  const router = useRouter();
  const { id } = router.query;
  const [modal, setModal] = useState(false);
  const [customerObject, setCustomerObject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const state = React.useContext(StateContext);


  const fetchCustomer = async () => {
    try {
      const customer = await UserService.getCustomer(state.token, id);
      setCustomerObject(customer);

      const tasks = [];
      setTasks(tasks);
    } catch (err) {
      setTasks([]);
    }
  };

  useEffect(() => {
    if (state.token) {
      fetchCustomer();
    }
  }, [state.token, id]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const renderField = (key, value) => {
    return (
      <div className="">
        <h3 className="font-semibold text-gray-400 text-sm">{key}</h3>
        <p className="font-semibold text-md">{value}</p>
      </div>
    );
  };

  const renderDetails = (contact) => {
    return (
      <div className="flex flex-col w-full gap-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <h3 className="font-semibold text-gray-400 text-sm">איש קשר</h3>
            <div className="flex flex-col">
              <p className="font-semibold text-md">
                {contact?.firstname + " " + contact?.lastname}
              </p>
              <p className="font-normal text-xs">{contact?.role}</p>
            </div>
          </div>

          {renderField("דוא״ל", contact?.email)}

          {renderField("כתובת", contact?.address)}

          {renderField("חברה", contact?.company)}

          {renderField("טלפון", contact?.phone)}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Head>
        <title>
          כרטיס לקוח:{" "}
          {customerObject?.firstname + " " + customerObject?.lastname}
        </title>
      </Head>
      <div className="flex flex-col gap-6 font-sans mt-6">
        {!customerObject ? (
          <CustomerCardLoading />
        ) : (
          <Widget title="כרטיס לקוח" icon="/assets/icons/PersonBadgeFill.svg">
            <div className="flex flex-col md:flex-row gap-6 py-4 items-center">
              <Avatar size="28" />
              {renderDetails(customerObject)}
            </div>
          </Widget>
        )}
        <button
          className="flex flex-col items-center justify-center font-semibold text-black transition-all duration-200 border-2 border-dashed rounded-2xl py-6 hover:border-solid hover:border-primary hover:text-black hover:bg-white"
          onClick={() => toggleModal()}
        >
          <ClipboardListIcon className="h-6 w-6" />
          משימה חדשה
        </button>

        {tasks.length > 0 ? (
          <>
          </>
        ) : (
          <EmptyState
            title={"אופס, לא נמצאו משימות ללקוח זה"}
            description="אם אתה מעוניין ליצור משימה חדשה, לחץ על הכפתור למעלה כדי להתחיל."
          />
        )}
      </div>
    </Layout>
  );
}

export default customer;
