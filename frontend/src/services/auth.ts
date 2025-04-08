import { authClient } from "./auth-client"; //import the auth client

export const signUp = async (
  email: string,
  password: string,
  name: string,
  image?: string
) => {
  const { data, error } = await authClient.signUp.email(
    {
      email, // user email address
      password, // user password -> min 8 characters by default
      name, // user display name
      image, // user image url (optional)
    },
    {
      onRequest: (ctx) => {
        console.log("Register ...", ctx);
      },
      onSuccess: (ctx) => {
        console.log("Register successful!", ctx);
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message);
      },
    }
  );
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await authClient.signIn.email(
    {
      email,
      password,
      callbackURL: "/dashboard",
      rememberMe: false,
    },
    {
      onRequest: (ctx) => {
        console.log("Signing ...", ctx);
      },
      onSuccess: (ctx) => {
        console.log("Signing successful!", ctx);
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message);
      },
    }
  );

  return { data, error };
};

export const getUser = async () => {
  const { data, error } = await authClient.getSession();
  console.log("session:", { data, error });
  if (error) {
    console.error("Erreur d'auth:", error);
    return null;
  }
  return data;
};

export const logout = async () => {
  await authClient.signOut();
  window.location.href = "/";
};
