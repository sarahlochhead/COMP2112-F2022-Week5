"use strict";
// IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function
(function() 
{
    /**
     * This method saves our data to localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList: any[]):void
    {
        let count = 0;
            for (const contact of contactList) 
            {
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
    function LoadContactListData(): Contact[]
    {
        //create an empty Contact Array Container
        let ContactArray = new Array<Contact>();

        let keys = Object.keys(localStorage);
        for (let key of keys) 
        {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }

        return ContactArray;
    }


function LoadHeader(): void
{
    $.get("./Views/components/header.html", function(html_data)
    {
        // vanilla javascript
        // document.getElementsByTagName("header")[0].innerHTML = html_data;

        // jquery version
        $("header").html(html_data);
        //$("#homePage").addClass("active");
      
        switch (document.title)
        {
            case "Home":
                $("#homePage").addClass("active");
                break;
            case "About Us":
                $("#aboutPage").addClass("active");
                break;
            case "Our Projects":
                $("#projectPage").addClass("active");
                break; 
            case "Our Services":
                $("#servicesPage").addClass("active");
                break;  
            case "Contact Us":
                $("#contactPage").addClass("active");
                break;  
        }

    });
}

function LoadFooter():void
{
    $.get("./Views/components/footer.html", function(html_data)
    {
        // vanilla javascript
        // document.getElementsByTagName("footer")[0].innerHTML = html_data;

        // jquery version
        $("footer").html(html_data);
    });
}
    
    // First method of using functions - a named function
    function Start()
    {
        console.log("App Started!");
        LoadHeader();
        LoadFooter();

    }

    window.addEventListener("load", Start);
    
})();