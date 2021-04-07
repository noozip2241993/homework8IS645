// Shows all user input and cancels form data sending
const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
    const username = e.target.elements.username.value;
    const email = e.target.elements.emailAddress.value;
    console.log(`Name: ${username}`);
    console.log(`Email: ${email}`);

    // if (e.target.elements.confirmation.checked) {
    //     console.log("You asked for email confirmation");
    // } else {
    //     console.log("You didn't asked for email confirmation");
    // }
    switch (e.target.elements.payment.value) {
        case "cash":
            console.log("Payment: Cash");
            break;
        case "creditcard":
            console.log("Payment : credit card");
            break;
        case "googlepay":
            console.log("Payment :Google pay");
            break;
        case "applepay":
            console.log("Payment: Apple pay");
            break;
        default:
            console.error("Payment: Unknown payment");
    }
    if (e.target.elements.confirmation.checked) {
        console.log("Promotion: on");
    } else {
        console.log("Promotion: off");
    }
    switch (e.target.elements.location.value) {
        case "LA":
            console.log("Location: LA");
            break;
        case "OC":
            console.log("Location: OC");
            break;
        case "R":
            console.log("Location: R");
            break;
        case "SD":
            console.log("Location: SD");
            break;
        default:
            console.log("Location: unknown");
    }
    e.preventDefault(); // Cancel form data sending
    const formDataElement = document.getElementById("data");
    const dataElement = document.createElement("tr");
    dataElement.innerHTML =`<td>Name</td>
    <td>${username}</td>`;
    
   
    formDataElement.appendChild(dataElement);
});
