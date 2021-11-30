# Pause Social Media

## Get Started
1. Install git: https://git-scm.com/.
1. Clone the repo.  To clone, create a folder entitled jrwagner89 on your computer (preferably low, like c:\repos).  From a command prompt, cd to that directory.
1. run the following command:  `git clone https://github.com/jrwagner89/pause-social-media.git`.
1. You can now see the repo locally residing on your desktop.
1. Change directory to `pause-social-media`.
1. Run `npm install`.
1. Run `npm run start`
1. You should now see a browser window pop.
1. You can also `npm run build` if you just want to check out the build flow.
1. Now, let's create our first component -- clock.tsx
1. Add a file entitled clock.tsx.
1. Open the file and add the following code

```javascript
import * as React from 'react'

export const Clock: React.FC = () => {
    return (
        <div>Hello Clock</div>
    );
};

```
1. Save
1. From app.tsx, reference your new component
```javascript
...
import { Clock } from './clock'

export const App: React.FC: React.FC = () => {
    return (
        <>
            <div>Hello</div>
            <Clock/>
        </>
    )
};

```
1. now see if you can add some props :)