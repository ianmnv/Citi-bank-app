# Needs an update in files:

-App (done)
-HeaderLoggedIn (done)
-HeaderLoggedOut (done)
-HomeOut (done)
-Profile

## What to change:

1. HeaderLoggedIn & Out, change the way to sign-in and out, example: (done)
   👇 in header logged in
   setLoggedIn(true);
   localStorage.setItem("userData", JSON.stringify(user));
   navigate("/");

   Create a dispatch using 'useImmer' or another 'useImmerReducer' to only call this funciton in both components
