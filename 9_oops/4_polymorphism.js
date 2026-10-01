/**
//////////////////////////////////   POLYMORPHISM ///////////////////////////////////////

  Polymorphism means "one interface/method, many forms of behavior."

  In simple words:
  Same method name, different behavior depending on the object.

🐾 Real-life example

Suppose you tell:
  "Make a sound!"

  Different animals respond differently.

            sound()
              │
        ┌─────┼─────┐
        ↓     ↓     ↓
        Dog    Cat   Cow
        ↓     ↓     ↓
      Bark   Meow  Moo

  The instruction is the same:
  sound()

  But the behavior is different.

  That's polymorphism.

*/

// class Payment {
//     pay() {
//         console.log("Processing payment");
//     }
// }

// class CreditCard extends Payment {
//     pay() {
//         console.log("Payment through Credit Card");
//     }
// }

// class UPI extends Payment {
//     pay() {
//         console.log("Payment through UPI");
//     }
// }

// class Cash extends Payment {
//     pay() {
//         console.log("Payment through Cash");
//     }
// }

// const payments = [
//     new CreditCard(),
//     new UPI(),
//     new Cash()
// ];

// payments.forEach(payment => {
//     payment.pay();
// });

/**
                      pay()
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
     CreditCard      UPI         Cash
          ↓           ↓           ↓
       Card Pay    UPI Pay     Cash Pay
 */


/**
 ////////////////////////////////// 🎯 Encapsulation vs Polymorphism  /////////////////////////////

 | Encapsulation                                          | Polymorphism                                     |
| ------------------------------------------------------ | ------------------------------------------------ |
| Protects/organizes data and behavior                   | Allows one interface to have different behavior  |
| Focuses on **data access**                             | Focuses on **behavior**                          |
| Uses classes, methods, private fields, getters/setters | Commonly uses inheritance and method overriding  |
| "How do I protect this data?"                          | "How can the same operation behave differently?" |
| Example: private bank balance                          | Example: `pay()` for Card/UPI/Cash               |

 */

/**
Suppose we have a bank account. The balance should not be directly accessible to everyone. We keep the balance private and provide methods like deposit, withdraw, and getBalance. This is encapsulation — protecting data and providing controlled access."

"Now suppose we have different payment methods: Credit Card, UPI, and Cash. All of them have a pay() method, but each performs the payment differently. The method name is the same, but the behavior changes according to the object. This is polymorphism."
 */


/**
home task

BankAccount
│
├── accountNumber
├── holderName
├── balance
│
├── deposit()
├── withdraw()
├── getBalance()
└── displayAccount()
 */