import {
  collection,
  query,
  onSnapshot,
  limit,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { db } from "./firebase";

export const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [docId, setDocId] = useState("");
  const [error, setError] = useState("");

  const fetchingData = async () => {
    setIsLoading(true);
    const docRef = doc(db, "state", "0osjxT7CPHyJjKOz1ukM");
    const docSnap = await getDoc(docRef);
    setStatus(docSnap.data().value);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handleUpdate = useCallback(()=> {
    const docRef = doc(db, "state", "0osjxT7CPHyJjKOz1ukM");
    updateDoc(docRef, {
      value: !status,
    });
    fetchingData();
  },[status])

  const value = useMemo(
    () => ({
      status,
      isLoading,
      error,
      update: handleUpdate,
    }),
    [error, handleUpdate, isLoading, status]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
