# Needs an update in files:

- HomeOut: Create validation if fields are empty, new function that calls dispatch in this new function and change the way it passes the state to the http function
- Money: Not display all movements and change functionality in case user doesn't have movements at all
- Profile: Able to edit user's info (done)
- HeaderLogOut: Get user by fetching it instead of getting it from the users vaiable (done)
- App: Don't get all users when component first displayed (done)

## What needs to change:

/////////////////////////////////////////////// DONE

- currentUser: Get current user from useParams(id) or from appState (state). Needs to replace this on Profile, HeaderLogIn, HomeLinks, Money and App components.

/////////////////////////////////////////////// DONE

- HeaderLoggedIn & Out, change the way to sign-in and out, example:
  👇 in header logged in
  setLoggedIn(true);
  localStorage.setItem("userData", JSON.stringify(user));
  navigate("/");

  Create a dispatch using 'useImmer' or another 'useImmerReducer' to only call this funciton in both components
