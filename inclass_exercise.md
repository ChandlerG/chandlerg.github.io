# In-Class Lab Exercise: Building a Complete Web Page

## Objective
Learn to create a basic multi-page website using HTML and CSS. This exercise will guide you through setting up three main files: `index.html`, `style.css`, and `form.html`.

## Tools
- Visual Studio Code (VS Code)
- Basic knowledge of HTML and CSS

### Part 1: Create `index.html`
1. **Create a new file** named `index.html`.
2. **Add the basic HTML structure**:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Web Page</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    </body>
    </html>
    ```
>[!NOTE]
>*This sets up the basic structure for your web page, defining the character set, viewport settings for responsive design, the title of the page, and linking to the CSS file.*
3. **Add a header section with navigation**:
    ```html
    <header>
        <h1>Welcome to My Web Page</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="form.html">Form Demo</a></li>
            </ul>
        </nav>
    </header>
    ```
>[!NOTE]
> *Header contains the main heading of the page and the navigation bar, which helps users navigate to different sections of the website.*

4. **Create the main content area with different sections**:
    ```html
    <main>
        <section id="home">
            <h2>Home</h2>
            <p>This is the homepage of our simple web project.</p>
        </section>
        <section id="about">
            <h2>About Us</h2>
            <p>Learn more about our team and mission.</p>
        </section>
        <section id="services">
            <h2>Our Services</h2>
            <p>Details about the services we offer.</p>
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <p>How you can reach out to us.</p>
        </section>
    </main>
    ```
>[!NOTE]
> *Each section represents a part of the website, such as Home, About Us, Services, and Contact information. These sections are part of the main content area where detailed information relevant to each heading is displayed.*

5. **Add a footer with copyright information**:
    ```html
    <footer>
        <p>&copy; 2025 Simple Web Page. All rights reserved.</p>
    </footer>
    ```
    *The footer typically contains copyright and other legal information. It's often used to display a copyright notice.*

### Conclusion
You should now have a multi-section webpage with a header, navigation menu, main content area with multiple sections, and a footer helping you to understand the structure and sections of a basic web page, and how CSS styles these components.


### Part 2: Create `style.css`
1. **Create a new file** named `style.css`.
2. **Start by setting up general body styles**:
    ```css
    /* General body styles */
    body {
        font-family: Arial, sans-serif; /* Sets the universal font family to Arial */
        line-height: 1.6; /* Increases line height for better readability */
        margin: 0; /* Removes default margin around the document */
        padding: 0; /* Removes default padding around the document */
        background: #f4f4f4; /* Sets a light grey background color for the page */
    }
    ```
> [!NOTE]
> *Save the file and observe the changes in the live preview of your HTML.*

3. **Add styles for the header**:
    ```css
    /* Header styles */
    header {
        background: #333; /* Sets a dark grey background color for the header */
        color: #fff; /* Sets text color to white for contrast */
        padding: 10px 20px; /* Adds padding inside the header for spacing */
        text-align: center; /* Aligns text to the center of the header */
    }
    ```
> [!NOTE]
> *Save and view the changes. Each change affects the appearance of the header section.*

4. **Style the navigation bar**:
    ```css
    /* Navigation styles */
    nav ul {
        list-style: none; /* Removes bullet points from the navigation list */
        padding: 0; /* Removes default padding to align navigation correctly */
    }
    nav ul li {
        display: inline; /* Displays list items in a row instead of a column */
        margin-right: 10px; /* Adds right margin to separate items */
    }
    nav ul li a {
        color: #fff; /* Sets link color to white */
        text-decoration: none; /* Removes underline from links */
    }
    ```
>[!NOTE] 
> *After saving, check how the navigation links are styled and aligned.*

5. **Configure the main content area**:
    ```css
    /* Main content styles */
    main {
        padding: 20px; /* Adds padding inside the main area for spacing */
        background: #fff; /* Sets a white background for contrast with text */
        margin: 20px; /* Adds margin around the main content for separation */
        border-radius: 8px; /* Rounds the corners of the main content box */
    }
    ```
>[!NOTE] 
> *Observe how the main content area is separated and highlighted from the rest of the page.*

6. **Set up the footer styles**:
    ```css
    /* Footer styles */
    footer {
        text-align: center; /* Centers the footer text horizontally */
        padding: 10px 20px; /* Adds padding for consistency with the header */
        background: #333; /* Sets a matching dark grey background as the header */
        color: #fff; /* Ensures footer text is white for readability */
        position: fixed; /* Keeps the footer at the bottom of the page */
        bottom: 0; /* Aligns the footer at the bottom of the viewport */
        width: 100%; /* Ensures the footer stretches across the screen */
    }
    ```
>[!NOTE] 
> *Save the file and review how the footer behaves, especially its fixed position at the bottom of the page.*

### Reminder
As you add each style rule, frequently save your changes and refresh the live preview in VS Code to see how your styles affect the layout and look of your web page. This iterative process helps you understand the impact of each CSS property.


### Part 3: Create `form.html`
1. **Create a new file** named `form.html`.
2. **Start by setting up the basic HTML structure**:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Demo</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <!-- Form setup for local testing with HTML-only client-side validation -->
        <!-- 
          - The 'action="#"' attribute sets the form submission to the current page, effectively not changing the page.
          - The 'method="post"' attribute specifies that the form data will be sent as a POST request.
          - The 'onsubmit="return false;"' attribute prevents the form from being submitted. This is used here to demonstrate form behavior without actually sending data, allowing validation to be seen without server interaction.
        --> 
        <form action="#" method="post" onsubmit="return false;">
    
        </form>
    </body>
    </html>
    ```
> [!NOTE]
> *This sets up a basic page with a form that doesn't submit anywhere.*

3. **Add a text input field for name**:
    ```html
    <!-- Text field for name input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    ```
> [!NOTE]
> *Text fields are used for single-line input and can be used for names or email addresses.*

4. **Insert a password input field**:
    ```html
    <!-- Password field for password input, characters are masked -->
    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="pwd"><br><br>
    ```
> [!NOTE]
> *Password fields are used for sensitive inputs where characters are masked.*

5. **Add radio buttons for gender selection**:
    ```html
    <!-- Radio buttons for selecting gender -->
    <label for="gender">Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br><br>
    ```
> [!NOTE]
> *Radio buttons allow users to select one option from a set of mutually exclusive options.*

6. **Include checkboxes for vehicle preference**:
    ```html
    <!-- Checkboxes for selecting vehicle preferences -->
    <label for="vehicle">Choose vehicle:</label>
    <input type="checkbox" id="car" name="vehicle" value="car">
    <label for="car">Car</label>
    <input type="checkbox" id="bike" name="vehicle" value="bike">
    <label for="bike">Bike</label><br><br>
    ```
> [!NOTE]
> *Checkboxes allow users to select multiple options from a set of choices.*

7. **Finish with a submit button**:
    ```html
    <!-- Submit button to send form data -->
    <input type="submit" value="Submit">
> [!NOTE]
> *The submit button is used to send form data to a server or handle it via JavaScript.*

### Conclusion
By the end of this part, you should have a functional form on your website. Each element you've added plays a specific role in collecting data from users. Testing each element in your browser will help you understand how it interacts with the web page and what happens when data is entered into the form.

