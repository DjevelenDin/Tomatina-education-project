import React from "react";
import { FoodServiceConsumer } from "../Food-service-context";

const withFoodService = () => (Wrapper: any) => {
   return (props: any) => {
      return (
         <FoodServiceConsumer>
            {
               (foodService) => {
                  return (
                     <Wrapper {...props}
                        foodService={foodService} />
                  )
               }
            }
         </FoodServiceConsumer>
      )
   }
}

export default withFoodService