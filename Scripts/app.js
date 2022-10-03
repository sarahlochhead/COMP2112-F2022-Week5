"use strict";
// IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function
(function () {
    /**
     * This method saves our data to localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList) {
        let count = 0;
        for (const contact of contactList) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }
    /**
     * This method reads our data from localStorage and returns a Contact Array
     *
     * @return {Contact[]}
     */
    function LoadContactListData() {
        //create an empty Contact Array Container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    /**
     * This method loads and injects the page header content
     *
     */
    function LoadHeader() {
        $.get("./Views/components/header.html", function (html_data) {
            // vanilla javascript
            // document.getElementsByTagName("header")[0].innerHTML = html_data;
            // jquery version
            $("header").html(html_data);
            // activate the home link on initial load
            $("li>a#Home").addClass("active");
            $("li>a").on("click", function (event) {
                event.preventDefault();
                // change title
                document.title = $(this).prop("id");
                // change url
                history.pushState({}, "", "/" + document.title);
                // removes the active class from each list item first
                $("li>a").each(function () {
                    $(this).removeClass("active");
                });
            });
            // activate the current link
            $("li>a#" + document.title).addClass("active");
            LoadContent();
        });
    }
    ;
}
/**
 * This method loads and injects the page content
 *
 */
);
/**
 * This method loads and injects the page content
 *
 */
function LoadContent() {
    let contentLink = document.title.toLowerCase();
    $.get("./Views/content/" + contentLink + ".html", function (html_data) {
        $("main").html(html_data);
    });
}
/**
 * This method loads and injects the footer content
 *
 */
function LoadFooter() {
    $.get("./Views/components/footer.html", function (html_data) {
        // vanilla javascript
        // document.getElementsByTagName("footer")[0].innerHTML = html_data;
        // jquery version
        $("footer").html(html_data);
    });
}
// First method of using functions - a named function
function Start() {
    console.log("App Started!");
    //initial load
    document.title = "Home";
    // change url
    history.pushState({}, "", "/" + "/Home");
    LoadContent();
    LoadHeader();
    LoadFooter();
}
window.addEventListener("load", Start);
();
//# sourceMappingURL=app.js.map