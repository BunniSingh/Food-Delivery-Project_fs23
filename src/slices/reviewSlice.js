import { createSlice } from "@reduxjs/toolkit";

let review_list = [
    {
      "id": 1,
      "name": "Emma Watson",
      "rating": 5,
      "comment": "Absolutely delicious! The pizza was fresh, and the crust was perfectly crisp. Will order again!",
      "date": "2025-01-26"
    },
    {
      "id": 2,
      "name": "James Smith",
      "rating": 4,
      "comment": "Loved the pasta! It was creamy and flavorful, but I wish there was a little more cheese.",
      "date": "2025-01-25"
    },
    {
      "id": 3,
      "name": "Sophia Johnson",
      "rating": 3,
      "comment": "The food was okay, but the portion size was too small for the price. Expected a bit more!",
      "date": "2025-01-24"
    },
    {
      "id": 4,
      "name": "Oliver Brown",
      "rating": 5,
      "comment": "The burgers were amazing! Juicy, flavorful, and the toppings were just perfect.",
      "date": "2025-01-23"
    },
    {
      "id": 5,
      "name": "Mia Wilson",
      "rating": 2,
      "comment": "The delivery was late, and the fries were soggy. Really disappointed this time.",
      "date": "2025-01-22"
    },
    {
      "id": 6,
      "name": "Lucas Garcia",
      "rating": 4,
      "comment": "The dessert options were fantastic! The cheesecake was rich and creamy, loved it.",
      "date": "2025-01-21"
    },
    {
      "id": 7,
      "name": "Isabella Martinez",
      "rating": 5,
      "comment": "The best tacos I’ve ever had! Fresh ingredients and the salsa was top-notch.",
      "date": "2025-01-20"
    },
    {
      "id": 8,
      "name": "Ethan Rodriguez",
      "rating": 3,
      "comment": "The sushi rolls were tasty, but the rice was a bit too sticky for my liking.",
      "date": "2025-01-19"
    },
    {
      "id": 9,
      "name": "Ava Hernandez",
      "rating": 5,
      "comment": "The breakfast combo was perfect. Pancakes were fluffy and the coffee was strong!",
      "date": "2025-01-18"
    },
    {
      "id": 10,
      "name": "Liam Lopez",
      "rating": 4,
      "comment": "The wings were delicious, but I wish they had more spice options to choose from.",
      "date": "2025-01-17"
    },
    {
      "id": 11,
      "name": "Charlotte Gonzalez",
      "rating": 5,
      "comment": "I loved the smoothies! Super fresh and tasty, a great healthy option.",
      "date": "2025-01-16"
    },
    {
      "id": 12,
      "name": "Benjamin Clark",
      "rating": 2,
      "comment": "The steak was overcooked, and the sides were cold. Not what I expected.",
      "date": "2025-01-15"
    },
    {
      "id": 13,
      "name": "Amelia Lewis",
      "rating": 4,
      "comment": "Great selection of vegetarian dishes! The tofu stir fry was packed with flavors.",
      "date": "2025-01-14"
    },
    {
      "id": 14,
      "name": "Henry Walker",
      "rating": 3,
      "comment": "Good flavors, but the food arrived lukewarm. They need to work on their delivery service.",
      "date": "2025-01-13"
    },
    {
      "id": 15,
      "name": "Harper Hall",
      "rating": 5,
      "comment": "The vegan burger was incredible! Full of flavor and the texture was just right.",
      "date": "2025-01-12"
    },
    {
      "id": 16,
      "name": "Sebastian Allen",
      "rating": 4,
      "comment": "The nachos were super cheesy and delicious. Adding more toppings would make them even better!",
      "date": "2025-01-11"
    },
    {
      "id": 17,
      "name": "Ella Young",
      "rating": 5,
      "comment": "The delivery was quick, and the food was still hot. Amazing experience overall!",
      "date": "2025-01-10"
    },
    {
      "id": 18,
      "name": "Jack King",
      "rating": 3,
      "comment": "The sandwich was decent, but the bread was a bit stale. Could be fresher.",
      "date": "2025-01-09"
    },
    {
      "id": 19,
      "name": "Grace Wright",
      "rating": 5,
      "comment": "Amazing seafood platter! Everything was fresh and cooked to perfection.",
      "date": "2025-01-08"
    },
    {
      "id": 20,
      "name": "Liam Hill",
      "rating": 4,
      "comment": "Loved the pasta! The garlic bread on the side was a nice touch, too.",
      "date": "2025-01-07"
    }
  ]
  

const reviewSlice = createSlice({
    name: "REVIEW",
    initialState: {
        review_list,
    },
    reducers: {
        addFeedbackInList(state , action){
          state.review_list.unshift(action.payload);
        }
    }
})

export const {addFeedbackInList} = reviewSlice.actions;
export default reviewSlice.reducer;