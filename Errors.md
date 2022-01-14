## Common Errors 🔴

<br>

### When the buttons dont work 👍

##### If you cannot click on the buttons when (sliding or closing the modal) for example:

<br>

- Hide all the styles related to it (to be sure, hide all the styles related to the project)

<br>

- Then proceed to check if the code on the buttons is alright

<br>

> ##### I had a similar issue after finishing the project and then returning to test it again the day after, strangely nothing worked like the previous day, it was strange for me "since everything was fine few hours earlier", so after removing all the unecessary components etc (As a last resort), I opted for hiding the styles, so to concentrate on the code only, and there was it, the code was working fine, so the problem was coming from the styles.

<br>
<br>

#### The issue: pointer-events:none: 👺

<br>

## pointer-events

- The pointer-events property allows for control over how HTML elements respond to mouse/touch events – including CSS hover/active states, click/tap events in Javascript, and whether or not the cursor is visible. ... none prevents all click, state and cursor options on the specified HTML element.

<br>

> #### When handling overlays and modals, this property can be heaven or hell ✋

- So without noticing, I have added it to the modal-content, and because of this the button didnt work
