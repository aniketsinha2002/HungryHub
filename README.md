## THE LIVE LINK WON'T WORK ⚠️⚠️

The **LIVE LINK may NOT work** as **the project is utilizing Swiggiy's live API**, and **it keeps changing time to time so the code breaks**.

**The structure of objects within Swiggy's live API is dynamic, with updates and changes occurring almost daily. :(**

Therefore, it won't display resturants data live.

Therefore I have attached a video demonstrating the working functionalities.

> Video Demonstration Link: https://www.loom.com/share/38f40a7fffda4e459d29446e215cb506?sid=6c9a3382-4ae2-447c-a4bd-e2b7870800a1

## WEB PERFORMANCE && OPTIMIZATION 😮

Achieved a page load time of just 117ms. (See attached screenshot)
![alt text](<Screenshot 2024-07-09 210035.png>)

### Implemented Strategies:

_Redux Store for Caching:_ Cached frequently used data across the app.

_Code Splitting:_ Divided code into smaller chunks for faster initial load times.

_Lazy Loading with Infinite Scroll:_ Efficiently loaded restaurant data as users scroll.

_Code Optimization:_ Streamlined and optimized the codebase for better performance.

_Conditional Rendering with Shimmer UI:_ Enhanced user experience by showing a loading indicator during data fetching, improving app responsiveness.

_Efficient JSX Rendering:_ Rendered components conditionally based on data, reducing unnecessary load on the browser.

## IDEATION PHASE

- HEADER
  - Logo
  - Nav Items
- BODY
  - Search Bar
  - Resturant Container (contains lot of Resturant Cards)
  - Resturant Card ( Img, Name of Resturant, Star Rating, cuisine, delivery time )
- FOOTER
  - Copyright
  - Name, Address of company
  - Links

### React Hooks -> Normal JS utility function written by facebook developers.

    - Use state() => super powerful state variable in react
    - Use effect() =>
    - Use Params
    - Own Custom Hooks

# INITIAL APP PREVIEW and LAYOUT (conflict driven UI)

## SHIMMER EFFECT | UPDATE 01

![image](https://github.com/aniketsinha2002/HungryHub/assets/97850511/08d327b4-e428-46b0-92b8-b6b5b7494abe)

## UPDATE 02

![image](https://github.com/aniketsinha2002/HungryHub/assets/97850511/5cfef5f8-e0cb-4f00-ac17-9f4044ce5c94)

## UPDATE : 03

![image](https://github.com/aniketsinha2002/HungryHub/assets/97850511/8338255a-ef98-48a6-a661-34d994af446b)

## Tailwind | UPDATE: 04

![image](https://github.com/aniketsinha2002/HungryHub/assets/97850511/3342ea20-f4b8-4978-9ba1-6ff2804111ce)

## UI CHANGES | UPDATE: 05

![image](https://github.com/aniketsinha2002/HungryHub/assets/97850511/b1620b80-efc6-417d-9075-3568bb139df6)

## ACCORDIANS | UPDATE: 06

![image](https://github.com/aniketsinha2002/HungryHub/assets/97850511/d86d2389-5b68-4e87-9baf-3272eb3add0f)

## TYPES OF TESTING

- Unit Testing
- Integration Testing
- End to End - e2e Testing

## SETTING UP TESTING IN OUR APP

- Install React Testing Liberary
- Install Jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config file to disable default Babel transpilation
- Jest Configuration (npx jest --init)
- Install jsdom liberary
- Install @babel/preset-react to make JSX work in test cases
- Include @babel/preset-react inside my Babel config
- Install @testing-library/jest-dom

## FOLDER STRUCTURE FOR TESTING

**tests**
Headers.test.js
Headers.test.ts
Headers.spec.js
Headers.spec.ts
