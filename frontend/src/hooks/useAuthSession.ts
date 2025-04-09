import { authClient } from "../services/auth-client";
import { useEffect, useRef } from "react";

export default function useAuthSession() {
  const {
    data,
    isPending,
    error, //error object
    refetch,
  } = authClient.useSession();

  // Track the latest value of isPending
  const isPendingRef = useRef(isPending);

  useEffect(() => {
    isPendingRef.current = isPending;
  }, [isPending]);

  useEffect(() => {
    if (isPending) {
      const timerNotify = setTimeout(() => {
        if (isPendingRef.current) {
          refetch(); // sends another get-session request to the server
          //authClient.$store.notify("$sessionSignal"); // or this poke store to trigger a re-render
        }
      }, 2500); // after 2.5 seconds of pending, force resetting client store
      const timerReload = setTimeout(() => {
        if (isPendingRef.current) {
          window.location.reload();
        }
      }, 5000); // after 5 seconds of pending, reload the page
      return () => {
        clearTimeout(timerNotify);
        clearTimeout(timerReload);
      };
    }
  }, [isPending, refetch]);

  return {
    data,
    isPending,
    error,
  };
}
